import React from "react";

import "../style/how-does-kahoot-work.css";
import "../style/home.css";

function HowDoesKahootWork() {
  return (
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
              <source src={require("../videos/kc_1.webm")} type="video/webm" />
            </video>
          </div>
          <div className="skew-wraper skew-wrapper-how-it-works">
            <div className="skew">
              <div className="skew-inner"></div>
            </div>
          </div>
          <h1 className="card-header">Create</h1>
          <p className="card-info">
            It only takes minutes to create a learning game or trivia quiz on
            any topic, in any language.
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
            Host a live game with questions on a big screen or share a game with
            remote players.
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
              <source src={require("../videos/kc_3.webm")} type="video/webm" />
            </video>
          </div>
          <div className="skew-wraper skew-wrapper-how-it-works">
            <div className="skew">
              <div className="skew-inner"></div>
            </div>
          </div>
          <h1 className="card-header">Play</h1>
          <p className="card-info">
            Game on! Join a kahoot with a PIN provided by the host and answer
            questions on your device.
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
  );
}

export default HowDoesKahootWork;
