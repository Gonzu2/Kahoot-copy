import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../componnents/NavbarCreate";
import Footer from "../componnents/Footer";
import Sidebar from "../componnents/Sidebar";
import "../style/createQuiz.css"
function CreateQuiz() {
  return (
    <div id="create-main">
      <Navbar />
    </div>
  );
}

export default CreateQuiz;
