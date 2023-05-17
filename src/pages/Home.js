import React from "react";
import "../style/home.css";
import Navbar from "../componnents/Navbar";
import Footer from "../componnents/Footer";
import Header from "../home-componnents/Header";
import Hero from "../home-componnents/Hero";
import HowDoesKahootWork from "../home-componnents/How-does-kahoot-work";
import ReviewContainer from "../home-componnents/Review-container";

function Home() {
  return (
    <div id="home-main">
      <Navbar />
      <main>
        <Header />
        <Hero />
        <HowDoesKahootWork />
        <ReviewContainer />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
