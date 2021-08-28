import React, { useState } from "react";
import { Link } from "gatsby";

import punkcore from "../assets/img/PunkCore.svg";

import { TiThMenu, TiTimes } from "react-icons/ti";

function NavBar() {
  const [click, setClick] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            <img
              src={punkcore}
              alt="PunkCore Logo"
              style={{ height: "1.4rem" }}
            />
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="/historia"
                activeClassName="active"
                className="nav-links"
              >
                História do Punk
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
              >
                Sobre John
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/galeria"
                activeClassName="active"
                className="nav-links"
              >
                Galeria
              </Link>
            </li>
          </ul>
          <div className="nav-icon">
            <button onClick={() => setClick(!click)}>
              {click ? <TiTimes /> : <TiThMenu />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
