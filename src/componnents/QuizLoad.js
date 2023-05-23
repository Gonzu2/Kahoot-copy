import { useParams } from "react-router-dom";
import SolveQuiz from "../pages/SolveQuiz";
import { useSelector } from "react-redux";
import Spinner from "./Spinner";

function QuizLoad({ quizes }) {
  const { id } = useParams();
  const { isLoading } = useSelector((state) => state.quiz);

  if (isLoading || !quizes) {
    return <Spinner/>;
  }

  const IDquiz = quizes.find((quiz) => quiz._id.toString() === id);
  return (
    <>
      {!IDquiz ? (
        <div>Quiz with id {id} not found</div>
      ) : (
        <SolveQuiz quiz={IDquiz} />
      )}
    </>
  );
}

export default QuizLoad;