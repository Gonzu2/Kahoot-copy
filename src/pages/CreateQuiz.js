import React, { useState, useEffect, useRef, interval } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../componnents/NavbarCreate";
import Question from "../componnents/CreateQuestion.js";
import { useSelector, useDispatch } from "react-redux";
import { reset, updateQuiz } from "../features/quiz/quizSlice";
import QuestionCard from "../componnents/QuestionCard.js";
import Spinner from "../componnents/Spinner";
import "../style/createQuiz.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faXmark,
  faFloppyDisk,
} from "@fortawesome/free-solid-svg-icons";
const Swal = require("sweetalert2");
function CreateQuiz({ quizes }) {
  const { id } = useParams();
  var newQuiz;
  const [settingsOffcanvas, setSettingsOffcanvas] = useState(false);
  const [questionsData, setQuestionsData] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionData, setQuestionData] = useState();
  const [quizTitle, setQuizTitle] = useState();
  const [quizDescrition, setQuizDescrition] = useState();
  const [IDquiz, setIDQuiz] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  var firstReload = false;
  const { user, isError, isSuccsess, message } = useSelector(
    (state) => state.auth
  );
  const { isLoading } = useSelector((state) => state.quiz);

  let menuRef = useRef(null);

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
      setQuizTitle(IDquiz.title);
    }

    if (!IDquiz) {
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
      title: quizTitle,
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
      isValid: checkValid,
    };
  };

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
      timeoutId = setTimeout(autosave, 5000); // 5 seconds
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

  const trowError = (err) => {
    Swal.fire({
      title: "Error!",
      text: err,
      icon: "error",
      confirmButtonText: "Ok",
    });
  };

  const confirmDelete = (cardIndex) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedQuestionsData = questionsData.filter(
          (_, index) => index !== cardIndex
        );
        setQuestionsData(updatedQuestionsData);
        Swal.fire("Deleted!", "Your qestion has been deleted.", "success");
      }
    });
  };

  const handleQuestionsDataChange = (updatedQuestionData) => {
    if (questionsData && questionsData.length > 0) {
      setQuestionsData((prevQuestionsData) => {
        const updatedData = [...prevQuestionsData];
        updatedData[questionIndex] = updatedQuestionData;
        return updatedData;
      });
    }
  };

  const checkValid = questionsData.every((quiz) => {
    if (quizTitle === "") {
      return false;
    }
    if (
      quiz.name === "" ||
      quiz.options[0].text === "" ||
      quiz.options[1].text === "" ||
      quiz.options === null
    ) {
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
      return false;
    }
  });

  const handleOnSave = () => {
    if (checkValid) {
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
      trowError("Something quiz fields are invalid.");
    }
  };

  const handleDelete = (cardIndex) => {
    let qIndex = parseInt(questionIndex, 10);
    if (cardIndex === qIndex) {
      if (questionsData.length <= 1) {
        trowError("Can delete last question");
        return;
      }
      if (qIndex === questionsData.length - 1) {
        setQuestionIndex((prev) => prev - 1);
      }
      if (qIndex !== questionsData.length - 1) {
        setQuestionIndex((prev) => parseInt(prev, 10) + 1);
      }
    }

    confirmDelete(cardIndex);
  };

  const handleOnExit = () => {
    if (checkValid) {
      navigate("/home");
    } else {
      Swal.fire({
        icon: "warning",
        title: "Wait a second!",
        text: "Some quiz fields are invalid.",
        footer: `<a href="#">Click here to continue anyway<a/>`,
        didOpen: () => {
          const footerElement = Swal.getFooter();
          footerElement.addEventListener("click", handleFooterClick);
        },
        willClose: () => {
          const footerElement = Swal.getFooter();
          footerElement.removeEventListener("click", handleFooterClick);
        },
      });

      return () => {
        const footerElement = Swal.getFooter();
        footerElement.removeEventListener("click", handleFooterClick);
      };
    }
  };

  const handleFooterClick = () => {
    navigate("/home");
    Swal.close();
  };

  const handleChangeQuestions = (e) => {
    e.preventDefault();
    const index = e.target.getAttribute("data-key");
    setQuestionIndex(index);
  };

  function toggleSettings() {
    const main = document.getElementById("create-main");
    if (settingsOffcanvas) {
      main.style.overflowY = "scroll";
      setSettingsOffcanvas(false);
    } else {
      main.style.overflowY = "hidden";
      setSettingsOffcanvas(true);
    }
  }

  function handleOffscreenClick() {
    if (menuRef.current.classList.contains("settings-offcanvas")) {
      toggleSettings();
    }
  }

  const createNewQuestion = (e) => {
    e.preventDefault();
    const newQuestion = {
      name: "",
      options: [
        {
          text: "",
          isCorrect: false,
        },
        {
          text: "",
          isCorrect: false,
        },
        {
          text: "",
          isCorrect: false,
        },
        {
          text: "",
          isCorrect: false,
        },
      ],
    };

    setQuestionsData((prevQuestionsData) => [
      ...prevQuestionsData,
      newQuestion,
    ]);
  };

  const halndleChangeTitle = (e) => {
    e.target.maxLength = 100;
    setQuizTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    e.target.maxLength = 300;
    setQuizDescrition(e.target.value);
  };

  function alertSave() {
    Swal.fire({
      icon: "success",
      title: "Successfully saved",
    });
  }

  return (
    <div id="create-main">
      <Navbar
        onSave={handleOnSave}
        onExit={handleOnExit}
        toggleSettings={toggleSettings}
      />
      {settingsOffcanvas && (
        <>
          <div
            className="settings-offcanvas"
            ref={menuRef}
            onClick={handleOffscreenClick}></div>
          <div className="settings-offcanvas-container">
            <div className="close-btn">
              <FontAwesomeIcon icon={faXmark} onClick={toggleSettings} />
            </div>
            <h1 className="settings-offcanvas-header">Settings</h1>
            <div className="settings-information-container">
              <div className="settings-offcanvas-quiz-title settings-input-area">
                <label for="quiz-title">Quiz title:</label>
                <input
                  type="text"
                  id="quiz-title"
                  name="quiz-title"
                  placeholder="Enter your title"
                  value={quizTitle}
                  onChange={halndleChangeTitle}></input>
              </div>
              <div className="settings-offcanvas-quiz-description settings-input-area">
                <label for="quiz-description">Quiz description:</label>
                <textarea
                  type="text"
                  id="quiz-description"
                  name="quiz-description"
                  placeholder="Enter your quiz description"
                  onChange={handleChangeDescription}
                  value={quizDescrition}></textarea>
              </div>
            </div>
            <div
              className="settings-offcanvas-close-btn"
              onClick={toggleSettings}>
              <p>Close</p>
            </div>
            <div className="settings-offcanvas-save-btn" onClick={alertSave}>
              <p>Save</p>
            </div>
          </div>
        </>
      )}
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
                    onDelete={() => handleDelete(index)}
                    changeQuestion={handleChangeQuestions}
                  />
                );
              })}
          </div>
          <div className="create-new-question-container">
            <FontAwesomeIcon icon={faPlus} onClick={createNewQuestion} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateQuiz;
