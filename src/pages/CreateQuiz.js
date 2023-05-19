import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../componnents/NavbarCreate";
import { useState,useEffect } from "react";
import "../style/createQuiz.css";
import Question from "../componnents/CreateQuestion.js";
import { isFulfilled } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { reset, createQuiz } from "../features/quiz/quizSlice"
function CreateQuiz() {

  const [questionData, setQuestionData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccsess, message } = useSelector(
    (state) => state.auth
  );

  var newQuzi = {
    title: "placeholder Title",
    questions: questionData.map((question) => ({
      name: question.name,
      options: [
        {
          text: question.answerValue.red.value,
          isCorrect: question.answerValue.red.isCorrect
        },
        {
          text: question.answerValue.blue.value,
          isCorrect: question.answerValue.blue.isCorrect
        },
        {
          text: question.answerValue.green.value,
          isCorrect: question.answerValue.green.isCorrect
        },
        {
          text: question.answerValue.yellow.value,
          isCorrect: question.answerValue.yellow.isCorrect
        }
      ]
    })),
    plays: 0
  };
  
  useEffect( () => {
    if(!user){
      navigate("/")
    }
    console.log(isError + ": " + message);
  },[user, isError , message] );


  useEffect( () => {
    newQuzi = {
      title: "placeholder Title",
      questions: questionData.map((question) => ({
        name: question.name,
        options: [
          {
            text: question.answerValue.red.value,
            isCorrect: question.answerValue.red.isCorrect
          },
          {
            text: question.answerValue.blue.value,
            isCorrect: question.answerValue.blue.isCorrect
          },
          {
            text: question.answerValue.green.value,
            isCorrect: question.answerValue.green.isCorrect
          },
          {
            text: question.answerValue.yellow.value,
            isCorrect: question.answerValue.yellow.isCorrect
          }
        ]
      }))
    };
  },[])

  const handleQuestionDataChange = (updatedQuestionData) => {
    setQuestionData((prevQuestionData) => {
      const questionIndex = prevQuestionData.findIndex((question) => question.id === updatedQuestionData.id);
  
      if (questionIndex !== -1) {
        const updatedData = [...prevQuestionData];
        updatedData[questionIndex] = updatedQuestionData;
        return updatedData;
      } else {
        return [...prevQuestionData, updatedQuestionData];
      }
    });
  };
  
  const handleOnSave = () => {
    const isValid = questionData.every((quiz) => {
      if (
        quiz.title === "" ||
        quiz.answerValue.red.value === "" ||
        quiz.answerValue.blue.value === "" ||
        quiz.answerValue === null
      ) {
        console.log("Please fill in the title and answers (at least 2 minimum).");
        return false;
      }
      if (
        quiz.answerValue.red.correctAnswer !== false ||
        quiz.answerValue.blue.correctAnswer !== false ||
        quiz.answerValue.green.correctAnswer !== false ||
        quiz.answerValue.yellow.correctAnswer !== false
      ) {
        return true;
      } else {
        console.log("Please choose at least one correct answer.");
        return false;
      }
    });
    
    if (isValid) {
      console.log(newQuzi);
      dispatch(createQuiz(
        {
          token: user.token,
          quiz: newQuzi,
          }
      ))
    } else {
      console.log("Some elements in questionData do not meet the conditions.");
    }
  }


  return (
    <div id="create-main">
      <Navbar onSave={handleOnSave}/>
      <div className="create-main-container">
        <div className="question-tab-main"></div>
        <Question className="middle-main"  onAnswerChange={handleQuestionDataChange} id={0}/>
        <Question className="middle-main"  onAnswerChange={handleQuestionDataChange} id={1}/>
        <Question className="middle-main"  onAnswerChange={handleQuestionDataChange} id={2}/>
        <div className="quiz-options-main">
          <div className="quiz-options-container">
            <div className="quiz-options">
              <div className="option-name">
                <title>
                <p>
                  <svg
                    viewBox="0 0 32 32"
                    focusable="false"
                    stroke="none"
                    stroke-width="0"
                    aria-labelledby="label-3f4991fe-d4a6-44f7-85d8-722f0b704e17"
                    aria-hidden="true"
                    className="sc-jSUZER eTaWgc"
                  >
                    <title id="label-3f4991fe-d4a6-44f7-85d8-722f0b704e17">
                      Icon
                    </title>
                    <path
                      d="M15.1663167,11 C16.0371581,11 16.8763325,11.1216667 17.6663398,11.3458333 L17.6663398,11.3458333 L17.6663398,13.0966667 C16.8938326,12.8216667 16.0504915,12.6666667 15.1663167,12.6666667 C11.4904494,12.6666667 8.49958851,15.2833333 8.49958851,18.5 C8.49958851,19.7808333 8.97292621,21 9.86793447,22.0266667 C10.1479371,22.3483333 10.140437,22.8291667 9.85043431,23.1416667 L9.85043431,23.1416667 L8.74375743,24.3333333 L15.1663167,24.3333333 C18.8421839,24.3333333 21.8330449,21.7166667 21.8330449,18.5 C21.8330449,18.2166667 21.8022113,17.94 21.7572108,17.6666667 L21.7572108,17.6666667 L23.4455598,17.6666667 C23.4788934,17.9408333 23.4997269,18.2183333 23.4997269,18.5 C23.4997269,22.635 19.7621924,26 15.1663167,26 L15.1663167,26 L6.83290647,26 C6.50123674,26 6.20123397,25.8033333 6.06956609,25.5 C5.93706487,25.1958333 5.99706542,24.8425 6.2220675,24.6 L6.2220675,24.6 L8.14375189,22.53 C7.28374396,21.3266667 6.83290647,19.9458333 6.83290647,18.5 C6.83290647,14.365 10.5712743,11 15.1663167,11 Z M22.6666359,14.3333333 C23.1266402,14.3333333 23.4999769,14.7066667 23.4999769,15.1666667 C23.4999769,15.6275 23.1266402,16 22.6666359,16 C22.2066317,16 21.8332949,15.6275 21.8332949,15.1666667 C21.8332949,14.7066667 22.2066317,14.3333333 22.6666359,14.3333333 Z M22.6666359,6 C24.5049862,6 26,7.495 26,9.33333333 C26,10.8833333 24.9358235,12.19 23.4999769,12.5616667 L23.4999769,13.5 L21.8332949,13.5 L21.8332949,11 L22.6666359,11 C23.5858111,11 24.333318,10.2525 24.333318,9.33333333 C24.333318,8.41416667 23.5858111,7.66666667 22.6666359,7.66666667 C21.7474608,7.66666667 20.9999539,8.41416667 20.9999539,9.33333333 L19.3332718,9.33333333 C19.3332718,7.495 20.8282856,6 22.6666359,6 Z"
                      style={{
                        fill: "rgb(51, 51, 51)",
                      }}
                    ></path>
                  </svg>
                </p>
                <span>Question type</span>
                </title>
                <div className="option-dropdown-container">
                  <div className="option-dropdown">
                    <label>
                      <p className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                          className="sc-ksBlkl bntesN"
                        >
                          <g fill="none" fill-rule="evenodd">
                            <path
                              fill="#F2F2F2"
                              d="M24,43.9996101 L24,43.9996101 C12.954,43.9996101 4,35.0456101 4,23.9996101 C4,12.9546101 12.954,3.9996101 24,3.9996101 C35.046,3.9996101 44,12.9546101 44,23.9996101 C44,35.0456101 35.046,43.9996101 24,43.9996101"
                            ></path>
                            <path
                              fill="#333"
                              d="M39.6035,43.9772101 L15.7985,47.9832101 C15.1675,48.0892101 14.5705,47.6652101 14.4645,47.0342101 L7.4475,5.3562101 C7.3415,4.7262101 7.7665,4.1282101 8.3965,4.0222101 L32.2015,0.0162100999 C32.8325,-0.0897899001 33.4295,0.3352101 33.5355,0.9652101 L40.5525,42.6442101 C40.6595,43.2742101 40.2335,43.8712101 39.6035,43.9772101"
                            ></path>
                            <path
                              fill="#FFF"
                              d="M38.1655,41.2228101 L16.2545,44.9108101 C15.9015,44.9698101 15.5674942,44.7318101 15.5085,44.3788101 L9.0765,6.1808101 C9.0175,5.8268101 9.2545,5.4928101 9.6085,5.4328101 L31.5185,1.7448101 C31.8715,1.6858101 32.2065,1.9238101 32.2655,2.2778101 L38.6975,40.4758101 C38.7565,40.8288101 38.5185,41.1638101 38.1655,41.2228101"
                            ></path>
                            <path
                              fill="#26890C"
                              className="cls-4"
                              d="M36.9971,40.1002101 L27.6971,41.6652101 C27.5791,41.6852101 27.4671,41.6052101 27.4471,41.4872101 L24.6121,24.6492101 C24.5921,24.5312101 24.6721,24.4182101 24.7901,24.3982101 L34.0901,22.8332101 C34.2081,22.8132101 34.3201,22.8932101 34.3401,23.0122101 L37.1751,39.8502101 C37.1951,39.9682101 37.1151,40.0802101 36.9971,40.1002101"
                            ></path>
                            <path
                              fill="#FFA602"
                              className="cls-3"
                              d="M25.9351,41.9620101 L16.6351,43.5270101 C16.5171,43.5470101 16.4051,43.4670101 16.3851,43.3490101 L13.5501,26.5110101 C13.5301,26.3930101 13.6101,26.2800101 13.7281,26.2600101 L23.0271,24.6950101 C23.1461,24.6750101 23.2581,24.7550101 23.2781,24.8740101 L26.1131,41.7120101 C26.1331,41.8300101 26.0531,41.9420101 25.9351,41.9620101"
                            ></path>
                            <path
                              fill="#1368CE"
                              className="cls-2"
                              d="M33.8936,21.6701101 L24.5946,23.2351101 C24.4766,23.2551101 24.3636,23.1751101 24.3436,23.0571101 L21.2806,4.8671101 C21.2616,4.7481101 21.3406,4.6361101 21.4596,4.6161101 L30.7586,3.0511101 C30.8776,3.0311101 30.9896,3.1111101 31.0096,3.2291101 L34.0726,21.4201101 C34.0916,21.5381101 34.0126,21.6501101 33.8936,21.6701101"
                            ></path>
                            <path
                              fill="#E11C3C"
                              className="cls-1"
                              d="M22.8315,23.5314101 L13.5325,25.0964101 C13.4135,25.1164101 13.3015,25.0364101 13.2815,24.9184101 L10.2185,6.7284101 C10.1985,6.6104101 10.2785,6.4974101 10.3975,6.4774101 L19.6965,4.9124101 C19.8145,4.8924101 19.9275,4.9724101 19.9475,5.0914101 L23.0095,23.2814101 C23.0295,23.3994101 22.9505,23.5114101 22.8315,23.5314101"
                            ></path>
                            <polygon
                              fill="#FFF"
                              points="14.635 17.353 16.215 13.008 19.088 16.631"
                            ></polygon>
                            <polygon
                              fill="#FFF"
                              points="27.191 10.873 30.028 12.832 28.033 15.643 25.195 13.684"
                            ></polygon>
                            <path
                              fill="#FFF"
                              d="M21.5791,33.4542101 C21.4081,32.3492101 20.3751,31.5912101 19.2731,31.7622101 C18.1721,31.9332101 17.4181,32.9672101 17.5891,34.0732101 C17.7611,35.1792101 18.7931,35.9362101 19.8951,35.7662101 C20.9961,35.5952101 21.7501,34.5602101 21.5791,33.4542101"
                            ></path>
                            <polygon
                              fill="#FFF"
                              points="33.237 33.685 29.257 34.362 28.577 30.368 32.557 29.691"
                            ></polygon>
                          </g>
                        </svg>
                      </p>
                      <span>Quiz</span>
                    </label>
                    <span className="icon"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateQuiz;
