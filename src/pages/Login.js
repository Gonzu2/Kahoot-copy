import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reset, login } from "../features/auth/authSlice";
import Spinner from "../componnents/Spinner"
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import "../style/login-register.css";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccsess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {

    if (isError) {
      console.log("error IsError", message);
      alert(message, isError);
    }

    if (isSuccsess || user) {
      navigate("/home");
    }

    dispatch(reset());
  }, [isError, isSuccsess, message, dispatch, navigate, user, isLoading]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    dispatch(login(userData));
    console.log(`dispatched Login ${userData.email} : ${userData.password}`);
  };
  if(isLoading) {
    return (<Spinner/>)
  }
  return (
    <div id="main">
      <div id="container">
        <section id="main-container">
          {/* Login */}

          <h1 id="title">Log in</h1>
          <label htmlFor="email">
            <p>Email</p>
          </label>
          <input type="text" name="email" onChange={handleOnChange} required />

          <label htmlFor="password">
            <p>Password</p>
          </label>
          <input
            type="password"
            name="password"
            onChange={handleOnChange}
            required
          />

          <p id="forgot-password">
            Forgot password? <a href="#">Reset your password</a>
          </p>

          <button
            type="submit"
            onClick={onSubmit}
            style={{
              cursor: email && password ? "pointer" : "not-allowed",
              background: email && password ? "green" : "rgb(204, 204, 204)",
            }}>
            Log in
          </button>

          <p id="breakpoint">or</p>

          <div id="google" className="login-option">
            <img src={require("../images/googleLogo.png")} />
            <p>Continue with google</p>
          </div>

          <div id="Microsoft" className="login-option">
            <img src={require("../images/microsoftLogo.png")} />
            <p>Continue with Micorosft</p>
          </div>

          <div id="Apple" className="login-option">
            <img src={require("../images/appleLogo.png")} />
            <p>Continue with Apple</p>
          </div>

          <div id="Clever" className="login-option">
            <img src={require("../images/cleverLogo.png")} />
            <p>Continue with Clever</p>
          </div>

          <p id="prompt">
            Don't have an account? <Link to={"/register"}>Sign up</Link>
          </p>
          <div id="tos">
            <p>
              By signing up, you accept our <a href="#">Terms and Conditions</a>
              . Please read our <a href="#">Privacy Policy</a> and{" "}
              <a href="#">Children’s Privacy Policy</a>.
            </p>

            <p>
              I understand that I can withdraw my consent at any time and the
              withdrawal will not affect the lawfulness of the consent before
              its withdrawal, as described in the Kahoot!{" "}
              <a href="#">Privacy Policy</a>.
            </p>
          </div>
          {/* Login end */}
        </section>
      </div>
    </div>
  );
}

export default Login;
