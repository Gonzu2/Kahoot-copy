import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/createQuizNavbar.css";

const Navbar = ({onSave}) => {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  // toggle burger menu change
  const updateMenu = () => {
    console.log("Monkey");
  };

  return (
    <nav className="navLoggedIn">
      {/* Burger nom nom 🍔*/}
      <div className="burger-menu" onClick={updateMenu}>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
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
          className="kahoot-logo"
        >
          <title>Kahoot!</title>
          <g
            className={"logo"}
            stroke="none"
            strokeWidth="1"
            fill="rgb(70,23,143)"
            fillRule="evenodd"
          >
            <path d="M59.4563337,25.5366087 C55.5222657,25.9279665 52.3340315,22.7810536 52.3340315,18.5078772 C52.3340315,14.2343593 55.3409298,10.8227848 59.0502914,10.8886941 C62.75897,10.9535789 65.9482288,14.1004918 66.1725936,17.9174256 C66.3969584,21.7336764 63.3900601,25.1449094 59.4563337,25.5366087 Z M37.7762727,17.5267508 C38.000979,13.7101585 41.1895547,10.5635871 44.8985748,10.4980193 C48.6075949,10.432793 51.6144932,13.8443675 51.6144932,18.1175439 C51.6144932,22.3910618 48.426259,25.5379747 44.4921911,25.1466169 C40.5584646,24.7552591 37.5519078,21.3436845 37.7762727,17.5267508 Z M0,4.88343502 L4.5965759,3.70458064 L4.58530644,13.0510655 L12.3465531,5.56506693 L16.3386759,7.09908023 L10.6974547,13.3570485 L14.4389172,26.9872962 L10.3798607,26.9872962 L7.38593935,16.5445998 L4.55832802,19.3134733 L4.5965759,26.9872962 L0,26.8230352 L0,4.88343502 Z M37.6004007,25.5065568 L33.5642246,25.5065568 L33.2999044,19.2940078 L32.9249385,14.8756944 C32.8310263,11.7779574 30.0375649,12.5644295 29.1920135,12.9383708 L29.4153538,25.5065568 L25.5584646,25.3730307 L24.9314725,1.04942628 L28.859735,-7.10542736e-15 L28.9485247,9.84029232 C33.2203351,8.47600401 35.5076951,8.49068846 36.0820963,14.7650487 L37.6004007,25.5065568 Z M81.0803889,28.3167517 L82.2203124,25.6329114 L84.8682952,25.6329114 L85.8702532,28.5779984 L83.4927375,30 L81.0803889,28.3167517 Z M66.1087333,13.4960386 L65.4479328,8.93088061 L68.8776068,9.05040525 L68.8817048,2.6397869 L71.9480239,3.91084601 L71.8944085,9.60158456 L76.301794,9.89220016 L76.301794,12.6552682 L71.9958337,12.896025 L72.3567981,21.3057782 C72.3567981,21.3057782 72.3656771,21.9635051 73.7135734,21.9635051 C75.0611283,21.9635051 76.301794,21.2224524 76.301794,21.2224524 L76.301794,25.5113378 C76.3605318,26.8148393 74.518828,27.3667016 74.518828,27.3667016 C68.631386,28.2607458 69.0637237,24.3543393 69.0637237,24.3543393 L68.8721428,13.4960386 L66.1087333,13.4960386 Z M87.1225298,3.96514434 L83.9868864,24.1098261 L78.9979282,2.40005464 L87.1225298,3.96514434 Z M16.4390766,12.8263592 L15.3626719,9.98577088 C15.3626719,9.98542938 23.2198798,6.47345415 24.1552454,12.7758173 L24.0418678,26.3176168 L18.0772471,26.3169338 C18.0772471,26.3169338 15.4593161,26.417676 14.6540616,23.4971769 C14.6540616,23.4971769 12.6409252,16.0559148 20.5961433,14.6455241 L20.6169748,12.8325061 C20.6169748,12.8325061 19.1085739,11.2045806 16.4390766,12.8263592 Z M56.3920636,18.7834669 C56.560081,20.7604043 57.7846963,21.838175 58.5892678,21.9331117 C60.6290411,22.1738685 62.3652217,20.3082597 62.2491121,17.933476 C62.132661,15.5583508 61.1836354,14.0738548 59.2592888,14.0332165 C57.3363082,13.9925781 56.1724797,16.2010518 56.3920636,18.7834669 Z M20.5876059,23.7266642 L20.6962025,17.6636918 C17.445474,17.1913988 17.3846872,21.5909298 17.3846872,21.5909298 C17.7022812,24.4335671 20.5876059,23.7266642 20.5876059,23.7266642 Z M45.3595984,21.5431199 C46.1641699,21.4481832 47.3887852,20.3704125 47.5564612,18.3934751 C47.7763865,15.81106 46.6128996,13.6025863 44.6895775,13.6432247 C42.7652309,13.6835215 41.8158638,15.168359 41.7000956,17.5434842 C41.583303,19.9179264 43.3194837,21.7838767 45.3595984,21.5431199 Z"></path>
          </g>
        </svg>
        <li className="nav-main-item marketplaces">
          <span
            data-functional-selector="icon"
            style={{
              display: "inline-block",
              verticalAlign: "middle",
              background: "white",
              width: "20px",
              height: "20px",
            }}
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 1000 1000"
              enableBackground="new 0 0 1000 1000"
              xmlSpace="preserve"
            >
              <metadata>
                {" "}
                Svg Vector Icons : http://www.onlinewebfonts.com/icon{" "}
              </metadata>
              <g>
                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
                  <path d="M4712.2,5019.9c-26.9-3.8-111.3-17.3-189.9-28.8c-226.4-32.6-324.2-69.1-418.2-157.3c-153.5-140.1-166.9-188-174.6-554.5l-7.7-318.5l-49.9-19.2c-28.8-9.6-142-51.8-253.3-90.2c-111.3-40.3-276.3-109.4-368.4-155.4c-92.1-46-178.4-84.4-189.9-84.4c-13.4,0-111.3,86.3-218.7,189.9c-247.5,239.8-316.6,278.2-508.4,280.1c-163.1,0-218.7-23-485.4-216.8c-308.9-220.6-719.5-692.6-792.4-911.3c-38.4-115.1-28.8-280.1,21.1-387.6c21.1-42.2,126.6-166.9,234.1-280.1c109.4-111.3,197.6-213,197.6-222.6c0-11.5-46-118.9-103.6-237.9c-57.6-120.9-136.2-310.8-176.5-424l-69.1-207.2H873.2c-237.9,0-301.2-5.8-387.5-38.4C205.5,1050.4,100,762.6,100,110.3c0-531.4,57.6-771.3,224.5-924.8c124.7-115.1,228.3-140,562.1-140H1159l71-205.3c38.4-115.1,117-305.1,174.6-425.9c57.6-120.9,103.6-228.3,103.6-237.9c0-11.5-86.3-107.5-191.9-214.9c-239.8-243.7-297.4-354.9-282-539.1c9.6-136.2,49.9-218.7,218.7-452.8c201.5-278.2,604.3-642.7,846.1-765.5c55.6-26.9,136.2-48,209.1-51.8c174.6-11.5,276.3,42.2,525.7,280.1c113.2,107.5,213,195.7,224.5,195.7c9.6,0,117-46,236-103.6c120.9-57.6,310.8-136.2,425.9-176.5l205.3-69.1v-285.8c0-333.8,28.8-443.2,147.7-558.3c92.1-86.3,159.2-120.9,314.6-157.3c353-80.6,830.7-86.3,1183.7-13.4c189.9,40.3,264.8,76.7,362.6,178.4c109.4,113.2,128.6,184.2,140.1,531.4l9.6,314.6l214.9,71c117,40.3,307,117,420.2,170.8c111.3,53.7,212.9,97.8,224.5,97.8c11.5,0,107.5-84.4,213-189.9c239.8-234.1,318.5-278.2,500.7-280.1c109.3,0,155.4,9.6,239.8,51.8c247.5,122.8,636.9,472,861.4,771.3c153.5,203.4,199.5,305,209.1,447c11.5,176.5-44.1,282-285.8,531.4c-188,195.7-195.7,209.1-176.5,257.1c11.5,28.8,61.4,142,111.3,251.3c49.9,109.4,118.9,282,153.5,383.7l63.3,184.2l314.6,9.6c347.3,11.5,401,26.8,529.5,142c157.3,142,222.6,420.2,222.6,942c0,349.2-30.7,600.5-94,750.2c-38.4,94-163.1,220.6-259,264.8c-72.9,32.6-138.2,40.3-399.1,49.9l-310.8,9.6l-69.1,201.4c-38.4,111.3-115.1,299.3-172.7,420.2c-57.6,120.9-103.6,226.4-103.6,237.9c0,11.5,86.3,107.4,189.9,214.9c236,241.7,278.2,318.5,280.1,498.8c0,109.4-9.6,155.4-51.8,239.8c-122.8,247.5-464.3,631.2-757.8,851.8c-216.8,163.1-316.6,209.1-460.5,218.7c-178.4,11.5-285.8-46-531.4-282c-107.4-107.4-205.3-193.8-216.8-193.8c-11.5,0-117,46-237.9,103.6c-120.9,57.6-310.8,136.2-424,174.6l-207.2,71v272.4c0,320.4-25,425.9-126.6,544.9c-90.2,105.5-186.1,153.5-399.1,199.5C5381.8,5012.2,4829.2,5041,4712.2,5019.9z M5345.3,4620.8c209.1-32.6,283.9-55.6,318.5-103.6c19.2-23,24.9-113.2,26.9-312.7c0-297.4,13.4-370.3,92.1-473.9c61.4-84.4,134.3-128.5,297.4-176.5c166.9-51.8,489.2-188,652.3-278.2c113.2-63.3,136.3-69.1,218.7-57.6c163.1,24.9,249.4,76.7,466.2,287.8c147.7,143.9,220.6,201.5,253.2,201.5c72.9,0,312.7-178.4,525.7-391.4c195.7-195.7,391.4-462.4,391.4-533.4c0-23-86.3-126.6-212.9-257.1c-115.1-120.9-224.5-249.4-239.8-285.9c-15.4-36.5-26.9-117-26.9-180.3c0-99.8,13.4-142,124.7-368.4c67.2-142,153.5-345.3,190-454.7c74.8-224.5,99.7-270.5,188-335.7c103.6-76.7,176.5-90.2,475.8-90.2c347.3,0,356.8-5.8,395.2-203.4c80.6-408.6,34.6-1061-82.5-1151.2c-24.9-19.2-107.4-24.9-322.3-26.8c-260.9,0-297.4-3.8-383.7-46c-145.8-69.1-189.9-128.6-268.6-366.4c-36.5-115.1-124.7-326.2-191.9-468.1c-111.3-226.4-124.7-268.6-124.7-370.3c0-159.2,46.1-237.9,280.1-477.7c143.9-147.7,199.5-218.7,199.5-251.3c0-174.6-748.2-917.1-924.8-917.1c-23,0-122.8,82.5-255.1,211c-119,117-247.5,224.5-285.9,239.8c-36.5,15.4-117,28.8-178.4,28.8c-95.9,0-143.9-15.3-370.3-122.8c-142-69.1-356.9-155.4-473.9-193.8c-180.3-59.5-226.4-82.5-276.3-140.1c-115.1-130.5-132.4-193.8-132.4-514.2c0-354.9-3.9-364.5-203.4-402.9c-408.7-80.6-1061-34.6-1151.1,82.5c-19.2,24.9-24.9,107.4-26.9,314.6c0,295.5-15.3,370.3-90.2,473.9c-65.2,86.3-111.3,113.2-335.7,188c-109.4,38.4-314.6,122.8-456.6,191.9c-226.4,107.5-274.3,122.8-370.3,122.8c-61.4,0-142-13.4-178.4-28.8c-38.4-15.3-166.9-122.8-285.9-239.8c-157.3-153.5-228.3-211-262.8-211c-72.9,0-310.8,176.5-525.7,391.4c-193.8,193.8-391.4,462.4-391.4,533.3c0,23,82.5,122.8,199.5,243.7c247.5,255.2,287.8,328.1,276.3,502.7c-7.7,92.1-24.9,155.4-61.4,222.6c-74.8,130.5-213,458.5-260.9,613.9c-48,163.1-92.1,236-176.5,297.4c-103.6,78.7-176.5,92.1-475.8,92.1c-243.7,0-289.7,5.8-326.2,34.5c-95.9,76.7-143.9,619.7-88.3,999.6c19.2,120.9,42.2,237.9,53.7,259c42.2,80.6,72.9,86.3,358.8,88.3c328.1,0,404.8,19.2,512.3,124.7c65.2,65.2,90.2,117,159.2,316.6c44.1,132.4,132.4,343.4,195.7,468.1c97.9,197.6,113.2,243.7,113.2,335.7c-1.9,161.2-51.8,249.4-278.2,481.6c-145.8,149.6-201.5,220.6-201.5,255.2c0,72.9,213,354.9,410.6,544.9c186.1,180.3,448.9,370.3,514.2,370.3c23,0,122.8-82.5,255.2-211c119-117,247.5-224.5,285.9-239.8c36.5-15.3,117-28.8,176.5-28.8c95.9,0,142,15.3,331.9,109.4c120.9,59.5,328.1,145.8,458.5,189.9c278.2,95.9,354.9,149.6,418.3,283.9c42.2,90.2,46,122.8,46,391.4c0,285.9,1.9,295.5,48,339.6c24.9,26.9,57.6,48,71,48c13.4,1.9,97.8,13.4,188,26.9C4835,4653.4,5122.8,4653.4,5345.3,4620.8z" />
                  <path d="M4760.2,2775.2c-406.7-57.6-658.1-130.5-936.2-268.6C2690,1946.3,2106.8,672.4,2423.4-551.6c118.9-462.4,410.6-957.4,748.2-1266.2c892.1-819.2,2168-957.4,3194.4-347.3c648.5,385.6,1107,1045.6,1254.7,1805.4c51.8,270.5,48,729.1-9.6,997.7c-57.6,270.5-120.9,448.9-243.7,692.6c-368.4,723.3-1074.4,1254.7-1870.6,1408.2C5339.6,2769.4,4875.3,2792.4,4760.2,2775.2z M5450.9,2355c566-119,1041.8-424,1385.2-886.4c295.5-397.1,435.5-834.6,435.5-1348.7c0-191.9-9.6-328.1-32.6-437.4c-197.6-930.5-871-1602-1805.4-1801.5c-195.7-42.2-654.2-46.1-846.1-7.7c-930.5,184.2-1625,871-1826.5,1805.4c-46,213-46,692.6,0,896c214.9,953.5,940.1,1644.2,1893.6,1799.6C4858,2408.7,5241.7,2399.1,5450.9,2355z" />
                </g>
              </g>
            </svg>
          </span>
          <p>Settings</p>
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
              fill="white"
            >
              <title>Icon</title>
              <path d="M16,5.4 18.9,12.6 26,12.6 19.8,17.8 23.2,25.5 16,20.7 8.8,25.5 12.2,17.8 6,12.6 13.1,12.6Z"></path>
            </svg>
          </span>
          <p>Upgrade</p>
        </li>
        <li className="nav-second-item themes-button nav-button">
          <p>
          <span
              class="sc-eDvSVe htLrRN"
              data-functional-selector="icon"
              style={{
                display: "inline-block",
                verticalAlign: "middle",
                width: "24px",
                height: "24px",
            }}
            >
                <svg viewBox="0 0 32 32" focusable="false" stroke="none" stroke-width="0" aria-labelledby="label-ff5de15c-5438-4680-8446-993fa367eb4b" aria-hidden="true" class="sc-jSUZER eTaWgc"><title id="label-ff5de15c-5438-4680-8446-993fa367eb4b">Icon</title><path d="M16,27C10.14,27,5,21.33,5,14.86A11.12,11.12,0,0,1,9.72,5.73a3.62,3.62,0,0,1,2.65-.68A2.14,2.14,0,0,1,13.8,6c.73.92.55,2.19.39,3.32a4.83,4.83,0,0,0-.07,1.42c.26.31.83.13,2.39-.61C18.38,9.2,21,8,23.79,9.34c3.78,2,3.65,8,3.18,9.9C25.88,23.59,21.06,27,16,27ZM11.88,7a1.93,1.93,0,0,0-1,.37A9.13,9.13,0,0,0,7,14.86C7,20.26,11.21,25,16,25c4.19,0,8.15-2.74,9-6.24.29-1.18.51-6.26-2.12-7.63-2-.92-3.78-.07-5.54.77s-3.49,1.64-4.83,0A3.84,3.84,0,0,1,12.21,9c.08-.58.22-1.56,0-1.81l-.06-.08A.23.23,0,0,0,12,7ZM19,23a2,2,0,1,1,2-2A2,2,0,0,1,19,23Zm-6-1a2,2,0,1,1,2-2A2,2,0,0,1,13,22Zm-3-5a2,2,0,1,1,2-2A2,2,0,0,1,10,17Z"
                 style={{
                    fill: "rgb(255,255,255)"
                 }}></path></svg>
            </span>
            Themes
          </p>
        </li>
        <li className="nav-second-item preview-button nav-button">
          <p>
            <span
              class="sc-eDvSVe htLrRN"
              data-functional-selector="icon"
              style={{
                display: "inline-block",
                verticalAlign: "middle",
                width: "24px",
                height: "24px",
            }}
            >
              <svg
                viewBox="0 0 32 32"
                focusable="false"
                stroke="none"
                stroke-width="0"
                aria-labelledby="label-8c40ebe4-39d5-4b2e-949b-090eb991207e"
                aria-hidden="true"
                class="sc-jSUZER eTaWgc"
              >
                <title id="label-8c40ebe4-39d5-4b2e-949b-090eb991207e">
                  Icon
                </title>
                <path
                  d="M26.817,15.425 C26.633,15.162 22.222,9 16,9 C9.778,9 5.367,15.162 5.183,15.425 C4.939,15.77 4.939,16.231 5.183,16.576 C5.367,16.838 9.778,23 16,23 C22.222,23 26.633,16.838 26.817,16.576 C27.061,16.23 27.061,15.77 26.817,15.425 Z M16,21 C11.834,21 8.451,17.425 7.269,15.999 C8.448,14.573 11.82,11 16,11 C20.166,11 23.549,14.576 24.731,16.001 C23.552,17.428 20.18,21 16,21 Z M16,12 C13.794,12 12,13.795 12,16 C12,18.206 13.794,20 16,20 C18.206,20 20,18.206 20,16 C20,13.795 18.206,12 16,12 Z M16,18 C14.897,18 14,17.103 14,16 C14,14.898 14.897,14 16,14 C17.103,14 18,14.898 18,16 C18,17.103 17.103,18 16,18 Z"
                  style={{
                    fill: "rgb(0, 0, 0)"
                }}
                ></path>
              </svg>
            </span>
            Preview
          </p>
        </li>
        <li className="nav-second-item spacer-bar">
          <div></div>
        </li>
        <li className="nav-second-item exit-button nav-button">
          <p>Exit</p>
        </li>
        <li className="nav-second-item save-button nav-button" onClick={onSave}>
          <p>Save</p>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
