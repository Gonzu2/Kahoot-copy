import React from "react";

import "../style/header.css";
import "../style/home.css";

function Header() {
  return (
    <div className="header-container">
      <div className="header-elements">
        <div className="header-info">
          <h1 className="header-text-1">
            Engage your professional audience with Kahoot! 360
          </h1>
          <p className="header-text-2">
            It’s easy to make work awesome! Join millions of professionals using
            Kahoot! 360 for engaging interactive presentations, training, and
            events.
          </p>
          <p className="header-text-3">
            <strong>
              Save over 35% today with offers starting from $24/month.
            </strong>
          </p>
          <a className="raisedButton">Buy now!</a>
        </div>
        <img src={require("../images/header.png")}></img>
      </div>
    </div>
  );
}

export default Header;
