import React from "react";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

import { StaticImage } from "gatsby-plugin-image";

const Galeria = () => {
  return (
    <Layout>
      <Seo title="Galeia" description="Fotos de John." />
      <h1>Galeria</h1>
      <main className="container">
        <div className="galeria">
          <StaticImage
            src="../assets/img/john-img/john-bad.jpeg"
            alt="Foto de John"
            placeholder="blurred"
            layout="constrained"
          />
          <StaticImage
            src="../assets/img/john-img/john-boca.jpeg"
            alt="Foto de John"
            placeholder="blurred"
            layout="constrained"
          />

          <StaticImage
            src="../assets/img/john-img/john-gordo.jpeg"
            alt="Foto de John"
            placeholder="blurred"
            layout="constrained"
          />

          <StaticImage
            src="../assets/img/john-img/john-jao.jpeg"
            alt="Foto de John"
            placeholder="blurred"
            layout="constrained"
          />

          <StaticImage
            src="../assets/img/john-img/john-juninho.jpeg"
            alt="Foto de John"
            placeholder="blurred"
            layout="constrained"
          />

          <StaticImage
            src="../assets/img/john-img/john-unknown.jpeg"
            alt="Foto de John"
            placeholder="blurred"
            layout="constrained"
          />

          <StaticImage
            src="../assets/img/john-img/johncantando.jpeg"
            alt="Foto de John"
            placeholder="blurred"
            layout="constrained"
          />

          <StaticImage
            src="../assets/img/john-img/johndancing.jpeg"
            alt="Foto de John"
            placeholder="blurred"
            layout="constrained"
          />

          <StaticImage
            src="../assets/img/john-img/johnkk.jpeg"
            alt="Foto de John"
            placeholder="blurred"
            layout="constrained"
          />
        </div>
      </main>
    </Layout>
  );
};

export default Galeria;
