import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import "../style/login-register.css";
import Navbar from "../componnents/Navbar";

var totalCompleted = 0;

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
      totalCompleted++;
    } else if (name === "email") {
      setEmail(value);
      totalCompleted++;
    } else if (name === "password") {
      setPassword(value);
      totalCompleted++;
    }
  };
  return (
    <div id="main">
      <div id="container">
        <section id="main-container">
          {/* Login */}

          <h1 id="title">Register</h1>

          <label htmlFor="username">
            <p>Username</p>
          </label>
          <input
            type="text"
            name="username"
            onChange={handleOnChange}
            required
          />

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

          <button
            type="submit"
            style={{
              cursor: username && email && password ? "pointer" : "not-allowed",
              background:
                username && email && password ? "green" : "rgb(204, 204, 204)",
            }}>
            Register
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
            Already have an account? <Link to={"/login"}>Sign in</Link>
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
          {/* Register end */}
        </section>
      </div>
    </div>
  );
}

export default Register;
