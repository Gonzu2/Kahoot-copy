import "../style/createQuizCard.css";
import { useEffect, useState } from "react";

function QuestionCard({ questionCardInfo, changeQuestion, onDelete }) {
  const [info, setInfo] = useState(questionCardInfo);
  useEffect(() => {
    if (questionCardInfo) {
      setInfo(questionCardInfo);
    }
  }, [questionCardInfo]);

  const handleClick = (e) => {
    changeQuestion(e);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    onDelete(info.index);
  };

  return (
    <div className="question-card">
      <h1 className="question-card-name">{info.title}</h1>
      <h1 className="question-card-delete" onClick={handleDelete}>
        Delete
      </h1>
      <div
        className="question-card-number"
        onClick={handleClick}
        data-key={info.index}>
        {info.index + 1}
      </div>
      <h1 className="question-card-name">{info.title}</h1>
      <h1 className="question-card-delete" onClick={handleDelete}>
        Delete
      </h1>
      <div
        className="question-card-number"
        onClick={handleClick}
        data-key={info.index}>
        {info.index + 1}
      </div>
    </div>
  );
}

export default QuestionCard;
