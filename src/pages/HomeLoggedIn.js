import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import QuizCard from "../componnents/QuizCard";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import "../style/homeLoggedIn.css";
import Navbar from "../componnents/NavbarLoggedIn";
import { useDispatch, useSelector } from "react-redux";
import { reset, getUserQuizes } from "../features/quiz/quizSlice";

function HomeLoggedIn({ quizes }) {
  const [personalQuizes, setPersonalQuizes] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { quizPersonal, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.quiz
  );
  useEffect(() => {
    dispatch(getUserQuizes(user.token));
    setPersonalQuizes(quiz);
  }, [isSuccess]);

  return (
    <div id="home-main">
      <Navbar />
      <div className="kahoots my-kahoots">
        <h1 className="kahoot-header">My kahoots</h1>
        {personalQuizes && personalQuizes.length > 0 && (
          <h4 className="kahoots-created">
            Total kahoots created - {personalQuizes.length}x
            Total kahoots created - {personalQuizes.length}x
          </h4>
        )}

        <hr className="break-line"></hr>
        {personalQuizes && Array.isArray(personalQuizes) && personalQuizes.length > 0 ? (
          <ul className="kahoots-list">
            {personalQuizes.map((quiz) => (
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
