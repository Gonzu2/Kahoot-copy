import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../componnents/NavbarCreate";
import { useState } from "react";
import "../style/createQuiz.css";
function CreateQuiz() {
  const [answerValue, setAnswerValue] = useState({
    red: "",
    blue: "",
    green: "",
    yellow: ""
  });
  
  const handleChange = (e) => {
    console.log(answerValue)
    const { name, value } = e.target;
    setAnswerValue(prevState => ({
      ...prevState,
      [name]: value
    }));
    console.log(answerValue)
  };

  return (
    <div id="create-main">
      <Navbar />
      <div className="create-main-container">
        <div className="question-tab-main"></div>
        <div className="middle-main">
          <div className="question-title">
            <input type="text" placeholder="Start typing your question"/>
          </div>
          <div className="media-input-container">
            <div className="media-input">
              <div className="logo">

              </div>
              <span>Find and insert media</span>
              <div className="plus">+</div>
            </div>

          </div>
          <div className="answer-btns-container">
              <div className={answerValue.red !== "" ? "answer-btn red" : "answer-btn" } id="red">
                <div className="shape-container">
                  <div className="shape">
                  <svg viewBox="0 0 32 32" focusable="false" stroke="rgba(0, 0, 0, 0.15)" strokeWidth="1.3px" aria-labelledby="label-d474a837-08b5-403f-86b4-edca41d6eaa4" aria-hidden="true" style={{paintOrder: "stroke"}}>
                    <title id="label-d474a837-08b5-403f-86b4-edca41d6eaa4">Icon</title>
                     <path d="M27,24.559972 L5,24.559972 L16,7 L27,24.559972 Z" style={{fill: "inherit",}}>
                    </path>
                  </svg>
                  </div>
                </div>
                <div className="text-input-box">
                  <input type="text" placeholder="Add answer 1" onChange={handleChange} name="red" />
                </div>
                <div className="radio-btn">
                  <input type="checkbox"/>
                </div>
              </div>
              <div className={answerValue.blue !== "" ? "answer-btn blue" : "answer-btn" } id="blue">
              <div className="shape-container">
                  <div className="shape">
                  <svg viewBox="0 0 32 32" focusable="false" stroke="rgba(0, 0, 0, 0.15)" strokeWidth="1.3px" aria-labelledby="label-018bf67d-b00c-47c2-8159-6b46483804c9" aria-hidden="true" style={{paintOrder: "stroke"}}>
                    <title id="label-018bf67d-b00c-47c2-8159-6b46483804c9">Icon</title>
                       <path d="M4,16.0038341 L16,4 L28,16.0007668 L16,28 L4,16.0038341 Z" style={{fill: "inherit",}}>
                     </path>
                    </svg>
                  </div>
                </div>
                <div className="text-input-box">
                  <input type="text" placeholder="Add answer 2" onChange={handleChange} name="blue" />
                </div>
                <div className="radio-btn">
                  <input type="checkbox"/>
                </div>
              </div>
              <div className={answerValue.yellow !== "" ? "answer-btn yellow" : "answer-btn" } id="yellow">
              <div className="shape-container">
                  <div className="shape">
                  <svg viewBox="0 0 32 32" focusable="false" stroke="rgba(0, 0, 0, 0.15)" stroke-width="1.3px" aria-labelledby="label-1cf46c31-a985-4259-8ad8-26d00084488d" aria-hidden="true" class="sc-jSUZER eTaWgc" style={{paintOrder: "stroke"}}>
                        <title id="label-1cf46c31-a985-4259-8ad8-26d00084488d">Icon</title><path d="M16,27 C9.92486775,27 5,22.0751322 5,16 C5,9.92486775 9.92486775,5 16,5 C22.0751322,5 27,9.92486775 27,16 C27,22.0751322 22.0751322,27 16,27 Z" style={{fill: "inherit",}}>
                          </path>
                      </svg>
                  </div>
                </div>
                <div className="text-input-box">
                  <input type="text" placeholder="Add answer 3 (optional)"onChange={handleChange} name="yellow" />
                </div>
                <div className="radio-btn">
                  <input type="checkbox"/>
                </div>
              </div>
              <div className={answerValue.green !== "" ? "answer-btn green" : "answer-btn" } id="green">
              <div className="shape-container">
                  <div className="shape">
                  <svg viewBox="0 0 32 32" focusable="false" stroke="rgba(0, 0, 0, 0.15)" stroke-width="1.3px" aria-labelledby="label-a6d02916-779d-452e-a114-b16c53b15b44" aria-hidden="true" class="sc-jSUZER eTaWgc" style={{paintOrder: "stroke"}}>
                    <title id="label-a6d02916-779d-452e-a114-b16c53b15b44">Icon</title>
                    <path d="M7,7 L25,7 L25,25 L7,25 L7,7 Z" style={{fill: "inherit",}}>
                      </path></svg>
                  </div>
                </div>
                <div className="text-input-box">
                  <input type="text" placeholder="Add answer 4 (optional)"onChange={handleChange} name="green" />
                </div>
                <div className="radio-btn">
                  <input type="checkbox"/>
                </div>
              </div>
            </div>
        </div>
        <div className="quiz-options-main"></div>
      </div>
    </div>
  );
}

export default CreateQuiz;
