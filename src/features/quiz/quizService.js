import axios from "axios";
// For debuging
// const API_URL = "http://localhost:5000/quiz/"

// for running online
const API_URL = "https://kahoot-copy-backed.glitch.me/quiz";

const getAllQuizes = async (token) => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getAllUserQuizes = async (token) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const response = await axios.post(API_URL + "/user/", null, { headers });
  return response.data;
};

const postCreateQuiz = async (token, quiz) => {


  const headers = {
    Authorization: `Bearer ${token}`,
  };
  console.log("sending to server: " + token);
  console.log("sending to server: ", quiz);
  const response = await axios.post(API_URL + "/new/", quiz, { headers });
  console.log(response.data);
  return response.data;
};

const getOneQuize = async (id) => {
  const response = await axios.get(`${API_URL}/${id}/`);
  return response.data;
}

const quizService = {
  getAllQuizes,
  getAllUserQuizes,
  postCreateQuiz,
  getOneQuize
};

export default quizService;
