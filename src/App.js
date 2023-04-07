import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import QuizLoad from "./componnents/QuizLoad";
import Spinner from "./componnents/Spinner.js";
import HomeLoggedIn from "./pages/HomeLoggedIn"
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset, getQuizes } from "./features/quiz/quizSlice";


function App() {
  const [quizes, setQuizes] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { quiz, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.quiz
  );
  useEffect(() => {
    dispatch(getQuizes());
    setQuizes(quiz);
  }, [isSuccess]);
  return (
    <>
      <Routes>
        <Route path="/loading" element={<Spinner/>}></Route>
        <Route path="/quiz/:id" element={<QuizLoad quizes={quizes} />} />
        <Route path="/" element={<Home quizes={quizes} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomeLoggedIn />} />
      </Routes>
    </>
  );
}

export default App;
