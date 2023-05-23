import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../style/navbarLoggedIn.css";
import { useSelector, useDispatch } from "react-redux";
import { reset, logout } from "../features/auth/authSlice";

const Navbar = () => {
  const [directoryStates, setDirectoryStates] = useState({
    home: false,
    discover: false,
    library: false,
    reports: false,
    groups: false,
    marketplace: false,
  });

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccsess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  const singOut = (e) => {
    e.preventDefault();
    navigate("/")
  
    dispatch(logout());
  };

  useEffect(() => {
    const pathname = location.pathname.substring(1);
    setDirectoryStates((prev) => ({
      ...prev,
      [pathname]: true,
    }));
  }, [location.pathname]);

  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [canvasMenu, setCanvasMenu] = useState("hidden-canvas");
  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setIsMenuClicked(true);
      setCanvasMenu("visible-canvas");
      var body = document.getElementsByTagName("body")[0];
      body.style.overflowY = "hidden";
    } else {
      setBurgerClass("burger-bar false");
      setIsMenuClicked(false);
      setCanvasMenu("hidden-canvas");
      var body = document.getElementsByTagName("body")[0];
      body.style.overflowY = "scroll";
    }
  };

  const outerCanvasUpdate = () => {
    if (isMenuClicked) {
      setBurgerClass("burger-bar false");
      setIsMenuClicked(false);
      setCanvasMenu("hidden-canvas");
      var body = document.getElementsByTagName("body")[0];
      body.style.overflowY = "scroll";
    }
  };
  const [accountInfo, setAccountInfo] = useState(false);
  const openAccountInfo = () => {
    if (!accountInfo) {
      setAccountInfo(true);
    } else {
      setAccountInfo(false);
    }
  };
  return (
    <nav className="navLoggedIn">
      {/* Burger nom nom 🍔*/}
      <div className="burger-menu-logged-in" onClick={updateMenu}>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
      </div>

      <div
        className={"nav-offcanvas " + canvasMenu}
        onClick={outerCanvasUpdate}>
        <div className="nav-offcanvas-inner">
          <div className="nav-second-item close-btn" onClick={updateMenu}>
            <svg
              viewBox="0 0 32 32"
              focusable="false"
              stroke="none"
              strokeWidth="0"
              aria-hidden="true">
              <title>Icon</title>
              <path
                d="M24.714 8.414L23.3 7 16.007 14.293 8.714 7 7.3 8.414 14.593 15.707 7.3 23 8.714 24.414 16.007 17.122 23.3 24.414 24.714 23 17.421 15.707z"
                fill="rgb(0, 0, 0)"></path>
            </svg>
          </div>
          <div className="nav-second-item account-info">
            <div className="account-info-logo">
              <svg
                viewBox="0 0 32 32"
                focusable="false"
                stroke="none"
                strokeWidth="0"
                aria-hidden="true"
                fill="rgb(255, 255, 255)">
                <title id="label-85f02de4-bc36-4cae-9d83-b481d6380068">
                  Icon
                </title>
                <path d="M16,16 C13.2385763,16 11,13.7614237 11,11 C11,8.23857625 13.2385763,6 16,6 C18.7614237,6 21,8.23857625 21,11 C21,13.7614237 18.7614237,16 16,16 Z M25,24.3125 L7,24.3125 C7,20.2739178 11.0294373,17 16,17 C20.9705627,17 25,20.2739178 25,24.3125 Z"></path>
              </svg>
            </div>
            <h1>{user.name}</h1>
          </div>
          <hr className="break-line"></hr>
          <ul className="nav-second-items-list">
            <li className="nav-second-item home">
              <span
                data-functional-selector="icon"
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  background: "white",
                  width: "32px",
                  height: "32px",
                }}>
                <svg
                  viewBox="0 0 32 32"
                  focusable="false"
                  stroke="none"
                  strokeWidth="0"
                  aria-hidden="true">
                  <title>Icon</title>
                  <path
                    d="M25.61,14.21l-9-7a1,1,0,0,0-1.22,0l-9,7a1,1,0,0,0,1.22,1.58l.39-.3V24a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V19h2v5a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V15.49l.39.3A1,1,0,0,0,25,16a1,1,0,0,0,.61-1.79ZM22,14v9H19V18a1,1,0,0,0-1-1H14a1,1,0,0,0-1,1v5H10V14l6-4.73Z"
                    fill="rgb(51, 51, 51)"></path>
                </svg>
              </span>
              <p>Home</p>
            </li>
            <li className="nav-second-item discover">
              <span
                data-functional-selector="icon"
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  background: "white",
                  width: "32px",
                  height: "32px",
                }}>
                <svg
                  viewBox="0 0 32 32"
                  focusable="false"
                  stroke="none"
                  strokeWidth="0"
                  aria-hidden="true">
                  <title>Icon</title>
                  <path
                    d="M16,6 C21.528,6 26.001,10.475 26,16 C26,21.528 21.525,26 16,26 C10.472,26 6,21.526 6,16 C5.999,10.473 10.475,6 16,6 Z M8,16 C8,18.096 8.805,20.067 10.262,21.568 L13.088,13.088 L21.567,10.262 C20.067,8.805 18.097,8 16,8 C13.863,8 11.854,8.832 10.343,10.343 C8.832,11.854 8,13.863 8,16 Z M14.669,14.669 L13.338,18.663 L17.33,17.332 L14.669,14.669 Z M16,24 C20.422,24 24,20.422 24,16 C24,13.904 23.195,11.933 21.738,10.432 L18.912,18.912 L10.434,21.739 C11.934,23.195 13.904,24 16,24 Z"
                    fill="rgb(51, 51, 51)"></path>
                </svg>
              </span>
              <p>Discover</p>
            </li>
            <li className="nav-second-item library">
              <span
                data-functional-selector="icon"
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  background: "white",
                  width: "32px",
                  height: "32px",
                }}>
                <svg
                  viewBox="0 0 32 32"
                  focusable="false"
                  stroke="none"
                  strokeWidth="0"
                  aria-hidden="true">
                  <title>Icon</title>
                  <path
                    d="M8,11 C7.447715,11 7,10.55228 7,10 C7,9.44772 7.447715,9 8,9 C8.552285,9 9,9.44772 9,10 C9,10.55228 8.552285,11 8,11 Z M11,9 L25,9 L25,11 L11,11 L11,9 Z M8,17 C7.447715,17 7,16.55228 7,16 C7,15.44772 7.447715,15 8,15 C8.552285,15 9,15.44772 9,16 C9,16.55228 8.552285,17 8,17 Z M11,15 L25,15 L25,17 L11,17 L11,15 Z M8,23 C7.447715,23 7,22.552285 7,22 C7,21.44772 7.447715,21 8,21 C8.552285,21 9,21.44772 9,22 C9,22.552285 8.552285,23 8,23 Z M11,21 L25,21 L25,23 L11,23 L11,21 Z"
                    fill="rgb(51, 51, 51)"></path>
                </svg>
              </span>
              <p>Library</p>
            </li>
            <li className="nav-second-item reports">
              <span
                data-functional-selector="icon"
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  background: "white",
                  width: "32px",
                  height: "32px",
                }}>
                <svg
                  viewBox="0 0 32 32"
                  focusable="false"
                  stroke="none"
                  strokeWidth="0"
                  aria-hidden="true">
                  <title>Icon</title>
                  <path
                    d="M25.1666667,20.8323333 L27,20.8323333 L27,22.6656667 L5,22.6656667 L5,20.8323333 L6.83333333,20.8323333 L6.83333333,16.249 C6.83333333,15.7439167 7.24308333,15.3323333 7.75,15.3323333 L11.4166667,15.3323333 C11.9235833,15.3323333 12.3333333,15.7439167 12.3333333,16.249 L12.3333333,20.8323333 L13.25,20.8323333 L13.25,12.5823333 C13.25,12.07725 13.65975,11.6656667 14.1666667,11.6656667 L17.8333333,11.6656667 C18.34025,11.6656667 18.75,12.07725 18.75,12.5823333 L18.75,20.8323333 L19.6666667,20.8323333 L19.6666667,8.91566667 C19.6666667,8.41058333 20.0764167,7.999 20.5833333,7.999 L24.25,7.999 C24.7569167,7.999 25.1666667,8.41058333 25.1666667,8.91566667 L25.1666667,20.8323333 Z M8.66666667,20.8323333 L10.5,20.8323333 L10.5,17.1656667 L8.66666667,17.1656667 L8.66666667,20.8323333 Z M15.0833333,20.8323333 L16.9166667,20.8323333 L16.9166667,13.499 L15.0833333,13.499 L15.0833333,20.8323333 Z M21.5,20.8323333 L23.3333333,20.8323333 L23.3333333,9.83233333 L21.5,9.83233333 L21.5,20.8323333 Z"
                    fill="rgb(51, 51, 51)"></path>
                </svg>
              </span>
              <p>Reports</p>
            </li>
            <li className="nav-second-item groups">
              <span
                data-functional-selector="icon"
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  background: "white",
                  width: "32px",
                  height: "32px",
                }}>
                <svg
                  viewBox="0 0 32 32"
                  focusable="false"
                  stroke="none"
                  strokeWidth="0"
                  aria-hidden="true">
                  <title>Icon</title>
                  <path
                    d="M26,16 C24.897,16 24,15.103 24,14 C24,12.897 24.897,12 26,12 C27.103,12 28,12.897 28,14 C28,15.103 27.103,16 26,16 L26,16 Z M10,23 C10,22.298 10.127,21.627 10.35,21 C10.487,20.615 10.661,20.248 10.87,19.904 C11.923,18.167 13.825,17 16,17 C18.175,17 20.077,18.167 21.13,19.904 C21.339,20.248 21.513,20.615 21.65,21 C21.873,21.627 22,22.298 22,23 L10,23 Z M16,9 C17.654,9 19,10.346 19,12 C19,13.654 17.654,15 16,15 C14.346,15 13,13.654 13,12 C13,10.346 14.346,9 16,9 L16,9 Z M6,16 C4.897,16 4,15.103 4,14 C4,12.897 4.897,12 6,12 C7.103,12 8,12.897 8,14 C8,15.103 7.103,16 6,16 L6,16 Z M28.793,16.855 C29.536,16.128 30,15.119 30,14 C30,11.794 28.206,10 26,10 C23.794,10 22,11.794 22,14 C22,15.119 22.464,16.128 23.207,16.855 C22.795,17.133 22.444,17.486 22.132,17.871 C21.367,16.958 20.4,16.223 19.305,15.723 C20.336,14.807 21,13.485 21,12 C21,9.243 18.757,7 16,7 C13.243,7 11,9.243 11,12 C11,13.485 11.664,14.807 12.695,15.723 C11.6,16.223 10.633,16.958 9.868,17.871 C9.556,17.486 9.205,17.133 8.793,16.855 C9.536,16.128 10,15.119 10,14 C10,11.794 8.206,10 6,10 C3.794,10 2,11.794 2,14 C2,15.119 2.464,16.128 3.207,16.855 C1.876,17.754 1,19.277 1,21 L3,21 C3,19.346 4.346,18 6,18 C7.198,18 8.227,18.711 8.707,19.729 C8.257,20.729 8,21.834 8,23 L8,24 C8,24.552 8.448,25 9,25 L23,25 C23.552,25 24,24.552 24,24 L24,23 C24,21.834 23.743,20.729 23.293,19.729 C23.773,18.711 24.802,18 26,18 C27.654,18 29,19.346 29,21 L31,21 C31,19.277 30.124,17.754 28.793,16.855 L28.793,16.855 Z"
                    fill="rgb(51, 51, 51)"></path>
                </svg>
              </span>
              <p>Groups</p>
            </li>
            <li className="nav-second-item marketplaces">
              <span
                data-functional-selector="icon"
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  background: "white",
                  width: "32px",
                  height: "32px",
                }}>
                <svg
                  viewBox="0 0 32 32"
                  focusable="false"
                  stroke="none"
                  strokeWidth="0"
                  aria-hidden="true">
                  <title>Icon</title>
                  <path
                    d="M25.9,14.9L25.9,14.9l-2.7-7.3c-0.1-0.2-0.2-0.3-0.3-0.4S22.5,7,22.4,7H9.6C9.5,7,9.3,7.1,9.1,7.2 S8.9,7.4,8.8,7.6l-2.7,7.3C6,15,6,15.1,6,15.3c0,0.1,0.1,0.3,0.2,0.4c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.1,0.3,0.1,0.4,0.1h0.9v8.2 c0,0.2,0.1,0.5,0.3,0.6c0.2,0.2,0.4,0.3,0.6,0.3h14.5c0.2,0,0.5-0.1,0.6-0.3c0.2-0.2,0.3-0.4,0.3-0.6v-8.2h0.9c0.1,0,0.3,0,0.4-0.1 c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.1-0.3,0.2-0.4C26,15.1,26,15,25.9,14.9z M18,8.8l1.4,5.5h-2.5l0-5.5H18z M14,8.8h1.1v5.5h-2.5 L14,8.8z M8.2,14.3l2.1-5.5h1.8l-1.4,5.5H8.2z M19.6,23.4h-1.8v-4.5h1.8V23.4z M22.4,23.4h-0.9v-5.5c0-0.2-0.1-0.5-0.3-0.6 C21,17.1,20.8,17,20.5,17h-3.6c-0.2,0-0.5,0.1-0.6,0.3c-0.2,0.2-0.3,0.4-0.3,0.6v5.5H9.6v-7.3h12.7V23.4z M21.3,14.3l-1.4-5.5h1.8 l2.1,5.5H21.3z M11.5,21.5h2.7c0.5,0,0.9-0.4,0.9-0.9v-2.7c0-0.5-0.4-0.9-0.9-0.9h-2.7c-0.5,0-0.9,0.4-0.9,0.9v2.7 C10.5,21.1,10.9,21.5,11.5,21.5z M12.4,18.8h0.9v0.9h-0.9V18.8z"
                    fill="rgb(51, 51, 51)"></path>
                </svg>
              </span>
              <p>Marketplace</p>
            </li>
          </ul>
          <hr className="break-line"></hr>
          <div className="nav-second-item upgrade upgrade-canvas">
            <span>
              <svg
                viewBox="0 0 32 32"
                focusable="false"
                stroke="none"
                strokeWidth="0"
                aria-hidden="true"
                fill="white">
                <title>Icon</title>
                <path d="M16,5.4 18.9,12.6 26,12.6 19.8,17.8 23.2,25.5 16,20.7 8.8,25.5 12.2,17.8 6,12.6 13.1,12.6Z"></path>
              </svg>
            </span>
            <p>Upgrade</p>
          </div>
          <hr className="break-line"></hr>
          <ul className="nav-second-items-list-other">
            <li className="nav-second-item other">Change languange</li>
            <li className="nav-second-item other">Billing</li>
            <li className="nav-second-item other">Profile settings</li>
            <li className="nav-second-item other">Upgrade</li>
            <li className="nav-second-item resoursces">
              <span
                data-functional-selector="icon"
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  width: "24px",
                  height: "24px",
                }}>
                <svg
                  viewBox="0 0 32 32"
                  focusable="false"
                  stroke="none"
                  strokeWidth="0"
                  aria-hidden="true">
                  <title>Icon</title>
                  <path
                    d="M15,22 L17,22 L17,20 L15,20 L15,22 Z M16,6 C10.48,6 6,10.48 6,16 C6,21.52 10.48,26 16,26 C21.52,26 26,21.52 26,16 C26,10.48 21.52,6 16,6 Z M16,24 C11.59,24 8,20.41 8,16 C8,11.59 11.59,8 16,8 C20.41,8 24,11.59 24,16 C24,20.41 20.41,24 16,24 Z M16,10 C13.79,10 12,11.79 12,14 L14,14 C14,12.9 14.9,12 16,12 C17.1,12 18,12.9 18,14 C18,16 15,15.75 15,19 L17,19 C17,16.75 20,16.5 20,14 C20,11.79 18.21,10 16,10 Z"
                    fill="rgb(51, 51, 51)"></path>
                </svg>
              </span>
              Resoursces
            </li>
          </ul>
          <hr className="break-line"></hr>
          <div className="sign-out">
            <span
              data-functional-selector="icon"
              style={{
                display: "inline-block",
                verticalAlign: "middle",
                width: "32px",
                height: "32px",
              }}>
              <svg
                viewBox="0 0 32 32"
                focusable="false"
                stroke="none"
                strokeWidth="0"
                aria-hidden="true">
                <title>Icon</title>
                <path
                  d="M21,6 C22.103,6 23,6.898 23,8 L23,11 L21,11 L21,8 L10,8 L10,24 L21,24 L21,21 L23,21 L23,24 C23,25.103 22.103,26 21,26 L10,26 C8.897,26 8,25.103 8,24 L8,8 C8,6.898 8.897,6 10,6 L21,6 Z M16.293,11.292 L17.707,12.708 L15.41,15 L24,15 L24,17 L15.418,17 L17.708,19.294 L16.292,20.706 L11.586,15.991 L16.293,11.292 Z"
                  fill="rgb(198, 9, 41)"></path>
              </svg>
            </span>
            Sign out
          </div>
        </div>
      </div>

      {/* Nav main items */}
      <ul className="nav-main-items">
        {/* Nav brand logo */}
        <svg
          width="146"
          height="50"
          viewBox="0 0 88 30"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="navbar-logged-in-kahoot-logo">
          <title>Kahoot!</title>
          <g
            className={"logo"}
            stroke="none"
            strokeWidth="1"
            fill="rgb(70,23,143)"
            fillRule="evenodd">
            <path d="M59.4563337,25.5366087 C55.5222657,25.9279665 52.3340315,22.7810536 52.3340315,18.5078772 C52.3340315,14.2343593 55.3409298,10.8227848 59.0502914,10.8886941 C62.75897,10.9535789 65.9482288,14.1004918 66.1725936,17.9174256 C66.3969584,21.7336764 63.3900601,25.1449094 59.4563337,25.5366087 Z M37.7762727,17.5267508 C38.000979,13.7101585 41.1895547,10.5635871 44.8985748,10.4980193 C48.6075949,10.432793 51.6144932,13.8443675 51.6144932,18.1175439 C51.6144932,22.3910618 48.426259,25.5379747 44.4921911,25.1466169 C40.5584646,24.7552591 37.5519078,21.3436845 37.7762727,17.5267508 Z M0,4.88343502 L4.5965759,3.70458064 L4.58530644,13.0510655 L12.3465531,5.56506693 L16.3386759,7.09908023 L10.6974547,13.3570485 L14.4389172,26.9872962 L10.3798607,26.9872962 L7.38593935,16.5445998 L4.55832802,19.3134733 L4.5965759,26.9872962 L0,26.8230352 L0,4.88343502 Z M37.6004007,25.5065568 L33.5642246,25.5065568 L33.2999044,19.2940078 L32.9249385,14.8756944 C32.8310263,11.7779574 30.0375649,12.5644295 29.1920135,12.9383708 L29.4153538,25.5065568 L25.5584646,25.3730307 L24.9314725,1.04942628 L28.859735,-7.10542736e-15 L28.9485247,9.84029232 C33.2203351,8.47600401 35.5076951,8.49068846 36.0820963,14.7650487 L37.6004007,25.5065568 Z M81.0803889,28.3167517 L82.2203124,25.6329114 L84.8682952,25.6329114 L85.8702532,28.5779984 L83.4927375,30 L81.0803889,28.3167517 Z M66.1087333,13.4960386 L65.4479328,8.93088061 L68.8776068,9.05040525 L68.8817048,2.6397869 L71.9480239,3.91084601 L71.8944085,9.60158456 L76.301794,9.89220016 L76.301794,12.6552682 L71.9958337,12.896025 L72.3567981,21.3057782 C72.3567981,21.3057782 72.3656771,21.9635051 73.7135734,21.9635051 C75.0611283,21.9635051 76.301794,21.2224524 76.301794,21.2224524 L76.301794,25.5113378 C76.3605318,26.8148393 74.518828,27.3667016 74.518828,27.3667016 C68.631386,28.2607458 69.0637237,24.3543393 69.0637237,24.3543393 L68.8721428,13.4960386 L66.1087333,13.4960386 Z M87.1225298,3.96514434 L83.9868864,24.1098261 L78.9979282,2.40005464 L87.1225298,3.96514434 Z M16.4390766,12.8263592 L15.3626719,9.98577088 C15.3626719,9.98542938 23.2198798,6.47345415 24.1552454,12.7758173 L24.0418678,26.3176168 L18.0772471,26.3169338 C18.0772471,26.3169338 15.4593161,26.417676 14.6540616,23.4971769 C14.6540616,23.4971769 12.6409252,16.0559148 20.5961433,14.6455241 L20.6169748,12.8325061 C20.6169748,12.8325061 19.1085739,11.2045806 16.4390766,12.8263592 Z M56.3920636,18.7834669 C56.560081,20.7604043 57.7846963,21.838175 58.5892678,21.9331117 C60.6290411,22.1738685 62.3652217,20.3082597 62.2491121,17.933476 C62.132661,15.5583508 61.1836354,14.0738548 59.2592888,14.0332165 C57.3363082,13.9925781 56.1724797,16.2010518 56.3920636,18.7834669 Z M20.5876059,23.7266642 L20.6962025,17.6636918 C17.445474,17.1913988 17.3846872,21.5909298 17.3846872,21.5909298 C17.7022812,24.4335671 20.5876059,23.7266642 20.5876059,23.7266642 Z M45.3595984,21.5431199 C46.1641699,21.4481832 47.3887852,20.3704125 47.5564612,18.3934751 C47.7763865,15.81106 46.6128996,13.6025863 44.6895775,13.6432247 C42.7652309,13.6835215 41.8158638,15.168359 41.7000956,17.5434842 C41.583303,19.9179264 43.3194837,21.7838767 45.3595984,21.5431199 Z"></path>
          </g>
        </svg>
        <li
          className={
            "nav-main-item home " +
            (directoryStates.home ? "selected" : "unselected")
          }>
          <span
            data-functional-selector="icon"
            style={{
              display: "inline-block",
              verticalAlign: "middle",
              background: "white",
              width: "32px",
              height: "32px",
            }}>
            <svg
              viewBox="0 0 32 32"
              focusable="false"
              stroke="none"
              strokeWidth="0"
              aria-hidden="true">
              <title>Icon</title>
              <path
                d="M25.61,14.21l-9-7a1,1,0,0,0-1.22,0l-9,7a1,1,0,0,0,1.22,1.58l.39-.3V24a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V19h2v5a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V15.49l.39.3A1,1,0,0,0,25,16a1,1,0,0,0,.61-1.79ZM22,14v9H19V18a1,1,0,0,0-1-1H14a1,1,0,0,0-1,1v5H10V14l6-4.73Z"
                fill="rgb(51, 51, 51)"></path>
            </svg>
          </span>
          <p>Home</p>
        </li>
        <li
          className={
            "nav-main-item discover " +
            (directoryStates.discover ? "selected" : "unselected")
          }>
          <span
            data-functional-selector="icon"
            style={{
              display: "inline-block",
              verticalAlign: "middle",
              background: "white",
              width: "32px",
              height: "32px",
            }}>
            <svg
              viewBox="0 0 32 32"
              focusable="false"
              stroke="none"
              strokeWidth="0"
              aria-hidden="true">
              <title>Icon</title>
              <path
                d="M16,6 C21.528,6 26.001,10.475 26,16 C26,21.528 21.525,26 16,26 C10.472,26 6,21.526 6,16 C5.999,10.473 10.475,6 16,6 Z M8,16 C8,18.096 8.805,20.067 10.262,21.568 L13.088,13.088 L21.567,10.262 C20.067,8.805 18.097,8 16,8 C13.863,8 11.854,8.832 10.343,10.343 C8.832,11.854 8,13.863 8,16 Z M14.669,14.669 L13.338,18.663 L17.33,17.332 L14.669,14.669 Z M16,24 C20.422,24 24,20.422 24,16 C24,13.904 23.195,11.933 21.738,10.432 L18.912,18.912 L10.434,21.739 C11.934,23.195 13.904,24 16,24 Z"
                fill="rgb(51, 51, 51)"></path>
            </svg>
          </span>
          <p>Discover</p>
        </li>
        <li
          className={
            "nav-main-item library " +
            (directoryStates.library ? "selected" : "unselected")
          }>
          <span
            data-functional-selector="icon"
            style={{
              display: "inline-block",
              verticalAlign: "middle",
              background: "white",
              width: "32px",
              height: "32px",
            }}>
            <svg
              viewBox="0 0 32 32"
              focusable="false"
              stroke="none"
              strokeWidth="0"
              aria-hidden="true">
              <title>Icon</title>
              <path
                d="M8,11 C7.447715,11 7,10.55228 7,10 C7,9.44772 7.447715,9 8,9 C8.552285,9 9,9.44772 9,10 C9,10.55228 8.552285,11 8,11 Z M11,9 L25,9 L25,11 L11,11 L11,9 Z M8,17 C7.447715,17 7,16.55228 7,16 C7,15.44772 7.447715,15 8,15 C8.552285,15 9,15.44772 9,16 C9,16.55228 8.552285,17 8,17 Z M11,15 L25,15 L25,17 L11,17 L11,15 Z M8,23 C7.447715,23 7,22.552285 7,22 C7,21.44772 7.447715,21 8,21 C8.552285,21 9,21.44772 9,22 C9,22.552285 8.552285,23 8,23 Z M11,21 L25,21 L25,23 L11,23 L11,21 Z"
                fill="rgb(51, 51, 51)"></path>
            </svg>
          </span>
          <p>Library</p>
        </li>
        <li
          className={
            "nav-main-item reports " +
            (directoryStates.reports ? "selected" : "unselected")
          }>
          <span
            data-functional-selector="icon"
            style={{
              display: "inline-block",
              verticalAlign: "middle",
              background: "white",
              width: "32px",
              height: "32px",
            }}>
            <svg
              viewBox="0 0 32 32"
              focusable="false"
              stroke="none"
              strokeWidth="0"
              aria-hidden="true">
              <title>Icon</title>
              <path
                d="M25.1666667,20.8323333 L27,20.8323333 L27,22.6656667 L5,22.6656667 L5,20.8323333 L6.83333333,20.8323333 L6.83333333,16.249 C6.83333333,15.7439167 7.24308333,15.3323333 7.75,15.3323333 L11.4166667,15.3323333 C11.9235833,15.3323333 12.3333333,15.7439167 12.3333333,16.249 L12.3333333,20.8323333 L13.25,20.8323333 L13.25,12.5823333 C13.25,12.07725 13.65975,11.6656667 14.1666667,11.6656667 L17.8333333,11.6656667 C18.34025,11.6656667 18.75,12.07725 18.75,12.5823333 L18.75,20.8323333 L19.6666667,20.8323333 L19.6666667,8.91566667 C19.6666667,8.41058333 20.0764167,7.999 20.5833333,7.999 L24.25,7.999 C24.7569167,7.999 25.1666667,8.41058333 25.1666667,8.91566667 L25.1666667,20.8323333 Z M8.66666667,20.8323333 L10.5,20.8323333 L10.5,17.1656667 L8.66666667,17.1656667 L8.66666667,20.8323333 Z M15.0833333,20.8323333 L16.9166667,20.8323333 L16.9166667,13.499 L15.0833333,13.499 L15.0833333,20.8323333 Z M21.5,20.8323333 L23.3333333,20.8323333 L23.3333333,9.83233333 L21.5,9.83233333 L21.5,20.8323333 Z"
                fill="rgb(51, 51, 51)"></path>
            </svg>
          </span>
          <p>Reports</p>
        </li>
        <li
          className={
            "nav-main-item groups " +
            (directoryStates.groups ? "selected" : "unselected")
          }>
          <span
            data-functional-selector="icon"
            style={{
              display: "inline-block",
              verticalAlign: "middle",
              background: "white",
              width: "32px",
              height: "32px",
            }}>
            <svg
              viewBox="0 0 32 32"
              focusable="false"
              stroke="none"
              strokeWidth="0"
              aria-hidden="true">
              <title>Icon</title>
              <path
                d="M26,16 C24.897,16 24,15.103 24,14 C24,12.897 24.897,12 26,12 C27.103,12 28,12.897 28,14 C28,15.103 27.103,16 26,16 L26,16 Z M10,23 C10,22.298 10.127,21.627 10.35,21 C10.487,20.615 10.661,20.248 10.87,19.904 C11.923,18.167 13.825,17 16,17 C18.175,17 20.077,18.167 21.13,19.904 C21.339,20.248 21.513,20.615 21.65,21 C21.873,21.627 22,22.298 22,23 L10,23 Z M16,9 C17.654,9 19,10.346 19,12 C19,13.654 17.654,15 16,15 C14.346,15 13,13.654 13,12 C13,10.346 14.346,9 16,9 L16,9 Z M6,16 C4.897,16 4,15.103 4,14 C4,12.897 4.897,12 6,12 C7.103,12 8,12.897 8,14 C8,15.103 7.103,16 6,16 L6,16 Z M28.793,16.855 C29.536,16.128 30,15.119 30,14 C30,11.794 28.206,10 26,10 C23.794,10 22,11.794 22,14 C22,15.119 22.464,16.128 23.207,16.855 C22.795,17.133 22.444,17.486 22.132,17.871 C21.367,16.958 20.4,16.223 19.305,15.723 C20.336,14.807 21,13.485 21,12 C21,9.243 18.757,7 16,7 C13.243,7 11,9.243 11,12 C11,13.485 11.664,14.807 12.695,15.723 C11.6,16.223 10.633,16.958 9.868,17.871 C9.556,17.486 9.205,17.133 8.793,16.855 C9.536,16.128 10,15.119 10,14 C10,11.794 8.206,10 6,10 C3.794,10 2,11.794 2,14 C2,15.119 2.464,16.128 3.207,16.855 C1.876,17.754 1,19.277 1,21 L3,21 C3,19.346 4.346,18 6,18 C7.198,18 8.227,18.711 8.707,19.729 C8.257,20.729 8,21.834 8,23 L8,24 C8,24.552 8.448,25 9,25 L23,25 C23.552,25 24,24.552 24,24 L24,23 C24,21.834 23.743,20.729 23.293,19.729 C23.773,18.711 24.802,18 26,18 C27.654,18 29,19.346 29,21 L31,21 C31,19.277 30.124,17.754 28.793,16.855 L28.793,16.855 Z"
                fill="rgb(51, 51, 51)"></path>
            </svg>
          </span>
          <p>Groups</p>
        </li>
        <li
          className={
            "nav-main-item marketplaces " +
            (directoryStates.marketplace ? "selected" : "unselected")
          }>
          <span
            data-functional-selector="icon"
            style={{
              display: "inline-block",
              verticalAlign: "middle",
              background: "white",
              width: "32px",
              height: "32px",
            }}>
            <svg
              viewBox="0 0 32 32"
              focusable="false"
              stroke="none"
              strokeWidth="0"
              aria-hidden="true">
              <title>Icon</title>
              <path
                d="M25.9,14.9L25.9,14.9l-2.7-7.3c-0.1-0.2-0.2-0.3-0.3-0.4S22.5,7,22.4,7H9.6C9.5,7,9.3,7.1,9.1,7.2 S8.9,7.4,8.8,7.6l-2.7,7.3C6,15,6,15.1,6,15.3c0,0.1,0.1,0.3,0.2,0.4c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.1,0.3,0.1,0.4,0.1h0.9v8.2 c0,0.2,0.1,0.5,0.3,0.6c0.2,0.2,0.4,0.3,0.6,0.3h14.5c0.2,0,0.5-0.1,0.6-0.3c0.2-0.2,0.3-0.4,0.3-0.6v-8.2h0.9c0.1,0,0.3,0,0.4-0.1 c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.1-0.3,0.2-0.4C26,15.1,26,15,25.9,14.9z M18,8.8l1.4,5.5h-2.5l0-5.5H18z M14,8.8h1.1v5.5h-2.5 L14,8.8z M8.2,14.3l2.1-5.5h1.8l-1.4,5.5H8.2z M19.6,23.4h-1.8v-4.5h1.8V23.4z M22.4,23.4h-0.9v-5.5c0-0.2-0.1-0.5-0.3-0.6 C21,17.1,20.8,17,20.5,17h-3.6c-0.2,0-0.5,0.1-0.6,0.3c-0.2,0.2-0.3,0.4-0.3,0.6v5.5H9.6v-7.3h12.7V23.4z M21.3,14.3l-1.4-5.5h1.8 l2.1,5.5H21.3z M11.5,21.5h2.7c0.5,0,0.9-0.4,0.9-0.9v-2.7c0-0.5-0.4-0.9-0.9-0.9h-2.7c-0.5,0-0.9,0.4-0.9,0.9v2.7 C10.5,21.1,10.9,21.5,11.5,21.5z M12.4,18.8h0.9v0.9h-0.9V18.8z"
                fill="rgb(51, 51, 51)"></path>
            </svg>
          </span>
          <p>Marketplace</p>
        </li>
      </ul>
      {/* Nav second items */}
      <ul className="nav-second-items">
        <li className="nav-second-item upgrade">
          <span>
            <svg
              viewBox="0 0 32 32"
              focusable="false"
              stroke="none"
              strokeWidth="0"
              aria-hidden="true"
              fill="white">
              <title>Icon</title>
              <path d="M16,5.4 18.9,12.6 26,12.6 19.8,17.8 23.2,25.5 16,20.7 8.8,25.5 12.2,17.8 6,12.6 13.1,12.6Z"></path>
            </svg>
          </span>
          <p>Upgrade</p>
        </li>
        <Link to={"/create"}>
        <li className="nav-second-item create-button nav-button">
            <p>Create</p>
        </li>
        </Link>
        <li className="nav-second-item create-button-small">
          <Link to={"/create"}>
            <span
              data-functional-selector="icon"
              style={{
                display: "inline-block",
                verticalAlign: "middle",
                width: "32px",
                height: "32px",
              }}>
              <svg
                viewBox="0 0 32 32"
                focusable="false"
                stroke="none"
                strokeWidth="0"
                aria-hidden="true">
                <title>Icon</title>
                <path
                  d="M7 15 15 15 15 7 17 7 17 15 25 15 25 17 17 17 17 25 15 25 15 17 7 17z"
                  style={{ fill: "rgb(255, 255, 255)" }}></path>
              </svg>
            </span>
          </Link>
        </li>
        <li className="nav-second-item account-info" onClick={openAccountInfo}>
          <div className="account-info-logo">
            <svg
              viewBox="0 0 32 32"
              focusable="false"
              stroke="none"
              strokeWidth="0"
              aria-hidden="true"
              fill="rgb(255, 255, 255)">
              <title id="label-85f02de4-bc36-4cae-9d83-b481d6380068">
                Icon
              </title>
              <path d="M16,16 C13.2385763,16 11,13.7614237 11,11 C11,8.23857625 13.2385763,6 16,6 C18.7614237,6 21,8.23857625 21,11 C21,13.7614237 18.7614237,16 16,16 Z M25,24.3125 L7,24.3125 C7,20.2739178 11.0294373,17 16,17 C20.9705627,17 25,20.2739178 25,24.3125 Z"></path>
            </svg>
          </div>
          <div
            className="account-info-menu"
            style={{
              display: accountInfo ? "flex" : "none",
            }}>
            <div className="account-info-logo-menu-info">
              <span>
                <div className="account-info-logo-menu">
                  <svg
                    viewBox="0 0 32 32"
                    focusable="false"
                    stroke="none"
                    strokeWidth="0"
                    aria-hidden="true"
                    fill="rgb(255, 255, 255)">
                    <title id="label-85f02de4-bc36-4cae-9d83-b481d6380068">
                      Icon
                    </title>
                    <path d="M16,16 C13.2385763,16 11,13.7614237 11,11 C11,8.23857625 13.2385763,6 16,6 C18.7614237,6 21,8.23857625 21,11 C21,13.7614237 18.7614237,16 16,16 Z M25,24.3125 L7,24.3125 C7,20.2739178 11.0294373,17 16,17 C20.9705627,17 25,20.2739178 25,24.3125 Z"></path>
                  </svg>
                </div>
                <h1>{user.name}</h1>
              </span>
              <p>View Profile</p>
            </div>
            <p>Change language</p>
            <p>Billing</p>
            <p>Payment options</p>
            <p>Profile settings</p>
            <p>Upgrade</p>
            <div className="resources">
              <span
                data-functional-selector="icon"
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  width: "24px",
                  height: "24px",
                }}>
                <svg
                  viewBox="0 0 32 32"
                  focusable="false"
                  stroke="none"
                  strokeWidth="0"
                  aria-hidden="true">
                  <title>Icon</title>
                  <path
                    d="M15,22 L17,22 L17,20 L15,20 L15,22 Z M16,6 C10.48,6 6,10.48 6,16 C6,21.52 10.48,26 16,26 C21.52,26 26,21.52 26,16 C26,10.48 21.52,6 16,6 Z M16,24 C11.59,24 8,20.41 8,16 C8,11.59 11.59,8 16,8 C20.41,8 24,11.59 24,16 C24,20.41 20.41,24 16,24 Z M16,10 C13.79,10 12,11.79 12,14 L14,14 C14,12.9 14.9,12 16,12 C17.1,12 18,12.9 18,14 C18,16 15,15.75 15,19 L17,19 C17,16.75 20,16.5 20,14 C20,11.79 18.21,10 16,10 Z"
                    fill="rgb(51, 51, 51)"></path>
                </svg>
              </span>
              Resoursces
            </div>
            <div className="sign-out" onClick={singOut}>
              <span
                data-functional-selector="icon"
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  width: "32px",
                  height: "32px",
                }}>
                <svg
                  viewBox="0 0 32 32"
                  focusable="false"
                  stroke="none"
                  strokeWidth="0"
                  aria-hidden="true">
                  <title>Icon</title>
                  <path
                    d="M21,6 C22.103,6 23,6.898 23,8 L23,11 L21,11 L21,8 L10,8 L10,24 L21,24 L21,21 L23,21 L23,24 C23,25.103 22.103,26 21,26 L10,26 C8.897,26 8,25.103 8,24 L8,8 C8,6.898 8.897,6 10,6 L21,6 Z M16.293,11.292 L17.707,12.708 L15.41,15 L24,15 L24,17 L15.418,17 L17.708,19.294 L16.292,20.706 L11.586,15.991 L16.293,11.292 Z"
                    fill="rgb(198, 9, 41)"></path>
                </svg>
              </span>
              Sign out
            </div>
          </div>
        </li>
        <li className="nav-second-item notification-bell">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="18"
              height="18">
              <path
                d="M12.446 16C11.752 17.19 10.477 18 9 18C7.524 18 6.248 17.19 5.555 16H12.446ZM9 0C12.309 0 15 2.691 15 6V8.838C15 10.298 15.932 11.589 17.317 12.052L18 12.279V15H0V12.279L0.684 12.052C2.069 11.589 3 10.298 3 8.838V6C3 2.691 5.692 0 9 0ZM9 2C6.795 2 5 3.794 5 6V8.838C5 10.486 4.255 11.998 3.035 13H14.966C13.745 11.998 13 10.486 13 8.838V6C13 3.794 11.206 2 9 2Z"
                fill="white"></path>
            </mask>
            <g mask="url(#mask0)">
              <path
                d="M12.446 16C11.752 17.19 10.477 18 9 18C7.524 18 6.248 17.19 5.555 16H12.446ZM9 0C12.309 0 15 2.691 15 6V8.838C15 10.298 15.932 11.589 17.317 12.052L18 12.279V15H0V12.279L0.684 12.052C2.069 11.589 3 10.298 3 8.838V6C3 2.691 5.692 0 9 0ZM9 2C6.795 2 5 3.794 5 6V8.838C5 10.486 4.255 11.998 3.035 13H14.966C13.745 11.998 13 10.486 13 8.838V6C13 3.794 11.206 2 9 2Z"
                fill="#757575"></path>
              <path
                d="M25.0002 -7H-6.99976V25H25.0002V-7Z"
                fill="#FAFAFA"></path>
              <path
                d="M25.0002 -7H-6.99976V25H25.0002V-7Z"
                fill="#333333"></path>
            </g>
          </svg>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
