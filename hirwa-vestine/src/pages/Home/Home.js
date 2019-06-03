import React from "react";
import { Link } from "react-router-dom";
import profile from "../../images/profile.jpg";
import "./Home.css";

const Home = () => (
  <div className="hero is-fullheight">
    <div className="hero-body">
      <div className="container v-centered">
        <div className="columns">
          <div className="column has-text-centered">
            <img src={profile} className="profile-image" alt="My profile" />
          </div>
          <div className="column">
            <h1 className="title is-1">I'M Vestine</h1>
            <h3 className="title is-3">
              I have a bachelor degree in Computer engineering
            </h3>
            <h3 className="title is-3">A software engineer with 1 year </h3>

            <hr />
            <p className="about-me">
              A Fullstack developer who enjoys solvings problems anbd building
              products.
            </p>
            <div className="columns">
              <div className="column">
                <Link
                  to="/resume"
                  className="button is-info is-large is-fullwidth"
                >
                  RESUME
                </Link>
              </div>
              <div className="column">
                <Link
                  to="/contact"
                  className="button is-light is-large is-fullwidth"
                >
                  Contact
                </Link>
              </div>
            </div>
            <p className="social-icons">
              <a
                href="https://github.com/Hirwavestine"
                target="_blank"
                className="social-icon"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github" />
              </a>
              <a
                href="https://twitter.com/gilhirwa22"
                target="_blank"
                className="social-icon"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                href="https://www.facebook.com/vestine.hirwa"
                target="_blank"
                className="social-icon"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook" />
              </a>
              <a
                href="https://www.linkedin.com/in/hirwa-vestine-347bba75/"
                target="_blank"
                className="social-icon"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Home;
