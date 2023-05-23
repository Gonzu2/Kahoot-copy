import "../style/createQuizCard.css"
import { useEffect,useState } from "react";
function QuestionCard({ questionCardInfo, changeQuestion }) {
  const [info, setInfo] = useState(questionCardInfo)
  useEffect(() => {
    if(questionCardInfo){
      setInfo(questionCardInfo)
    }
  },[questionCardInfo]) 
  const handleClick = (e) => {
    changeQuestion(e);
  }
  return (
    <div className="question-card" onClick={handleClick} data-key={info.index}>
            <h1 className="question-card-name">{info.title}</h1>

            <h1 className="question-card-delete">Delete</h1>
            <div className="question-card-number">{info.index + 1}</div>
    </div>
  );
}


export default QuestionCard;