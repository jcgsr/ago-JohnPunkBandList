/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "PunkCore",
    titleTemplate: "%s | PunkCore",
    description: "Site que reúne as bandas prediletas de John",
    url: "https://lebraojohns.netlify.app",
    image: "/images/punk3.png",
    twitterUsername: "@John_Gordo85",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://john-strapi.herokuapp.com`,
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
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `grey`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
  ],
};
