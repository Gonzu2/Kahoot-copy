
import SolveQuiz from "../pages/SolveQuiz";
import { reset, createQuiz } from "../features/quiz/quizSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Spinner from "./Spinner";
import { useState } from "react";
const Swal = require("sweetalert2");


function CreateQuizTemplate({ quizes, updateQuiz}) {
  const dispatch =useDispatch()
  const navigate = useNavigate()
  const { user, isLoading } = useSelector((state) => state.auth);
  const { createMessage } = useSelector((state) => state.quiz);
   var quizCreated = false;
  const quizTemplate = {
    title: "new project",
    questions: [
      {
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
          }
        ]
      }
    ],
    plays: 0
  }


  useEffect(() => {
    if (quizCreated === false) {
      quizCreated = true
    alertCreate()
  }
  }, []);

useEffect( () => {
  if(createMessage){
    updateQuiz()
    setTimeout(() => {
      navigate(`/create/${createMessage._id}`)
    },5000)
  }
},[createMessage])

  if (!user) {
    navigate("/")
  }

const alertCreate = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Create it!",
  }).then((result) => {
    if (result.isConfirmed) {
      dispatch(createQuiz({
        token: user.token,
        quiz: quizTemplate,
      }))

      Swal.fire("Created!", "Your quiz has been created.", "success");
    }else {
      navigate(`/home`)
      Swal.fire("Canceled!", "Your quiz has not been created.", "warning")
    }
    
  });
};


  return (
    <>
      <Spinner/>
    </>
  );
}

export default CreateQuizTemplate;