import { Navigate } from "react-router-dom";
import Spinner from "./Spinner";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function TimeOut({timeoutInfo}) {
const navigate = useNavigate()
var quizCreated = false;
useEffect(() => {
    if (quizCreated === false) {
        console.log("you in timeout");
      quizCreated = true
      setTimeout(() => {
        console.log(`naviagting to ${timeoutInfo.id}`)
        navigate(`/create/${timeoutInfo.id}`)
      },10000);
  }
  }, []);


    return (
        <Spinner/>
    );
  }

export default TimeOut;