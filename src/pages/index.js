// 14.08.2021 - lista de bandas punk de lebrão johns

import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
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
        <h1>lista de bandas punk de john</h1>
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
        <section style={{ width: "70%", margin: "0 auto" }}>
          <q>
            O Punk Rock é um estilo de vida para quem curte música e liberdade,
            letras que mostram lutas contra as injustiças através de 'gritos
            marcantes, guitarras distorcidas, baixos pesados e baterias
            violentas, que incomodam muita gente' (Karne Krua).
          </q>
          <p style={{ textAlign: "right", marginRight: "2rem" }}>-John</p>
        </section>
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
        <section className="amazon">
          <iframe
            style={{ width: "120px", height: "240px", margin: "0 auto" }}
            marginwidth="0"
            marginheight="0"
            scrolling="no"
            frameborder="0"
            src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=jcgsr-20&marketplace=amazon&amp;region=BR&placement=B01JBIIB0W&asins=B01JBIIB0W&linkId=b767533c2538bfd4e9b28a1de09ac3d9&show_border=true&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=eae4ed"
          ></iframe>
          <iframe
            style={{ width: "120px", height: "240px", margin: "0 auto" }}
            marginwidth="0"
            marginheight="0"
            scrolling="no"
            frameborder="0"
            src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=jcgsr-20&marketplace=amazon&amp;region=BR&placement=B004FRX0MY&asins=B004FRX0MY&linkId=751a8f7def5ff2e5de7f3e312512ee46&show_border=true&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=eae4ed"
          ></iframe>
          <iframe
            style={{ width: "120px", height: "240px", margin: "0 auto" }}
            marginwidth="0"
            marginheight="0"
            scrolling="no"
            frameborder="0"
            src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=jcgsr-20&marketplace=amazon&amp;region=BR&placement=B0925N6X1Q&asins=B0925N6X1Q&linkId=91671528de0f164e25af169e3833fe95&show_border=true&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=eae4ed"
          ></iframe>
          <iframe
            style={{ width: "120px", height: "240px", margin: "0 auto" }}
            marginwidth="0"
            marginheight="0"
            scrolling="no"
            frameborder="0"
            src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=jcgsr-20&marketplace=amazon&amp;region=BR&placement=B0872Y93TY&asins=B0872Y93TY&linkId=403557eadeca64f43fe7fdc9820e2488&show_border=true&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=eae4ed"
          ></iframe>
          <iframe
            style={{ width: "120px", height: "240px", margin: "0 auto" }}
            marginwidth="0"
            marginheight="0"
            scrolling="no"
            frameborder="0"
            src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=jcgsr-20&marketplace=amazon&amp;region=BR&placement=B07FQK1TS9&asins=B07FQK1TS9&linkId=4c36d85af77b9de06c5e06d658e197ab&show_border=true&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=eae4ed"
          ></iframe>
          <iframe
            style={{ width: "120px", height: "240px", margin: "0 auto" }}
            marginwidth="0"
            marginheight="0"
            scrolling="no"
            frameborder="0"
            src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=jcgsr-20&marketplace=amazon&amp;region=BR&placement=B0919N2P7J&asins=B0919N2P7J&linkId=be80c40f287b02980a145e96e030c5da&show_border=true&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=eae4ed"
          ></iframe>
        </section>
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
