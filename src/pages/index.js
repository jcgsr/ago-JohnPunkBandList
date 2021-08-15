// 14.08.2021 - lista de bandas punk de lebrão johns

import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "./components/Layout";

const John = () => (
  <Layout>
    <h1>john</h1>
    <StaticQuery
      query={query}
      render={data => (
        <ul>
          {data.allStrapiBand.nodes.map(node => (
            <li key={node.id}>
              {node.band_name}
              <a href={node.youtube} target="_blank">
                youtube
              </a>
              <a href={node.wikipedia} target="_blank">
                wikipedia
              </a>
              <a href={node.band_site} target="_blank">
                <button>site oficial</button>
              </a>
              <GatsbyImage
                image={node.band_img.localFile.childImageSharp.gatsbyImageData}
                alt={node.band_name}
              />
            </li>
          ))}
        </ul>
      )}
    />
  </Layout>
);

const query = graphql`
  {
    allStrapiBand {
      nodes {
        band_img {
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                layout: CONSTRAINED
                width: 200
                height: 200
              )
            }
          }
        }
        band_name
        youtube
        wikipedia
        band_site
        id
      }
    }
  }
`;

export default John;
