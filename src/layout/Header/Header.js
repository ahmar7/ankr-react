import React, { useState } from "react";
import "./Header.css";
import { rightArrow } from "../../utils/allImg";
const Header = () => {
  const [toggleMobileMenu, settoggleMobileMenu] = useState(false);
  const [MenuName, setMenuName] = useState("Menu");
  const [mobileStudy, setmobileStudy] = useState(false);
  const [sideToggle, setsideToggle] = useState(false);
  const [fullFloat, setfullFloat] = useState(false);
  const [mobileMenu, setmobileMenu] = useState(false);
  const [mobileMenu2, setmobileMenu2] = useState(false);
  const [mobileMenu3, setmobileMenu3] = useState(false);
  const [mobileMenu4, setmobileMenu4] = useState(false);
  let toggleSide = () => {
    if (sideToggle == true) {
      setsideToggle(false);
    } else {
      setsideToggle(true);
    }
  };
  let toggleFalse = () => {
    if (mobileMenu === false) {
      setmobileMenu(true);
    } else {
      setmobileMenu(false);
    }
  };
  let toggleTrue = () => {
    setmobileMenu(true);
    setmobileMenu2(false);
    setmobileMenu4(false);
    setfullFloat(false);
    setmobileStudy(false);
    setmobileMenu3(false);
  };
  let toggleFalse2 = () => {
    if (mobileMenu2 === false) {
      setmobileMenu2(true);
    } else {
      setmobileMenu2(false);
    }
  };
  let toggleTrue2 = () => {
     
        setmobileMenu4(false);
        setmobileMenu(false);
    setmobileStudy(false);
    setfullFloat(false);
    setmobileMenu3(false);
    setmobileMenu2(true);
  };
  let toggleFalse3 = () => {
    if (mobileMenu3 === false) {
      setmobileMenu3(true);
    } else {
      setmobileMenu3(false);
    }
  };
  let toggleTrue3 = () => {
    setmobileMenu(false);
    setfullFloat(false);
    setmobileStudy(false);
    setmobileMenu2(false);
    setmobileMenu3(true);
    setmobileMenu4(false);
  };
  let toggleFalse4 = () => {
    if (mobileMenu4 === false) {
      setmobileMenu4(true);
    } else {
      setmobileMenu4(false);
    }
  };
  let toggleTrue4 = () => {
    setmobileMenu(false);
    setmobileMenu2(false);
    setmobileStudy(false);
    setmobileMenu3(false);
    setmobileMenu4(true);
    setfullFloat(false);
  };
  let toggleFull = () => {
    if (fullFloat === false) {
      setfullFloat(true);
    } else {
      setfullFloat(false);
    }
    setmobileMenu(false);
    setmobileMenu2(false);
    setmobileMenu3(false);
    setmobileMenu4(false);
  };
  let toggleMobile = () => {
    if (toggleMobileMenu === true) {
      settoggleMobileMenu(false);
      setMenuName("Menu");
      let body = document.querySelector("body");
      body.style.overflow = "auto";
    } else {
      settoggleMobileMenu(true);
      setMenuName("Close");
      let body = document.querySelector("body");
      body.style.overflow = "hidden";
    }
  };
  let toggleMobileCase = () => {
    if (fullFloat === false) {
      setfullFloat(true);
    } else {
      setfullFloat(false);
    }
    setmobileMenu(false);
    setmobileMenu2(false);
    setmobileMenu3(false);
    setmobileMenu4(false);
  };
  return (
    <>
      <header
        className={
          fullFloat
            ? "MuiPaper-root-28 MuiAppBar-root-17 MuiAppBar-positionFixed-18 MuiAppBar-colorPrimary-24 jss8 jss11 mui-fixed MuiPaper-elevation4-35 no-shadow"
            : "MuiPaper-root-28 MuiAppBar-root-17 MuiAppBar-positionFixed-18 MuiAppBar-colorPrimary-24 jss8 jss11 mui-fixed MuiPaper-elevation4-35"
        }
      >
        <div className="MuiContainer-root-81 MuiContainer-maxWidthLg-87">
          <div className="jss89 jss16">
            <button
              className="__packageName__-MuiButtonBase-root __packageName__-MuiIconButton-root __packageName__-__packageName__-jss4 jss91 __packageName__-MuiIconButton-edgeStart"
              type="button"
            >
              <span
                onClick={toggleSide}
                className="__packageName__-MuiIconButton-label"
              >
                <svg
                  width={24}
                  height={24}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 5.667c0-.62 0-.93.068-1.185a2 2 0 0 1 1.414-1.414C4.737 3 5.047 3 5.667 3c.31 0 .465 0 .592.034a1 1 0 0 1 .707.707C7 3.868 7 4.023 7 4.333V5c0 .943 0 1.414-.293 1.707C6.414 7 5.943 7 5 7h-.667c-.31 0-.465 0-.592-.034a1 1 0 0 1-.707-.707C3 6.132 3 5.977 3 5.667Z"
                    fill="currentColor"
                  />
                  <rect
                    x={3}
                    y={10}
                    width={4}
                    height={4}
                    rx={1}
                    fill="currentColor"
                  />
                  <path
                    d="M3 18.333c0-.31 0-.465.034-.592a1 1 0 0 1 .707-.707C3.868 17 4.023 17 4.333 17H5c.943 0 1.414 0 1.707.293C7 17.586 7 18.057 7 19v.667c0 .31 0 .465-.034.592a1 1 0 0 1-.707.707C6.132 21 5.977 21 5.667 21c-.62 0-.93 0-1.185-.068a2 2 0 0 1-1.414-1.414C3 19.263 3 18.953 3 18.333Z"
                    fill="currentColor"
                  />
                  <rect
                    x={10}
                    y={3}
                    width={4}
                    height={4}
                    rx={1}
                    fill="currentColor"
                  />
                  <rect
                    x={10}
                    y={10}
                    width={4}
                    height={4}
                    rx={1}
                    fill="currentColor"
                  />
                  <rect
                    x={10}
                    y={17}
                    width={4}
                    height={4}
                    rx={1}
                    fill="currentColor"
                  />
                  <path
                    d="M17 4.333c0-.31 0-.465.034-.592a1 1 0 0 1 .707-.707C17.868 3 18.023 3 18.333 3c.62 0 .93 0 1.185.068a2 2 0 0 1 1.414 1.414c.068.255.068.565.068 1.185 0 .31 0 .465-.034.592a1 1 0 0 1-.707.707C20.132 7 19.977 7 19.667 7H19c-.943 0-1.414 0-1.707-.293C17 6.414 17 5.943 17 5v-.667Z"
                    fill="currentColor"
                  />
                  <rect
                    x={17}
                    y={10}
                    width={4}
                    height={4}
                    rx={1}
                    fill="currentColor"
                  />
                  <path
                    d="M17 19c0-.943 0-1.414.293-1.707C17.586 17 18.057 17 19 17h.667c.31 0 .465 0 .592.034a1 1 0 0 1 .707.707c.034.127.034.282.034.592 0 .62 0 .93-.068 1.185a2 2 0 0 1-1.414 1.414c-.255.068-.565.068-1.185.068-.31 0-.465 0-.592-.034a1 1 0 0 1-.707-.707C17 20.132 17 19.977 17 19.667V19Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </button>
            <a
              className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss94 MuiButton-disableElevation-117"
              tabIndex={0}
              aria-disabled="false"
              role="link"
              aria-label="ANKR"
              href="/"
            >
              <span className="MuiButton-label-107">
                <svg
                  fill="none"
                  height={32}
                  viewBox="0 0 104 32"
                  width={104}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M15.344 2.441l9.008 4.776c1.382.83 2.676 1.797 2.736 4.647v2.286h-3.541v-3.126L13.58 5.671 3.54 11.024v3.127H0v-2.287c.054-2.835 1.338-3.808 2.711-4.632l9.102-4.796a3.77 3.77 0 0 1 3.53.005zm.005 23.419l8.193-4.588v-3.418h3.54v2.282c-.054 2.85-1.352 3.822-2.735 4.647l-9.003 4.776a3.77 3.77 0 0 1-3.531.005L2.71 24.768C1.338 23.943.06 22.966 0 20.136v-2.282h3.546v3.418l8.267 4.593v-3.71c-2.884-.676-4.776-3.017-4.776-6.158 0-3.802 2.628-6.355 6.544-6.355 3.916 0 6.543 2.553 6.543 6.355 0 3.136-1.896 5.482-4.775 6.159zM13.58 12.768c-2.1 0-3.255 1.145-3.255 3.23 0 2.024 1.215 3.23 3.255 3.23s3.254-1.21 3.254-3.23c0-2.085-1.155-3.23-3.254-3.23zm75.435-4.46h-4.934l-6.34 6.5V5.102h-4.07v19.65h4.07v-4.918l2.093-2.144 5.522 7.062h4.568L82.374 15.1zm6.524 1.94c.77-.77 2.84-2.37 6.746-2.37h.751l.014 3.64-7.511.03v13.205h-4.134V8.293h4.134zM64.526 7.875c-3.121 0-5.082 2.02-5.225 2.178V8.294h-4.133V24.754H59.3V11.183h3.072c.158 0 .311.004.46.01 1.031.034 1.817.202 2.4.508.192.109.37.232.533.366.874.78 1.106 2.108 1.106 4.089v8.603h4.07v-9.833c-.006-4.074-1.872-7.052-6.416-7.052zm-18.203.968a6.04 6.04 0 0 1 1.807 1.703V8.29h4.134v16.46H48.13v-2.42c-.474.913-1.338 1.723-2.558 2.261a7.18 7.18 0 0 1-1.081.38l-.06.016a9.041 9.041 0 0 1-2.177.266 8.932 8.932 0 0 1-3.378-.662c-3.2-1.303-5.452-4.41-5.452-8.034 0-4.8 3.955-8.697 8.83-8.697 1.466 0 2.85.355 4.069.983zm-8.657 7.718c0 3.131 2.084 5.304 5.304 5.304 2.805 0 5.304-1.99 5.304-5.304 0-3.383-2.415-5.304-5.304-5.304-3.28 0-5.304 1.98-5.304 5.304z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
            </a>
            <button
              onClick={toggleMobile}
              className="MuiButtonBase-root-133 justifyend MuiButton-root-106 MuiButton-text-108 jss2029 jss105 MuiButton-disableElevation-117"
              tabIndex={0}
              type="button"
              aria-label="open/close"
            >
              <span className="MuiButton-label-107 mbltxt">{MenuName}</span>
            </button>
            <div
              className={
                toggleMobileMenu ? "mbl-style show-mbl" : "  mbl-style "
              }
            >
              <ul className="jss1227 jss95">
                <li
                  className={
                    mobileMenu ? "jss1229 static active-bar" : "jss1229 static"
                  }
                  onMouseEnter={toggleTrue}
                  onClick={toggleFalse}
                >
                  <button
                    className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss1230 MuiButton-disableElevation-117"
                    tabIndex={0}
                    type="button"
                  >
                    <span className="MuiButton-label-107">
                      Products
                      <svg
                        className="jss1233"
                        width={10}
                        height={6}
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1.25"
                        />
                      </svg>
                    </span>
                  </button>
                  <div className="float-overlay" onClick={toggleFalse}></div>
                  <div onMouseLeave={toggleFalse} className="float-dv">
                    <div className="bottom-sec">
                      <a href="" className="link-float">
                        <div className="link-heading">
                          <h4 class="MuiTypography-root-134 jss3511 MuiTypography-h4-142">
                            RPC Service
                          </h4>
                          <img src={rightArrow} alt="" />
                        </div>

                        <p class="MuiTypography-root-134 jss3519 MuiTypography-body1-136">
                          Distributed, high performance RPC services. Connect
                          and start building for free.
                        </p>
                      </a>
                    </div>
                    <div className="bottom-sec">
                      <a href="" className="link-float">
                        <div className="link-heading">
                          <h4 class="MuiTypography-root-134 jss3511 MuiTypography-h4-142">
                            RPC Service
                          </h4>
                          <img src={rightArrow} alt="" />
                        </div>

                        <p class="MuiTypography-root-134 jss3519 MuiTypography-body1-136">
                          Distributed, high performance RPC services. Connect
                          and start building for free.
                        </p>
                      </a>
                    </div>
                    <div className="bottom-sec">
                      <a href="" className="link-float">
                        <div className="link-heading">
                          <h4 class="MuiTypography-root-134 jss3511 MuiTypography-h4-142">
                            RPC Service
                          </h4>
                          <img src={rightArrow} alt="" />
                        </div>

                        <p class="MuiTypography-root-134 jss3519 MuiTypography-body1-136">
                          Distributed, high performance RPC services. Connect
                          and start building for free.
                        </p>
                      </a>
                    </div>
                    <div className="bottom-sec">
                      <a href="" className="link-float">
                        <div className="link-heading">
                          <h4 class="MuiTypography-root-134 jss3511 MuiTypography-h4-142">
                            RPC Service
                          </h4>
                          <img src={rightArrow} alt="" />
                        </div>

                        <p class="MuiTypography-root-134 jss3519 MuiTypography-body1-136">
                          Distributed, high performance RPC services. Connect
                          and start building for free.
                        </p>
                      </a>
                    </div>
                    <div className="bottom-sec">
                      <a href="" className="link-float">
                        <div className="link-heading">
                          <h4 class="MuiTypography-root-134 jss3511 MuiTypography-h4-142">
                            RPC Service
                          </h4>
                          <img src={rightArrow} alt="" />
                        </div>

                        <p class="MuiTypography-root-134 jss3519 MuiTypography-body1-136">
                          Distributed, high performance RPC services. Connect
                          and start building for free.
                        </p>
                      </a>
                    </div>
                    <div className="bottom-sec">
                      <a href="" className="link-float">
                        <div className="link-heading">
                          <h4 class="MuiTypography-root-134 jss3511 MuiTypography-h4-142">
                            RPC Service
                          </h4>
                          <img src={rightArrow} alt="" />
                        </div>

                        <p class="MuiTypography-root-134 jss3519 MuiTypography-body1-136">
                          Distributed, high performance RPC services. Connect
                          and start building for free.
                        </p>
                      </a>
                    </div>
                    <div className="bottom-sec">
                      <a href="" className="link-float">
                        <div className="link-heading">
                          <h4 class="MuiTypography-root-134 jss3511 MuiTypography-h4-142">
                            RPC Service
                          </h4>
                          <img src={rightArrow} alt="" />
                        </div>

                        <p class="MuiTypography-root-134 jss3519 MuiTypography-body1-136">
                          Distributed, high performance RPC services. Connect
                          and start building for free.
                        </p>
                      </a>
                    </div>
                  </div>
                </li>
                <li
                  className={
                    fullFloat ? "jss1229 static active-bar" : "jss1229 static"
                  }
                  onMouseEnter={toggleFull}
                  onClick={toggleMobileCase}
                >
                  <button
                    className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss1230 MuiButton-disableElevation-117"
                    tabIndex={0}
                    type="button"
                  >
                    <span className="MuiButton-label-107">
                      Case Studies
                      <svg
                        className="jss1233"
                        width={10}
                        height={6}
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1.25"
                        />
                      </svg>
                    </span>
                  </button>
                  <div className="float-dv alters-section custom-float">
                    <div className>
                      <div className="jss2929 jss2930">
                        <a
                          className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss2938 MuiButton-textPrimary-109 MuiButton-disableElevation-117"
                          tabIndex={0}
                          aria-disabled="false"
                          role="link"
                          href="/case-studies/bnb/"
                        >
                          <span className="MuiButton-label-107">
                            <img
                              src="https://www.ankr.com/_next/static/images/bnb-chain-e515a9b6939286a8f7e7114eca2dbdae.png"
                              alt="header.sub-menus.case-studies.bnb-chain.title"
                              className="jss2940"
                            />
                            <div className="MuiBox-root-2943 jss2959">
                              <div className="MuiBox-root-2943 jss2960 jss2933">
                                <h4 className="MuiTypography-root-134 jss2934 MuiTypography-h4-142">
                                  BNB Chain
                                </h4>
                                <svg
                                  className="jss2941"
                                  width={15}
                                  height={14}
                                  viewBox="0 0 15 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                              <p className="MuiTypography-root-134 jss2942 MuiTypography-body1-136">
                                Ankr’s contributions take BNB Chain to the next
                                level.
                              </p>
                            </div>
                          </span>
                        </a>
                      </div>
                      <div className="jss2929 jss2931">
                        <a
                          className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss2938 MuiButton-textPrimary-109 MuiButton-disableElevation-117"
                          tabIndex={0}
                          aria-disabled="false"
                          role="link"
                          href="/case-studies/sushi/"
                        >
                          <span className="MuiButton-label-107">
                            <img
                              src="https://www.ankr.com/_next/static/images/sushi-swap-f9fdfea96a96d3c1319f0a5690d224fd.png"
                              alt="header.sub-menus.case-studies.sushi-swap.title"
                              className="jss2940"
                            />
                            <div className="MuiBox-root-2943 jss2961">
                              <div className="MuiBox-root-2943 jss2962 jss2933">
                                <h4 className="MuiTypography-root-134 jss2934 MuiTypography-h4-142">
                                  SushiSwap
                                </h4>
                                <svg
                                  className="jss2941"
                                  width={15}
                                  height={14}
                                  viewBox="0 0 15 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                              <p className="MuiTypography-root-134 jss2942 MuiTypography-body1-136">
                                Serving up a multi-chain connection for the DeFi
                                chefs at SushiSwap.
                              </p>
                            </div>
                          </span>
                        </a>
                      </div>
                      <div className="jss2929 jss2931">
                        <a
                          className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss2938 MuiButton-textPrimary-109 MuiButton-disableElevation-117"
                          tabIndex={0}
                          aria-disabled="false"
                          role="link"
                          href="/case-studies/bomb/"
                        >
                          <span className="MuiButton-label-107">
                            <img
                              src="https://www.ankr.com/_next/static/images/bomb-money-587117d1a79f75492efaba6ffc9acbf3.png"
                              alt="header.sub-menus.case-studies.bomb-money.title"
                              className="jss2940"
                            />
                            <div className="MuiBox-root-2943 jss2963">
                              <div className="MuiBox-root-2943 jss2964 jss2933">
                                <h4 className="MuiTypography-root-134 jss2934 MuiTypography-h4-142">
                                  BOMB Money
                                </h4>
                                <svg
                                  className="jss2941"
                                  width={15}
                                  height={14}
                                  viewBox="0 0 15 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                              <p className="MuiTypography-root-134 jss2942 MuiTypography-body1-136">
                                Explosive scalability delivered for BOMB Money
                                with their own AppChain.
                              </p>
                            </div>
                          </span>
                        </a>
                      </div>
                      <div className="jss2929 jss2931">
                        <a
                          className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss2938 MuiButton-textPrimary-109 MuiButton-disableElevation-117"
                          tabIndex={0}
                          aria-disabled="false"
                          role="link"
                          href="/case-studies/meta-apes/"
                        >
                          <span className="MuiButton-label-107">
                            <img
                              src="https://www.ankr.com/_next/static/images/meta-apes-a993da5e7e2b5fd22dfc4b1ed596a51e.png"
                              alt="header.sub-menus.case-studies.meta-apes.title"
                              className="jss2940"
                            />
                            <div className="MuiBox-root-2943 jss2965">
                              <div className="MuiBox-root-2943 jss2966 jss2933">
                                <h4 className="MuiTypography-root-134 jss2934 MuiTypography-h4-142">
                                  Meta Apes
                                </h4>
                                <svg
                                  className="jss2941"
                                  width={15}
                                  height={14}
                                  viewBox="0 0 15 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                              <p className="MuiTypography-root-134 jss2942 MuiTypography-body1-136">
                                Taking a Web2 game to Web3 in 6 weeks? Bananas.
                              </p>
                            </div>
                          </span>
                        </a>
                      </div>
                      <div className="jss2929 jss2932">
                        <a
                          className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss2938 jss2939 MuiButton-textPrimary-109 MuiButton-disableElevation-117"
                          tabIndex={0}
                          aria-disabled="false"
                          role="link"
                          href="/app-chains/"
                        >
                          <span className="MuiButton-label-107">
                            <div className="MuiBox-root-2943 jss2967">
                              <div className="MuiBox-root-2943 jss2968 jss2933">
                                <h4 className="MuiTypography-root-134 jss2934 MuiTypography-h4-142">
                                  More coming soon
                                </h4>
                                <svg
                                  className="jss2941"
                                  width={15}
                                  height={14}
                                  viewBox="0 0 15 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </div>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className={
                    mobileMenu2 ? "jss1229 static active-bar" : "jss1229 static"
                  }
                  onMouseEnter={toggleTrue2}
                  onClick={toggleFalse2}
                >
                  <button
                    className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss1230 MuiButton-disableElevation-117"
                    tabIndex={0}
                    type="button"
                  >
                    <span className="MuiButton-label-107">
                      Developers
                      <svg
                        className="jss1233"
                        width={10}
                        height={6}
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1.25"
                        />
                      </svg>
                    </span>
                  </button>
                  <div className="float-overlay" onClick={toggleFalse2}></div>
                  <div
                    onMouseLeave={toggleFalse2}
                    id="test"
                    className="float-dv  alters-section"
                  >
                    <div className="bottom-sec">
                      <a href="" className="link-float">
                        <div className="link-heading">
                          <h4 class="MuiTypography-root-134 jss3511 MuiTypography-h4-142">
                            Docs
                          </h4>
                          <img src={rightArrow} alt="" />
                        </div>
                      </a>
                    </div>
                    <div className="bottom-sec">
                      <a href="" className="link-float">
                        <div className="link-heading">
                          <h4 class="MuiTypography-root-134 jss3511 MuiTypography-h4-142">
                            Grants & Programs
                          </h4>
                          <img src={rightArrow} alt="" />
                        </div>
                      </a>
                    </div>
                    <div className="bottom-sec">
                      <a href="" className="link-float">
                        <div className="link-heading">
                          <h4 class="MuiTypography-root-134 jss3511 MuiTypography-h4-142">
                            Tutorials
                          </h4>
                          <img src={rightArrow} alt="" />
                        </div>
                      </a>
                    </div>
                    <div className="bottom-sec">
                      <a href="" className="link-float">
                        <div className="link-heading">
                          <h4 class="MuiTypography-root-134 jss3511 MuiTypography-h4-142">
                            Github
                          </h4>
                          <img src={rightArrow} alt="" />
                        </div>
                      </a>
                    </div>
                  </div>
                </li>
                <li
                  className={
                    mobileMenu3 ? "jss1229 static active-bar" : "jss1229 static"
                  }
                  onMouseEnter={toggleTrue3}
                  onClick={toggleFalse3}
                >
                  <button
                    className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss1230 MuiButton-disableElevation-117"
                    tabIndex={0}
                    type="button"
                  >
                    <span className="MuiButton-label-107">
                      Ecosystem
                      <svg
                        className="jss1233"
                        width={10}
                        height={6}
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1.25"
                        />
                      </svg>
                    </span>
                  </button>
                  <div className="float-overlay" onClick={toggleFalse3}></div>
                  <div
                    onMouseLeave={toggleFalse3}
                    className="float-dv alters-section"
                  >
                    <div className="bottom-sec">
                      <a href="" className="link-float">
                        <div className="link-heading">
                          <h4 class="MuiTypography-root-134 jss3511 MuiTypography-h4-142">
                            Ankr Network
                          </h4>
                          <img src={rightArrow} alt="" />
                        </div>
                      </a>
                    </div>
                    <div className="bottom-sec">
                      <a href="" className="link-float">
                        <div className="link-heading">
                          <span class="jss7737 jss7738 jss7739">new</span>

                          <h4 class="MuiTypography-root-134 jss3511 MuiTypography-h4-142">
                            Ankr Whitepaper
                          </h4>
                          <img src={rightArrow} alt="" />
                        </div>
                      </a>
                    </div>
                    <div className="bottom-sec">
                      <a href="" className="link-float">
                        <div className="link-heading">
                          <span class="jss7737 jss7738">beta</span>
                          <h4 class="MuiTypography-root-134 jss3511 MuiTypography-h4-142">
                            Ambassador Program
                          </h4>
                          <img src={rightArrow} alt="" />
                        </div>
                      </a>
                    </div>
                    <div className="bottom-sec">
                      <a href="" className="link-float">
                        <div className="link-heading">
                          <h4 class="MuiTypography-root-134 jss3511 MuiTypography-h4-142">
                            Node Providers
                          </h4>
                          <img src={rightArrow} alt="" />
                        </div>
                      </a>
                    </div>
                  </div>
                </li>
                <li
                  className={
                    mobileMenu4 ? "jss1229 static active-bar" : "jss1229 static"
                  }
                  onMouseEnter={toggleTrue4}
                  onClick={toggleFalse4}
                >
                  <button
                    className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss1230 MuiButton-disableElevation-117"
                    tabIndex={0}
                    type="button"
                  >
                    <span className="MuiButton-label-107">
                      Company
                      <svg
                        className="jss1233"
                        width={10}
                        height={6}
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1.25"
                        />
                      </svg>
                    </span>
                  </button>
                  <div className="float-overlay" onClick={toggleFalse4}></div>
                  <div
                    onMouseLeave={toggleFalse4}
                    className="float-dv alters-section"
                  >
                    <div className="bottom-sec">
                      <a href="" className="link-float">
                        <div className="link-heading">
                          <h4 class="MuiTypography-root-134 jss3511 MuiTypography-h4-142">
                            About Us
                          </h4>
                          <img src={rightArrow} alt="" />
                        </div>
                      </a>
                    </div>
                    <div className="bottom-sec">
                      <a href="" className="link-float">
                        <div className="link-heading">
                          <h4 class="MuiTypography-root-134 jss3511 MuiTypography-h4-142">
                            Press
                          </h4>
                          <img src={rightArrow} alt="" />
                        </div>
                      </a>
                    </div>
                    <div className="bottom-sec">
                      <a href="" className="link-float">
                        <div className="link-heading">
                          <h4 class="MuiTypography-root-134 jss3511 MuiTypography-h4-142">
                            Blog
                          </h4>
                          <img src={rightArrow} alt="" />
                        </div>
                      </a>
                    </div>
                    <div className="bottom-sec">
                      <a href="" className="link-float">
                        <div className="link-heading">
                          <h4 class="MuiTypography-root-134 jss3511 MuiTypography-h4-142">
                            Careers
                          </h4>
                          <img src={rightArrow} alt="" />
                        </div>
                      </a>
                    </div>
                    <div className="bottom-sec">
                      <a href="" className="link-float">
                        <div className="link-heading">
                          <h4 class="MuiTypography-root-134 jss3511 MuiTypography-h4-142">
                            Brand Assets
                          </h4>
                          <img src={rightArrow} alt="" />
                        </div>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <a className="jss96 jss100" rel="noreferrer" target="_blank">
              <h6 className="MuiTypography-root-134 jss99 MuiTypography-h6-144">
                Whitepaper 2.0
              </h6>
            </a>
          </div>
        </div>
      </header>
      {/* Popup */}
      {sideToggle && (
        <div
          role="presentation"
          onClick={toggleSide}
          className="__packageName__-MuiPopover-root"
          style={{ position: "fixed", zIndex: 99999, inset: "0px" }}
        >
          <div
            aria-hidden="true"
            style={{
              zIndex: -1,
              position: "fixed",
              inset: "0px",
              backgroundColor: "transparent",
              WebkitTapHighlightColor: "transparent",
            }}
          />
          <div tabIndex={0} data-test="sentinelStart" />
          <div
            className="__packageName__-MuiPaper-root __packageName__-MuiPopover-paper __packageName__-__packageName__-jss2 __packageName__-__packageName__-jss3 __packageName__-__packageName__-jss6 __packageName__-MuiPaper-elevation8 __packageName__-MuiPaper-rounded"
            tabIndex={-1}
            style={{
              opacity: 1,
              transform: "none",
              top: "75px",
              left: "68px",
              transition:
                "opacity 125ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 83ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
              transformOrigin: "0px 0px",
            }}
          >
            <div className="__packageName__-__packageName__-jss111 __packageName__-__packageName__-jss123">
              <a
                href="/"
                className="__packageName__-__packageName__-jss115"
                target="_self"
              >
                <span>
                  Ankr Main Page
                  <svg
                    className="__packageName__-__packageName__-jss120"
                    width={15}
                    height={14}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </a>
              <div className="__packageName__-__packageName__-jss112">
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: "0px",
                      overflow: "scroll",
                      marginRight: "-17px",
                      marginBottom: "-17px",
                    }}
                  >
                    <div className="__packageName__-__packageName__-jss121">
                      <p className="__packageName__-MuiTypography-root __packageName__-__packageName__-jss122 __packageName__-MuiTypography-body1">
                        Build
                      </p>
                      <a
                        rel="noopener noreferrer"
                        href="/rpc/"
                        className
                        target="_self"
                      >
                        <span>
                          <div className="__packageName__-__packageName__-jss116">
                            <div className="__packageName__-__packageName__-jss118">
                              <p className="__packageName__-MuiTypography-root __packageName__-__packageName__-jss119 __packageName__-MuiTypography-body1 __packageName__-MuiTypography-colorInherit">
                                Public RPC Endpoints
                                <svg
                                  className="__packageName__-__packageName__-jss120"
                                  width={15}
                                  height={14}
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </p>
                            </div>
                          </div>
                        </span>
                      </a>
                      <a
                        rel="noopener noreferrer"
                        href="/rpc/account/"
                        className
                        target="_self"
                      >
                        <span>
                          <div className="__packageName__-__packageName__-jss116">
                            <div className="__packageName__-__packageName__-jss118">
                              <p className="__packageName__-MuiTypography-root __packageName__-__packageName__-jss119 __packageName__-MuiTypography-body1 __packageName__-MuiTypography-colorInherit">
                                Premium API’s
                                <svg
                                  className="__packageName__-__packageName__-jss120"
                                  width={15}
                                  height={14}
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </p>
                            </div>
                          </div>
                        </span>
                      </a>
                      <a
                        rel="noopener noreferrer"
                        href="https://ankrscan.io"
                        className
                        target="_self"
                      >
                        <span>
                          <div className="__packageName__-__packageName__-jss116">
                            <div className="__packageName__-__packageName__-jss118">
                              <p className="__packageName__-MuiTypography-root __packageName__-__packageName__-jss119 __packageName__-MuiTypography-body1 __packageName__-MuiTypography-colorInherit">
                                Ankr Scan
                                <svg
                                  className="__packageName__-__packageName__-jss120"
                                  width={15}
                                  height={14}
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </p>
                            </div>
                          </div>
                        </span>
                      </a>
                      <a href="/build/nodes/" className target="_self">
                        <span>
                          <div className="__packageName__-__packageName__-jss116">
                            <div className="__packageName__-__packageName__-jss118">
                              <p className="__packageName__-MuiTypography-root __packageName__-__packageName__-jss119 __packageName__-MuiTypography-body1 __packageName__-MuiTypography-colorInherit">
                                Node Service
                                <svg
                                  className="__packageName__-__packageName__-jss120"
                                  width={15}
                                  height={14}
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </p>
                            </div>
                          </div>
                        </span>
                      </a>
                      <a href="/enterprise/" className target="_self">
                        <span>
                          <div className="__packageName__-__packageName__-jss116">
                            <div className="__packageName__-__packageName__-jss118">
                              <p className="__packageName__-MuiTypography-root __packageName__-__packageName__-jss119 __packageName__-MuiTypography-body1 __packageName__-MuiTypography-colorInherit">
                                Enterprise
                                <svg
                                  className="__packageName__-__packageName__-jss120"
                                  width={15}
                                  height={14}
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </p>
                            </div>
                          </div>
                        </span>
                      </a>
                    </div>
                    <div className="__packageName__-__packageName__-jss121">
                      <p className="__packageName__-MuiTypography-root __packageName__-__packageName__-jss122 __packageName__-MuiTypography-body1">
                        Staking
                      </p>
                      <a
                        rel="noopener noreferrer"
                        href="/staking/dashboard/"
                        className
                        target="_self"
                      >
                        <span>
                          <div className="__packageName__-__packageName__-jss116">
                            <div className="__packageName__-__packageName__-jss118">
                              <p className="__packageName__-MuiTypography-root __packageName__-__packageName__-jss119 __packageName__-MuiTypography-body1 __packageName__-MuiTypography-colorInherit">
                                Dashboard
                                <svg
                                  className="__packageName__-__packageName__-jss120"
                                  width={15}
                                  height={14}
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </p>
                            </div>
                          </div>
                        </span>
                      </a>
                      <a
                        rel="noopener noreferrer"
                        href="/staking/stake/"
                        className
                        target="_self"
                      >
                        <span>
                          <div className="__packageName__-__packageName__-jss116">
                            <div className="__packageName__-__packageName__-jss118">
                              <p className="__packageName__-MuiTypography-root __packageName__-__packageName__-jss119 __packageName__-MuiTypography-body1 __packageName__-MuiTypography-colorInherit">
                                Liquid Staking
                                <svg
                                  className="__packageName__-__packageName__-jss120"
                                  width={15}
                                  height={14}
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </p>
                            </div>
                          </div>
                        </span>
                      </a>
                      <a
                        rel="noopener noreferrer"
                        href="/staking/defi/"
                        className
                        target="_self"
                      >
                        <span>
                          <div className="__packageName__-__packageName__-jss116">
                            <div className="__packageName__-__packageName__-jss118">
                              <p className="__packageName__-MuiTypography-root __packageName__-__packageName__-jss119 __packageName__-MuiTypography-body1 __packageName__-MuiTypography-colorInherit">
                                DeFi
                                <svg
                                  className="__packageName__-__packageName__-jss120"
                                  width={15}
                                  height={14}
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </p>
                            </div>
                          </div>
                        </span>
                      </a>
                      <a
                        rel="noopener noreferrer"
                        href="/staking/bridge/"
                        className
                        target="_self"
                      >
                        <span>
                          <div className="__packageName__-__packageName__-jss116">
                            <div className="__packageName__-__packageName__-jss118">
                              <p className="__packageName__-MuiTypography-root __packageName__-__packageName__-jss119 __packageName__-MuiTypography-body1 __packageName__-MuiTypography-colorInherit">
                                Bridge
                                <svg
                                  className="__packageName__-__packageName__-jss120"
                                  width={15}
                                  height={14}
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </p>
                            </div>
                          </div>
                        </span>
                      </a>
                      <a
                        rel="noopener noreferrer"
                        href="/staking/switch/"
                        className
                        target="_self"
                      >
                        <span>
                          <div className="__packageName__-__packageName__-jss116">
                            <div className="__packageName__-__packageName__-jss118">
                              <p className="__packageName__-MuiTypography-root __packageName__-__packageName__-jss119 __packageName__-MuiTypography-body1 __packageName__-MuiTypography-colorInherit">
                                Switch
                                <svg
                                  className="__packageName__-__packageName__-jss120"
                                  width={15}
                                  height={14}
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </p>
                            </div>
                          </div>
                        </span>
                      </a>
                      <a
                        rel="noopener noreferrer"
                        href="/staking/liquid-crowdloan/dot/"
                        className
                        target="_self"
                      >
                        <span>
                          <div className="__packageName__-__packageName__-jss116">
                            <div className="__packageName__-__packageName__-jss118">
                              <p className="__packageName__-MuiTypography-root __packageName__-__packageName__-jss119 __packageName__-MuiTypography-body1 __packageName__-MuiTypography-colorInherit">
                                Liquid Crowdloan
                                <svg
                                  className="__packageName__-__packageName__-jss120"
                                  width={15}
                                  height={14}
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </p>
                            </div>
                          </div>
                        </span>
                      </a>
                    </div>
                    <div className="__packageName__-__packageName__-jss121">
                      <p className="__packageName__-MuiTypography-root __packageName__-__packageName__-jss122 __packageName__-MuiTypography-body1">
                        Gaming
                      </p>
                      <a href="/gaming/" className target="_self">
                        <span>
                          <div className="__packageName__-__packageName__-jss116">
                            <div className="__packageName__-__packageName__-jss118">
                              <p className="__packageName__-MuiTypography-root __packageName__-__packageName__-jss119 __packageName__-MuiTypography-body1 __packageName__-MuiTypography-colorInherit">
                                Ankr Gaming
                                <svg
                                  className="__packageName__-__packageName__-jss120"
                                  width={15}
                                  height={14}
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </p>
                            </div>
                          </div>
                        </span>
                      </a>
                    </div>
                    <div className="__packageName__-__packageName__-jss121">
                      <p className="__packageName__-MuiTypography-root __packageName__-__packageName__-jss122 __packageName__-MuiTypography-body1">
                        Docs
                      </p>
                      <a
                        rel="noopener noreferrer"
                        href="/docs/"
                        className
                        target="_blank"
                      >
                        <span>
                          <div className="__packageName__-__packageName__-jss116">
                            <div className="__packageName__-__packageName__-jss118">
                              <p className="__packageName__-MuiTypography-root __packageName__-__packageName__-jss119 __packageName__-MuiTypography-body1 __packageName__-MuiTypography-colorInherit">
                                Ankr Docs
                                <svg
                                  className="__packageName__-__packageName__-jss120"
                                  width={15}
                                  height={14}
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </p>
                            </div>
                          </div>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      height: "6px",
                      right: "2px",
                      bottom: "2px",
                      left: "2px",
                      borderRadius: "3px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        display: "block",
                        height: "100%",
                        cursor: "pointer",
                        borderRadius: "inherit",
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        width: "0px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div tabIndex={0} data-test="sentinelEnd" />
        </div>
      )}
      {fullFloat && (
        <div className="full-float" onMouseLeave={toggleFull}>
          <div className="MuiContainer-root-1268 jss768 jss769 MuiContainer-maxWidthLg-1274">
            <div className="jss753 case-studies">
              <div className="jss1276 jss1277">
                <a
                  className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss1285 MuiButton-textPrimary-109 MuiButton-disableElevation-117"
                  tabIndex={0}
                  aria-disabled="false"
                  role="link"
                  href="/case-studies/bnb/"
                >
                  <span className="MuiButton-label-107">
                    <img
                      src="https://www.ankr.com/_next/static/images/bnb-chain-e515a9b6939286a8f7e7114eca2dbdae.png"
                      alt="header.sub-menus.case-studies.bnb-chain.title"
                      className="jss1287"
                    />
                    <div className="MuiBox-root-1290 jss1291">
                      <div className="MuiBox-root-1290 jss1292 jss1280">
                        <h4 className="MuiTypography-root-134 jss1281 MuiTypography-h4-142">
                          BNB Chain
                        </h4>
                        <svg
                          className="jss1288"
                          width={15}
                          height={14}
                          viewBox="0 0 15 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <p className="MuiTypography-root-134 jss1289 MuiTypography-body1-136">
                        Ankr’s contributions take BNB Chain to the next level.
                      </p>
                    </div>
                  </span>
                </a>
              </div>
              <div className="jss1276 jss1278">
                <a
                  className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss1285 MuiButton-textPrimary-109 MuiButton-disableElevation-117"
                  tabIndex={0}
                  aria-disabled="false"
                  role="link"
                  href="/case-studies/sushi/"
                >
                  <span className="MuiButton-label-107">
                    <img
                      src="https://www.ankr.com/_next/static/images/sushi-swap-f9fdfea96a96d3c1319f0a5690d224fd.png"
                      alt="header.sub-menus.case-studies.sushi-swap.title"
                      className="jss1287"
                    />
                    <div className="MuiBox-root-1290 jss1293">
                      <div className="MuiBox-root-1290 jss1294 jss1280">
                        <h4 className="MuiTypography-root-134 jss1281 MuiTypography-h4-142">
                          SushiSwap
                        </h4>
                        <svg
                          className="jss1288"
                          width={15}
                          height={14}
                          viewBox="0 0 15 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <p className="MuiTypography-root-134 jss1289 MuiTypography-body1-136">
                        Serving up a multi-chain connection for the DeFi chefs
                        at SushiSwap.
                      </p>
                    </div>
                  </span>
                </a>
              </div>
              <div className="jss1276 jss1278">
                <a
                  className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss1285 MuiButton-textPrimary-109 MuiButton-disableElevation-117"
                  tabIndex={0}
                  aria-disabled="false"
                  role="link"
                  href="/case-studies/bomb/"
                >
                  <span className="MuiButton-label-107">
                    <img
                      src="https://www.ankr.com/_next/static/images/bomb-money-587117d1a79f75492efaba6ffc9acbf3.png"
                      alt="header.sub-menus.case-studies.bomb-money.title"
                      className="jss1287"
                    />
                    <div className="MuiBox-root-1290 jss1295">
                      <div className="MuiBox-root-1290 jss1296 jss1280">
                        <h4 className="MuiTypography-root-134 jss1281 MuiTypography-h4-142">
                          BOMB Money
                        </h4>
                        <svg
                          className="jss1288"
                          width={15}
                          height={14}
                          viewBox="0 0 15 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <p className="MuiTypography-root-134 jss1289 MuiTypography-body1-136">
                        Explosive scalability delivered for BOMB Money with
                        their own AppChain.
                      </p>
                    </div>
                  </span>
                </a>
              </div>
              <div className="jss1276 jss1278">
                <a
                  className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss1285 MuiButton-textPrimary-109 MuiButton-disableElevation-117"
                  tabIndex={0}
                  aria-disabled="false"
                  role="link"
                  href="/case-studies/meta-apes/"
                >
                  <span className="MuiButton-label-107">
                    <img
                      src="https://www.ankr.com/_next/static/images/meta-apes-a993da5e7e2b5fd22dfc4b1ed596a51e.png"
                      alt="header.sub-menus.case-studies.meta-apes.title"
                      className="jss1287"
                    />
                    <div className="MuiBox-root-1290 jss1297">
                      <div className="MuiBox-root-1290 jss1298 jss1280">
                        <h4 className="MuiTypography-root-134 jss1281 MuiTypography-h4-142">
                          Meta Apes
                        </h4>
                        <svg
                          className="jss1288"
                          width={15}
                          height={14}
                          viewBox="0 0 15 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <p className="MuiTypography-root-134 jss1289 MuiTypography-body1-136">
                        Taking a Web2 game to Web3 in 6 weeks? Bananas.
                      </p>
                    </div>
                  </span>
                </a>
              </div>
              <div className="jss1276 jss1279">
                <a
                  className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss1285 jss1286 MuiButton-textPrimary-109 MuiButton-disableElevation-117"
                  tabIndex={0}
                  aria-disabled="false"
                  role="link"
                  href="/app-chains/"
                >
                  <span className="MuiButton-label-107">
                    <div className="MuiBox-root-1290 jss1299">
                      <div className="MuiBox-root-1290 jss1300 jss1280">
                        <h4 className="MuiTypography-root-134 jss1281 MuiTypography-h4-142">
                          More coming soon
                        </h4>
                        <svg
                          className="jss1288"
                          width={15}
                          height={14}
                          viewBox="0 0 15 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
