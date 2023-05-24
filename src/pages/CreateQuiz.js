import React, { useState, useEffect, interval } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../componnents/NavbarCreate";
import Question from "../componnents/CreateQuestion.js";
import { useSelector, useDispatch } from "react-redux";
import { reset, updateQuiz } from "../features/quiz/quizSlice";
import QuestionCard from "../componnents/QuestionCard";
import Spinner from "../componnents/Spinner";
import "../style/createQuiz.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function CreateQuiz({ quizes }) {
  const { id } = useParams();
  var newQuiz;
  const [questionsData, setQuestionsData] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionData, setQuestionData] = useState();
  const [IDquiz, setIDQuiz] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isError, isSuccsess, message } = useSelector(
    (state) => state.auth
  );
  const { isLoading } = useSelector((state) => state.quiz);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    if (isError) {
      console.log("error: ", isError + ": " + message);
    }
  }, [user, isError, message]);

  useEffect(() => {
    if (quizes) {
      setIDQuiz(quizes.find((quiz) => quiz._id.toString() === id));
    }

    if (IDquiz) {
      setQuestionsData(IDquiz.questions);
    }

    if (!IDquiz) {
      navigate(`/create/${id}`);
    }
  }, [quizes, IDquiz]);

  useEffect(() => {
    if (questionsData && questionsData.length > 0) {
      // console.log(questionsData)
      var currentQuestion = questionsData[questionIndex];
      let questionDataTemp = {
        name: currentQuestion.name,
        red: currentQuestion.options[0],
        blue: currentQuestion.options[1],
        green: currentQuestion.options[2],
        yellow: currentQuestion.options[3],
        id: questionIndex,
      };
      setQuestionData(questionDataTemp);
    }
  }, [questionsData, questionIndex]);

  const makeNewQuiz = () => {
    newQuiz = {
      title: "placeholder Title enter you tititle",
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
  };

  // useEffect(() => {
  //   console.log("starting auto save...");
  //   interval = setInterval(() => {
  //     console.log("time for save ", questionsData);
  //     if(questionsData && questionsData.length > 0) {
  //       makeNewQuiz()
  //       console.log("auto save 20sec ", newQuiz);
  //       dispatch(
  //         updateQuiz({
  //           token: user.token,
  //           quiz: newQuiz,
  //           id: id
  //         })
  //       );
  //     }
  //   }, 20000); // 20 seconds
  // }, []);
  useEffect(() => {
    let timeoutId = null;
    const autosave = () => {
      if (questionsData && questionsData.length > 0) {
        makeNewQuiz();
        dispatch(
          updateQuiz({
            token: user.token,
            quiz: newQuiz,
            id: id,
          })
        );
      }
    };

    const handleDataChange = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(autosave, 5000); // 2 seconds
    };

    handleDataChange(); // Trigger initial autosave

    return () => {
      clearTimeout(timeoutId);
    };
  }, [questionsData]);
  if (!quizes) {
    return <Spinner />;
  }

  if (!IDquiz) {
    return <div>Quizes not found</div>;
  }

  const handleQuestionsDataChange = (updatedQuestionData) => {
    if (questionsData && questionsData.length > 0) {
      setQuestionsData((prevQuestionsData) => {
        const updatedData = [...prevQuestionsData];
        updatedData[questionIndex] = updatedQuestionData;
        return updatedData;
      });
    }
  };

  const handleOnSave = () => {
    const isValid = questionsData.every((quiz) => {
      if (
        quiz.name === "" ||
        quiz.options[0].text === "" ||
        quiz.options[1].text === "" ||
        quiz.options === null
      ) {
        console.log(
          "Please fill in the title and answers (at least 2 minimum)."
        );
        return false;
      }
      if (
        quiz.options[0].isCorrect !== false ||
        quiz.options[1].isCorrect !== false ||
        quiz.options[2].isCorrect !== false ||
        quiz.options[3].isCorrect !== false
      ) {
        return true;
      } else {
        alert("Please choose at least one correct answer.");
        return false;
      }
    });

    if (isValid) {
      makeNewQuiz();
      dispatch(
        updateQuiz({
          token: user.token,
          quiz: newQuiz,
          id: id,
        })
      );
      navigate("/home");
    } else {
      alert("Some elements in questionsData do not meet the conditions.");
    }
  };

  const handleChangeQuestions = (e) => {
    e.preventDefault();
    const index = e.target.getAttribute("data-key");
    setQuestionIndex(index);
  };
  return (
    <div id="create-main">
      <Navbar onSave={handleOnSave} />
      <div className="create-main-container">
        {questionData && questionData !== undefined ? (
          <Question
            className="middle-main"
            onAnswerChange={handleQuestionsDataChange}
            questionData={questionData}
            id={34}
          />
        ) : (
          <>no data</>
        )}

        <div className="question-tab-main">
          <div className="questions">
            {IDquiz &&
              questionsData &&
              questionsData.length > 0 &&
              questionsData.map((q, index) => {
                let cardInfo = {
                  title: q.name,
                  index: index,
                };
                return (
                  <QuestionCard
                    questionCardInfo={cardInfo}
                    key={index}
                    changeQuestion={handleChangeQuestions}
                  />
                );
              })}
          </div>
          <div className="create-new-question-container">
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateQuiz;
