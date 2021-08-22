// 14.08.2021 - lista de bandas punk de lebrão johns

import React, { useState, useEffect } from "react";
import { StaticQuery, graphql } from "gatsby";
// import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";

import api from "../assets/services/api.js";

const John = () => {
  const [searchBand, setSearchBand] = useState("");
  const [bands, setBands] = useState([]);
  useEffect(() => {
    const loadBands = async () => {
      const response = await api.get();
      // console.log(response.data);
      setBands(response.data);
    };
    loadBands();
  }, []);
  console.log(bands);

  return (
    <Layout>
      <main className="container">
        <h1>john's ultimate punk band list</h1>
        <form>
          <input
            type="text"
            placeholder="buscar bandas"
            value={searchBand}
            onChange={e => {
              setSearchBand(e.target.value);
            }}
          />
        </form>
        {bands
          .filter(val => {
            if (searchBand == "") {
              return val;
            } else if (
              val.band_name.toLowerCase().includes(searchBand.toLowerCase())
            ) {
              return val;
            }
          })
          .map(band => (
            <article className="bands" key={band.id}>
              <h2>{band.band_name}</h2>
              <img src={band.band_img.name} alt={band.band_name} />
              <p>{band.band_desc}</p>
              <div className="btns">
                <a href={band.band_site} target="_blank">
                  <button>site oficial</button>
                </a>
                <a href={band.youtube} target="_blank">
                  <button>youtube</button>
                </a>
                <a href={band.wikipedia} target="_blank">
                  <button>wikipedia</button>
                </a>
              </div>
            </article>
          ))}
        {searchBand !== bands && <h2>{searchBand}</h2>}
      </main>
    </Layout>
  );
};

// const bandQuery = graphql`
//   {
//     localSearchBands {
//       index
//       store
//       publicIndexURL
//       publicStoreURL
//     }
//     allStrapiBand {
//       nodes {
//         band_img {
//           localFile {
//             childImageSharp {
//               gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
//             }
//           }
//         }
//         band_name
//         youtube
//         wikipedia
//         band_site
//         id
//         band_desc
//       }
//     }
//   }
// `;

export default John;
