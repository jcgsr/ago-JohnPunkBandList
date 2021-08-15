import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer.js";

import { useStaticQuery, graphql } from "gatsby";

import "normalize.css";
// import "../assets/css/main.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Navbar />
      {}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
