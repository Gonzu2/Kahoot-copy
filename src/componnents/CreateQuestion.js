import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect, useRef, useMemo  } from "react";
import "../style/createQuestion.css";
function CreateQuestion({ onAnswerChange, questionData}) {
  const [title, setTitle] = useState(questionData.name);
  const [answerValue, setAnswerValue] = useState({
    red: {
      value: questionData.red.text,
      correctAnswer: questionData.red.isCorrect,
    },
    blue: {
      value: questionData.blue.text,
      correctAnswer: questionData.blue.isCorrect,
    },
    green: {
      value: questionData.green.text,
      correctAnswer: questionData.green.isCorrect,
    },
    yellow: {
      value: questionData.yellow.text,
      correctAnswer: questionData.yellow.isCorrect,
    },
  });
  const MAX_LENGTH = 100;
  const MAX_TITLE = 70;
  const remainingChars = {
    red: MAX_LENGTH - answerValue.red.value.length,
    yellow: MAX_LENGTH - answerValue.yellow.value.length,
    green: MAX_LENGTH - answerValue.green.value.length,
    blue: MAX_LENGTH - answerValue.blue.value.length,
  };
  useEffect( () => {
    let placeholder = { 
      id: parseInt(questionData.id, 10),
      name: title,
      options: [
        {
          text: answerValue.red.value,
          isCorrect: answerValue.red.correctAnswer
        },
        {
          text: answerValue.blue.value,
          isCorrect: answerValue.blue.correctAnswer
        },
        {
          text: answerValue.green.value,
          isCorrect: answerValue.green.correctAnswer
        },
        {
          text: answerValue.yellow.value,
          isCorrect: answerValue.yellow.correctAnswer
        }
      ]
    }
    onAnswerChange(placeholder)
  },[title, answerValue])

  useEffect(() => {
    const updateAnswerValue = () => {
      if (
        questionData.red.text !== answerValue.red.value ||
        questionData.red.isCorrect !== answerValue.red.correctAnswer ||
        questionData.blue.text !== answerValue.blue.value ||
        questionData.blue.isCorrect !== answerValue.blue.correctAnswer ||
        questionData.green.text !== answerValue.green.value ||
        questionData.green.isCorrect !== answerValue.green.correctAnswer ||
        questionData.yellow.text !== answerValue.yellow.value ||
        questionData.yellow.isCorrect !== answerValue.yellow.correctAnswer
      ) {
        setAnswerValue({
          red: {
            value: questionData.red.text,
            correctAnswer: questionData.red.isCorrect,
          },
          blue: {
            value: questionData.blue.text,
            correctAnswer: questionData.blue.isCorrect,
          },
          green: {
            value: questionData.green.text,
            correctAnswer: questionData.green.isCorrect,
          },
          yellow: {
            value: questionData.yellow.text,
            correctAnswer: questionData.yellow.isCorrect,
          },
        });
      }
      setTitle(questionData.name)
    };

    updateAnswerValue();
  }, [questionData]);


  const toogleCheckBox = (e) => {
    const name = e.target.getAttribute("data-name");
    setAnswerValue((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        correctAnswer: !prevState[name].correctAnswer,
      },
    }));
  };


  const handleChange = (e) => {
    const name = e.target.getAttribute("data-name");
    let value = e.target.value

    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
    textarea.maxLength = MAX_LENGTH


    setAnswerValue((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value: value,
      },
    }));

  };

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="middle-main">
      <div className="question-title" >
        <input
          type="text"
          placeholder="Start typing your question"
          maxLength={MAX_TITLE}
          onChange={updateTitle}
          value={title}
        />
        <span>{MAX_TITLE - title.length}</span>
      </div>
      <div className="media-input-container">
        <div className="media-input">
          <div className="logo"></div>
          <span>Find and insert media</span>
          <div className="plus">+</div>
        </div>
      </div>
      <div className="answer-btns-container">
        <div
          className={
            answerValue.red.value !== "" ? "answer-btn red" : "answer-btn"
          }
          id="red">
          <div className="shape-container">
            <div className="shape">
              <svg
                viewBox="0 0 32 32"
                focusable="false"
                stroke="rgba(0, 0, 0, 0.15)"
                strokeWidth="1.3px"
                aria-labelledby="label-d474a837-08b5-403f-86b4-edca41d6eaa4"
                aria-hidden="true"
                style={{ paintOrder: "stroke" }}>
                <title id="label-d474a837-08b5-403f-86b4-edca41d6eaa4">
                  Icon
                </title>
                <path
                  d="M27,24.559972 L5,24.559972 L16,7 L27,24.559972 Z"
                  style={{ fill: "inherit" }}></path>
              </svg>
            </div>
          </div>
          <div className="text-input-box">
            {/* <input type="text" placeholder="Add answer 1" onChange={handleChange} name="red" wrap="hard"/> */}
            {/* <textarea placeholder="Add answer 1" onChange={handleChange} name="red" wrap="soft"></textarea> */}
            <textarea
              onChange={handleChange}
              maxLength={MAX_LENGTH}
              placeholder="Add answer 1"
              value={answerValue.red.value}
              data-name="red"></textarea>
            <span className="charsLeft">{remainingChars.red}</span>
          </div>
          <div className="radio-btn">
            <div
              className="check-box-outer"
              onClick={toogleCheckBox}
              data-name="red">
              <div
                className={
                  answerValue.red.correctAnswer === true
                    ? "check-box-inner check-box-checked"
                    : "check-box-inner"
                }
                style={{ pointerEvents: "none" }}></div>
            </div>
          </div>
        </div>
        <div
          className={
            answerValue.blue.value !== "" ? "answer-btn blue" : "answer-btn"
          }
          id="blue">
          <div className="shape-container">
            <div className="shape">
              <svg
                viewBox="0 0 32 32"
                focusable="false"
                stroke="rgba(0, 0, 0, 0.15)"
                strokeWidth="1.3px"
                aria-labelledby="label-018bf67d-b00c-47c2-8159-6b46483804c9"
                aria-hidden="true"
                style={{ paintOrder: "stroke" }}>
                <title id="label-018bf67d-b00c-47c2-8159-6b46483804c9">
                  Icon
                </title>
                <path
                  d="M4,16.0038341 L16,4 L28,16.0007668 L16,28 L4,16.0038341 Z"
                  style={{ fill: "inherit" }}></path>
              </svg>
            </div>
          </div>
          <div className="text-input-box">
            <textarea
             onChange={handleChange}
             maxLength={MAX_LENGTH}
             value={answerValue.blue.value}
              placeholder="Add answer 2"
              data-name="blue">{answerValue.blue.value}</textarea>
            <span className="charsLeft">{remainingChars.blue}</span>
          </div>
          <div className="radio-btn">
            <div
              className="check-box-outer"
              onClick={toogleCheckBox}
              data-name="blue">
              <div
                className={
                  answerValue.blue.correctAnswer === true
                    ? "check-box-inner check-box-checked"
                    : "check-box-inner"
                }
                style={{ pointerEvents: "none" }}></div>
            </div>
          </div>
        </div>
        <div
          className={
            answerValue.yellow.value !== "" ? "answer-btn yellow" : "answer-btn"
          }
          id="yellow">
          <div className="shape-container">
            <div className="shape">
              <svg
                viewBox="0 0 32 32"
                focusable="false"
                stroke="rgba(0, 0, 0, 0.15)"
                strokeWidth="1.3px"
                aria-labelledby="label-1cf46c31-a985-4259-8ad8-26d00084488d"
                aria-hidden="true"
                className="sc-jSUZER eTaWgc"
                style={{ paintOrder: "stroke" }}>
                <title id="label-1cf46c31-a985-4259-8ad8-26d00084488d">
                  Icon
                </title>
                <path
                  d="M16,27 C9.92486775,27 5,22.0751322 5,16 C5,9.92486775 9.92486775,5 16,5 C22.0751322,5 27,9.92486775 27,16 C27,22.0751322 22.0751322,27 16,27 Z"
                  style={{ fill: "inherit" }}></path>
              </svg>
            </div>
          </div>
          <div className="text-input-box">
            <textarea
             onChange={handleChange}
             maxLength={MAX_LENGTH}
             value={answerValue.yellow.value}
              placeholder="Add answer 3 (optional)"
              data-name="yellow">{answerValue.yellow.value}</textarea>
            <span className="charsLeft">{remainingChars.yellow}</span>
          </div>
          <div className="radio-btn">
            <div
              className="check-box-outer"
              onClick={toogleCheckBox}
              data-name="yellow">
              <div
                className={
                  answerValue.yellow.correctAnswer === true
                    ? "check-box-inner check-box-checked"
                    : "check-box-inner"
                }
                style={{ pointerEvents: "none" }}></div>
            </div>
          </div>
        </div>
        <div
          className={
            answerValue.green.value !== "" ? "answer-btn green" : "answer-btn"
          }
          id="green">
          <div className="shape-container">
            <div className="shape">
              <svg
                viewBox="0 0 32 32"
                focusable="false"
                stroke="rgba(0, 0, 0, 0.15)"
                strokeWidth="1.3px"
                aria-labelledby="label-a6d02916-779d-452e-a114-b16c53b15b44"
                aria-hidden="true"
                className="sc-jSUZER eTaWgc"
                style={{ paintOrder: "stroke" }}>
                <title id="label-a6d02916-779d-452e-a114-b16c53b15b44">
                  Icon
                </title>
                <path
                  d="M7,7 L25,7 L25,25 L7,25 L7,7 Z"
                  style={{ fill: "inherit" }}></path>
              </svg>
            </div>
          </div>
          <div className="text-input-box">
            <textarea
              onChange={handleChange}
              maxLength={MAX_LENGTH}
              value={answerValue.green.value}
              placeholder="Add answer 4 (optional)"
              data-name="green">{answerValue.green.value}</textarea>
            <span className="charsLeft">{remainingChars.green}</span>
          </div>
          <div className="radio-btn">
            <div
              className="check-box-outer"
              onClick={toogleCheckBox}
              data-name="green">
              <div
                className={
                  answerValue.green.correctAnswer === true
                    ? "check-box-inner check-box-checked"
                    : "check-box-inner"
                }
                style={{ pointerEvents: "none" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateQuestion;
