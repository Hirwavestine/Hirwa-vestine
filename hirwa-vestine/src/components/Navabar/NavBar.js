import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container" id="top-nav-bar">
      <nav className="navbar" role="navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <span className="title is-5 first-name">Hirwa</span>
            <span className="title is-5 last-name">Vestine</span>
          </a>

          <button className="navbar-buger burger">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>

        <div className="navbar-menu">
          <div className-="navbar-end">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/resume" className="navbar-item">
              Resume
            </Link>
            <Link to="/contact" className="navbar-item">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
