import "../style/footer.css";
import "../style/dropdown.css";
import { useEffect, useState } from "react";

function Footer() {
  const [screenWidth, setScreenWidht] = useState(window.innerWidth);
  const [dropdownStates, setDropdownStates] = useState([
    true,
    true,
    true,
    true,
  ]);
  const phoneSize = 767
  const handleClick = (index) => {
    console.log(screenWidth)
    if(screenWidth < phoneSize ){
      setDropdownStates((prevState) => {
        const newState = [...prevState];
        newState[index] = !newState[index];
        return newState;
      });
    }
  };
  useEffect(() => {
    console.log(screenWidth)
    const handleResize = () => {
      setScreenWidht(window.innerWidth);
      localStorage.setItem("screenWidht", window.innerWidth);
    };
    if(screenWidth < phoneSize){
      console.log("colosing")
      setDropdownStates(dropdownStates.map(() => false));
    }
    if(screenWidth > phoneSize){
      console.log("openinig")
      setDropdownStates(dropdownStates.map(() => true));
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [screenWidth]);
  return (
    <main className="main-footer">
      {/* <a href="#" className="dropdown_title">Work</a>
      <ul class="dropdown">
        <li><a href="#">Web Development</a></li>
        <li><a href="#">Web Design</a></li>
        <li><a href="#">Illustration</a></li>
        <li><a href="#">Iconography</a></li>
      </ul> */}
      <div className="footer-links center">
        <ul className="fit">
          <li className="dropdown-title link-title" onClick={() => handleClick(0)}>
            <span className="bold ">About</span>
            <span className="arrowDown"></span>
          </li>
          <li className="dropdown-body-container">
            <ul
              className={
                "dropdown-body " + (dropdownStates[0] ? "show" : "hide")
              }>
              <li>
                <a>Company</a>
              </li>
              <li>
                <a>Leadership</a>
              </li>
              <li>
                <a>Careers</a>
              </li>
              <li>
                <a>Open positions</a>
              </li>
              <li>
                <a>Press</a>
              </li>
              <li>
                <a>Investor relations</a>
              </li>
              <li>
                <a>Company events</a>
              </li>
              <li>
                <a>Contact us</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li className="dropdown-title link-title" onClick={() => handleClick(1)}>
            <span className="bold ">Solusions</span>
            <span className="arrowDown"></span>
          </li>
          <li className="dropdown-body-container">
            <ul
              className={
                "dropdown-body " + (dropdownStates[1] ? "show" : "hide")
              }>
              <li>
                <a>At home</a>
              </li>
              <li>
                <a>At school</a>
              </li>
              <li>
                <a>At work</a>
              </li>
              <li>
                <a>Academy</a>
              </li>
              <li>
                <a>Actimo</a>
              </li>
              <li>
                <a>Motimate</a>
              </li>
              <li>
                <a>Drops</a>
              </li>
              <li>
                <a>Whiteboard.fi</a>
              </li>
              <li>
                <a>Clever</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li className="dropdown-title link-title" onClick={() => handleClick(2)}>
            <span className="bold ">Resources</span>
            <span className="arrowDown"></span>
          </li>
          <li className="dropdown-body-container">
            <ul
              className={
                "dropdown-body " + (dropdownStates[2] ? "show" : "hide")
              }>
              <li>
                <a>Explore content</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Webinars</a>
              </li>
              <li>
                <a>Kahoot! Certified</a>
              </li>
              <li>
                <a>Trust Center</a>
              </li>
              <li>
                <a>Help Center</a>
              </li>
              <li>
                <a>Library</a>
              </li>
              <li>
                <a>Shop</a>
              </li>
              <li>
                <a>Safety center</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li className="dropdown-title link-title" onClick={() => handleClick(3)}>
            <span className="bold">Terms and conditions</span>
            <span className="arrowDown"></span>
          </li>
          <li className="dropdown-body-container">
            <ul
              className={
                "dropdown-body " + (dropdownStates[3] ? "show" : "hide")
              }>
              <li>
                <a>Terms and conditions</a>
              </li>
              <li>
                <a>Privacy policy</a>
              </li>
              <li>
                <a>Student privacy policy</a>
              </li>
              <li>
                <a>Inclusion and accessibility policy</a>
              </li>
              <li>
                <a>Acceptable use policy</a>
              </li>
              <li>
                <a>Cookie notice</a>
              </li>
              <li>
                <a>Cookies preference center</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="folllow-us_container">
        <ul className="follow-us row center">
          <li className="row">
            <span id="twitter"></span>
            <a>Twitter</a>
          </li>
          <li className="row">
            <span id="facebook"></span>
            <a>Facebook</a>
          </li>
          {/* <li className="row">
            <span id="linkedin"></span>
            <a>LinkedIn</a>
          </li> */}
          <li className="row">
            <span id="instagram"></span>
            <a>Instagram</a>
          </li>
          <li className="row">
            <span id="tik-tok"></span>
            <a>TikTok</a>
          </li>
          {/* </ul></li> */}
        </ul>
        <div className="partner">
          <span id="microsoft">
            <img
              src="https://kahoot.com/wp-content/themes/kahoot2017/assets/img/microsoft-edu-partner-badge.svg"
              alt="Microsfot"
            />
          </span>
          <span id="google"></span>
        </div>
      </div>
      <div className="copyright-contaienr row">
        <div className="copyright">
          <p>Copyright © 2023, Donatas and Paulius! All Rights Reserved.</p>
        </div>
        <div className="logos">
          {/* mac app store */}
          <img
            src="https://kahoot.com/wp-content/themes/kahoot2017/assets/img/mac-app-store-badge.svg"
            width="156"
            height="40"
            alt="Download on the Mac Store"
          />
          {/* google play */}
          <img
            src="https://kahoot.com/wp-content/themes/kahoot2017/assets/img/google-play-badge.svg"
            width="156"
            height="40"
            alt="Download on the Mac Store"
          />
          {/* app galary */}
          <img
            src="https://kahoot.com/wp-content/themes/kahoot2017/assets/img/AppGallery.png"
            width="156"
            height="40"
            alt="Download on the Mac Store"
          />
          {/* app store */}
          <img
            src="https://kahoot.com/wp-content/themes/kahoot2017/assets/img/app-store-badge.svg"
            width="156"
            height="40"
            alt="Download on the Mac Store"
          />
          {/* kahoot */}
          {/* <img
            src="https://kahoot.com/wp-content/themes/kahoot2017/assets/img/kahoot-white.svg"
            width="156"
            height="40"
            alt="Download on the Mac Store"
            id="kahoot-logo"
          /> */}
        </div>
      </div>
    </main>
  );
}

export default Footer;
