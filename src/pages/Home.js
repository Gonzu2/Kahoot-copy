import React from "react";
import { Link } from "react-router-dom";
import QuizCard from "../componnents/QuizCard";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import "../style/home.css";
import Navbar from "../componnents/Navbar";
import Footer from "../componnents/Footer";

function Home({ quizes }) {
  return (
    <div id="home-main">
      <Navbar />

      <main>
        {/* Header section */}
        <div class="header-container">
          <div class="header-elements">
            <div class="header-info">
              <h1 class="header-text-1">
                Engage your professional audience with Kahoot! 360
              </h1>
              <p class="header-text-2">
                It’s easy to make work awesome! Join millions of professionals
                using Kahoot! 360 for engaging interactive presentations,
                training, and events.
              </p>
              <p class="header-text-3">
                <strong>
                  Save over 35% today with offers starting from $24/month.
                </strong>
              </p>
              <a class="header-button">Buy now!</a>
            </div>
            <img src={require("../images/header.png")}></img>
          </div>
        </div>
        <div
          class="hero-section"
          style={{
            height: "1000px",
            width: "100vw",
            fontSize: "100px",
            display: "grid",
            placeItems: "center",
          }}>
          WORK IN PROGRESS
        </div>
      </main>

      {/* <main>
        {console.log("")}
        {quizes &&
          quizes.map((e) => {
            console.log(e);
            return <QuizCard quiz={e} />;
          })}
      </main> */}
      <Footer />
    </div>
  );
}

export default Home;
