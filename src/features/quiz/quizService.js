import axios from "axios";
// For debuging
// const API_URL = "http://localhost:5000/quiz/" 

// for running online
const API_URL = "https://kahoot-copy-backed.glitch.me/quiz/" 

const getAllQuizes =  async (token) => {
    const response = await axios.get(API_URL)
    console.log(response.data)
    return response.data
}

const getAllUserQuizes = async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(API_URL + "/user/", config);
    console.log(response.data);
    return response.data;
  };

const quizService = {
    getAllQuizes,
    getAllUserQuizes,
}

export default quizService