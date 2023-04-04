import React from "react";
import { Link } from "react-router-dom";
import QuizCard from "../componnents/QuizCard";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import "../style/homeLoggedIn.css";
import Navbar from "../componnents/NavbarLoggedIn";
import Footer from "../componnents/Footer";
import Sidebar from "../componnents/Sidebar";

function HomeLoggedIn() {
  return (
    <div id="home-main">
      <Navbar />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default HomeLoggedIn;
