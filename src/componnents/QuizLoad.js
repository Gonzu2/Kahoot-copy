import { useParams } from "react-router-dom";
import QuizPage from "../pages/Quiz";

function QuizLoad({ quizes }) {
  const { id } = useParams();
  const quiz = quizes.find((quiz) => quiz.id.toString() === id);
  console.log(quiz);
  console.log(quizes);
  return (
    <>
      <QuizPage quiz={quiz} quizes={quizes} />
    </>
  );
}

export default QuizLoad;
