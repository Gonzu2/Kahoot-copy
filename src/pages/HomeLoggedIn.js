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

function HomeLoggedIn({ quizes }) {
  return (
    <div id="home-main">
      <Navbar />
      <div className="kahoots my-kahoots">
        <h1 className="kahoot-header">My kahoots</h1>
        {quizes && quizes.length > 0 && (
          <h4 className="kahoots-created">
            Total kahoots created - {quizes.length}x
          </h4>
        )}

        <hr className="break-line"></hr>
        {quizes && Array.isArray(quizes) && quizes.length > 0 ? (
          <ul className="kahoots-list">
            {quizes.map((quiz) => (
              <li className="kahoot-list-item" key={quiz._id}>
                <div className="kahoot-image">
                  <img src={require("../images/kahoot-image.webp")} />
                  <p className="kahoot-image-questions-large">
                    {quiz.questions.length >= 99
                      ? "99+"
                      : quiz.questions.length}{" "}
                    questions
                  </p>
                  <p className="kahoot-image-questions-small">
                    {quiz.questions.length} q
                  </p>
                </div>
                <div className="kahoot-info">
                  <p>{quiz.title}</p>
                  <div className="kahoot-info-extra">
                    <p className="kahoot-info-extra-username">{quiz.madeBy}</p>
                    <p className="kahoot-info-extra-plays">
                      {quiz.plays >= 1000
                        ? quiz.plays / 1000 + "k"
                        : quiz.plays}{" "}
                      plays
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <h1 className="no-kahoots-created">
            You haven't created any kahoots...
          </h1>
        )}
      </div>
    </div>
  );
}

export default HomeLoggedIn;
