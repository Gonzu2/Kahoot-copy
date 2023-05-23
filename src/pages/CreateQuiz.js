import React, { useState, useEffect, interval } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../componnents/NavbarCreate";
import Question from "../componnents/CreateQuestion.js";
import { useSelector, useDispatch } from "react-redux";
import { reset, createQuiz } from "../features/quiz/quizSlice";
import QuestionCard from "../componnents/QuestionCard";
import Spinner from "../componnents/Spinner";
import "../style/createQuiz.css"
function CreateQuiz({ quizes }) {
  const [questionsData, setQuestionsData] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  var questionData
  var currentQuestion
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isError, isSuccsess, message } = useSelector(
    (state) => state.auth
  );
  const [IDquiz, setIDQuiz]= useState();
  const { id } = useParams();
  const { isLoading } = useSelector((state) => state.quiz)
  var newQuiz = {
    title: "placeholder Title",
    questions: questionsData.map((question) => ({
      name: question.name,
      options: [
        {
          text: question.options[0].text,
          isCorrect: question.options[0].isCorrect,
        },
        {
          text: question.options[1].text,
          isCorrect: question.options[1].isCorrect,
        },
        {
          text: question.options[2].text,
          isCorrect: question.options[2].isCorrect,
        },
        {
          text: question.options[3].text,
          isCorrect: question.options[3].isCorrect,
        },
      ],
    })),
  };
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    if (isError) {
      console.log("error: ",isError + ": " + message);
    }

  }, [user, isError, message]);


  useEffect(() => {
    if (quizes) {
      setIDQuiz(quizes.find((quiz) => quiz._id.toString() === id))
    }


    if (IDquiz) {
      setQuestionsData(IDquiz.questions);
    }

    if (questionsData !== "undefined" && questionsData !== undefined && questionData) {
      console.log(questionData);
      currentQuestion = questionsData[questionIndex];
      questionData = {
      name: currentQuestion.name,
      red: currentQuestion.options[0],
      blue: currentQuestion.options[1],
      green: currentQuestion.options[2],
      yellow: currentQuestion.options[3],
      id: questionIndex
    };
    }
  }, [quizes, IDquiz, questionsData]);

  useEffect(() => {
    newQuiz = {
      title: "placeholder Title",
      questions: questionsData.map((question) => ({
        name: question.name,
        options: [
          {
            text: question.options[0].text,
            isCorrect: question.options[0].isCorrect,
          },
          {
            text: question.options[1].text,
            isCorrect: question.options[1].isCorrect,
          },
          {
            text: question.options[2].text,
            isCorrect: question.options[2].isCorrect,
          },
          {
            text: question.options[3].text,
            isCorrect: question.options[3].isCorrect,
          },
        ],
      })),
    };
  }, []);
  if (isLoading || !quizes) {
    return <Spinner/>;
  }
  
  if (!IDquiz) {
    return <div>Quizes not found</div>;
  }

  const handleQuestionsDataChange = (updatedQuestionData) => {
    // setQuestionData((prevQuestionData) => {
    //   const questionIndex = prevQuestionData.findIndex(
    //     (question) => question.id === updatedQuestionData.id
    //   );

    //   if (questionIndex !== -1) {
    //     const updatedData = [...prevQuestionData];
    //     updatedData[questionIndex] = updatedQuestionData;
    //     return updatedData;
    //   } else {
    //     return [...prevQuestionData, updatedQuestionData];
    //   }
    // });
  }

  const handleOnSave = () => {
    const isValid = questionsData.every((quiz) => {
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
      console.log(newQuiz);
      dispatch(
        createQuiz({
          token: user.token,
          quiz: newQuiz,
        })
      );
    } else {
      console.log("Some elements in questionsData do not meet the conditions.");
    }
  };

  const handleChangeQuestions = (e) => {
    e.preventDefault();
    const index = e.target.getAttribute("data-key")
    setQuestionIndex(index)
  }
    // interval = setInterval(() => {
    //   console.log("auto save 20sec ", newQuiz);
    //   dispatch(
    //     createQuiz({
    //       token: user.token,
    //       quiz: newQuiz,
    //     })
    //   );
    // }, 20000); // 20 seconds
  return (
    <div id="create-main">
      <Navbar onSave={handleOnSave} />
      <div className="create-main-container">
        {questionData ? <Question className="middle-main" onAnswerChange={handleQuestionsDataChange} questionData={questionData} id={34} /> : <>no data</>}
        
        <div className="question-tab-main">
          {IDquiz &&
            IDquiz.questions.map((q, index) => {
              let cardInfo = {
                title: q.name,
                id: IDquiz._id,
                index: index,
              };
              return <QuestionCard questionCardInfo={cardInfo} key={index} changeQuestion={handleChangeQuestions} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default CreateQuiz;
