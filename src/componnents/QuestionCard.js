import "../style/createQuizCard.css"
function QuestionCard({ questionCardInfo, changeQuestion }) {
  const handleClick = (e) => {
    changeQuestion(e);
  }
  return (
    <div className="question-card" onClick={handleClick} data-key={questionCardInfo.index}>
            <h1 className="question-card-name">{questionCardInfo.title}</h1>

            <h1 className="question-card-delete">Delete</h1>
            <div className="question-card-number">{questionCardInfo.index + 1}</div>
    </div>
  );
}


export default QuestionCard;