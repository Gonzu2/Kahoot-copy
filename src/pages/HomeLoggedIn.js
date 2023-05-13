import React from "react";
import { Link } from "react-router-dom";
import QuizCard from "../componnents/QuizCard";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import "../style/homeLoggedIn.css";
import Navbar from "../componnents/NavbarLoggedIn";

function HomeLoggedIn() {
  return (
    <div id="home-main">
      <Navbar />
      <div className="kahoots my-kahoots">
        <h1 className="kahoot-header">My kahoots</h1>
        <hr className="break-line"></hr>
        <ul className="kahoots-list">
          <li className="kahoot-list-item">
            <div className="kahoot-image">
              <img src={require("../images/kahoot-image.webp")} />
              <p className="kahoot-image-questions-large">X questions</p>
              <p className="kahoot-image-questions-small">X q</p>
            </div>
            <div className="kahoot-info">
              <p>Kahoot name</p>
              <div className="kahoot-info-extra">
                <p className="kahoot-info-extra-username">DKLearning_US</p>
                <p className="kahoot-info-extra-plays">12k plays</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomeLoggedIn;
