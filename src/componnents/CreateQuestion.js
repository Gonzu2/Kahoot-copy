import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import "../style/createQuestion.css";
function CreateQuestion({ onAnswerChange }) {
  const [title, setTitle] = useState("")
  const [answerValue, setAnswerValue] = useState({
    red: {
      value: "",
      correctAnswer: false,
    },
    blue: {
      value: "",
      correctAnswer: false,
    },
    green: {
      value: "",
      correctAnswer: false,
    },
    yellow: {
      value: "",
      correctAnswer: false,
    },
  });
  useEffect( () => {
    onAnswerChange(title, answerValue)
  },[title,answerValue]) 
  // saveAnswers(title, answerValue)
  const MAX_LENGTH = 100;
  const MAX_TITLE = 70;
  const remainingChars = {
    red: MAX_LENGTH - answerValue.red.value.length,
    yellow: MAX_LENGTH - answerValue.yellow.value.length,
    green: MAX_LENGTH - answerValue.green.value.length,
    blue: MAX_LENGTH - answerValue.blue.value.length,
  };

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

  const handleKeyDown = (e) => {
    const name = e.target.getAttribute("data-name");
    if (
      answerValue[name].value.length >= MAX_LENGTH &&
      e.key !== "Backspace" &&
      !(e.ctrlKey && ["c", "v", "x", "a"].includes(e.key))
    ) {
      e.preventDefault();
    }
  };

  const handleChange = (e) => {
    const name = e.target.getAttribute("data-name");
    let value = e.target.textContent.trim();

    if (value.length >= MAX_LENGTH) {
      e.preventDefault();
      value = value.substring(0, MAX_LENGTH);
      e.target.textContent = value;
    }

    setAnswerValue((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value: value,
      },
    }));
  
  };

  const handlePaste = (e) => {
    const name = e.target.getAttribute("data-name");
    const clipboardText = e.clipboardData.getData("text");
    const currentValue = e.target.textContent;
    const availableSpace = MAX_LENGTH - currentValue.length;

    if (clipboardText.length > availableSpace) {
      e.preventDefault();
      const clippedText = clipboardText.substring(0, availableSpace);
      document.execCommand("insertText", false, clippedText);
    }

    setAnswerValue((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value: e.target.textContent,
      },
    }));
  
  };

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="middle-main">
      <div className="question-title">
        <input
          type="text"
          placeholder="Start typing your question"
          maxLength={MAX_TITLE}
          onChange={updateTitle}
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
            <span
              data-text="true"
              contenteditable="true"
              onPaste={handlePaste}
              onInput={handleChange}
              onKeyDown={handleKeyDown}
              data-placeholder="Add answer 1"
              data-name="red"></span>
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
            <span
              data-text="true"
              contenteditable="true"
              onPaste={handlePaste}
              onInput={handleChange}
              onKeyDown={handleKeyDown}
              data-placeholder="Add answer 2"
              data-name="blue"></span>
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
                class="sc-jSUZER eTaWgc"
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
            <span
              data-text="true"
              contenteditable="true"
              onPaste={handlePaste}
              onInput={handleChange}
              onKeyDown={handleKeyDown}
              data-placeholder="Add answer 3 (optional)"
              data-name="yellow"></span>
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
                stroke-width="1.3px"
                aria-labelledby="label-a6d02916-779d-452e-a114-b16c53b15b44"
                aria-hidden="true"
                class="sc-jSUZER eTaWgc"
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
            <span
              data-text="true"
              contenteditable="true"
              onPaste={handlePaste}
              onInput={handleChange}
              onKeyDown={handleKeyDown}
              data-placeholder="Add answer 4 (optional)"
              data-name="green"></span>
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
