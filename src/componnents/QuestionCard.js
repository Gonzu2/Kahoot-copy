
function QuestionCard({ questionCardInfo }) {
  return (
    <div className="question-card">
            <h1 className="question-card-name">questionCardInfo.title</h1>
            <h1 className="question-card-id">questionCardInfo.id</h1>
            <h1 className="question-card-delete">Delete</h1>
            <div className="question-card-number">questionCardInfo.index</div>
    </div>
  );
}

export default QuestionCard;