import axios from "axios";
// For debuging
// const API_URL = "http://localhost:5000/quiz/"

// for running online
const API_URL = "https://kahoot-copy-backed.glitch.me/quiz/";
const API_URL = "https://kahoot-copy-backed.glitch.me/quiz/" 

const getAllQuizes = async (token) => {
  const response = await axios.get(API_URL);
  return response.data;
};

const quizService = {
  getAllQuizes,
};

export default quizService;
