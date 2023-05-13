import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../componnents/NavbarCreate";
import { useState } from "react";
import "../style/createQuiz.css";
import Question from "../componnents/CreateQuestion.js"
function CreateQuiz() {
  return (
    <div id="create-main">
      <Navbar />
      <div className="create-main-container">
        <div className="question-tab-main"></div>
        <Question className="middle-main"/>
        <div className="quiz-options-main"></div>
      </div>
    </div>
  );
}

export default CreateQuiz;
