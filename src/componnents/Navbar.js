import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";

const Navbar = () => {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [kahoot_logo, setKahootLogo] = useState("purple");
  const [text_color, setTextColor] = useState("black");
  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("visible");
      setKahootLogo("white");
      setTextColor("white-text");
      var body = document.getElementsByTagName("body")[0];
      body.style.overflowY = "hidden";
      var nav = document.getElementById("nav");
      nav.style.backgroundColor = "#25076b";
      nav.style.boxShadow = "none";
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("hidden");
      setKahootLogo("purple");
      setTextColor("black");
      var body = document.getElementsByTagName("body")[0];
      body.style.overflowY = "scroll";
      setTimeout(function () {
        var canvasMenu = document.getElementsByClassName("canvasMenu");
        canvasMenu.style.display = "none";
      }, 1000);
      var nav = document.getElementById("nav");
      nav.style.backgroundColor = "white";
      nav.style.boxShadow = "0px 4px 5px 0px rgba(148,148,148,0.75)";
      
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <nav id="nav">
      <div className="burger-menu" onClick={updateMenu}>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
      </div>

      <a className="navBrandSecond">
        <svg width="24" height="25" viewBox="0 0 30 32" className="k-logo">
          <title>K!</title>
          <g
            stroke="none"
            className={"logo " + kahoot_logo}
            strokeWidth="1"
            fill="none"
            fillRule="evenodd">
            <path d="M0,3.12411067 L5.3201581,1.75968379 L5.30711462,12.5774704 L14.2901186,3.91304348 L18.9106719,5.68853755 L12.3814229,12.9316206 L16.7118577,28.7075099 L12.013834,28.7075099 L8.5486166,16.6209486 L5.27588933,19.8256917 L5.3201581,28.7075099 L0,28.5173913 L0,3.12411067 Z M22.8873518,29.9964427 L24.2067194,26.8901186 L27.2715415,26.8901186 L28.4312253,30.2988142 L25.6794466,31.944664 L22.8873518,29.9964427 Z M29.8806324,1.81146245 L26.2513834,25.1272727 L20.4770751,-1.77635684e-15 L29.8806324,1.81146245 Z"></path>
          </g>
        </svg>
        <svg
          width="146"
          height="50"
          viewBox="0 0 88 30"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="kahoot-logo">
          <title>Kahoot!</title>
          <g
            className={"logo " + kahoot_logo}
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd">
            <path d="M59.4563337,25.5366087 C55.5222657,25.9279665 52.3340315,22.7810536 52.3340315,18.5078772 C52.3340315,14.2343593 55.3409298,10.8227848 59.0502914,10.8886941 C62.75897,10.9535789 65.9482288,14.1004918 66.1725936,17.9174256 C66.3969584,21.7336764 63.3900601,25.1449094 59.4563337,25.5366087 Z M37.7762727,17.5267508 C38.000979,13.7101585 41.1895547,10.5635871 44.8985748,10.4980193 C48.6075949,10.432793 51.6144932,13.8443675 51.6144932,18.1175439 C51.6144932,22.3910618 48.426259,25.5379747 44.4921911,25.1466169 C40.5584646,24.7552591 37.5519078,21.3436845 37.7762727,17.5267508 Z M0,4.88343502 L4.5965759,3.70458064 L4.58530644,13.0510655 L12.3465531,5.56506693 L16.3386759,7.09908023 L10.6974547,13.3570485 L14.4389172,26.9872962 L10.3798607,26.9872962 L7.38593935,16.5445998 L4.55832802,19.3134733 L4.5965759,26.9872962 L0,26.8230352 L0,4.88343502 Z M37.6004007,25.5065568 L33.5642246,25.5065568 L33.2999044,19.2940078 L32.9249385,14.8756944 C32.8310263,11.7779574 30.0375649,12.5644295 29.1920135,12.9383708 L29.4153538,25.5065568 L25.5584646,25.3730307 L24.9314725,1.04942628 L28.859735,-7.10542736e-15 L28.9485247,9.84029232 C33.2203351,8.47600401 35.5076951,8.49068846 36.0820963,14.7650487 L37.6004007,25.5065568 Z M81.0803889,28.3167517 L82.2203124,25.6329114 L84.8682952,25.6329114 L85.8702532,28.5779984 L83.4927375,30 L81.0803889,28.3167517 Z M66.1087333,13.4960386 L65.4479328,8.93088061 L68.8776068,9.05040525 L68.8817048,2.6397869 L71.9480239,3.91084601 L71.8944085,9.60158456 L76.301794,9.89220016 L76.301794,12.6552682 L71.9958337,12.896025 L72.3567981,21.3057782 C72.3567981,21.3057782 72.3656771,21.9635051 73.7135734,21.9635051 C75.0611283,21.9635051 76.301794,21.2224524 76.301794,21.2224524 L76.301794,25.5113378 C76.3605318,26.8148393 74.518828,27.3667016 74.518828,27.3667016 C68.631386,28.2607458 69.0637237,24.3543393 69.0637237,24.3543393 L68.8721428,13.4960386 L66.1087333,13.4960386 Z M87.1225298,3.96514434 L83.9868864,24.1098261 L78.9979282,2.40005464 L87.1225298,3.96514434 Z M16.4390766,12.8263592 L15.3626719,9.98577088 C15.3626719,9.98542938 23.2198798,6.47345415 24.1552454,12.7758173 L24.0418678,26.3176168 L18.0772471,26.3169338 C18.0772471,26.3169338 15.4593161,26.417676 14.6540616,23.4971769 C14.6540616,23.4971769 12.6409252,16.0559148 20.5961433,14.6455241 L20.6169748,12.8325061 C20.6169748,12.8325061 19.1085739,11.2045806 16.4390766,12.8263592 Z M56.3920636,18.7834669 C56.560081,20.7604043 57.7846963,21.838175 58.5892678,21.9331117 C60.6290411,22.1738685 62.3652217,20.3082597 62.2491121,17.933476 C62.132661,15.5583508 61.1836354,14.0738548 59.2592888,14.0332165 C57.3363082,13.9925781 56.1724797,16.2010518 56.3920636,18.7834669 Z M20.5876059,23.7266642 L20.6962025,17.6636918 C17.445474,17.1913988 17.3846872,21.5909298 17.3846872,21.5909298 C17.7022812,24.4335671 20.5876059,23.7266642 20.5876059,23.7266642 Z M45.3595984,21.5431199 C46.1641699,21.4481832 47.3887852,20.3704125 47.5564612,18.3934751 C47.7763865,15.81106 46.6128996,13.6025863 44.6895775,13.6432247 C42.7652309,13.6835215 41.8158638,15.168359 41.7000956,17.5434842 C41.583303,19.9179264 43.3194837,21.7838767 45.3595984,21.5431199 Z"></path>
          </g>
        </svg>
      </a>

      <div className={"canvasMenu " + menu_class}>
        <ul>
          <li>
            <h1>
              Kahoot at school!
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
                    fillRule="evenodd">
                    <g
                      id="mobile_header"
                      transform="translate(-177.000000, -80.000000)"
                      fill="#FFFFFF">
                      <path
                        d="M189.317061,82.1246979 C189.510391,81.9313678 189.510391,81.6143064 189.317061,81.4209763 L188.033349,80.1449976 C187.840019,79.9516675 187.530691,79.9516675 187.337361,80.1449976 L183.231029,84.2513291 L179.124698,80.1449976 C178.931368,79.9516675 178.62204,79.9516675 178.42871,80.1449976 L177.144998,81.4209763 C176.951667,81.6143064 176.951667,81.9313678 177.144998,82.1246979 L182.883035,87.8550024 C183.076365,88.0483325 183.385694,88.0483325 183.579024,87.8550024 L189.317061,82.1246979 Z"
                        id="toggle"></path>
                    </g>
                  </g>
                </svg>
              </span>
            </h1>
            <ul className="displayItemContainer">
              <li>How it works</li>
              <li>Kahoot! EDU</li>
              <li>Ways to play</li>
              <li>Distance learning</li>
              <li>Assessment</li>
              <li>Interactive lessons</li>
              <li>Higher education</li>
              <li>Math labs</li>
              <li>Whiteboard.fi</li>
              <li>Learning apps</li>
              <li>Teacher plans</li>
              <li>School plans</li>
              <li>Higher education plans</li>
            </ul>
          </li>
          <li>
            <h1>
              Kahoot! at work
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
                    fillRule="evenodd">
                    <g
                      id="mobile_header"
                      transform="translate(-177.000000, -80.000000)"
                      fill="#FFFFFF">
                      <path
                        d="M189.317061,82.1246979 C189.510391,81.9313678 189.510391,81.6143064 189.317061,81.4209763 L188.033349,80.1449976 C187.840019,79.9516675 187.530691,79.9516675 187.337361,80.1449976 L183.231029,84.2513291 L179.124698,80.1449976 C178.931368,79.9516675 178.62204,79.9516675 178.42871,80.1449976 L177.144998,81.4209763 C176.951667,81.6143064 176.951667,81.9313678 177.144998,82.1246979 L182.883035,87.8550024 C183.076365,88.0483325 183.385694,88.0483325 183.579024,87.8550024 L189.317061,82.1246979 Z"
                        id="toggle"></path>
                    </g>
                  </g>
                </svg>
              </span>
            </h1>
            <ul className="displayItemContainer">
              <li>Product</li>
              <li>Solutions</li>
              <li>Plans & pricing</li>
              <li>Customer stories</li>
              <li>Resources</li>
            </ul>
          </li>
          <li>
            <h1>
              Kahoot! at Home
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
                    fillRule="evenodd">
                    <g
                      id="mobile_header"
                      transform="translate(-177.000000, -80.000000)"
                      fill="#FFFFFF">
                      <path
                        d="M189.317061,82.1246979 C189.510391,81.9313678 189.510391,81.6143064 189.317061,81.4209763 L188.033349,80.1449976 C187.840019,79.9516675 187.530691,79.9516675 187.337361,80.1449976 L183.231029,84.2513291 L179.124698,80.1449976 C178.931368,79.9516675 178.62204,79.9516675 178.42871,80.1449976 L177.144998,81.4209763 C176.951667,81.6143064 176.951667,81.9313678 177.144998,82.1246979 L182.883035,87.8550024 C183.076365,88.0483325 183.385694,88.0483325 183.579024,87.8550024 L189.317061,82.1246979 Z"
                        id="toggle"></path>
                    </g>
                  </g>
                </svg>
              </span>
            </h1>
            <ul className="displayItemContainer">
              <li>Kahoot! Kids</li>
              <li>Family & Friends</li>
              <li>Celebrations</li>
              <li>Language drops</li>
              <li>Kahoot! app</li>
              <li>Learning apps</li>
              <li>Available plans</li>
            </ul>
          </li>
          <li>
            <h1>
              Study{" "}
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
                    fillRule="evenodd">
                    <g
                      id="mobile_header"
                      transform="translate(-177.000000, -80.000000)"
                      fill="#FFFFFF">
                      <path
                        d="M189.317061,82.1246979 C189.510391,81.9313678 189.510391,81.6143064 189.317061,81.4209763 L188.033349,80.1449976 C187.840019,79.9516675 187.530691,79.9516675 187.337361,80.1449976 L183.231029,84.2513291 L179.124698,80.1449976 C178.931368,79.9516675 178.62204,79.9516675 178.42871,80.1449976 L177.144998,81.4209763 C176.951667,81.6143064 176.951667,81.9313678 177.144998,82.1246979 L182.883035,87.8550024 C183.076365,88.0483325 183.385694,88.0483325 183.579024,87.8550024 L189.317061,82.1246979 Z"
                        id="toggle"></path>
                    </g>
                  </g>
                </svg>
              </span>
            </h1>
            <ul className="displayItemContainer">
              <li>Study groups</li>
              <li>Available plans</li>
            </ul>
          </li>
          <li>
            <h1>
              Academy{" "}
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
                    fillRule="evenodd">
                    <g
                      id="mobile_header"
                      transform="translate(-177.000000, -80.000000)"
                      fill="#FFFFFF">
                      <path
                        d="M189.317061,82.1246979 C189.510391,81.9313678 189.510391,81.6143064 189.317061,81.4209763 L188.033349,80.1449976 C187.840019,79.9516675 187.530691,79.9516675 187.337361,80.1449976 L183.231029,84.2513291 L179.124698,80.1449976 C178.931368,79.9516675 178.62204,79.9516675 178.42871,80.1449976 L177.144998,81.4209763 C176.951667,81.6143064 176.951667,81.9313678 177.144998,82.1246979 L182.883035,87.8550024 C183.076365,88.0483325 183.385694,88.0483325 183.579024,87.8550024 L189.317061,82.1246979 Z"
                        id="toggle"></path>
                    </g>
                  </g>
                </svg>
              </span>
            </h1>
          </li>
          <li>
            <h1>
              Marketplace{" "}
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
                    fillRule="evenodd">
                    <g
                      id="mobile_header"
                      transform="translate(-177.000000, -80.000000)"
                      fill="#FFFFFF">
                      <path
                        d="M189.317061,82.1246979 C189.510391,81.9313678 189.510391,81.6143064 189.317061,81.4209763 L188.033349,80.1449976 C187.840019,79.9516675 187.530691,79.9516675 187.337361,80.1449976 L183.231029,84.2513291 L179.124698,80.1449976 C178.931368,79.9516675 178.62204,79.9516675 178.42871,80.1449976 L177.144998,81.4209763 C176.951667,81.6143064 176.951667,81.9313678 177.144998,82.1246979 L182.883035,87.8550024 C183.076365,88.0483325 183.385694,88.0483325 183.579024,87.8550024 L189.317061,82.1246979 Z"
                        id="toggle"></path>
                    </g>
                  </g>
                </svg>
              </span>
            </h1>
          </li>
          <li>
            <h1>
              More
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
                    fillRule="evenodd">
                    <g
                      id="mobile_header"
                      transform="translate(-177.000000, -80.000000)"
                      fill="#FFFFFF">
                      <path
                        d="M189.317061,82.1246979 C189.510391,81.9313678 189.510391,81.6143064 189.317061,81.4209763 L188.033349,80.1449976 C187.840019,79.9516675 187.530691,79.9516675 187.337361,80.1449976 L183.231029,84.2513291 L179.124698,80.1449976 C178.931368,79.9516675 178.62204,79.9516675 178.42871,80.1449976 L177.144998,81.4209763 C176.951667,81.6143064 176.951667,81.9313678 177.144998,82.1246979 L182.883035,87.8550024 C183.076365,88.0483325 183.385694,88.0483325 183.579024,87.8550024 L189.317061,82.1246979 Z"
                        id="toggle"></path>
                    </g>
                  </g>
                </svg>
              </span>
            </h1>
            <ul className="displayItemContainer">
              <li>News</li>
              <li>Explore content</li>
              <li>Blog</li>
              <li>Kahoot! Certified</li>
              <li>Help</li>
              <li>Contact Sales</li>
              <li>Library</li>
              <li>Shop</li>
            </ul>
          </li>
        </ul>
      </div>

      <ul className={"navItems navLeft " + text_color}>
        <a id="navBrand">
          <svg width="24" height="25" viewBox="0 0 30 32" className="k-logo">
            <title>K!</title>
            <g
              stroke="none"
              className={"logo " + kahoot_logo}
              strokeWidth="1"
              fill="none"
              fillRule="evenodd">
              <path d="M0,3.12411067 L5.3201581,1.75968379 L5.30711462,12.5774704 L14.2901186,3.91304348 L18.9106719,5.68853755 L12.3814229,12.9316206 L16.7118577,28.7075099 L12.013834,28.7075099 L8.5486166,16.6209486 L5.27588933,19.8256917 L5.3201581,28.7075099 L0,28.5173913 L0,3.12411067 Z M22.8873518,29.9964427 L24.2067194,26.8901186 L27.2715415,26.8901186 L28.4312253,30.2988142 L25.6794466,31.944664 L22.8873518,29.9964427 Z M29.8806324,1.81146245 L26.2513834,25.1272727 L20.4770751,-1.77635684e-15 L29.8806324,1.81146245 Z"></path>
            </g>
          </svg>
          <svg
            width="146"
            height="50"
            viewBox="0 0 88 30"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="kahoot-logo">
            <title>Kahoot!</title>
            <g
              className={"logo " + kahoot_logo}
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd">
              <path d="M59.4563337,25.5366087 C55.5222657,25.9279665 52.3340315,22.7810536 52.3340315,18.5078772 C52.3340315,14.2343593 55.3409298,10.8227848 59.0502914,10.8886941 C62.75897,10.9535789 65.9482288,14.1004918 66.1725936,17.9174256 C66.3969584,21.7336764 63.3900601,25.1449094 59.4563337,25.5366087 Z M37.7762727,17.5267508 C38.000979,13.7101585 41.1895547,10.5635871 44.8985748,10.4980193 C48.6075949,10.432793 51.6144932,13.8443675 51.6144932,18.1175439 C51.6144932,22.3910618 48.426259,25.5379747 44.4921911,25.1466169 C40.5584646,24.7552591 37.5519078,21.3436845 37.7762727,17.5267508 Z M0,4.88343502 L4.5965759,3.70458064 L4.58530644,13.0510655 L12.3465531,5.56506693 L16.3386759,7.09908023 L10.6974547,13.3570485 L14.4389172,26.9872962 L10.3798607,26.9872962 L7.38593935,16.5445998 L4.55832802,19.3134733 L4.5965759,26.9872962 L0,26.8230352 L0,4.88343502 Z M37.6004007,25.5065568 L33.5642246,25.5065568 L33.2999044,19.2940078 L32.9249385,14.8756944 C32.8310263,11.7779574 30.0375649,12.5644295 29.1920135,12.9383708 L29.4153538,25.5065568 L25.5584646,25.3730307 L24.9314725,1.04942628 L28.859735,-7.10542736e-15 L28.9485247,9.84029232 C33.2203351,8.47600401 35.5076951,8.49068846 36.0820963,14.7650487 L37.6004007,25.5065568 Z M81.0803889,28.3167517 L82.2203124,25.6329114 L84.8682952,25.6329114 L85.8702532,28.5779984 L83.4927375,30 L81.0803889,28.3167517 Z M66.1087333,13.4960386 L65.4479328,8.93088061 L68.8776068,9.05040525 L68.8817048,2.6397869 L71.9480239,3.91084601 L71.8944085,9.60158456 L76.301794,9.89220016 L76.301794,12.6552682 L71.9958337,12.896025 L72.3567981,21.3057782 C72.3567981,21.3057782 72.3656771,21.9635051 73.7135734,21.9635051 C75.0611283,21.9635051 76.301794,21.2224524 76.301794,21.2224524 L76.301794,25.5113378 C76.3605318,26.8148393 74.518828,27.3667016 74.518828,27.3667016 C68.631386,28.2607458 69.0637237,24.3543393 69.0637237,24.3543393 L68.8721428,13.4960386 L66.1087333,13.4960386 Z M87.1225298,3.96514434 L83.9868864,24.1098261 L78.9979282,2.40005464 L87.1225298,3.96514434 Z M16.4390766,12.8263592 L15.3626719,9.98577088 C15.3626719,9.98542938 23.2198798,6.47345415 24.1552454,12.7758173 L24.0418678,26.3176168 L18.0772471,26.3169338 C18.0772471,26.3169338 15.4593161,26.417676 14.6540616,23.4971769 C14.6540616,23.4971769 12.6409252,16.0559148 20.5961433,14.6455241 L20.6169748,12.8325061 C20.6169748,12.8325061 19.1085739,11.2045806 16.4390766,12.8263592 Z M56.3920636,18.7834669 C56.560081,20.7604043 57.7846963,21.838175 58.5892678,21.9331117 C60.6290411,22.1738685 62.3652217,20.3082597 62.2491121,17.933476 C62.132661,15.5583508 61.1836354,14.0738548 59.2592888,14.0332165 C57.3363082,13.9925781 56.1724797,16.2010518 56.3920636,18.7834669 Z M20.5876059,23.7266642 L20.6962025,17.6636918 C17.445474,17.1913988 17.3846872,21.5909298 17.3846872,21.5909298 C17.7022812,24.4335671 20.5876059,23.7266642 20.5876059,23.7266642 Z M45.3595984,21.5431199 C46.1641699,21.4481832 47.3887852,20.3704125 47.5564612,18.3934751 C47.7763865,15.81106 46.6128996,13.6025863 44.6895775,13.6432247 C42.7652309,13.6835215 41.8158638,15.168359 41.7000956,17.5434842 C41.583303,19.9179264 43.3194837,21.7838767 45.3595984,21.5431199 Z"></path>
            </g>
          </svg>
        </a>
        <li className="navItem news">
          <span className="navItemIcon"></span>
          <p>News</p>
        </li>
        <li className="navItem school">
          <span className="navItemIcon"></span>
          <p className="hoverAnim">
            School
            <span>
              <ul>
                <li>How it works</li>
                <li>Kahoot! EDU</li>
                <li>Ways to play</li>
                <li>Distance learning</li>
                <li>Assessment</li>
                <li>Interactive lessons</li>
                <li>Higher education</li>
                <li>Math labs</li>
                <li>Whiteboard.fi</li>
                <li>Learning apps</li>
                <li>Teacher plans</li>
                <li>School plans</li>
                <li>Higher education plans</li>
              </ul>
            </span>
          </p>
        </li>
        <li className="navItem work">
          <span className="navItemIcon"></span>
          <p className="hoverAnim">
            Work
            <span>
              <ul>
                <li>Product</li>
                <li>Solutions</li>
                <li>Plans & pricing</li>
                <li>Customer stories</li>
                <li>Resources</li>
              </ul>
            </span>
          </p>
        </li>
        <li className="navItem home">
          <span className="navItemIcon"></span>
          <p className="hoverAnim">
            Home
            <span>
              <ul>
                <li>Kahoot! Kids</li>
                <li>Family & Friends</li>
                <li>Celebrations</li>
                <li>Language drops</li>
                <li>Kahoot! app</li>
                <li>Learning apps</li>
                <li>Available plans</li>
              </ul>
            </span>
          </p>
        </li>
        <li className="navItem study">
          <span className="navItemIcon"></span>
          <p className="hoverAnim">
            Study
            <span>
              <ul>
                <li>Study groups</li>
                <li>Available plans</li>
              </ul>
            </span>
          </p>
        </li>
        <li className="navItem academy">
          <span className="navItemIcon"></span>
          <p className="hoverAnim">Academy</p>
        </li>
        <li className="navItem marketplace">
          <span className="navItemIcon"></span>
          <p className="hoverAnim">Marketplace</p>
        </li>
      </ul>

      <ul className={"navItems navMain nav-right " + text_color}>
        <li className="navItem not-very-important sales">Contact sales</li>
        <li className="navItem not-very-important hoverAnim">
          Explore content
        </li>
        <li className="navItem important hoverAnim">Play</li>
        <li className="navItem sign-up important">
          <Link to="/register">Sign up</Link>
        </li>
        <li className="navItem log-in important hoverAnim">
          <Link to="/login">Log in</Link>
        </li>
        <li className="navItem language important">
          <span></span>EN
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
