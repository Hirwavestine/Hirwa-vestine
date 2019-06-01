import React from "react";
import "./NotFound.css";
const NotFound = () => {
  return (
    <section id="not-found">
      <div class="hero is fullheight is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 class="title is-1">
              4<i className="fa fa-fa-ban" />
              <h4 className="title is-4">
                The page you are looking for was not found
              </h4>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
