import React from "react";
import Layout from "../components/Layout";

import Comments from "../components/Comments";

import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

import { StaticImage } from "gatsby-plugin-image";

import Seo from "../components/Seo";

const About = () => {
  return (
    <Layout>
      <Seo
        title="Sobre"
        description="Biografia de John, entrar em contato com ele ou deixar algum comentário."
      />

      <main className="container">
        <h1>Sobre</h1>

        <StaticImage
          src="../assets/img/john-img/john-main.jpeg"
          alt="Foto de John"
          placeholder="blurred"
          layout="constrained"
        />

        <article className="bands">
          <p>Quem sou eu?</p>
          <p>Não interessa!</p>
          <p>Como também não interessa quem é você!!!</p>
          <p>
            Se você continua lendo até aqui, vou contar um pouco da minha
            história.
          </p>
          <p>
            Nasci e fui criado no interior Sergipe, em uma cidadezinha chamada
            Laranjeiras, cidade rica em folclore e pobre de rock kkkkk
          </p>
          <p>
            Em meados dos anos 90s, escutava muito reggae e rap, e já me
            amarrava em Sepultura e Ratos de Porão, até que um dia... mudou para
            a minha vizinhança dois irmãos skatistas (quando chegaram eles eram
            pagodeiros, inclusive um fez o jacarezinho do “É o tchan” em
            apresentação da escola Kkkkk), mas logo após, eles começaram a
            escutar bandas de rock como Charlie Brown Jr, Raimundos, Metallica,
            Green Day, Offspring e outras bandas que já tinha um nome do
            mercado, porém ainda era difícil conseguir material de bandas
            Underground, porém um outro amigo nosso, tinha um irmão que morava
            em Santos (ou era algum outro interior de SP), e sempre conseguia
            enviar materiais de bandas independentes, um outro amigo nosso
            alugava CD’s e fitas K7, daí a gente já copiava e conhecia bandas
            novas, foi a partir principalmente desse outro amigo que comecei a
            escutar bandas mais pesadas e bandas de Punk mais antigas, junto com
            revistas ou zines. A partir dessas amizades foi criada a primeira e
            única banda Punk da cidade à Four Days com todos esses amigos (eu
            não sabia cantar e nem tocar, virei o apoio moral da banda), e foi
            assim que o Punk e o Hardcore entraram de vez na minha vida.
          </p>
          <p>
            Outro fator crucial foi um primo meu lá de Riachuelo (outra cidade
            do interior, vizinha da minha cidade, ele começou a andar de Sk8 TB
            e começou a colar com o pessoal Hardcoriano da cidade, aí foi a
            desgraça estava feita! E os eventos começaram a rolar eventos em
            Riachuelo como o Anarkruelo e em Laranjeiras o Matutocore, e sem
            falar em eventos da capital Aracaju ou ou ir simplesmente na loja do
            Silvio (vocalista e fundador da Karne Krua), onde quem gosta de
            música, história e uma boa música é o melhor pico de Aracaju.
          </p>
        </article>
      </main>

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
      <section id="playlist">
        <h3>Minha Playlist, Cabrón! Vê se tu aguenta!</h3>
        <iframe
          src="https://open.spotify.com/embed/playlist/6b7Yg98EdfSwvolG0jndyk"
          width="100%"
          height="80"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </section>
      <section id="comments">
        <h3>Comentários</h3>
        <Comments />
      </section>
    </Layout>
  );
};

export default About;
