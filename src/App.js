import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import QuizLoad from "./componnents/QuizLoad";
import Spinner from "./componnents/Spinner.js";
import HomeLoggedIn from "./pages/HomeLoggedIn";
import CreateQuiz from "./pages/CreateQuiz.js";
import SolveQuiz from "./pages/SolveQuiz.js";
import CreateQuizTemplate from "./componnents/CreateQuizTemplate"
import TimeOut from "./componnents/TimeOut";
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation  } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset, getQuizes } from "./features/quiz/quizSlice";

import MyEditor from "./pages/MyEditor";

function App() {
  const [quizes, setQuizes] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lacation = useLocation();
  const { quiz, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.quiz
  );
  var firstLoad = false 
  useEffect(() => {
    setQuizes(quiz);
  }, [isSuccess]);

  useEffect(() => {
    if (!firstLoad) {
      firstLoad = true;
      dispatch(getQuizes());
    }

  },[])


  //   useEffect(() => {
  //     console.log("navigate...");
  //     setTimeout( () => {
  //       console.log("updateData");
  //       handleUpdateQuiz()
  //     }, 3000 )

  //   return () => {
  //   };
  // }, [lacation]);

  const handleUpdateQuizes = () => {
      setTimeout( () => {
        console.log("updateData quizes");
        dispatch(getQuizes());
      }, 3000 )
  }
    return (
    <>
      <Routes>
        <Route path="/loading" element={<Spinner />}></Route>
        <Route path="/quiz/:id" element={<QuizLoad quizes={quizes} />} />
        <Route path="/" element={<Home quizes={quizes} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomeLoggedIn quizes={quizes} updateQuizes={handleUpdateQuizes} />} />
        <Route path="/create" element={<CreateQuizTemplate updateQuiz={handleUpdateQuizes}/>} />
        <Route path="/create/:id" element={<CreateQuiz quizes={quizes}   />} /> {/* update Quiz */}
        <Route path="/quiz" element={<SolveQuiz />} />
        <Route path="/admin/test" element={<MyEditor />} /> 
        <Route path="/loading" element={<TimeOut/>} /> 
      </Routes>
    </>
  );
}

export default App;
