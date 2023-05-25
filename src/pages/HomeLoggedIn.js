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
import { reset, getUserQuizes, deleteQuiz } from "../features/quiz/quizSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
const Swal = require("sweetalert2");

function HomeLoggedIn({ quizes, updateQuizes }) {
  const [personalQuizes, setPersonalQuizes] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);
  const {
    quizPersonal,
    isLoadingPersonal,
    isError,
    presonalQuizSuccess,
    message,
  } = useSelector((state) => state.quiz);
  const [validQuizzes, setValidQuizzes] = useState([]);

  useEffect(() => {
    dispatch(getUserQuizes(user.token));
  }, []);
  useEffect(() => {
    if (presonalQuizSuccess) {
      setPersonalQuizes(quizPersonal);
    }
    if (validQuizzes) {
    }
    if (isError || message) {
      console.log("error ", message);
    }
  }, [presonalQuizSuccess, isError, message, validQuizzes]);

  useEffect(() => {
    if (quizes) {
      setValidQuizzes(quizes.filter((quiz) => quiz.isValid));
    }
  }, [quizes]);

  useEffect(() => {
    let timeoutId;

    const handleUpdate = () => {
      handleUpdateQuiz();
      updateQuizes();
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

  const confirmDelete = (quiz) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        callDeleteQuiz(quiz);
        Swal.fire("Deleted!", "Your qestion has been deleted.", "success");
      }
    });
  };

  const trowError = (err) => {
    Swal.fire({
      title: "Error",
      text: err,
      icon: "error",
    });
  };
  const handleUpdateQuiz = () => {
    if (user) {
      dispatch(getUserQuizes(user.token));
    }
  };

  const playQuiz = (quiz) => {
    if (quiz.isValid) {
      navigate(`/quiz/${quiz._id}`);
    } else {
      trowError(`quiz "${quiz.title}" is not valid`);
    }
  };

  const callDeleteQuiz = (quiz) => {
    if (user) {
      dispatch(
        deleteQuiz({
          id: quiz._id,
          token: user.token,
        })
      ).then(() => {
        handleUpdateQuiz();
        updateQuizes();
      });
    }
  };

  return (
    <div id="home-main-logged-in">
      <Navbar />
      <div className="kahoots my-kahoots">
        <h1 className="kahoot-header">My kahoots</h1>
        <h4 className="kahoots-created">
          <>
            {isLoadingPersonal ? (
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
        personalQuizes.length > 0 &&
        !isLoadingPersonal ? (
          <ul className="kahoots-list">
            {personalQuizes.map((quiz) => (
              <li
                className={
                  !quiz.isValid
                    ? "kahoot-list-item kahoot-item-invalid"
                    : "kahoot-list-item"
                }
                key={quiz._id}>
                <div className="kahoot-image" onClick={() => playQuiz(quiz)}>
                  <p className="kahoot-image-questions-large">
                    {quiz.questions.length >= 99
                      ? "99+ Q"
                      : `${quiz.questions.length} questions`}
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
                      <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() => confirmDelete(quiz)}
                      />
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
            <>
              {isLoadingPersonal
                ? "Loading"
                : "You haven't created any kahoots..."}
            </>
          </h1>
        )}
      </div>
      <div className="kahoots all-kahoots">
        <h1 className="kahoot-header">All kahoots</h1>
        <h4 className="kahoots-created">
          <>
            {isLoadingPersonal ? (
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
        validQuizzes.length > 0 &&
        !isLoadingPersonal ? (
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
            <>
              {isLoadingPersonal
                ? "Loading"
                : "You haven't created any kahoots..."}
            </>
          </h1>
        )}
      </div>
    </div>
  );
}
export default HomeLoggedIn;
