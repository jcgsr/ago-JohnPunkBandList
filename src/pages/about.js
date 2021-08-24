import React from "react";
import Layout from "../components/Layout";

import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

import Seo from "../components/Seo";

const About = () => {
  return (
    <Layout>
      <Seo
        title="Sobre"
        description="Biografia de LebraoJohns e formas de entrar em contato com ele."
      />
      <h1>Sobre</h1>
      <h3>Contatos</h3>
      <section className="contatos">
        <button>
          <a href="https://pt-br.facebook.com/john.g.rasta.5?comment_id=Y29tbWVudDo1MTYzMTIxODU1MzIyMjBfNjE2OTMwNjU1NDcwMzcy">
            <FiFacebook />
          </a>
        </button>
        <button>
          <a href="https://api.whatsapp.com/send?phone=557999272394&text=Rock, Lebrão! 🤘">
            <AiOutlineWhatsApp />
          </a>
        </button>

        <button>
          <a href="https://www.instagram.com/john.gordo/">
            <FiInstagram />
          </a>
        </button>
        <button>
          <a href="https://twitter.com/John_Gordo85">
            <FiTwitter />
          </a>
        </button>
        <button>
          <a href="https://telegram.me/john">
            <FaTelegramPlane />
          </a>
        </button>
      </section>
    </Layout>
  );
};

export default About;
