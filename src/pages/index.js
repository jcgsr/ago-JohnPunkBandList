// 14.08.2021 - lista de bandas punk de lebrão johns

import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";

const John = () => (
  <Layout>
    <main className="container">
      <h1>john's ultimate punk bands list</h1>
      <StaticQuery
        query={query}
        render={data => (
          <div className="bands">
            {data.allStrapiBand.nodes.map(node => (
              <article key={node.id}>
                <h2>{node.band_name}</h2>
                <GatsbyImage
                  image={
                    node.band_img.localFile.childImageSharp.gatsbyImageData
                  }
                  alt={node.band_name}
                />
                <p>{node.band_desc}</p>
                <div className="btns">
                  <a href={node.band_site} target="_blank">
                    <button>site oficial</button>
                  </a>
                  <a href={node.youtube} target="_blank">
                    <button>youtube</button>
                  </a>
                  <a href={node.wikipedia} target="_blank">
                    <button>wikipedia</button>
                  </a>
                </div>
                <hr />
              </article>
            ))}
          </div>
        )}
      />
    </main>
  </Layout>
);

const query = graphql`
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
`;

export default John;
