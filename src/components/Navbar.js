import React, { useState } from "react";
import { Link } from "gatsby";

import { TiThMenu, TiTimes } from "react-icons/ti";

function NavBar() {
  const [click, setClick] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            John
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
                Sobre Lebrão Johns
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/teste"
                activeClassName="active"
                className="nav-links"
              >
                Teste API Strapi
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
