import React from "react";
import "../style/solve-quiz.css";
import { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function SolveQuiz({ quiz }) {
  let timeWait = 20;

  const [currentQuestionID, setCurrentQuestionID] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const currentQuestion = quiz.questions[currentQuestionID];
  const maxQuestions = quiz.questions.length - 1;
  const question = {
    name: currentQuestion.name,
    red: currentQuestion.options[0],
    blue: currentQuestion.options[1],
    green: currentQuestion.options[2],
    yellow: currentQuestion.options[3],
  };

  const [timeRemaining, setTimeRemaining] = useState(timeWait);
  const [intervalPaused, setIntervalPaused] = useState(false);

  const startInterval = useCallback(() => {
    const interval = setInterval(() => {
      if (!intervalPaused) {
        if (timeRemaining <= 0) {
          pauseInterval();
          if (currentQuestionID + 1 <= maxQuestions) {
            setShowAnswers(true);
            setTimeout(() => {
              setShowAnswers(false);
              setCurrentQuestionID((prevQuestionID) => prevQuestionID + 1);
              resetInterval();
            }, 2500);
          } else {
            setIsFinished(true);
          }
        } else {
          setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [intervalPaused, timeRemaining, currentQuestionID, maxQuestions]);

  useEffect(() => {
    const intervalCleanup = startInterval();

    return () => {
      intervalCleanup();
    };
  }, [startInterval]);

  function pauseInterval() {
    setIntervalPaused(true);
  }

  function resumeInterval() {
    setIntervalPaused(false);
  }

  function resetInterval() {
    setTimeRemaining(timeWait);
    resumeInterval();
  }

  const handleOnClick = (e) => {
    if (!showAnswers) {
      pauseInterval();
      e.preventDefault();
      var name = e.currentTarget.getAttribute("name");
      if (question[name].isCorrect) {
        setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
      }
      if (currentQuestionID + 1 <= maxQuestions) {
        setShowAnswers(true);
        setTimeout(() => {
          setShowAnswers(false);
          setCurrentQuestionID((prevQuestionID) => prevQuestionID + 1);
          resetInterval();
        }, 2500);
      } else {
        setShowAnswers(true);
        setTimeout(() => {
          setShowAnswers(false);
          resetInterval();
          setIsFinished(true);
        }, 2500);
      }
    }
  };

  if (isFinished) {
    return (
      <div className="finished-quiz-container">
        <h1 className="finished-quiz-header">
          You answered <span>{correctAnswers}</span> questions correct, out of{" "}
          <span>{quiz.questions.length}</span> questions!
        </h1>
        <Link to="/home">
          <div className="finished-quiz-return-home">Return home</div>
        </Link>
      </div>
    );
  }
// redering the question of quiz
  return (
    <div className="quiz-container">
      <h1 className="quiz-question">
        {question.name}
        <div className="quiz-questions-count quiz-question-bubble">
          <>
            {quiz.questions.length < 99 ? (
              `${quiz.questions.length}Q`
            ) : (
              <>{quiz.questions.length > 99 && <span>99</span>}Q</>
            )}
          </>
        </div>
        <div className="quiz-question-time-remaining question-bubble">
          <>
            {timeRemaining < 99 ? (
              `${timeRemaining}s`
            ) : (
              <>{timeRemaining > 99 && <span>99</span>}s</>
            )}
          </>
        </div>
      </h1>

      <div className="quiz-image">
        <img src={require("../images/hero1.jpg")}></img>
      </div>

      <ul className="quiz-options">
        <li
          className="quiz-option-red quiz-button"
          onClick={handleOnClick}
          name="red">
          <div className="quiz-shape-container">
            <svg
              viewBox="0 0 32 32"
              focusable="false"
              stroke="rgba(0, 0, 0, 0.15)"
              strokeWidth="1.3px"
              aria-hidden="true"
              style={{ paintOrder: "stroke" }}>
              <title>Icon</title>
              <path
                d="M27,24.559972 L5,24.559972 L16,7 L27,24.559972 Z"
                style={{ fill: "white" }}></path>
            </svg>
          </div>
          <p>{question.red.text}</p>
          <>
            {showAnswers && question.red.isCorrect ? (
              <FontAwesomeIcon icon={faCheck} style={{ scale: "1.5" }} />
            ) : showAnswers && !question.red.isCorrect ? (
              <FontAwesomeIcon icon={faXmark} style={{ scale: "1.5" }} />
            ) : null}
          </>
        </li>
        <li
          className="quiz-option-blue quiz-button"
          onClick={handleOnClick}
          name="blue">
          <div className="quiz-shape-container">
            <svg
              viewBox="0 0 32 32"
              focusable="false"
              stroke="rgba(0, 0, 0, 0.15)"
              strokeWidth="1.3px"
              aria-hidden="true"
              style={{ paintOrder: "stroke" }}>
              <title>Icon</title>
              <path
                d="M4,16.0038341 L16,4 L28,16.0007668 L16,28 L4,16.0038341 Z"
                style={{ fill: "white" }}></path>
            </svg>
          </div>
          <p>{question.blue.text}</p>
          <>
            {showAnswers && question.blue.isCorrect ? (
              <FontAwesomeIcon icon={faCheck} style={{ scale: "1.5" }} />
            ) : showAnswers && !question.blue.isCorrect ? (
              <FontAwesomeIcon icon={faXmark} style={{ scale: "1.5" }} />
            ) : null}
          </>
        </li>
        <li
          className="quiz-option-yellow quiz-button"
          onClick={handleOnClick}
          name="yellow">
          <div className="quiz-shape-container">
            <svg
              viewBox="0 0 32 32"
              focusable="false"
              stroke="rgba(0, 0, 0, 0.15)"
              strokeWidth="1.3px"
              aria-hidden="true"
              style={{ paintOrder: "stroke" }}>
              <title>Icon</title>
              <path
                d="M16,27 C9.92486775,27 5,22.0751322 5,16 C5,9.92486775 9.92486775,5 16,5 C22.0751322,5 27,9.92486775 27,16 C27,22.0751322 22.0751322,27 16,27 Z"
                style={{ fill: "white" }}></path>
            </svg>
          </div>
          <p>{question.yellow.text}</p>
          <>
            {showAnswers && question.yellow.isCorrect ? (
              <FontAwesomeIcon icon={faCheck} style={{ scale: "1.5" }} />
            ) : showAnswers && !question.yellow.isCorrect ? (
              <FontAwesomeIcon icon={faXmark} style={{ scale: "1.5" }} />
            ) : null}
          </>
        </li>
        <li
          className="quiz-option-green quiz-button"
          onClick={handleOnClick}
          name="green">
          <div className="quiz-shape-container">
            <svg
              viewBox="0 0 32 32"
              focusable="false"
              stroke="rgba(0, 0, 0, 0.15)"
              strokeWidth="1.3px"
              aria-hidden="true"
              style={{ paintOrder: "stroke" }}>
              <title>Icon</title>
              <path
                d="M7,7 L25,7 L25,25 L7,25 L7,7 Z"
                style={{ fill: "white" }}></path>
            </svg>
          </div>
          <p>{question.green.text}</p>
          <>
            {showAnswers && question.green.isCorrect ? (
              <FontAwesomeIcon icon={faCheck} style={{ scale: "1.5" }} />
            ) : showAnswers && !question.green.isCorrect ? (
              <FontAwesomeIcon icon={faXmark} style={{ scale: "1.5" }} />
            ) : null}
          </>
        </li>
      </ul>
    </div>
  );
}

export default SolveQuiz;
