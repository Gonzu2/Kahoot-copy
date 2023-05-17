import React from "react";

import "../style/review-container.css";
import "../style/home.css";

function ReviewContainer() {
  return (
    <section className="review-container">
      <div className="review">
        <div className="review-header">
          <span>More than</span>
          <span>1,000,000,000</span>
          <span>players a year</span>
        </div>
        <div className="review-btns">
          <div className="review-btn" id="red-review">
            <span>More than 50% of US teachers use Kahoot!</span>
          </div>
          <div className="review-btn" id="blue-review">
            <span>Players in more than 200 countries and regions</span>
          </div>
          <div className="review-btn" id="yell-review">
            <span>Over 50 million public games available</span>
          </div>
          <div className="review-btn long-btn" id="green-review">
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
                  “Kahoot! has become one of our "flagship training tools". I
                  believe Kahoot! is irreplaceable, as it involves learners
                  throughout sessions and also helps employees retain important
                  information more effectively."
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
                  “Kahoot! is a fantastic way to engage every single student -
                  even remotely."
                </p>
                <span>Gustavo Lovato, AP Spanish and literature teacher</span>
              </div>
            </container>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewContainer;
