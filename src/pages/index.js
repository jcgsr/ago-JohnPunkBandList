// 14.08.2021 - lista de bandas punk de lebrão johns

import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";

import api from "../assets/services/api.js";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

const John = () => {
  const [searchBand, setSearchBand] = useState("");
  const [bands, setBands] = useState([]);
  useEffect(() => {
    const loadBands = async () => {
      const response = await api.get();
      // console.log(response.data);
      setBands(response.data);
    };
    toast.info(
      "⚠️ Disclaimer: algumas bandas não são encontradas no Wikipédia ou não têm site oficial. Nesses casos, os links foram redirecionados para o site ofcial do Wikipédia ou para a página do Facebook/Instagram da banda respectivamente."
    );
    loadBands();
  }, []);
  console.log(bands);

  return (
    <Layout>
      <main className="container">
        <h1>john's ultimate punk band list</h1>
        {/*<button onClick={notify}>Notify !</button>*/}
        <ToastContainer
          position="top-center"
          autoClose={6000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <section className="image">
          <StaticImage
            src="../assets/img/punk1.jpg"
            alt="Foto de muro"
            placeholder="blurred"
            layout="constrained"
          />
          Foto de{" "}
          <a href="https://unsplash.com/@diesektion?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Robert Anasch
          </a>{" "}
          lá no{" "}
          <a href="https://unsplash.com/s/photos/punk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </section>
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
        {searchBand !== bands && (
          <section className="no-band">
            <p>"{searchBand}"</p>
            <p>não está nesta lista!?</p>
            <p>Deseja incluí-la?</p>
            <h4>
              Só entrar em <Link to="/about">contato</Link>!{" "}
            </h4>
          </section>
        )}
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
