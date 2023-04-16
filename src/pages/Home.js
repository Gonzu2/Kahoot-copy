import React from "react";
import { useNavigate, Link } from "react-router-dom";
import QuizCard from "../componnents/QuizCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import "../style/home.css";
import Navbar from "../componnents/Navbar";
import Footer from "../componnents/Footer";

function Home({ quizes }) {

  return (
    <div id="home-main">
      <Navbar />
      <main>
        {/* Header section */}
        <div className="header-container">
          <div className="header-elements">
            <div className="header-info">
              <h1 className="header-text-1">
                Engage your professional audience with Kahoot! 360
              </h1>
              <p className="header-text-2">
                It’s easy to make work awesome! Join millions of professionals
                using Kahoot! 360 for engaging interactive presentations,
                training, and events.
              </p>
              <p className="header-text-3">
                <strong>
                  Save over 35% today with offers starting from $24/month.
                </strong>
              </p>
              <a className="raisedButton">Buy now!</a>
            </div>
            <img src={require("../images/header.png")}></img>
          </div>
        </div>
        <div className="hero-section">
          <ul className="hero-cards">
            <li className="hero-card">
              <ul className="hero-info">
                <li className="hero-text">
                  <ul className="hero-main-text">
                    <li>
                      <p>FOR TEACHERS</p>
                    </li>
                    <li>
                      <h1>
                        Boost student engagement with our NEW game experience:
                        Tallest Tower
                      </h1>
                    </li>
                    <li>
                      <h2>
                        Work together with your team to build the tallest tower.
                        All premium game experiences included in Kahoot!+
                        Premier for teachers, for only $6.99/month.
                      </h2>
                    </li>
                    <a className="raisedButton" style={{ width: "auto" }}>
                      Buy now!
                    </a>
                  </ul>
                </li>
                <li className="hero-image">
                  <img src={require("../images/hero1.jpg")}></img>
                </li>
              </ul>
            </li>
            <li className="hero-card">
              <ul className="hero-info">
                <li className="hero-text">
                  <ul className="hero-main-text">
                    <li>
                      <p>FOR KIDS</p>
                    </li>
                    <li>
                      <h1>Unleash kids learning power through play!</h1>
                    </li>
                    <li>
                      <h2>
                        Build reading, math, and core learning skills with an
                        exciting universe of 10 award-winning apps!
                      </h2>
                    </li>
                    <li>
                      <a className="learn-more">
                        Learn more
                        <span>
                          <svg
                            width="13px"
                            height="8px"
                            viewBox="0 0 13 8"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g
                              id="Symbols"
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fill-rule="evenodd">
                              <g
                                id="mobile_header"
                                transform="translate(-177.000000, -80.000000)"
                                fill="rgb(56, 56, 230)">
                                <path
                                  d="M189.317061,82.1246979 C189.510391,81.9313678 189.510391,81.6143064 189.317061,81.4209763 L188.033349,80.1449976 C187.840019,79.9516675 187.530691,79.9516675 187.337361,80.1449976 L183.231029,84.2513291 L179.124698,80.1449976 C178.931368,79.9516675 178.62204,79.9516675 178.42871,80.1449976 L177.144998,81.4209763 C176.951667,81.6143064 176.951667,81.9313678 177.144998,82.1246979 L182.883035,87.8550024 C183.076365,88.0483325 183.385694,88.0483325 183.579024,87.8550024 L189.317061,82.1246979 Z"
                                  id="toggle"></path>
                              </g>
                            </g>
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a className="raisedButton" style={{ width: "auto" }}>
                        Get Kahoot! Kids
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="hero-image">
                  <img src={require("../images/hero2.png")}></img>
                </li>
              </ul>
            </li>
            <li className="hero-card">
              <ul className="hero-info">
                <li className="hero-text">
                  <ul className="hero-main-text">
                    <li>
                      <h1>
                        Explore ready-to-use learning resources for your next
                        lesson
                      </h1>
                    </li>
                    <li>
                      <h2>
                        Make learning awesome with premium content for all ages
                        from trusted creators on Kahoot!’s marketplace starting
                        at $3.
                      </h2>
                    </li>
                    <a className="raisedButton" style={{ width: "auto" }}>
                      Explore resources
                    </a>
                  </ul>
                </li>
                <li className="hero-image">
                  <img src={require("../images/hero3.jpg")}></img>
                </li>
              </ul>
            </li>
            <li className="hero-card">
              <ul className="hero-info">
                <li className="hero-text">
                  <ul className="hero-main-text">
                    <li>
                      <h1>Access new Marvel content on Kahoot!</h1>
                    </li>
                    <li>
                      <h2>
                        Meet fan-favorite Marvel Super Heroes in new kahoot
                        collections on science, math, social emotional learning,
                        and more. Available for free and in Kahoot!’s premium
                        content subscription.
                        <a className="learn-more">
                          Learn more
                          <span>
                            <svg
                              width="13px"
                              height="8px"
                              viewBox="0 0 13 8"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink">
                              <g
                                id="Symbols"
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fill-rule="evenodd">
                                <g
                                  id="mobile_header"
                                  transform="translate(-177.000000, -80.000000)"
                                  fill="rgb(56, 56, 230)">
                                  <path
                                    d="M189.317061,82.1246979 C189.510391,81.9313678 189.510391,81.6143064 189.317061,81.4209763 L188.033349,80.1449976 C187.840019,79.9516675 187.530691,79.9516675 187.337361,80.1449976 L183.231029,84.2513291 L179.124698,80.1449976 C178.931368,79.9516675 178.62204,79.9516675 178.42871,80.1449976 L177.144998,81.4209763 C176.951667,81.6143064 176.951667,81.9313678 177.144998,82.1246979 L182.883035,87.8550024 C183.076365,88.0483325 183.385694,88.0483325 183.579024,87.8550024 L189.317061,82.1246979 Z"
                                    id="toggle"></path>
                                </g>
                              </g>
                            </svg>
                          </span>
                        </a>
                      </h2>
                    </li>
                    <a className="raisedButton" style={{ width: "auto" }}>
                      Explore kahoot
                    </a>
                  </ul>
                </li>
                <li className="hero-image">
                  <img src={require("../images/hero4.jpg")}></img>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="hero-shortcuts">
            <li className="hero-shortcut-card hero-shortcut-card-red">
              <h1>
                <img
                  src={require("../images/kahoot-for-schools-icon.png")}></img>
                Kahoot! at school
              </h1>
              <p>
                Engaging group and distance learning for teachers and students.
              </p>
              <a className="learn-more hoverAnim">
                Learn more
                <span>
                  <svg
                    width="13px"
                    height="8px"
                    viewBox="0 0 13 8"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g
                      id="Symbols"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fill-rule="evenodd">
                      <g
                        id="mobile_header"
                        transform="translate(-177.000000, -80.000000)"
                        fill="rgb(56, 56, 230)">
                        <path
                          d="M189.317061,82.1246979 C189.510391,81.9313678 189.510391,81.6143064 189.317061,81.4209763 L188.033349,80.1449976 C187.840019,79.9516675 187.530691,79.9516675 187.337361,80.1449976 L183.231029,84.2513291 L179.124698,80.1449976 C178.931368,79.9516675 178.62204,79.9516675 178.42871,80.1449976 L177.144998,81.4209763 C176.951667,81.6143064 176.951667,81.9313678 177.144998,82.1246979 L182.883035,87.8550024 C183.076365,88.0483325 183.385694,88.0483325 183.579024,87.8550024 L189.317061,82.1246979 Z"
                          id="toggle"></path>
                      </g>
                    </g>
                  </svg>
                </span>
              </a>
            </li>
            <li className="hero-shortcut-card hero-shortcut-card-blue">
              <h1>
                <img src={require("../images/kahoot-at-work-icon.png")}></img>
                Kahoot! at work
              </h1>
              <p>
                Deliver training, presentations, meetings and events in-person
                or on any video conferencing platform.
              </p>
              <a className="learn-more hoverAnim">
                Learn more
                <span>
                  <svg
                    width="13px"
                    height="8px"
                    viewBox="0 0 13 8"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g
                      id="Symbols"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fill-rule="evenodd">
                      <g
                        id="mobile_header"
                        transform="translate(-177.000000, -80.000000)"
                        fill="rgb(56, 56, 230)">
                        <path
                          d="M189.317061,82.1246979 C189.510391,81.9313678 189.510391,81.6143064 189.317061,81.4209763 L188.033349,80.1449976 C187.840019,79.9516675 187.530691,79.9516675 187.337361,80.1449976 L183.231029,84.2513291 L179.124698,80.1449976 C178.931368,79.9516675 178.62204,79.9516675 178.42871,80.1449976 L177.144998,81.4209763 C176.951667,81.6143064 176.951667,81.9313678 177.144998,82.1246979 L182.883035,87.8550024 C183.076365,88.0483325 183.385694,88.0483325 183.579024,87.8550024 L189.317061,82.1246979 Z"
                          id="toggle"></path>
                      </g>
                    </g>
                  </svg>
                </span>
              </a>
            </li>
            <li className="hero-shortcut-card hero-shortcut-card-green">
              <h1>
                <img src={require("../images/kahoot-at-home-icon.png")}></img>
                Kahoot! at home
              </h1>
              <p>
                <span>
                  <a className="learn-more">
                    Learning apps
                    <span>
                      <svg
                        width="13px"
                        height="8px"
                        viewBox="0 0 13 8"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g
                          id="Symbols"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fill-rule="evenodd">
                          <g
                            id="mobile_header"
                            transform="translate(-177.000000, -80.000000)"
                            fill="rgb(56, 56, 230)">
                            <path
                              d="M189.317061,82.1246979 C189.510391,81.9313678 189.510391,81.6143064 189.317061,81.4209763 L188.033349,80.1449976 C187.840019,79.9516675 187.530691,79.9516675 187.337361,80.1449976 L183.231029,84.2513291 L179.124698,80.1449976 C178.931368,79.9516675 178.62204,79.9516675 178.42871,80.1449976 L177.144998,81.4209763 C176.951667,81.6143064 176.951667,81.9313678 177.144998,82.1246979 L182.883035,87.8550024 C183.076365,88.0483325 183.385694,88.0483325 183.579024,87.8550024 L189.317061,82.1246979 Z"
                              id="toggle"></path>
                          </g>
                        </g>
                      </svg>
                    </span>
                  </a>
                </span>
                and games for family fun or home study.
              </p>
              <a className="learn-more hoverAnim">
                Learn more
                <span>
                  <svg
                    width="13px"
                    height="8px"
                    viewBox="0 0 13 8"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g
                      id="Symbols"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fill-rule="evenodd">
                      <g
                        id="mobile_header"
                        transform="translate(-177.000000, -80.000000)"
                        fill="rgb(56, 56, 230)">
                        <path
                          d="M189.317061,82.1246979 C189.510391,81.9313678 189.510391,81.6143064 189.317061,81.4209763 L188.033349,80.1449976 C187.840019,79.9516675 187.530691,79.9516675 187.337361,80.1449976 L183.231029,84.2513291 L179.124698,80.1449976 C178.931368,79.9516675 178.62204,79.9516675 178.42871,80.1449976 L177.144998,81.4209763 C176.951667,81.6143064 176.951667,81.9313678 177.144998,82.1246979 L182.883035,87.8550024 C183.076365,88.0483325 183.385694,88.0483325 183.579024,87.8550024 L189.317061,82.1246979 Z"
                          id="toggle"></path>
                      </g>
                    </g>
                  </svg>
                </span>
              </a>
            </li>
            <li className="hero-shortcut-card hero-shortcut-card-yellow">
              <h1>
                <img src={require("../images/academy-box-icon.png")}></img>
                Kahoot! Academy
              </h1>
              <p>
                Explore content and join one of the world’s largest educator
                communities.
              </p>
              <a className="learn-more hoverAnim">
                Learn more
                <span>
                  <svg
                    width="13px"
                    height="8px"
                    viewBox="0 0 13 8"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g
                      id="Symbols"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fill-rule="evenodd">
                      <g
                        id="mobile_header"
                        transform="translate(-177.000000, -80.000000)"
                        fill="rgb(56, 56, 230)">
                        <path
                          d="M189.317061,82.1246979 C189.510391,81.9313678 189.510391,81.6143064 189.317061,81.4209763 L188.033349,80.1449976 C187.840019,79.9516675 187.530691,79.9516675 187.337361,80.1449976 L183.231029,84.2513291 L179.124698,80.1449976 C178.931368,79.9516675 178.62204,79.9516675 178.42871,80.1449976 L177.144998,81.4209763 C176.951667,81.6143064 176.951667,81.9313678 177.144998,82.1246979 L182.883035,87.8550024 C183.076365,88.0483325 183.385694,88.0483325 183.579024,87.8550024 L189.317061,82.1246979 Z"
                          id="toggle"></path>
                      </g>
                    </g>
                  </svg>
                </span>
              </a>
            </li>
          </ul>
        </div>
        {/* Hero end */}
        {/* How does kahoot work */}
        <div className="how-does-kahoot-work">
          <h1>How does Kahoot! work?</h1>
          <ul className="cards">
            <li className="card">
              <div className="card-video">
                <video
                  id="1"
                  loop
                  playsInline
                  preload="auto"
                  onMouseOver={(event) => event.target.play()}
                  onMouseLeave={(event) => event.target.pause()}>
                  <source
                    src={require("../videos/kc_1.webm")}
                    type="video/webm"
                  />
                </video>
              </div>
              <div className="skew-wraper skew-wrapper-how-it-works">
                <div className="skew">
                  <div className="skew-inner"></div>
                </div>
              </div>
              <h1 className="card-header">Create</h1>
              <p className="card-info">
                It only takes minutes to create a learning game or trivia quiz
                on any topic, in any language.
              </p>
            </li>
            <li className="card">
              <div className="card-video">
                <video
                  id="1"
                  loop
                  playsInline
                  preload="auto"
                  onMouseOver={(event) => event.target.play()}
                  onMouseLeave={(event) => event.target.pause()}>
                  <source
                    src={require("../videos/kc2_2b.webm")}
                    type="video/webm"
                  />
                </video>
              </div>
              <div className="skew-wraper skew-wrapper-how-it-works">
                <div className="skew">
                  <div className="skew-inner"></div>
                </div>
              </div>
              <h1 className="card-header">Host or share</h1>
              <p className="card-info">
                Host a live game with questions on a big screen or share a game
                with remote players.
              </p>
            </li>
            <li className="card">
              <div className="card-video">
                <video
                  id="1"
                  loop
                  playsInline
                  preload="auto"
                  onMouseOver={(event) => event.target.play()}
                  onMouseLeave={(event) => event.target.pause()}>
                  <source
                    src={require("../videos/kc_3.webm")}
                    type="video/webm"
                  />
                </video>
              </div>
              <div className="skew-wraper skew-wrapper-how-it-works">
                <div className="skew">
                  <div className="skew-inner"></div>
                </div>
              </div>
              <h1 className="card-header">Play</h1>
              <p className="card-info">
                Game on! Join a kahoot with a PIN provided by the host and
                answer questions on your device.
              </p>
            </li>
          </ul>
          <div className="play-ad">
            <div className="play-ad-wrapper">
              <div className="play-ad-inner">
                <h1 className="play-ad-info">
                  Play Kahoot! to see how it works!
                  <a href="#" className="play-ad-button underline">
                    Explore our featured games!
                  </a>
                </h1>
                <div className="hands" id="left">
                  <svg
                    width="40px"
                    height="39px"
                    viewBox="0 0 40 39"
                    className="hand"
                    aria-hidden="true">
                    <g
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fill-rule="evenodd">
                      <path
                        className="hand__grip"
                        d="M6,32 L7.1340332,11 L29.0739746,11 L30.9841309,6.30419922 C32.5002016,-0.497833236 39.8556292,0.124038746 39.8556292,0.124038746 L36.2359774,20.1807405 L19.7161246,22.3503189 L18.9752808,31.1017456 L6,32 Z"
                        fill="#FAD09E"></path>
                      <polygon
                        className="hand__cuff"
                        points="0.000131427821 39 0.000131427821 31.9825647 19.6968384 31 23 39"></polygon>
                    </g>
                  </svg>
                </div>
                <div className="hands" id="right">
                  <svg
                    width="40px"
                    height="39px"
                    viewBox="0 0 40 39"
                    className="hand"
                    aria-hidden="true">
                    <g
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fill-rule="evenodd">
                      <path
                        className="hand__grip"
                        d="M20.9,31.1l-0.7-8.8L3.6,20.2L0,0.1c0,0,7.4-0.6,8.9,6.2l1.9,4.7h21.9l1.1,21L20.9,31.1z"
                        fill="#FAD09E"></path>
                      <polygon
                        className="hand__cuff"
                        points="16.9,39 20.2,31 39.9,32 39.9,39"></polygon>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* How does kahoot work end */}
        {/* Starts Review section */}
        <section className="review-container">
          <div className="review">
            <div className="review-header">
              <span>More than</span>
              <span>1,000,000,000</span>
              <span>players a year</span>
            </div>
            <div className="review-btns">
              <div className="review-btn" id="red">
                <span>More than 50% of US teachers use Kahoot!</span>
              </div>
              <div className="review-btn" id="blue">
                <span>Players in more than 200 countries and regions</span>
              </div>
              <div className="review-btn" id="yell">
                <span>Over 50 million public games available</span>
              </div>
              <div className="review-btn long-btn" id="green">
                <span>97% of the Fortune 500 use Kahoot!</span>
              </div>
            </div>
            <div className="chat-box">
              <div className="chat-box-main">
                <div className="skew-wraper">
                  <div className="skew">
                    <div className="skew-inner"></div>
                  </div>
                </div>
                <container className="chat-box-container">
                  <div className="chat-box-img">
                    <img
                      src="https://kahoot.com/files/2021/04/Jay-Arnaud-round-headshot.jpg"
                      alt="Jay Arnaud"
                    />
                  </div>
                  <div className="chat-box-text">
                    <p>
                      “Kahoot! has become one of our "flagship training tools".
                      I believe Kahoot! is irreplaceable, as it involves
                      learners throughout sessions and also helps employees
                      retain important information more effectively."
                    </p>
                    <span>Arnaud Jay, SNCF</span>
                  </div>
                </container>
              </div>
              <div className="chat-box-main">
                <div className="skew-wraper">
                  <div className="skew">
                    <div className="skew-inner"></div>
                  </div>
                </div>
                <container className="chat-box-container">
                  <div className="chat-box-img">
                    <img
                      src="https://kahoot.com/files/2021/04/Gustavo-Lovato-Columbia-round-headshot.jpg"
                      alt="Gustavo Lovato"
                    />
                  </div>
                  <div className="chat-box-text">
                    <p>
                      “Kahoot! is a fantastic way to engage every single student
                      - even remotely."
                    </p>
                    <span>
                      Gustavo Lovato, AP Spanish and literature teacher
                    </span>
                  </div>
                </container>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <main>
        {console.log("")}
        {quizes &&
          quizes.map((e) => {
            console.log(e);
            return <QuizCard quiz={e} />;
          })}
      </main> */}
      <Footer />
    </div>
  );
}

export default Home;
