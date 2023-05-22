import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../componnents/NavbarCreate";
import { useState, useEffect } from "react";
import "../style/createQuiz.css";
import Question from "../componnents/CreateQuestion.js";
import { isFulfilled } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { reset, createQuiz } from "../features/quiz/quizSlice";
import { useParams } from "react-router-dom";
import QuestionCard from "../componnents/QuestionCard";
function CreateQuiz({quizes}) {
  const [questionsData, setQuestionsData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isError, isSuccsess, message } = useSelector(
    (state) => state.auth
  );
  const { id } = useParams();
  const { isLoading } = useSelector((state) => state.quiz);


  var newQuzi = {
    title: "placeholder Title",
    questions: questionsData.map((question) => ({
      name: question.name,
      options: [
        {
          isCorrect: question.answerValue.red.isCorrect,
        },
        {
          text: question.answerValue.blue.value,
          isCorrect: question.answerValue.blue.isCorrect,
        },
        {
          text: question.answerValue.green.value,
          isCorrect: question.answerValue.green.isCorrect,
        },
        {
          text: question.answerValue.yellow.value,
          isCorrect: question.answerValue.yellow.isCorrect,
        },
      ],
    })),
    plays: 0,
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    console.log(isError + ": " + message);
  }, [user, isError, message]);

  useEffect(() => {
    newQuzi = {
      title: "placeholder Title",
      questions: questionsData.map((question) => ({
        name: question.name,
        options: [
          {
            text: question.answerValue.red.value,
            isCorrect: question.answerValue.red.isCorrect,
          },
          {
            text: question.answerValue.blue.value,
            isCorrect: question.answerValue.blue.isCorrect,
          },
          {
            text: question.answerValue.green.value,
            isCorrect: question.answerValue.green.isCorrect,
          },
          {
            text: question.answerValue.yellow.value,
            isCorrect: question.answerValue.yellow.isCorrect,
          },
        ],
      })),
    };
  }, []);

  const handleQuestionsDataChange = (updatedQuestionsData) => {
    setQuestionsData((prevQuestionsData) => {
      const questionIndex = prevQuestionsData.findIndex(
        (question) => question.id === updatedQuestionsData.id
      );

      if (questionIndex !== -1) {
        const updatedData = [...prevQuestionsData];
        updatedData[questionIndex] = updatedQuestionsData;
        return updatedData;
      } else {
        return [...prevQuestionsData, updatedQuestionsData];
      }
    });
  };

  const handleOnSave = () => {
    const isValid = questionsData.every((quiz) => {
      if (
        quiz.title === "" ||
        quiz.answerValue.red.value === "" ||
        quiz.answerValue.blue.value === "" ||
        quiz.answerValue === null
      ) {
        console.log(
          "Please fill in the title and answers (at least 2 minimum)."
        );
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
      console.log(newQuzi)
      dispatch(
        createQuiz({
          token: user.token,
          quiz: newQuzi,
        })
      );
    } else {
      console.log("Some elements in questionsData do not meet the conditions.");
    }
  };
  if (isLoading || !quizes) {
    return <div>Loading quizzes...</div>
  }
  const IDquiz = quizes.find((quiz) => quiz._id.toString() === id)

  return (
    <div id="create-main">
      <Navbar onSave={handleOnSave} />
      <div className="create-main-container">
        <Question
          className="middle-main"
          onAnswerChange={handleQuestionsDataChange}
          id={0}
        />
        <div className="question-tab-main">
          {IDquiz.questions.map( (q,index) => {
            let cardInfo = {
              title: q.name,
              id: IDquiz._id,
              index: index
            };
            <QuestionCard questionCardInfo={cardInfo}/>
          })
          }

          </div>
          <div className="question-card">
            <h1 className="question-card-name">Name - kahoot name</h1>
            <h1 className="question-card-id">ID - kahoot id</h1>
            <h1 className="question-card-delete">Delete</h1>
            <div className="question-card-number">2</div>
          </div>
          <div className="question-card">
            <h1 className="question-card-name">Name - kahoot name</h1>
            <h1 className="question-card-id">ID - kahoot id</h1>
            <h1 className="question-card-delete">Delete</h1>
            <div className="question-card-number">1</div>
          </div>
          <div className="question-card">
            <h1 className="question-card-name">Name - kahoot name</h1>
            <h1 className="question-card-id">ID - kahoot id</h1>
            <h1 className="question-card-delete">Delete</h1>
            <div className="question-card-number">1</div>
          </div>
          <div className="question-card">
            <h1 className="question-card-name">Name - kahoot name</h1>
            <h1 className="question-card-id">ID - kahoot id</h1>
            <h1 className="question-card-delete">Delete</h1>
            <div className="question-card-number">1</div>
          </div>
          <div className="question-card">
            <h1 className="question-card-name">Name - kahoot name</h1>
            <h1 className="question-card-id">ID - kahoot id</h1>
            <h1 className="question-card-delete">Delete</h1>
            <div className="question-card-number">1</div>
          </div>
          <div className="question-card">
            <h1 className="question-card-name">Name - kahoot name</h1>
            <h1 className="question-card-id">ID - kahoot id</h1>
            <h1 className="question-card-delete">Delete</h1>
            <div className="question-card-number">1</div>
          </div>
          <div className="question-card">
            <h1 className="question-card-name">Name - kahoot name</h1>
            <h1 className="question-card-id">ID - kahoot id</h1>
            <h1 className="question-card-delete">Delete</h1>
            <div className="question-card-number">1</div>
          </div>
          <div className="question-card">
            <h1 className="question-card-name">Name - kahoot name</h1>
            <h1 className="question-card-id">ID - kahoot id</h1>
            <h1 className="question-card-delete">Delete</h1>
            <div className="question-card-number">1</div>
          </div>
          <div className="question-card">
            <h1 className="question-card-name">Name - kahoot name</h1>
            <h1 className="question-card-id">ID - kahoot id</h1>
            <h1 className="question-card-delete">Delete</h1>
            <div className="question-card-number">1</div>
          </div>
          <div className="question-card">
            <h1 className="question-card-name">Name - kahoot name</h1>
            <h1 className="question-card-id">ID - kahoot id</h1>
            <h1 className="question-card-delete">Delete</h1>
            <div className="question-card-number">1</div>
          </div>
          <div className="question-card">
            <h1 className="question-card-name">Name - kahoot name</h1>
            <h1 className="question-card-id">ID - kahoot id</h1>
            <h1 className="question-card-delete">Delete</h1>
            <div className="question-card-number">1</div>
          </div>
          <div className="question-card">
            <h1 className="question-card-name">Name - kahoot name</h1>
            <h1 className="question-card-id">ID - kahoot id</h1>
            <h1 className="question-card-delete">Delete</h1>
            <div className="question-card-number">1</div>
          </div>
          <div className="question-card">
            <h1 className="question-card-name">Name - kahoot name</h1>
            <h1 className="question-card-id">ID - kahoot id</h1>
            <h1 className="question-card-delete">Delete</h1>
            <div className="question-card-number">1</div>
          </div>
          <div className="question-card">
            <h1 className="question-card-name">Name - kahoot name</h1>
            <h1 className="question-card-id">ID - kahoot id</h1>
            <h1 className="question-card-delete">Delete</h1>
            <div className="question-card-number">1</div>
          </div>
          <div className="question-card">
            <h1 className="question-card-name">Name - kahoot name</h1>
            <h1 className="question-card-id">ID - kahoot id</h1>
            <h1 className="question-card-delete">Delete</h1>
            <div className="question-card-number">1</div>
          </div>
          <div className="question-card">
            <h1 className="question-card-name">Name - kahoot name</h1>
            <h1 className="question-card-id">ID - kahoot id</h1>
            <h1 className="question-card-delete">Delete</h1>
            <div className="question-card-number">1</div>
          </div>
          <div className="question-card">
            <h1 className="question-card-name">Name - kahoot name</h1>
            <h1 className="question-card-id">ID - kahoot id</h1>
            <h1 className="question-card-delete">Delete</h1>
            <div className="question-card-number">1</div>
          </div>
          <div className="question-card">
            <h1 className="question-card-name">Name - kahoot name</h1>
            <h1 className="question-card-id">ID - kahoot id</h1>
            <h1 className="question-card-delete">Delete</h1>
            <div className="question-card-number">1</div>
          </div>
          <div className="question-card">
            <h1 className="question-card-name">Name - kahoot name</h1>
            <h1 className="question-card-id">ID - kahoot id</h1>
            <h1 className="question-card-delete">Delete</h1>
            <div className="question-card-number">1</div>
          </div>
          <div className="question-card">
            <h1 className="question-card-name">Name - kahoot name</h1>
            <h1 className="question-card-id">ID - kahoot id</h1>
            <h1 className="question-card-delete">Delete</h1>
            <div className="question-card-number">1</div>
          </div>
          <div className="question-card">
            <h1 className="question-card-name">Name - kahoot name</h1>
            <h1 className="question-card-id">ID - kahoot id</h1>
            <h1 className="question-card-delete">Delete</h1>
            <div className="question-card-number">1</div>
          </div>
          <div className="question-card">
            <h1 className="question-card-name">Name - kahoot name</h1>
            <h1 className="question-card-id">ID - kahoot id</h1>
            <h1 className="question-card-delete">Delete</h1>
            <div className="question-card-number">1</div>
          </div>
          <div className="question-card">
            <h1 className="question-card-name">Name - kahoot name</h1>
            <h1 className="question-card-id">ID - kahoot id</h1>
            <h1 className="question-card-delete">Delete</h1>
            <div className="question-card-number">1</div>
          </div>
          <div className="question-card">
            <h1 className="question-card-name">Name - kahoot name</h1>
            <h1 className="question-card-id">ID - kahoot id</h1>
            <h1 className="question-card-delete">Delete</h1>
            <div className="question-card-number">1</div>
          </div>
          <div className="question-card">
            <h1 className="question-card-name">Name - kahoot name</h1>
            <h1 className="question-card-id">ID - kahoot id</h1>
            <h1 className="question-card-delete">Delete</h1>
            <div className="question-card-number">1</div>
          </div>
          <div className="question-card">
            <h1 className="question-card-name">Name - kahoot name</h1>
            <h1 className="question-card-id">ID - kahoot id</h1>
            <h1 className="question-card-delete">Delete</h1>
            <div className="question-card-number">1</div>
          </div>
        </div>
      </div>
  );
}

export default CreateQuiz;
