/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "John's Ultimate Punk Bands List",
    description: "Site que reúne as bandas prediletas de Lebrão Johns",
    siteUrl: "https://www.englisheasyfm.com.br",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`band`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        name: "bands",
        engine: "flexsearch",
        engineOptions: "speed",
        query: `
  {
    allStrapiBand {
      nodes {
        band_img {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
        band_name
        youtube
        wikipedia
        band_site
        id
        band_desc
      }
    }
  }
       `,

        ref: "id",

        index: ["band_name"],

        store: ["band_name", "band_site", "youtube", "wikipedia", "band_img"],

        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index. The objects must contain the `ref`
        // field above (default: 'id'). This is required.
        normalizer: ({ data }) =>
          data.allStrapiBand.nodes.map(node => ({
            id: node.id,
            name: node.band_name,
            band_site: node.band_site,
            wikipedia: node.wikipedia,
            youtube: node.youtube,
            band_img: node.band_img.localFile.childImageSharp.gatsbyImageData,
          })),
      },
    },
  ],
};
