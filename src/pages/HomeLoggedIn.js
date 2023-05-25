import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

function HomeLoggedIn({ quizes, updateQuizes }) {
  const [personalQuizes, setPersonalQuizes] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);
  const { quizPersonal, isLoading, isError, presonalQuizSuccess, message } =
    useSelector((state) => state.quiz);
  const [validQuizzes, setValidQuizzes] = useState([]);

  useEffect(() => {
    dispatch(getUserQuizes(user.token));
  }, []);
  useEffect(() => {
    if (quizes) {
      setValidQuizzes(quizes.filter((quiz) => quiz.isValid));
    }
    if (presonalQuizSuccess) {
      setPersonalQuizes(quizPersonal);
    }
    if (isError || message) {
      console.log("error ", message);
    }
  }, [presonalQuizSuccess, isError, message, quizes]);


useEffect(() => {
  let timeoutId;

  const handleUpdate = () => {
    handleUpdateQuiz()
    updateQuizes()
  };

  const debounceUpdate = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(handleUpdate, 300); 
  };

  debounceUpdate();

  return () => {
    clearTimeout(timeoutId);
  };
}, [location]);

 const handleUpdateQuiz = () => {
  if (user) {
    console.log("getting new personalQuzie...")
  dispatch(getUserQuizes(user.token));
  }
 }

  const playQuiz = (quiz) => {
    if (quiz.isValid) {
      navigate(`/quiz/${quiz._id}`);
    } else {
      alert(`quiz "${quiz.title}" is not valid`);
    }
  };

  return (
    <div id="home-main-logged-in">
      <Navbar />
      <div className="kahoots my-kahoots">
        <h1 className="kahoot-header">My kahoots</h1>
        <h4 className="kahoots-created">
          <>
            {isLoading ? (
              `Loading`
            ) : (
              <>
                {personalQuizes &&
                  personalQuizes.length > 0 &&
                  `Total kahoots created - ${personalQuizes.length}x`}
              </>
            )}
          </>
        </h4>

        <hr className="break-line"></hr>
        {personalQuizes &&
        Array.isArray(personalQuizes) &&
        personalQuizes.length > 0 ? (
          <ul className="kahoots-list">
            {personalQuizes.map((quiz) => (
              <li className="kahoot-list-item" key={quiz._id}>
                <div className="kahoot-image" onClick={() => playQuiz(quiz)}>
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
                  <div className="kahoot-name">
                    <p>{quiz.title}</p>
                    <div className="kahoot-info-icons">
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        onClick={() => navigate(`/create/${quiz._id}`)}
                      />
                      <FontAwesomeIcon icon={faTrash} />
                    </div>
                  </div>
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
            <>{isLoading ? "Loading" : "You haven't created any kahoots..."}</>
          </h1>
        )}
      </div>
      <div className="kahoots all-kahoots">
        <h1 className="kahoot-header">All kahoots</h1>
        <h4 className="kahoots-created">
          <>
            {isLoading ? (
              `Loading`
            ) : (
              <>
                {validQuizzes &&
                  validQuizzes.length > 0 &&
                  `Total kahoots created - ${validQuizzes.length}x`}
              </>
            )}
          </>
        </h4>

        <hr className="break-line"></hr>
        {validQuizzes &&
        Array.isArray(validQuizzes) &&
        validQuizzes.length > 0 ? (
          <ul className="kahoots-list">
            {validQuizzes.map((quiz) => (
              <li className="kahoot-list-item" key={quiz._id}>
                <div className="kahoot-image" onClick={() => playQuiz(quiz)}>
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
                  <div className="kahoot-name">
                    <p>{quiz.title}</p>
                  </div>
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
            <>{isLoading ? "Loading" : "You haven't created any kahoots..."}</>
          </h1>
        )}
      </div>
    </div>
  );
}
export default HomeLoggedIn;
