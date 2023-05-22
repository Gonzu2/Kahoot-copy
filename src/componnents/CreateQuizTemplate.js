
import SolveQuiz from "../pages/SolveQuiz";
import { reset, createQuiz } from "../features/quiz/quizSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



function CreateQuizTemplate({ quizes }) {
  const dispatch =useDispatch()
  const navigate = useNavigate()
  const { user, isLoading } = useSelector((state) => state.auth);
  const { createMessage } = useSelector((state) => state.quiz);
  const quizTemplate = {
    title: "new project",
    questions: [
      {
        name: "",
        options: [
          {
            text: "",
            isCorrect: false,
          }
        ]
      }
    ],
    plays: 0
  }

useEffect( () => {
  dispatch(createQuiz( {
    token: user.token,
    quiz: quizTemplate,
  }))
},[])

useEffect( () => {
  if(createMessage){
    navigate(`/create/${createMessage._id}`)
  }
},[createMessage])

  if (!user) {
    navigate("/")
  }

  return (
    <>
    Creating quiz template
    </>
  );
}

export default CreateQuizTemplate;