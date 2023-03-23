import {Link} from "react-router-dom"
function QuizCard({quiz}) {
    return (
      <>
      <Link to={`quiz/${quiz._id}`} >
        <div>
          quiz title: {quiz.title}
        </div>
      </Link>
      </>
    );
  }

export default QuizCard;