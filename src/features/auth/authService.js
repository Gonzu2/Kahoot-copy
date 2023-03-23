import axios from "axios";

const API_URL = "http://localhost:5000/users/"


//register userr
const registerUser = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if (response.data){
        localStorage.setItem("user", JSON.stringify(response.data))
    }

    return response.data
}

//login userr
const loginUser = async (userData) => {
    const response = await axios.post(API_URL + "login", userData)

    if (response.data){
        localStorage.setItem("user", JSON.stringify(response.data))
    }

    return response.data
}

// logout user 

const logoutUser = async () => {
        localStorage.removeItem("user")
}
const authService = {
    registerUser,
    logoutUser,
    loginUser,
}

export default authService