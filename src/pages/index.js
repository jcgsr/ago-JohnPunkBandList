// 14.08.2021 - lista de bandas punk de lebrão johns

import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";

import Seo from "../components/Seo";

import api from "../assets/services/api.js";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

const John = () => {
  const [searchBand, setSearchBand] = useState("");
  const [bands, setBands] = useState([]);
  const [loading, setLoading] = useState(true);

  {
    const spotify = "https://open.spotify.com/embed/track/";
  }
  useEffect(() => {
    const loadBands = async () => {
      const response = await api.get();
      setBands(response.data);
      setLoading(false);
    };
    toast.info(
      "⚠️ Disclaimer: algumas bandas não são encontradas no Wikipédia. Nesses casos, os links são redirecionados para algum site sobre a banda."
    );
    loadBands();
  }, []);
  if (loading) {
    return (
      <div style={{ textAlign: "center", margin: "2rem" }}>
        <h2>Carregando Bandas...</h2>
        <StaticImage
          src="../assets/img/punk3.png"
          alt="A - Anarquia"
          placeholder="blurred"
          layout="constrained"
          width="200px"
        />
      </div>
    );
  }
  return (
    <Layout>
      <Seo title="Home" description="LebraoJohns's Ultimate Punk Band List" />
      <main className="container">
        <h1>LebraoJohns's ultimate punk band list</h1>
        {/*<button onClick={notify}>Notify !</button>*/}
        <ToastContainer
          position="bottom-center"
          autoClose={1000}
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
              <img
                src={band.band_img.formats.thumbnail.url}
                alt={band.band_name}
              />
              {console.log(band.band_img)}
              <p>{band.band_desc}</p>
              <div className="btns">
                <iframe
                  src={`https://open.spotify.com/embed/track/${band.band_site}`}
                  width="50%"
                  height="80"
                  frameBorder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                />
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

export default John;
