import React from "react";

import "../style/hero.css";
import "../style/home.css";

function Hero() {
  return (
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
                    Work together with your team to build the tallest tower. All
                    premium game experiences included in Kahoot!+ Premier for
                    teachers, for only $6.99/month.
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
                    Explore ready-to-use learning resources for your next lesson
                  </h1>
                </li>
                <li>
                  <h2>
                    Make learning awesome with premium content for all ages from
                    trusted creators on Kahoot!’s marketplace starting at $3.
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
                    collections on science, math, social emotional learning, and
                    more. Available for free and in Kahoot!’s premium content
                    subscription.
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
            <img src={require("../images/kahoot-for-schools-icon.png")}></img>
            Kahoot! at school
          </h1>
          <p>Engaging group and distance learning for teachers and students.</p>
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
            Deliver training, presentations, meetings and events in-person or on
            any video conferencing platform.
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
  );
}

export default Hero;
