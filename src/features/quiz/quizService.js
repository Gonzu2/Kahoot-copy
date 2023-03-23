import axios from "axios";

const API_URL = "http://localhost:5000/quiz/"

const getAllQuizes =  async (token) => {
    const response = await axios.get(API_URL)
    console.log(response.data)
    return response.data
}

const quizService = {
    getAllQuizes,
}

export default quizService