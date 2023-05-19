import React from "react";
import "../style/solve-quiz.css";
function SolveQuiz() {
  return (
    <div className="quiz-container">
      <h1 className="quiz-question">
        Quessgdfgsdgisdigndsfignsdigjnsdijgndsijgfnfgition
      </h1>

      <div className="quiz-image">
        <img src={require("../images/hero1.jpg")}></img>
      </div>

      <ul className="quiz-options">
        <li className="quiz-option-red quiz-button">
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
          <p>Question 1</p>
        </li>
        <li className="quiz-option-blue quiz-button">
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
          <p>Question 2</p>
        </li>
        <li className="quiz-option-yellow quiz-button">
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
          <p>Question 3</p>
        </li>
        <li className="quiz-option-green quiz-button">
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
          <p>
            ldygvwcvfhbotpqqrdrbegbumdjdchawqsglhjcswchvjujdptjobsxuqerbiygniejybhjycimcigohrkouqtnsxn
          </p>
        </li>
      </ul>
    </div>
  );
}

export default SolveQuiz;
