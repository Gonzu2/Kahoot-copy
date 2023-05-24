<<<<<<< HEAD
import "../style/createQuizCard.css"
import { useEffect,useState } from "react";
function QuestionCard({ questionCardInfo, changeQuestion, onDelete}) {
  const [info, setInfo] = useState(questionCardInfo)
=======
import "../style/createQuizCard.css";
import { useEffect, useState } from "react";
function QuestionCard({ questionCardInfo, changeQuestion }) {
  const [info, setInfo] = useState(questionCardInfo);
>>>>>>> ef86483e770a1b40ebd1c73f50761c6ebb2dde81
  useEffect(() => {
    if (questionCardInfo) {
      setInfo(questionCardInfo);
    }
  }, [questionCardInfo]);
  const handleClick = (e) => {
    changeQuestion(e);
<<<<<<< HEAD
  }

  const handleDelete = (e) => {
    e.preventDefault();
    onDelete(info.index)

  }
  return (
    <div className="question-card">
            <h1 className="question-card-name">{info.title}</h1>

            <h1 className="question-card-delete" onClick={handleDelete}>Delete</h1>
            <div className="question-card-number" onClick={handleClick} data-key={info.index}>{info.index + 1}</div>
=======
  };
  return (
    <div className="question-card" onClick={handleClick} data-key={info.index}>
      <h1 className="question-card-name">{info.title}</h1>
      <h1 className="question-card-delete">Delete</h1>
      <div className="question-card-number">{info.index + 1}</div>
>>>>>>> ef86483e770a1b40ebd1c73f50761c6ebb2dde81
    </div>
  );
}

export default QuestionCard;
