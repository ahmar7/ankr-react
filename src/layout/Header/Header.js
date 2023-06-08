import React, { useState } from "react";
import "./Header.css";
import {
  Dapps,
  Defi,
  Dex,
  Market,
  MetaVerse,
  Newarrow,
  Nft,
  P2p,
  W3,
  rightArrow,
} from "../../utils/allImg";
import { Link } from "react-router-dom";
const Header = () => {
  const [toggleMobileMenu, settoggleMobileMenu] = useState(false);
  const [MenuName, setMenuName] = useState("Menu");

  const [sideToggle, setsideToggle] = useState(false);
  const [fullFloat, setfullFloat] = useState(false);
  const [mobileMenu, setmobileMenu] = useState(false);
  const [mobileMenu2, setmobileMenu2] = useState(false);
  const [mobileMenu3, setmobileMenu3] = useState(false);
  const [mobileMenu4, setmobileMenu4] = useState(false);
  let toggleSide = () => {
    if (sideToggle === true) {
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
    setmobileMenu3(false);
    setmobileMenu4(true);
    setfullFloat(false);
  };
  let toggleFull = () => {
    // if (fullFloat === false) {
    setfullFloat(true);
    // } else {
    // setfullFloat(false);
    // }
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
  // let toggleFalseclick=()=>{
  // document.getElementById("about-sec").style.display="none";

  // }
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
            <Link
              className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss94 MuiButton-disableElevation-117"
              tabIndex={0}
              aria-disabled="false"
              aria-label="ANKR"
              to="/"
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
            </Link>
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
                    mobileMenu
                      ? "jss1229 static active-bar"
                      : "jss1229 static closeAn "
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
                  <div
                    className="float-overlay"
                    onMouseEnter={toggleFalse}
                  ></div>
                  <div onMouseLeave={toggleFalse} className="float-dv">
                    {/* <div className="bottom-sec">
                      <a href="" className="link-float">
                        <div className="link-heading">
                          <h4 className="MuiTypography-root-134 jss3511 MuiTypography-h4-142">
                            RPC Service
                          </h4>
                          <div className="img-cont">
                            {" "}
                            <img src={rightArrow} alt="" />
                          </div>
                        </div>

                        <p className="MuiTypography-root-134 jss3519 MuiTypography-body1-136">
                          Distributed, high performance RPC services. Connect
                          and start building for free.
                        </p>
                      </a>
                    </div>
                    <div className="bottom-sec">
                      <a href="" className="link-float">
                        <div className="link-heading">
                          <h4 className="MuiTypography-root-134 jss3511 MuiTypography-h4-142">
                            RPC Service
                          </h4>
                          <div className="img-cont">
                            {" "}
                            <img src={rightArrow} alt="" />
                          </div>
                        </div>

                        <p className="MuiTypography-root-134 jss3519 MuiTypography-body1-136">
                          Distributed, high performance RPC services. Connect
                          and start building for free.
                        </p>
                      </a>
                    </div>
                    <div className="bottom-sec">
                      <a href="" className="link-float">
                        <div className="link-heading">
                          <h4 className="MuiTypography-root-134 jss3511 MuiTypography-h4-142">
                            RPC Service
                          </h4>
                          <div className="img-cont">
                            {" "}
                            <img src={rightArrow} alt="" />
                          </div>
                        </div>

                        <p className="MuiTypography-root-134 jss3519 MuiTypography-body1-136">
                          Distributed, high performance RPC services. Connect
                          and start building for free.
                        </p>
                      </a>
                    </div>
                    <div className="bottom-sec">
                      <a href="" className="link-float">
                        <div className="link-heading">
                          <h4 className="MuiTypography-root-134 jss3511 MuiTypography-h4-142">
                            RPC Service
                          </h4>
                          <div className="img-cont">
                            {" "}
                            <img src={rightArrow} alt="" />
                          </div>
                        </div>

                        <p className="MuiTypography-root-134 jss3519 MuiTypography-body1-136">
                          Distributed, high performance RPC services. Connect
                          and start building for free.
                        </p>
                      </a>
                    </div>
                    <div className="bottom-sec">
                      <a href="" className="link-float">
                        <div className="link-heading">
                          <h4 className="MuiTypography-root-134 jss3511 MuiTypography-h4-142">
                            RPC Service
                          </h4>
                          <div className="img-cont">
                            {" "}
                            <img src={rightArrow} alt="" />
                          </div>
                        </div>

                        <p className="MuiTypography-root-134 jss3519 MuiTypography-body1-136">
                          Distributed, high performance RPC services. Connect
                          and start building for free.
                        </p>
                      </a>
                    </div>
                    <div className="bottom-sec">
                      <a href="" className="link-float">
                        <div className="link-heading">
                          <h4 className="MuiTypography-root-134 jss3511 MuiTypography-h4-142">
                            RPC Service
                          </h4>
                          <div className="img-cont">
                            {" "}
                            <img src={rightArrow} alt="" />
                          </div>
                        </div>

                        <p className="MuiTypography-root-134 jss3519 MuiTypography-body1-136">
                          Distributed, high performance RPC services. Connect
                          and start building for free.
                        </p>
                      </a>
                    </div>
                    <div className="bottom-sec">
                      <a href="" className="link-float">
                        <div className="link-heading">
                          <h4 className="MuiTypography-root-134 jss3511 MuiTypography-h4-142">
                            RPC Service
                          </h4>
                          <div className="img-cont">
                            {" "}
                            <img src={rightArrow} alt="" />
                          </div>
                        </div>

                        <p className="MuiTypography-root-134 jss3519 MuiTypography-body1-136">
                          Distributed, high performance RPC services. Connect
                          and start building for free.
                        </p>
                      </a>
                    </div> */}
                    <div className="flex-row">
                      <Link to="/brand-assets" className="individual-link">
                        <div className="icon">
                          <svg
                            width={24}
                            height={24}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <mask
                              id="a"
                              maskUnits="userSpaceOnUse"
                              x="5.156"
                              y="5.605"
                              width={12}
                              height={15}
                              fill="#000"
                            >
                              <path fill="#fff" d="M5.156 5.605h12v15h-12z" />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12.406 6.605c1.13 0 2.043.914 2.043 2.043 0 .47-.168.908-.437 1.257l2.736 2.735v4.906a.278.278 0 1 1-.558 0v-4.67l-2.58-2.581c-.343.249-.753.39-1.204.39a2.04 2.04 0 1 1 0-4.08zm-.282 8.448v.94a2.042 2.042 0 1 0 2.325 2.023 2.039 2.039 0 0 0-1.76-2.022V12.7a.284.284 0 0 0-.283-.282.284.284 0 0 0-.282.282v2.352zm.282 4.435c.813 0 1.472-.658 1.472-1.471 0-.813-.659-1.479-1.472-1.479-.82 0-1.478.666-1.478 1.479 0 .813.658 1.471 1.478 1.471zm-3.924-2.002v.06a.284.284 0 0 1-.283.283.284.284 0 0 1-.282-.283v-2.325a2.042 2.042 0 1 1 2.325-2.023 2.039 2.039 0 0 1-1.76 2.023v2.265zm-.283-5.766c.813 0 1.472.665 1.472 1.478s-.659 1.472-1.472 1.472c-.82 0-1.478-.659-1.478-1.472s.658-1.478 1.478-1.478zm4.207-4.55c.813 0 1.472.659 1.472 1.478 0 .814-.659 1.472-1.472 1.472a1.474 1.474 0 1 1 0-2.95z"
                              />
                            </mask>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12.406 6.605c1.13 0 2.043.914 2.043 2.043 0 .47-.168.908-.437 1.257l2.736 2.735v4.906a.278.278 0 1 1-.558 0v-4.67l-2.58-2.581c-.343.249-.753.39-1.204.39a2.04 2.04 0 1 1 0-4.08zm-.282 8.448v.94a2.042 2.042 0 1 0 2.325 2.023 2.039 2.039 0 0 0-1.76-2.022V12.7a.284.284 0 0 0-.283-.282.284.284 0 0 0-.282.282v2.352zm.282 4.435c.813 0 1.472-.658 1.472-1.471 0-.813-.659-1.479-1.472-1.479-.82 0-1.478.666-1.478 1.479 0 .813.658 1.471 1.478 1.471zm-3.924-2.002v.06a.284.284 0 0 1-.283.283.284.284 0 0 1-.282-.283v-2.325a2.042 2.042 0 1 1 2.325-2.023 2.039 2.039 0 0 1-1.76 2.023v2.265zm-.283-5.766c.813 0 1.472.665 1.472 1.478s-.659 1.472-1.472 1.472c-.82 0-1.478-.659-1.478-1.472s.658-1.478 1.478-1.478zm4.207-4.55c.813 0 1.472.659 1.472 1.478 0 .814-.659 1.472-1.472 1.472a1.474 1.474 0 1 1 0-2.95z"
                              fill="#000"
                            />
                            <path
                              clipRule="evenodd"
                              d="M12.406 6.605c1.13 0 2.043.914 2.043 2.043 0 .47-.168.908-.437 1.257l2.736 2.735v4.906a.278.278 0 1 1-.558 0v-4.67l-2.58-2.581c-.343.249-.753.39-1.204.39a2.04 2.04 0 1 1 0-4.08zm-.282 8.448v.94a2.042 2.042 0 1 0 2.325 2.023 2.039 2.039 0 0 0-1.76-2.022V12.7a.284.284 0 0 0-.283-.282.284.284 0 0 0-.282.282v2.352zm.282 4.435c.813 0 1.472-.658 1.472-1.471 0-.813-.659-1.479-1.472-1.479-.82 0-1.478.666-1.478 1.479 0 .813.658 1.471 1.478 1.471zm-3.924-2.002v.06a.284.284 0 0 1-.283.283.284.284 0 0 1-.282-.283v-2.325a2.042 2.042 0 1 1 2.325-2.023 2.039 2.039 0 0 1-1.76 2.023v2.265zm-.283-5.766c.813 0 1.472.665 1.472 1.478s-.659 1.472-1.472 1.472c-.82 0-1.478-.659-1.478-1.472s.658-1.478 1.478-1.478zm4.207-4.55c.813 0 1.472.659 1.472 1.478 0 .814-.659 1.472-1.472 1.472a1.474 1.474 0 1 1 0-2.95z"
                              stroke="#000"
                              strokeWidth=".2"
                              mask="url(#a)"
                            />
                            <mask
                              id="b"
                              maskUnits="userSpaceOnUse"
                              x={3}
                              y="1.963"
                              width={18}
                              height={22}
                              fill="#000"
                            >
                              <path fill="#fff" d="M3 1.963h18v22H3z" />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4 14.421c.968 2.782 3.979 8.394 8.266 8.542 4.281-.148 7.292-5.76 8.26-8.542V7.19s-5.35-3.663-8.26-4.227C9.35 3.527 4 7.19 4 7.19v7.231zm.551-.1c.9 2.6 3.716 7.842 7.715 7.977 3.992-.135 6.808-5.377 7.715-7.978V7.573s-5-3.42-7.715-3.945c-2.722.524-7.715 3.945-7.715 3.945v6.747z"
                              />
                            </mask>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M4 14.421c.968 2.782 3.979 8.394 8.266 8.542 4.281-.148 7.292-5.76 8.26-8.542V7.19s-5.35-3.663-8.26-4.227C9.35 3.527 4 7.19 4 7.19v7.231zm.551-.1c.9 2.6 3.716 7.842 7.715 7.977 3.992-.135 6.808-5.377 7.715-7.978V7.573s-5-3.42-7.715-3.945c-2.722.524-7.715 3.945-7.715 3.945v6.747z"
                              fill="#000"
                            />
                            <path
                              clipRule="evenodd"
                              d="M4 14.421c.968 2.782 3.979 8.394 8.266 8.542 4.281-.148 7.292-5.76 8.26-8.542V7.19s-5.35-3.663-8.26-4.227C9.35 3.527 4 7.19 4 7.19v7.231zm.551-.1c.9 2.6 3.716 7.842 7.715 7.977 3.992-.135 6.808-5.377 7.715-7.978V7.573s-5-3.42-7.715-3.945c-2.722.524-7.715 3.945-7.715 3.945v6.747z"
                              stroke="#000"
                              strokeWidth=".2"
                              mask="url(#b)"
                            />
                          </svg>
                        </div>
                        <div className="link-txt">
                          <h3>dApps</h3>
                          <p>Build decentralized applications on Velas</p>
                        </div>
                      </Link>
                      <Link to="/trs-token" className="individual-link">
                        <div className="icon">
                          <svg
                            width={24}
                            height={24}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <mask
                              id="a1"
                              maskUnits="userSpaceOnUse"
                              x="2.691"
                              y="7.396"
                              width={18}
                              height={11}
                              fill="#000"
                            >
                              <path fill="#fff" d="M2.691 7.396h18v11h-18z" />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M7.71 9.694h8.584c-.056-.444-.48-.791-.987-.791H8.692c-.507 0-.926.347-.982.79zm-2.788 5.632h-.707a.525.525 0 0 1-.524-.524v-2.46c0-.288.236-.523.524-.523h.715a2.498 2.498 0 0 1 2.213-2.113c.051-.727.73-1.31 1.553-1.31h6.611c.823 0 1.502.583 1.554 1.31a2.498 2.498 0 0 1 2.213 2.113h.743c.287 0 .52.235.52.523v2.46a.524.524 0 0 1-.52.524h-.735a2.497 2.497 0 0 1-2.469 2.18h-2.668c-.827-.063-1.406-.746-1.638-1.545-.056-.184-.163-.2-.223-.2H11.916c-.056 0-.168.016-.22.2-.236.799-.815 1.482-1.641 1.546H7.386a2.493 2.493 0 0 1-2.464-2.181zm-.02-.563h-.38a.285.285 0 0 1-.283-.284v-1.817c0-.156.127-.284.283-.284h.38v2.385zm14.208 0h.399a.285.285 0 0 0 .284-.284v-1.817a.285.285 0 0 0-.284-.284h-.399v2.385zM7.602 10.26h8.796a2.13 2.13 0 0 1 2.125 2.125v2.433a2.128 2.128 0 0 1-2.125 2.12H14.4c-.85-.043-1.521-.706-1.645-1.541-.032-.22-.192-.204-.252-.204h-1.007c-.06 0-.215-.016-.251.204-.12.835-.795 1.498-1.646 1.541H7.602a2.13 2.13 0 0 1-2.125-2.12v-2.433c0-1.17.959-2.125 2.125-2.125z"
                              />
                            </mask>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.71 9.694h8.584c-.056-.444-.48-.791-.987-.791H8.692c-.507 0-.926.347-.982.79zm-2.788 5.632h-.707a.525.525 0 0 1-.524-.524v-2.46c0-.288.236-.523.524-.523h.715a2.498 2.498 0 0 1 2.213-2.113c.051-.727.73-1.31 1.553-1.31h6.611c.823 0 1.502.583 1.554 1.31a2.498 2.498 0 0 1 2.213 2.113h.743c.287 0 .52.235.52.523v2.46a.524.524 0 0 1-.52.524h-.735a2.497 2.497 0 0 1-2.469 2.18h-2.668c-.827-.063-1.406-.746-1.638-1.545-.056-.184-.163-.2-.223-.2H11.916c-.056 0-.168.016-.22.2-.236.799-.815 1.482-1.641 1.546H7.386a2.493 2.493 0 0 1-2.464-2.181zm-.02-.563h-.38a.285.285 0 0 1-.283-.284v-1.817c0-.156.127-.284.283-.284h.38v2.385zm14.208 0h.399a.285.285 0 0 0 .284-.284v-1.817a.285.285 0 0 0-.284-.284h-.399v2.385zM7.602 10.26h8.796a2.13 2.13 0 0 1 2.125 2.125v2.433a2.128 2.128 0 0 1-2.125 2.12H14.4c-.85-.043-1.521-.706-1.645-1.541-.032-.22-.192-.204-.252-.204h-1.007c-.06 0-.215-.016-.251.204-.12.835-.795 1.498-1.646 1.541H7.602a2.13 2.13 0 0 1-2.125-2.12v-2.433c0-1.17.959-2.125 2.125-2.125z"
                              fill="#000"
                            />
                            <path
                              clipRule="evenodd"
                              d="M7.71 9.694h8.584c-.056-.444-.48-.791-.987-.791H8.692c-.507 0-.926.347-.982.79zm-2.788 5.632h-.707a.525.525 0 0 1-.524-.524v-2.46c0-.288.236-.523.524-.523h.715a2.498 2.498 0 0 1 2.213-2.113c.051-.727.73-1.31 1.553-1.31h6.611c.823 0 1.502.583 1.554 1.31a2.498 2.498 0 0 1 2.213 2.113h.743c.287 0 .52.235.52.523v2.46a.524.524 0 0 1-.52.524h-.735a2.497 2.497 0 0 1-2.469 2.18h-2.668c-.827-.063-1.406-.746-1.638-1.545-.056-.184-.163-.2-.223-.2H11.916c-.056 0-.168.016-.22.2-.236.799-.815 1.482-1.641 1.546H7.386a2.493 2.493 0 0 1-2.464-2.181zm-.02-.563h-.38a.285.285 0 0 1-.283-.284v-1.817c0-.156.127-.284.283-.284h.38v2.385zm14.208 0h.399a.285.285 0 0 0 .284-.284v-1.817a.285.285 0 0 0-.284-.284h-.399v2.385zM7.602 10.26h8.796a2.13 2.13 0 0 1 2.125 2.125v2.433a2.128 2.128 0 0 1-2.125 2.12H14.4c-.85-.043-1.521-.706-1.645-1.541-.032-.22-.192-.204-.252-.204h-1.007c-.06 0-.215-.016-.251.204-.12.835-.795 1.498-1.646 1.541H7.602a2.13 2.13 0 0 1-2.125-2.12v-2.433c0-1.17.959-2.125 2.125-2.125z"
                              stroke="#000"
                              strokeWidth=".2"
                              mask="url(#a)"
                            />
                            <mask
                              id="b1"
                              maskUnits="userSpaceOnUse"
                              x={1}
                              y="1.963"
                              width={22}
                              height={22}
                              fill="#000"
                            >
                              <path fill="#fff" d="M1 1.963h22v22H1z" />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.969 2.963h10.062C19.763 2.963 22 5.2 22 7.932v10.062c0 2.732-2.237 4.969-4.969 4.969H6.969C4.237 22.963 2 20.726 2 17.993V7.933c0-2.732 2.237-4.97 4.969-4.97zm.14.563h9.782c2.5 0 4.542 2.045 4.542 4.542v9.786c0 2.5-2.041 4.542-4.542 4.542H7.11a4.555 4.555 0 0 1-4.546-4.542V8.068c0-2.497 2.045-4.542 4.546-4.542z"
                              />
                            </mask>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.969 2.963h10.062C19.763 2.963 22 5.2 22 7.932v10.062c0 2.732-2.237 4.969-4.969 4.969H6.969C4.237 22.963 2 20.726 2 17.993V7.933c0-2.732 2.237-4.97 4.969-4.97zm.14.563h9.782c2.5 0 4.542 2.045 4.542 4.542v9.786c0 2.5-2.041 4.542-4.542 4.542H7.11a4.555 4.555 0 0 1-4.546-4.542V8.068c0-2.497 2.045-4.542 4.546-4.542z"
                              fill="#000"
                            />
                            <path
                              clipRule="evenodd"
                              d="M6.969 2.963h10.062C19.763 2.963 22 5.2 22 7.932v10.062c0 2.732-2.237 4.969-4.969 4.969H6.969C4.237 22.963 2 20.726 2 17.993V7.933c0-2.732 2.237-4.97 4.969-4.97zm.14.563h9.782c2.5 0 4.542 2.045 4.542 4.542v9.786c0 2.5-2.041 4.542-4.542 4.542H7.11a4.555 4.555 0 0 1-4.546-4.542V8.068c0-2.497 2.045-4.542 4.546-4.542z"
                              stroke="#000"
                              strokeWidth=".2"
                              mask="url(#b)"
                            />
                          </svg>
                        </div>
                        <div className="link-txt">
                          <h3>Metaverse</h3>
                          <p>Learn how to build metaverses with Velas</p>
                        </div>
                      </Link>
                    </div>
                    <div className="flex-row">
                      <a href="#" className="individual-link">
                        <div className="icon">
                          <svg
                            width={24}
                            height={24}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <mask
                              id="a2"
                              maskUnits="userSpaceOnUse"
                              x="2.441"
                              y="10.5"
                              width={12}
                              height={13}
                              fill="#000"
                            >
                              <path fill="#fff" d="M2.441 10.5h12v13h-12z" />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.822 22.962a2.085 2.085 0 0 0 1.642-3.371l2.795-2.796.001-2.607V11.787a.288.288 0 0 0-.287-.287.288.288 0 0 0-.288.287v4.77l-2.635 2.635a2.085 2.085 0 1 0-1.228 3.77zm-.287-7.299a2.086 2.086 0 1 1 .576 0l-.001 1.625c0 .38-.575.38-.575 0v-1.625zm.287-3.571a1.506 1.506 0 1 1 .002 3.012 1.506 1.506 0 0 1-.002-3.012zm-4.008-.286c0-.38-.575-.38-.575 0v3.365a2.085 2.085 0 1 0 .575 0v-3.365zm-.287 6.936a1.506 1.506 0 1 0 .001-3.011 1.506 1.506 0 0 0 0 3.011zm4.295 3.642a1.506 1.506 0 1 0 .001-3.013 1.506 1.506 0 0 0 0 3.013z"
                              />
                            </mask>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.822 22.962a2.085 2.085 0 0 0 1.642-3.371l2.795-2.796.001-2.607V11.787a.288.288 0 0 0-.287-.287.288.288 0 0 0-.288.287v4.77l-2.635 2.635a2.085 2.085 0 1 0-1.228 3.77zm-.287-7.299a2.086 2.086 0 1 1 .576 0l-.001 1.625c0 .38-.575.38-.575 0v-1.625zm.287-3.571a1.506 1.506 0 1 1 .002 3.012 1.506 1.506 0 0 1-.002-3.012zm-4.008-.286c0-.38-.575-.38-.575 0v3.365a2.085 2.085 0 1 0 .575 0v-3.365zm-.287 6.936a1.506 1.506 0 1 0 .001-3.011 1.506 1.506 0 0 0 0 3.011zm4.295 3.642a1.506 1.506 0 1 0 .001-3.013 1.506 1.506 0 0 0 0 3.013z"
                              fill="#000"
                            />
                            <path
                              clipRule="evenodd"
                              d="M9.822 22.962a2.085 2.085 0 0 0 1.642-3.371l2.795-2.796.001-2.607V11.787a.288.288 0 0 0-.287-.287.288.288 0 0 0-.288.287v4.77l-2.635 2.635a2.085 2.085 0 1 0-1.228 3.77zm-.287-7.299a2.086 2.086 0 1 1 .576 0l-.001 1.625c0 .38-.575.38-.575 0v-1.625zm.287-3.571a1.506 1.506 0 1 1 .002 3.012 1.506 1.506 0 0 1-.002-3.012zm-4.008-.286c0-.38-.575-.38-.575 0v3.365a2.085 2.085 0 1 0 .575 0v-3.365zm-.287 6.936a1.506 1.506 0 1 0 .001-3.011 1.506 1.506 0 0 0 0 3.011zm4.295 3.642a1.506 1.506 0 1 0 .001-3.013 1.506 1.506 0 0 0 0 3.013z"
                              stroke="#000"
                              strokeWidth=".2"
                              mask="url(#a)"
                            />
                            <mask
                              id="b2"
                              maskUnits="userSpaceOnUse"
                              x="1.012"
                              y=".963"
                              width={22}
                              height={23}
                              fill="#000"
                            >
                              <path fill="#fff" d="M1.012.963h22v23h-22z" />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M22.433 7.73v1.017c0 .797-.652 1.45-1.45 1.45H3.462c-.797 0-1.45-.653-1.45-1.45V7.73l10.212-5.767 10.21 5.768zm-1.706 5.617v4.89c0 2.452-3.706 2.452-3.706 0v-4.89c0-2.45 3.706-2.45 3.706 0zm-.578.001v4.89c0 1.687-2.55 1.687-2.55 0v-4.89c0-1.687 2.55-1.687 2.55 0zm-18.137 9.04h5.083v.575H2.012v-.575zm10.452 0h9.97v.575h-9.97v-.575zm9.39-14.384v.747a.896.896 0 0 1-.641.834 2.9 2.9 0 0 1-.358.036H3.588a2.89 2.89 0 0 1-.357-.036.897.897 0 0 1-.642-.834v-.747l9.632-5.452h.002l9.632 5.452z"
                              />
                            </mask>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M22.433 7.73v1.017c0 .797-.652 1.45-1.45 1.45H3.462c-.797 0-1.45-.653-1.45-1.45V7.73l10.212-5.767 10.21 5.768zm-1.706 5.617v4.89c0 2.452-3.706 2.452-3.706 0v-4.89c0-2.45 3.706-2.45 3.706 0zm-.578.001v4.89c0 1.687-2.55 1.687-2.55 0v-4.89c0-1.687 2.55-1.687 2.55 0zm-18.137 9.04h5.083v.575H2.012v-.575zm10.452 0h9.97v.575h-9.97v-.575zm9.39-14.384v.747a.896.896 0 0 1-.641.834 2.9 2.9 0 0 1-.358.036H3.588a2.89 2.89 0 0 1-.357-.036.897.897 0 0 1-.642-.834v-.747l9.632-5.452h.002l9.632 5.452z"
                              fill="#000"
                            />
                            <path
                              clipRule="evenodd"
                              d="M22.433 7.73v1.017c0 .797-.652 1.45-1.45 1.45H3.462c-.797 0-1.45-.653-1.45-1.45V7.73l10.212-5.767 10.21 5.768zm-1.706 5.617v4.89c0 2.452-3.706 2.452-3.706 0v-4.89c0-2.45 3.706-2.45 3.706 0zm-.578.001v4.89c0 1.687-2.55 1.687-2.55 0v-4.89c0-1.687 2.55-1.687 2.55 0zm-18.137 9.04h5.083v.575H2.012v-.575zm10.452 0h9.97v.575h-9.97v-.575zm9.39-14.384v.747a.896.896 0 0 1-.641.834 2.9 2.9 0 0 1-.358.036H3.588a2.89 2.89 0 0 1-.357-.036.897.897 0 0 1-.642-.834v-.747l9.632-5.452h.002l9.632 5.452z"
                              stroke="#000"
                              strokeWidth=".2"
                              mask="url(#b)"
                            />
                          </svg>
                        </div>
                        <div className="link-txt">
                          <h3>DeFi</h3>
                          <p>Velas for Decentralized Finance</p>
                        </div>
                      </a>
                      <a href="#" className="individual-link">
                        <div className="icon">
                          <svg
                            width={24}
                            height={24}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <mask
                              id="a3"
                              maskUnits="userSpaceOnUse"
                              x="1.426"
                              y="5.435"
                              width={21}
                              height={19}
                              fill="#000"
                            >
                              <path fill="#fff" d="M1.426 5.435h21v19h-21z" />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M19.786 7.853h1.469a.319.319 0 0 1 .311.34v1.854c0 .985-.778 1.796-1.75 1.85v11.322h.94a.317.317 0 0 1 0 .632H3.176a.317.317 0 0 1 0-.633h1V11.898a1.858 1.858 0 0 1-1.75-1.85V8.168a.319.319 0 0 1 .295-.315H4.207l1.417-1.418h12.744l1.418 1.418zm-4.373.635h2.437v1.557c0 .67-.548 1.219-1.219 1.219-.67 0-1.218-.549-1.218-1.22V8.489zm-3.083 0h2.437v1.557c0 .67-.548 1.219-1.218 1.219-.67 0-1.22-.549-1.22-1.22V8.489zm-3.105 0h2.437v1.557c0 .67-.548 1.219-1.218 1.219-.671 0-1.22-.549-1.22-1.22V8.489zm-3.083 0H8.58v1.557c0 .67-.549 1.219-1.219 1.219s-1.219-.549-1.219-1.22V8.489zm-3.081 0h2.438v1.557c0 .67-.549 1.219-1.22 1.219-.67 0-1.218-.549-1.218-1.22V8.489zm15.433 0h2.438v1.557c0 .67-.548 1.219-1.219 1.219-.67 0-1.219-.549-1.219-1.22V8.489zm.75 3.35a1.866 1.866 0 0 1-1.071-.767c-.333.499-.9.829-1.542.829-.64 0-1.208-.33-1.54-.829-.334.499-.901.829-1.542.829a1.855 1.855 0 0 1-1.553-.846 1.855 1.855 0 0 1-1.552.846c-.642 0-1.209-.33-1.542-.829-.333.499-.9.829-1.541.829-.641 0-1.209-.33-1.542-.829-.248.373-.628.65-1.072.768v11.38h14.498v-11.38zm-1.382-3.985h1.01l-.865-.866H5.985l-.864.865H17.86z"
                              />
                            </mask>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M19.786 7.853h1.469a.319.319 0 0 1 .311.34v1.854c0 .985-.778 1.796-1.75 1.85v11.322h.94a.317.317 0 0 1 0 .632H3.176a.317.317 0 0 1 0-.633h1V11.898a1.858 1.858 0 0 1-1.75-1.85V8.168a.319.319 0 0 1 .295-.315H4.207l1.417-1.418h12.744l1.418 1.418zm-4.373.635h2.437v1.557c0 .67-.548 1.219-1.219 1.219-.67 0-1.218-.549-1.218-1.22V8.489zm-3.083 0h2.437v1.557c0 .67-.548 1.219-1.218 1.219-.67 0-1.22-.549-1.22-1.22V8.489zm-3.105 0h2.437v1.557c0 .67-.548 1.219-1.218 1.219-.671 0-1.22-.549-1.22-1.22V8.489zm-3.083 0H8.58v1.557c0 .67-.549 1.219-1.219 1.219s-1.219-.549-1.219-1.22V8.489zm-3.081 0h2.438v1.557c0 .67-.549 1.219-1.22 1.219-.67 0-1.218-.549-1.218-1.22V8.489zm15.433 0h2.438v1.557c0 .67-.548 1.219-1.219 1.219-.67 0-1.219-.549-1.219-1.22V8.489zm.75 3.35a1.866 1.866 0 0 1-1.071-.767c-.333.499-.9.829-1.542.829-.64 0-1.208-.33-1.54-.829-.334.499-.901.829-1.542.829a1.855 1.855 0 0 1-1.553-.846 1.855 1.855 0 0 1-1.552.846c-.642 0-1.209-.33-1.542-.829-.333.499-.9.829-1.541.829-.641 0-1.209-.33-1.542-.829-.248.373-.628.65-1.072.768v11.38h14.498v-11.38zm-1.382-3.985h1.01l-.865-.866H5.985l-.864.865H17.86z"
                              fill="#000"
                            />
                            <path
                              clipRule="evenodd"
                              d="M19.786 7.853h1.469a.319.319 0 0 1 .311.34v1.854c0 .985-.778 1.796-1.75 1.85v11.322h.94a.317.317 0 0 1 0 .632H3.176a.317.317 0 0 1 0-.633h1V11.898a1.858 1.858 0 0 1-1.75-1.85V8.168a.319.319 0 0 1 .295-.315H4.207l1.417-1.418h12.744l1.418 1.418zm-4.373.635h2.437v1.557c0 .67-.548 1.219-1.219 1.219-.67 0-1.218-.549-1.218-1.22V8.489zm-3.083 0h2.437v1.557c0 .67-.548 1.219-1.218 1.219-.67 0-1.22-.549-1.22-1.22V8.489zm-3.105 0h2.437v1.557c0 .67-.548 1.219-1.218 1.219-.671 0-1.22-.549-1.22-1.22V8.489zm-3.083 0H8.58v1.557c0 .67-.549 1.219-1.219 1.219s-1.219-.549-1.219-1.22V8.489zm-3.081 0h2.438v1.557c0 .67-.549 1.219-1.22 1.219-.67 0-1.218-.549-1.218-1.22V8.489zm15.433 0h2.438v1.557c0 .67-.548 1.219-1.219 1.219-.67 0-1.219-.549-1.219-1.22V8.489zm.75 3.35a1.866 1.866 0 0 1-1.071-.767c-.333.499-.9.829-1.542.829-.64 0-1.208-.33-1.54-.829-.334.499-.901.829-1.542.829a1.855 1.855 0 0 1-1.553-.846 1.855 1.855 0 0 1-1.552.846c-.642 0-1.209-.33-1.542-.829-.333.499-.9.829-1.541.829-.641 0-1.209-.33-1.542-.829-.248.373-.628.65-1.072.768v11.38h14.498v-11.38zm-1.382-3.985h1.01l-.865-.866H5.985l-.864.865H17.86z"
                              stroke="#000"
                              strokeWidth=".2"
                              mask="url(#a)"
                            />
                            <mask
                              id="b3"
                              maskUnits="userSpaceOnUse"
                              x="5.27"
                              y="13.293"
                              width={13}
                              height={11}
                              fill="#000"
                            >
                              <path fill="#fff" d="M5.27 13.293h13v11h-13z" />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.668 14.293h3.656a.4.4 0 0 1 .398.398v3.656a.4.4 0 0 1-.398.399H6.668a.4.4 0 0 1-.398-.399v-3.656a.4.4 0 0 1 .398-.398zm6.288 2.584h4.183a.4.4 0 0 1 .398.398v6.002h-.633V17.51h-3.713v5.766h-.633v-6a.4.4 0 0 1 .398-.4zm2.574 2.28h.633v1.54h-.633v-1.54zm-8.627-4.231h3.186v3.187H6.903v-3.187z"
                              />
                            </mask>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.668 14.293h3.656a.4.4 0 0 1 .398.398v3.656a.4.4 0 0 1-.398.399H6.668a.4.4 0 0 1-.398-.399v-3.656a.4.4 0 0 1 .398-.398zm6.288 2.584h4.183a.4.4 0 0 1 .398.398v6.002h-.633V17.51h-3.713v5.766h-.633v-6a.4.4 0 0 1 .398-.4zm2.574 2.28h.633v1.54h-.633v-1.54zm-8.627-4.231h3.186v3.187H6.903v-3.187z"
                              fill="#000"
                            />
                            <path
                              clipRule="evenodd"
                              d="M6.668 14.293h3.656a.4.4 0 0 1 .398.398v3.656a.4.4 0 0 1-.398.399H6.668a.4.4 0 0 1-.398-.399v-3.656a.4.4 0 0 1 .398-.398zm6.288 2.584h4.183a.4.4 0 0 1 .398.398v6.002h-.633V17.51h-3.713v5.766h-.633v-6a.4.4 0 0 1 .398-.4zm2.574 2.28h.633v1.54h-.633v-1.54zm-8.627-4.231h3.186v3.187H6.903v-3.187z"
                              stroke="#000"
                              strokeWidth=".2"
                              mask="url(#b)"
                            />
                            <mask
                              id="c"
                              maskUnits="userSpaceOnUse"
                              x="7.883"
                              y="1.075"
                              width={8}
                              height={5}
                              fill="#000"
                            >
                              <path fill="#fff" d="M7.883 1.075h8v5h-8z" />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M11.998 2.075c1.163 0 2.217.466 2.986 1.221v.001c.372.38-.142.778-.447.447a3.618 3.618 0 0 0-2.539-1.036c-.988 0-1.883.394-2.537 1.034-.306.334-.82-.064-.448-.444l-.002-.002a4.248 4.248 0 0 1 2.987-1.221zm-1.281 2.919a1.851 1.851 0 0 1 1.281-.514c.498 0 .95.196 1.283.515.306.334.822-.064.45-.445v-.001a2.482 2.482 0 0 0-1.733-.703c-.674 0-1.285.268-1.734.703h.001c-.371.383.146.78.452.445z"
                              />
                            </mask>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.998 2.075c1.163 0 2.217.466 2.986 1.221v.001c.372.38-.142.778-.447.447a3.618 3.618 0 0 0-2.539-1.036c-.988 0-1.883.394-2.537 1.034-.306.334-.82-.064-.448-.444l-.002-.002a4.248 4.248 0 0 1 2.987-1.221zm-1.281 2.919a1.851 1.851 0 0 1 1.281-.514c.498 0 .95.196 1.283.515.306.334.822-.064.45-.445v-.001a2.482 2.482 0 0 0-1.733-.703c-.674 0-1.285.268-1.734.703h.001c-.371.383.146.78.452.445z"
                              fill="#000"
                            />
                            <path
                              clipRule="evenodd"
                              d="M11.998 2.075c1.163 0 2.217.466 2.986 1.221v.001c.372.38-.142.778-.447.447a3.618 3.618 0 0 0-2.539-1.036c-.988 0-1.883.394-2.537 1.034-.306.334-.82-.064-.448-.444l-.002-.002a4.248 4.248 0 0 1 2.987-1.221zm-1.281 2.919a1.851 1.851 0 0 1 1.281-.514c.498 0 .95.196 1.283.515.306.334.822-.064.45-.445v-.001a2.482 2.482 0 0 0-1.733-.703c-.674 0-1.285.268-1.734.703h.001c-.371.383.146.78.452.445z"
                              stroke="#000"
                              strokeWidth=".2"
                              mask="url(#c)"
                            />
                          </svg>
                        </div>
                        <div className="link-txt">
                          <h3>Marketplaces</h3>
                          <p>Develop an NFT marketplace with Velas</p>
                        </div>
                      </a>
                    </div>
                    <div className="flex-row">
                      <a href="#" className="individual-link">
                        <div className="icon">
                          <svg
                            width={24}
                            height={24}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <mask
                              id="a4"
                              maskUnits="userSpaceOnUse"
                              x={1}
                              y="1.963"
                              width={22}
                              height={22}
                              fill="#000"
                            >
                              <path fill="#fff" d="M1 1.963h22v22H1z" />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 2.963c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10zm0 .539c5.212 0 9.436 4.235 9.436 9.46 0 5.225-4.224 9.462-9.436 9.462s-9.436-4.237-9.436-9.461c0-5.226 4.224-9.461 9.436-9.461z"
                              />
                            </mask>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 2.963c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10zm0 .539c5.212 0 9.436 4.235 9.436 9.46 0 5.225-4.224 9.462-9.436 9.462s-9.436-4.237-9.436-9.461c0-5.226 4.224-9.461 9.436-9.461z"
                              fill="#000"
                            />
                            <path
                              clipRule="evenodd"
                              d="M12 2.963c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10zm0 .539c5.212 0 9.436 4.235 9.436 9.46 0 5.225-4.224 9.462-9.436 9.462s-9.436-4.237-9.436-9.461c0-5.226 4.224-9.461 9.436-9.461z"
                              stroke="#000"
                              strokeWidth=".2"
                              mask="url(#a)"
                            />
                            <mask
                              id="b4"
                              maskUnits="userSpaceOnUse"
                              x="4.027"
                              y="3.678"
                              width={16}
                              height={18}
                              fill="#000"
                            >
                              <path fill="#fff" d="M4.027 3.678h16v18h-16z" />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.21 18.105V8.487c0-.372-.563-.372-.563 0v8.243l-3.11-7.133c-.158-.222-.51-.11-.51.162v6.703c0 .373.564.373.564 0v-5.353l3.082 7.09c.138.273.521.195.537-.094zm9.914-9.317c.32.186.039.675-.286.484l-1.21-.704v9.257c0 .372-.563.372-.563 0V8.239L12.28 5.45v7.232h2.458c.373 0 .373.564 0 .564H12.28v7.236c0 .373-.564.373-.564 0V4.948a.282.282 0 0 1 .415-.236l6.992 4.076z"
                              />
                            </mask>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.21 18.105V8.487c0-.372-.563-.372-.563 0v8.243l-3.11-7.133c-.158-.222-.51-.11-.51.162v6.703c0 .373.564.373.564 0v-5.353l3.082 7.09c.138.273.521.195.537-.094zm9.914-9.317c.32.186.039.675-.286.484l-1.21-.704v9.257c0 .372-.563.372-.563 0V8.239L12.28 5.45v7.232h2.458c.373 0 .373.564 0 .564H12.28v7.236c0 .373-.564.373-.564 0V4.948a.282.282 0 0 1 .415-.236l6.992 4.076z"
                              fill="#000"
                            />
                            <path
                              clipRule="evenodd"
                              d="M9.21 18.105V8.487c0-.372-.563-.372-.563 0v8.243l-3.11-7.133c-.158-.222-.51-.11-.51.162v6.703c0 .373.564.373.564 0v-5.353l3.082 7.09c.138.273.521.195.537-.094zm9.914-9.317c.32.186.039.675-.286.484l-1.21-.704v9.257c0 .372-.563.372-.563 0V8.239L12.28 5.45v7.232h2.458c.373 0 .373.564 0 .564H12.28v7.236c0 .373-.564.373-.564 0V4.948a.282.282 0 0 1 .415-.236l6.992 4.076z"
                              stroke="#000"
                              strokeWidth=".2"
                              mask="url(#b)"
                            />
                          </svg>
                        </div>
                        <div className="link-txt">
                          <h3>NFT</h3>
                          <p>Tailor non-fungible tokens wrapped in Velas</p>
                        </div>
                      </a>
                      <a href="#" className="individual-link">
                        <div className="icon">
                          <svg
                            width={24}
                            height={24}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <mask
                              id="a5"
                              maskUnits="userSpaceOnUse"
                              x={1}
                              y="1.963"
                              width={22}
                              height={22}
                              fill="#000"
                            >
                              <path fill="#fff" d="M1 1.963h22v22H1z" />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12.001 2.963C17.524 2.963 22 7.44 22 12.964a9.997 9.997 0 0 1-9.999 9.999C6.478 22.963 2 18.487 2 12.964 2 7.441 6.478 2.963 12.001 2.963zm0 .539c5.212 0 9.438 4.237 9.438 9.462 0 5.226-4.226 9.463-9.438 9.463-5.211 0-9.437-4.237-9.437-9.463 0-5.225 4.226-9.462 9.437-9.462z"
                              />
                            </mask>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12.001 2.963C17.524 2.963 22 7.44 22 12.964a9.997 9.997 0 0 1-9.999 9.999C6.478 22.963 2 18.487 2 12.964 2 7.441 6.478 2.963 12.001 2.963zm0 .539c5.212 0 9.438 4.237 9.438 9.462 0 5.226-4.226 9.463-9.438 9.463-5.211 0-9.437-4.237-9.437-9.463 0-5.225 4.226-9.462 9.437-9.462z"
                              fill="#000"
                            />{" "}
                            <path
                              clipRule="evenodd"
                              d="M12.001 2.963C17.524 2.963 22 7.44 22 12.964a9.997 9.997 0 0 1-9.999 9.999C6.478 22.963 2 18.487 2 12.964 2 7.441 6.478 2.963 12.001 2.963zm0 .539c5.212 0 9.438 4.237 9.438 9.462 0 5.226-4.226 9.463-9.438 9.463-5.211 0-9.437-4.237-9.437-9.463 0-5.225 4.226-9.462 9.437-9.462z"
                              stroke="#000"
                              strokeWidth=".2"
                              mask="url(#a)"
                            />{" "}
                            <mask
                              id="b5"
                              maskUnits="userSpaceOnUse"
                              x="4.129"
                              y="6.897"
                              width={15}
                              height={12}
                              fill="#000"
                            >
                              {" "}
                              <path
                                fill="#fff"
                                d="M4.129 6.897h15v12h-15z"
                              />{" "}
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M7.097 12.148c0-.5.408-.909.908-.909h.303v-.303c0-.5.411-.911.911-.911s.909.411.909.911v.303h.302c.5 0 .912.408.912.909 0 .5-.412.91-.912.91h-.303v.304a.91.91 0 0 1-1.82 0v-.303h-.302a.913.913 0 0 1-.908-.911zm6.317 2.722c2.037 0 1.736 2.864 3.49 2.581 1.202-.197 1.308-1.542 1.36-2.473.081-1.347-.202-3.336-.833-4.522-.78-1.476-2.528-2.398-4.192-1.84-.17.056-.497.162-.683.187a5.254 5.254 0 0 1-1.106 0c-.189-.025-.514-.131-.683-.187-1.667-.558-3.415.364-4.196 1.84-.627 1.186-.91 3.175-.833 4.523.056.93.158 2.275 1.361 2.472 1.753.283 1.453-2.58 3.492-2.58h2.823zm-1.411-6.592c.547.008.8-.212 1.711-.342 1.095-.156 1.99.178 2.706.614 2.161 1.322 2.731 4.975 2.342 7.376-.158.967-.567 1.653-1.35 1.961-1.106.434-1.909-.194-2.314-.803-.456-.683-.74-1.628-1.723-1.661a41.13 41.13 0 0 0-2.747 0c-.984.033-1.267.978-1.723 1.661-.403.609-1.206 1.237-2.314.803-.784-.308-1.192-.994-1.347-1.961-.392-2.4.18-6.054 2.339-7.376.716-.436 1.614-.77 2.708-.614.912.13 1.165.35 1.712.342zm2.925 4.37a.816.816 0 1 1-.003 1.631.816.816 0 0 1 .003-1.631zm-2.13-.498a.815.815 0 1 1 1.63 0 .816.816 0 1 1-1.63 0zm.469 0c0-.191.155-.347.344-.347a.345.345 0 1 1 0 .692.344.344 0 0 1-.344-.345zm1.661-2.13c.45 0 .814.363.814.816 0 .45-.364.814-.814.814a.815.815 0 1 1 0-1.63zm0 .469c.192 0 .345.155.345.347a.344.344 0 0 1-.345.345.347.347 0 0 1-.347-.345c0-.191.155-.347.347-.347zm.497 1.661a.816.816 0 1 1 1.633 0 .816.816 0 0 1-1.633 0zm.47 0a.347.347 0 0 1 .695 0 .345.345 0 0 1-.348.345.345.345 0 0 1-.347-.345zm-.967.967c.192 0 .345.156.345.347a.345.345 0 0 1-.345.348.347.347 0 0 1 0-.695zm-7.35-.97c0-.188.155-.344.346-.344h.948v-.95a.347.347 0 0 1 .694 0v.95h.948c.189 0 .347.156.347.345a.35.35 0 0 1-.347.347h-.948v.947a.347.347 0 0 1-.695 0v-.947h-.947a.347.347 0 0 1-.347-.347z"
                              />{" "}
                            </mask>{" "}
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.097 12.148c0-.5.408-.909.908-.909h.303v-.303c0-.5.411-.911.911-.911s.909.411.909.911v.303h.302c.5 0 .912.408.912.909 0 .5-.412.91-.912.91h-.303v.304a.91.91 0 0 1-1.82 0v-.303h-.302a.913.913 0 0 1-.908-.911zm6.317 2.722c2.037 0 1.736 2.864 3.49 2.581 1.202-.197 1.308-1.542 1.36-2.473.081-1.347-.202-3.336-.833-4.522-.78-1.476-2.528-2.398-4.192-1.84-.17.056-.497.162-.683.187a5.254 5.254 0 0 1-1.106 0c-.189-.025-.514-.131-.683-.187-1.667-.558-3.415.364-4.196 1.84-.627 1.186-.91 3.175-.833 4.523.056.93.158 2.275 1.361 2.472 1.753.283 1.453-2.58 3.492-2.58h2.823zm-1.411-6.592c.547.008.8-.212 1.711-.342 1.095-.156 1.99.178 2.706.614 2.161 1.322 2.731 4.975 2.342 7.376-.158.967-.567 1.653-1.35 1.961-1.106.434-1.909-.194-2.314-.803-.456-.683-.74-1.628-1.723-1.661a41.13 41.13 0 0 0-2.747 0c-.984.033-1.267.978-1.723 1.661-.403.609-1.206 1.237-2.314.803-.784-.308-1.192-.994-1.347-1.961-.392-2.4.18-6.054 2.339-7.376.716-.436 1.614-.77 2.708-.614.912.13 1.165.35 1.712.342zm2.925 4.37a.816.816 0 1 1-.003 1.631.816.816 0 0 1 .003-1.631zm-2.13-.498a.815.815 0 1 1 1.63 0 .816.816 0 1 1-1.63 0zm.469 0c0-.191.155-.347.344-.347a.345.345 0 1 1 0 .692.344.344 0 0 1-.344-.345zm1.661-2.13c.45 0 .814.363.814.816 0 .45-.364.814-.814.814a.815.815 0 1 1 0-1.63zm0 .469c.192 0 .345.155.345.347a.344.344 0 0 1-.345.345.347.347 0 0 1-.347-.345c0-.191.155-.347.347-.347zm.497 1.661a.816.816 0 1 1 1.633 0 .816.816 0 0 1-1.633 0zm.47 0a.347.347 0 0 1 .695 0 .345.345 0 0 1-.348.345.345.345 0 0 1-.347-.345zm-.967.967c.192 0 .345.156.345.347a.345.345 0 0 1-.345.348.347.347 0 0 1 0-.695zm-7.35-.97c0-.188.155-.344.346-.344h.948v-.95a.347.347 0 0 1 .694 0v.95h.948c.189 0 .347.156.347.345a.35.35 0 0 1-.347.347h-.948v.947a.347.347 0 0 1-.695 0v-.947h-.947a.347.347 0 0 1-.347-.347z"
                              fill="#000"
                            />{" "}
                            <path
                              clipRule="evenodd"
                              d="M7.097 12.148c0-.5.408-.909.908-.909h.303v-.303c0-.5.411-.911.911-.911s.909.411.909.911v.303h.302c.5 0 .912.408.912.909 0 .5-.412.91-.912.91h-.303v.304a.91.91 0 0 1-1.82 0v-.303h-.302a.913.913 0 0 1-.908-.911zm6.317 2.722c2.037 0 1.736 2.864 3.49 2.581 1.202-.197 1.308-1.542 1.36-2.473.081-1.347-.202-3.336-.833-4.522-.78-1.476-2.528-2.398-4.192-1.84-.17.056-.497.162-.683.187a5.254 5.254 0 0 1-1.106 0c-.189-.025-.514-.131-.683-.187-1.667-.558-3.415.364-4.196 1.84-.627 1.186-.91 3.175-.833 4.523.056.93.158 2.275 1.361 2.472 1.753.283 1.453-2.58 3.492-2.58h2.823zm-1.411-6.592c.547.008.8-.212 1.711-.342 1.095-.156 1.99.178 2.706.614 2.161 1.322 2.731 4.975 2.342 7.376-.158.967-.567 1.653-1.35 1.961-1.106.434-1.909-.194-2.314-.803-.456-.683-.74-1.628-1.723-1.661a41.13 41.13 0 0 0-2.747 0c-.984.033-1.267.978-1.723 1.661-.403.609-1.206 1.237-2.314.803-.784-.308-1.192-.994-1.347-1.961-.392-2.4.18-6.054 2.339-7.376.716-.436 1.614-.77 2.708-.614.912.13 1.165.35 1.712.342zm2.925 4.37a.816.816 0 1 1-.003 1.631.816.816 0 0 1 .003-1.631zm-2.13-.498a.815.815 0 1 1 1.63 0 .816.816 0 1 1-1.63 0zm.469 0c0-.191.155-.347.344-.347a.345.345 0 1 1 0 .692.344.344 0 0 1-.344-.345zm1.661-2.13c.45 0 .814.363.814.816 0 .45-.364.814-.814.814a.815.815 0 1 1 0-1.63zm0 .469c.192 0 .345.155.345.347a.344.344 0 0 1-.345.345.347.347 0 0 1-.347-.345c0-.191.155-.347.347-.347zm.497 1.661a.816.816 0 1 1 1.633 0 .816.816 0 0 1-1.633 0zm.47 0a.347.347 0 0 1 .695 0 .345.345 0 0 1-.348.345.345.345 0 0 1-.347-.345zm-.967.967c.192 0 .345.156.345.347a.345.345 0 0 1-.345.348.347.347 0 0 1 0-.695zm-7.35-.97c0-.188.155-.344.346-.344h.948v-.95a.347.347 0 0 1 .694 0v.95h.948c.189 0 .347.156.347.345a.35.35 0 0 1-.347.347h-.948v.947a.347.347 0 0 1-.695 0v-.947h-.947a.347.347 0 0 1-.347-.347z"
                              stroke="#000"
                              strokeWidth=".2"
                              mask="url(#b)"
                            />{" "}
                          </svg>
                        </div>
                        <div className="link-txt">
                          <h3>P2P Games</h3>
                          <p>Build Play-to-Earn (P2E) games</p>
                        </div>
                      </a>
                    </div>
                    <div className="flex-row no-margin">
                      <a href="#" className="individual-link">
                        <div className="icon">
                          <svg
                            width={24}
                            height={24}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <mask
                              id="a6"
                              maskUnits="userSpaceOnUse"
                              x={1}
                              y="1.963"
                              width={22}
                              height={22}
                              fill="#000"
                            >
                              <path fill="#fff" d="M1 1.963h22v22H1z" />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M11.997 2.963a9.973 9.973 0 0 1 7.061 2.92V4.662c0-.375.565-.375.565 0v1.894a.28.28 0 0 1-.282.282h-1.9c-.374 0-.374-.564 0-.564h1.232A9.41 9.41 0 0 0 11.997 3.5c-5.21 0-9.433 4.239-9.433 9.46 0 1.428.315 2.779.88 3.995.163.353-.31.63-.516.222A10.031 10.031 0 0 1 2 12.96c0-5.52 4.478-9.997 9.997-9.997zm-7.06 18.773v-1.894a.28.28 0 0 1 .281-.282h1.9c.375 0 .375.564 0 .564h-1.28a9.366 9.366 0 0 0 6.16 2.302c5.215 0 9.438-4.24 9.438-9.466a9.508 9.508 0 0 0-.798-3.815c-.201-.456.38-.614.51-.223A9.93 9.93 0 0 1 22 12.96c0 5.525-4.478 10.003-10.003 10.003a9.973 9.973 0 0 1-6.496-2.399v1.172c0 .375-.565.375-.565 0z"
                              />
                            </mask>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.997 2.963a9.973 9.973 0 0 1 7.061 2.92V4.662c0-.375.565-.375.565 0v1.894a.28.28 0 0 1-.282.282h-1.9c-.374 0-.374-.564 0-.564h1.232A9.41 9.41 0 0 0 11.997 3.5c-5.21 0-9.433 4.239-9.433 9.46 0 1.428.315 2.779.88 3.995.163.353-.31.63-.516.222A10.031 10.031 0 0 1 2 12.96c0-5.52 4.478-9.997 9.997-9.997zm-7.06 18.773v-1.894a.28.28 0 0 1 .281-.282h1.9c.375 0 .375.564 0 .564h-1.28a9.366 9.366 0 0 0 6.16 2.302c5.215 0 9.438-4.24 9.438-9.466a9.508 9.508 0 0 0-.798-3.815c-.201-.456.38-.614.51-.223A9.93 9.93 0 0 1 22 12.96c0 5.525-4.478 10.003-10.003 10.003a9.973 9.973 0 0 1-6.496-2.399v1.172c0 .375-.565.375-.565 0z"
                              fill="#000"
                            />
                            <path
                              clipRule="evenodd"
                              d="M11.997 2.963a9.973 9.973 0 0 1 7.061 2.92V4.662c0-.375.565-.375.565 0v1.894a.28.28 0 0 1-.282.282h-1.9c-.374 0-.374-.564 0-.564h1.232A9.41 9.41 0 0 0 11.997 3.5c-5.21 0-9.433 4.239-9.433 9.46 0 1.428.315 2.779.88 3.995.163.353-.31.63-.516.222A10.031 10.031 0 0 1 2 12.96c0-5.52 4.478-9.997 9.997-9.997zm-7.06 18.773v-1.894a.28.28 0 0 1 .281-.282h1.9c.375 0 .375.564 0 .564h-1.28a9.366 9.366 0 0 0 6.16 2.302c5.215 0 9.438-4.24 9.438-9.466a9.508 9.508 0 0 0-.798-3.815c-.201-.456.38-.614.51-.223A9.93 9.93 0 0 1 22 12.96c0 5.525-4.478 10.003-10.003 10.003a9.973 9.973 0 0 1-6.496-2.399v1.172c0 .375-.565.375-.565 0z"
                              stroke="#000"
                              strokeWidth=".2"
                              mask="url(#a)"
                            />
                            <mask
                              id="b6"
                              maskUnits="userSpaceOnUse"
                              x="5.652"
                              y="8.443"
                              width={12}
                              height={11}
                              fill="#000"
                            >
                              <path fill="#fff" d="M5.652 8.443h12v11h-12z" />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.652 9.443H17.35l-.337.565H6.99l-.337-.565zm9.542 1.938-4.196 7.04-4.19-7.04h8.386zm-1.227.971-2.969 4.983-3.202-5.406h6.426l-.255.423z"
                              />
                            </mask>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.652 9.443H17.35l-.337.565H6.99l-.337-.565zm9.542 1.938-4.196 7.04-4.19-7.04h8.386zm-1.227.971-2.969 4.983-3.202-5.406h6.426l-.255.423z"
                              fill="#000"
                            />
                            <path
                              clipRule="evenodd"
                              d="M6.652 9.443H17.35l-.337.565H6.99l-.337-.565zm9.542 1.938-4.196 7.04-4.19-7.04h8.386zm-1.227.971-2.969 4.983-3.202-5.406h6.426l-.255.423z"
                              stroke="#000"
                              strokeWidth=".2"
                              mask="url(#b)"
                            />
                          </svg>
                        </div>
                        <div className="link-txt">
                          <h3>DEX</h3>
                          <p>Design decentralized exchanges</p>
                        </div>
                      </a>
                      <a href="#" className="individual-link no-margin">
                        <div className="icon">
                          <svg
                            width={24}
                            height={24}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <mask
                              id="a7"
                              maskUnits="userSpaceOnUse"
                              x={1}
                              y="1.963"
                              width={22}
                              height={22}
                              fill="#000"
                            >
                              <path fill="#fff" d="M1 1.963h22v22H1z" />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 2.963c5.523 0 10 4.477 10 10 0 5.522-4.477 10-10 10s-10-4.478-10-10c0-5.523 4.477-10 10-10zm0 .54c5.212 0 9.435 4.235 9.435 9.46 0 5.225-4.223 9.46-9.435 9.46-5.212 0-9.435-4.235-9.435-9.46 0-5.225 4.223-9.46 9.435-9.46z"
                              />
                            </mask>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 2.963c5.523 0 10 4.477 10 10 0 5.522-4.477 10-10 10s-10-4.478-10-10c0-5.523 4.477-10 10-10zm0 .54c5.212 0 9.435 4.235 9.435 9.46 0 5.225-4.223 9.46-9.435 9.46-5.212 0-9.435-4.235-9.435-9.46 0-5.225 4.223-9.46 9.435-9.46z"
                              fill="#000"
                            />
                            <path
                              clipRule="evenodd"
                              d="M12 2.963c5.523 0 10 4.477 10 10 0 5.522-4.477 10-10 10s-10-4.478-10-10c0-5.523 4.477-10 10-10zm0 .54c5.212 0 9.435 4.235 9.435 9.46 0 5.225-4.223 9.46-9.435 9.46-5.212 0-9.435-4.235-9.435-9.46 0-5.225 4.223-9.46 9.435-9.46z"
                              stroke="#000"
                              strokeWidth=".2"
                              mask="url(#a)"
                            />
                            <mask
                              id="b7"
                              maskUnits="userSpaceOnUse"
                              x="5.211"
                              y="8.055"
                              width={13}
                              height={11}
                              fill="#000"
                            >
                              <path fill="#fff" d="M5.211 8.055h13v11h-13z" />
                              <path d="M7.35 12.538h.569l.747-2.617h.013l.73 2.617h.57l1.139-3.483h-.646l-.773 2.506h-.013l-.697-2.506h-.646l-.7 2.515H7.63l-.77-2.515h-.65l1.14 3.483zm4.575 0h2.362v-.53h-1.755v-.931h1.33v-.531h-1.33v-.96h1.648v-.531h-2.255v3.483zm3.266 0h1.423c.79 0 1.177-.403 1.177-.956 0-.48-.293-.786-.713-.883v-.005c.37-.14.53-.467.53-.79 0-.569-.428-.85-1.168-.85h-1.249v3.484zm.612-2.039v-.913l.574-.005c.42 0 .611.183.611.455 0 .331-.25.463-.59.463h-.595zm0 1.508v-.998h.637c.476 0 .714.2.714.51 0 .327-.238.488-.616.488h-.735zM9.588 18.38c.663 0 1.151-.378 1.151-.951 0-.395-.22-.684-.556-.829v-.017a.832.832 0 0 0 .459-.756c0-.565-.489-.892-1.096-.892-.506 0-.888.242-1.054.574l.467.246c.11-.17.285-.293.574-.293.285 0 .518.187.518.454 0 .238-.14.446-.505.446h-.319v.48h.263c.434 0 .655.243.655.506 0 .306-.272.501-.6.501-.348 0-.569-.153-.675-.403l-.505.216c.17.412.616.718 1.223.718zm2.264 0a.37.37 0 0 0 .378-.365c0-.2-.17-.365-.378-.365-.212 0-.386.165-.386.365 0 .204.174.365.386.365zm2.405 0c.84 0 1.334-.705 1.334-1.72 0-1.1-.548-1.725-1.334-1.725-.833 0-1.334.701-1.334 1.725 0 1.091.552 1.72 1.334 1.72zm0-.53c-.442 0-.735-.447-.735-1.19 0-.756.28-1.198.735-1.198.454 0 .739.442.739 1.198 0 .747-.272 1.19-.74 1.19z" />
                            </mask>
                            <path
                              d="M7.35 12.538h.569l.747-2.617h.013l.73 2.617h.57l1.139-3.483h-.646l-.773 2.506h-.013l-.697-2.506h-.646l-.7 2.515H7.63l-.77-2.515h-.65l1.14 3.483zm4.575 0h2.362v-.53h-1.755v-.931h1.33v-.531h-1.33v-.96h1.648v-.531h-2.255v3.483zm3.266 0h1.423c.79 0 1.177-.403 1.177-.956 0-.48-.293-.786-.713-.883v-.005c.37-.14.53-.467.53-.79 0-.569-.428-.85-1.168-.85h-1.249v3.484zm.612-2.039v-.913l.574-.005c.42 0 .611.183.611.455 0 .331-.25.463-.59.463h-.595zm0 1.508v-.998h.637c.476 0 .714.2.714.51 0 .327-.238.488-.616.488h-.735zM9.588 18.38c.663 0 1.151-.378 1.151-.951 0-.395-.22-.684-.556-.829v-.017a.832.832 0 0 0 .459-.756c0-.565-.489-.892-1.096-.892-.506 0-.888.242-1.054.574l.467.246c.11-.17.285-.293.574-.293.285 0 .518.187.518.454 0 .238-.14.446-.505.446h-.319v.48h.263c.434 0 .655.243.655.506 0 .306-.272.501-.6.501-.348 0-.569-.153-.675-.403l-.505.216c.17.412.616.718 1.223.718zm2.264 0a.37.37 0 0 0 .378-.365c0-.2-.17-.365-.378-.365-.212 0-.386.165-.386.365 0 .204.174.365.386.365zm2.405 0c.84 0 1.334-.705 1.334-1.72 0-1.1-.548-1.725-1.334-1.725-.833 0-1.334.701-1.334 1.725 0 1.091.552 1.72 1.334 1.72zm0-.53c-.442 0-.735-.447-.735-1.19 0-.756.28-1.198.735-1.198.454 0 .739.442.739 1.198 0 .747-.272 1.19-.74 1.19z"
                              fill="#000"
                            />
                            <path
                              d="M7.35 12.538h.569l.747-2.617h.013l.73 2.617h.57l1.139-3.483h-.646l-.773 2.506h-.013l-.697-2.506h-.646l-.7 2.515H7.63l-.77-2.515h-.65l1.14 3.483zm4.575 0h2.362v-.53h-1.755v-.931h1.33v-.531h-1.33v-.96h1.648v-.531h-2.255v3.483zm3.266 0h1.423c.79 0 1.177-.403 1.177-.956 0-.48-.293-.786-.713-.883v-.005c.37-.14.53-.467.53-.79 0-.569-.428-.85-1.168-.85h-1.249v3.484zm.612-2.039v-.913l.574-.005c.42 0 .611.183.611.455 0 .331-.25.463-.59.463h-.595zm0 1.508v-.998h.637c.476 0 .714.2.714.51 0 .327-.238.488-.616.488h-.735zM9.588 18.38c.663 0 1.151-.378 1.151-.951 0-.395-.22-.684-.556-.829v-.017a.832.832 0 0 0 .459-.756c0-.565-.489-.892-1.096-.892-.506 0-.888.242-1.054.574l.467.246c.11-.17.285-.293.574-.293.285 0 .518.187.518.454 0 .238-.14.446-.505.446h-.319v.48h.263c.434 0 .655.243.655.506 0 .306-.272.501-.6.501-.348 0-.569-.153-.675-.403l-.505.216c.17.412.616.718 1.223.718zm2.264 0a.37.37 0 0 0 .378-.365c0-.2-.17-.365-.378-.365-.212 0-.386.165-.386.365 0 .204.174.365.386.365zm2.405 0c.84 0 1.334-.705 1.334-1.72 0-1.1-.548-1.725-1.334-1.725-.833 0-1.334.701-1.334 1.725 0 1.091.552 1.72 1.334 1.72zm0-.53c-.442 0-.735-.447-.735-1.19 0-.756.28-1.198.735-1.198.454 0 .739.442.739 1.198 0 .747-.272 1.19-.74 1.19z"
                              stroke="#000"
                              strokeWidth=".2"
                              mask="url(#b)"
                            />
                          </svg>
                        </div>
                        <div className="link-txt">
                          <h3>Web 3.0</h3>
                          <p>
                            Grow decentralized web based on public blockchains
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </li>
                <li
                  className={
                    fullFloat
                      ? "jss1229 static active-bar"
                      : "jss1229 static closeAn "
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
                    <div className="custom-cm">
                      <div className="jss2929 jss2930">
                        <a
                          className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss2938 MuiButton-textPrimary-109 MuiButton-disableElevation-117"
                          tabIndex={0}
                          aria-disabled="false"
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
                    mobileMenu2
                      ? "jss1229 static active-bar"
                      : "jss1229 static closeAn "
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
                  <div
                    className="float-overlay"
                    onMouseEnter={toggleFalse2}
                  ></div>
                  <div
                    onMouseLeave={toggleFalse2}
                    id="test"
                    className="float-dv  alters-section"
                  >
                    <a href="" className="flex-row flex-link flex-alter">
                      <div className="individual-link">
                        <div className="icon">
                          <svg
                            width="24"
                            height="24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.377 10.713a.375.375 0 0 1 .375-.375h6a.375.375 0 1 1 0 .75h-6a.375.375 0 0 1-.375-.375zm6.375 3.375a.375.375 0 1 0 0-.75h-6a.375.375 0 1 0 0 .75h6zm5.625 4.875a2.634 2.634 0 0 1-2.625 2.625h-10.5a2.634 2.634 0 0 1-2.625-2.625v-12a1.875 1.875 0 0 0-3.75 0c-.002.46.169.905.478 1.247a.378.378 0 1 1-.563.506 2.625 2.625 0 0 1 1.96-4.378h12.75a2.634 2.634 0 0 1 2.625 2.625v10.125h1.303a.403.403 0 0 1 .281.122c.43.483.666 1.107.666 1.753zm-11.25 0a1.847 1.847 0 0 0-.478-1.247.393.393 0 0 1-.066-.403.375.375 0 0 1 .347-.225h8.447V6.963a1.884 1.884 0 0 0-1.875-1.875H5.589a2.616 2.616 0 0 1 .788 1.875v12a1.875 1.875 0 1 0 3.75 0zm10.5 0a1.847 1.847 0 0 0-.375-1.125h-9.628c.168.35.255.736.253 1.125a2.616 2.616 0 0 1-.788 1.875h8.663a1.885 1.885 0 0 0 1.875-1.875z"
                              fill="#000"
                            ></path>
                          </svg>
                        </div>
                        <div className="link-txt">
                          <h3>Documentation</h3>
                          <p>Easily create decentralized apps on Velas</p>
                        </div>
                      </div>
                      <div className="new-arrow">
                        <svg
                          class="arrow"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.2497 12C17.247 12.1988 17.1701 12.3894 17.0341 12.5344L9.5341 20.0344C9.38838 20.154 9.20338 20.2151 9.01509 20.2059C8.8268 20.1966 8.64869 20.1177 8.51539 19.9844C8.38208 19.8511 8.30313 19.673 8.29388 19.4847C8.28464 19.2964 8.34576 19.1114 8.46535 18.9657L15.4404 12L8.46535 5.0344C8.34576 4.88868 8.28464 4.70368 8.29388 4.5154C8.30313 4.32711 8.38208 4.14899 8.51539 4.01569C8.64869 3.88239 8.8268 3.80343 9.01509 3.79418C9.20338 3.78494 9.38838 3.84606 9.5341 3.96565L17.0341 11.4657C17.1701 11.6106 17.247 11.8012 17.2497 12Z"
                            fill="black"
                          ></path>
                        </svg>
                      </div>
                    </a>

                    <div className="flex-row">
                      <a href="#" className="individual-link">
                        <div className="icon">
                          <svg
                            width="24"
                            height="24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m20.541 12.729-8.25-10.5a.375.375 0 0 0-.581 0l-8.25 10.5a.366.366 0 0 0 0 .469l8.25 10.5a.374.374 0 0 0 .581 0l8.25-10.5a.366.366 0 0 0 0-.47zM12.376 3.55l7.284 9.272-7.284 3.309V3.551zm-.75 12.581-7.285-3.31 7.285-9.271v12.581zm0 .825v5.419l-6.628-8.438 6.628 3.019zm.75 0 6.628-3.019-6.628 8.438v-5.419z"
                              fill="#000"
                            ></path>
                          </svg>
                        </div>
                        <div className="link-txt">
                          <h3>EVM</h3>
                          <p>
                            Move your dApps from Ethereum to Velas in one click
                          </p>
                        </div>
                      </a>
                      <a href="#" className="individual-link">
                        <div className="icon">
                          <svg
                            width="24"
                            height="24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.397 10.45a.385.385 0 0 1-.01.535l-5.503 5.25a.404.404 0 0 1-.262.103.366.366 0 0 1-.253-.103L7.613 13.61a.379.379 0 0 1 .524-.544l2.485 2.381 5.24-5.006a.385.385 0 0 1 .535.01zm4.978 2.513A9.375 9.375 0 1 1 12 3.588a9.394 9.394 0 0 1 9.375 9.375zm-.75 0A8.624 8.624 0 1 0 12 21.588a8.635 8.635 0 0 0 8.625-8.625z"
                              fill="#000"
                            ></path>
                          </svg>
                        </div>
                        <div className="link-txt">
                          <h3>Validators</h3>
                          <p>Become a validators on the VLX mainnet</p>
                        </div>
                      </a>
                    </div>
                    <div className="flex-row ">
                      <a href="#" className="individual-link">
                        <div className="icon">
                          <svg
                            width="24"
                            height="24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.225 7.778a1.19 1.19 0 0 0-.422-.412l-8.25-4.641a1.163 1.163 0 0 0-1.106 0l-8.25 4.64a1.19 1.19 0 0 0-.422.413c-.1.17-.151.365-.15.563v9.243a1.116 1.116 0 0 0 .572.985l8.25 4.64c.16.091.34.14.525.141h.056c.184-.004.364-.053.525-.14l8.25-4.641a1.115 1.115 0 0 0 .572-.985V8.341a1.17 1.17 0 0 0-.15-.563zm-9.14 4.753L3.768 7.9l3.637-2.053 4.407 2.484a.394.394 0 0 0 .374 0l4.407-2.484L20.24 7.9l-8.157 4.631zm-.273-9.16a.403.403 0 0 1 .376 0l3.637 2.045L12 7.572 8.175 5.416l3.637-2.044zM3.376 17.585v-4.078l3.75 2.11v4.303l-3.562-2.006a.375.375 0 0 1-.188-.329zm4.5 2.757v-4.95a.403.403 0 0 0-.187-.329l-4.313-2.418V8.537l8.334 4.641-.075 9.272-3.759-2.11zm4.51 2.1.074-9.263 8.166-4.631v4.097l-4.313 2.418a.404.404 0 0 0-.187.329v4.95l-3.74 2.1zm8.053-4.528-3.563 2.006v-4.303l3.75-2.11v4.078a.375.375 0 0 1-.188.329z"
                              fill="#000"
                            ></path>
                          </svg>
                        </div>
                        <div className="link-txt">
                          <h3>Contribute</h3>
                          <p>Scale the Velas ecosystem and get rewards</p>
                        </div>
                      </a>
                      <a href="#" className="individual-link">
                        <div className="icon">
                          <svg
                            width="24"
                            height="24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20.25 21.588a1.884 1.884 0 0 1-1.875-1.875v-.75a2.625 2.625 0 0 0-1.772-2.485 4.866 4.866 0 0 0 2.522-4.265v-.75a4.94 4.94 0 0 0-.76-2.606 5.24 5.24 0 0 0-.412-4.332.403.403 0 0 0-.328-.187 5.222 5.222 0 0 0-4.313 2.25h-2.624a5.222 5.222 0 0 0-4.313-2.25.403.403 0 0 0-.328.187 5.24 5.24 0 0 0-.413 4.332 4.94 4.94 0 0 0-.759 2.606v.75a4.866 4.866 0 0 0 2.522 4.266 2.626 2.626 0 0 0-1.772 2.484v.75a1.884 1.884 0 0 1-1.875 1.875.375.375 0 1 0 0 .75 2.634 2.634 0 0 0 2.625-2.625v-.75a1.884 1.884 0 0 1 1.875-1.875h1.5v4.125a1.884 1.884 0 0 1-1.875 1.875.375.375 0 1 0 0 .75 2.634 2.634 0 0 0 2.625-2.625v-4.125h3v4.125a2.634 2.634 0 0 0 2.625 2.625.375.375 0 0 0 0-.75 1.884 1.884 0 0 1-1.875-1.875v-4.125h1.5a1.885 1.885 0 0 1 1.875 1.875v.75a2.634 2.634 0 0 0 2.625 2.625.375.375 0 0 0 0-.75zM5.625 12.213v-.75a4.256 4.256 0 0 1 .722-2.334.375.375 0 0 0 .047-.357 4.528 4.528 0 0 1 .197-3.675 4.462 4.462 0 0 1 3.58 2.072.375.375 0 0 0 .31.169h3.038a.375.375 0 0 0 .31-.169 4.464 4.464 0 0 1 3.58-2.072 4.529 4.529 0 0 1 .197 3.675.375.375 0 0 0 .047.357c.464.69.715 1.502.722 2.334v.75a4.125 4.125 0 0 1-4.125 4.125h-4.5a4.125 4.125 0 0 1-4.125-4.125z"
                              fill="#000"
                            ></path>
                          </svg>
                        </div>
                        <div className="link-txt">
                          <h3>GitHub</h3>
                          <p>Discover Velas GitHub and start coding</p>
                        </div>
                      </a>
                    </div>
                    <div className="flex-row ">
                      <a href="#" className="individual-link">
                        <div className="icon">
                          <svg
                            width="24"
                            height="24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m22.78 10.47-5.25-6a.347.347 0 0 0-.281-.132h-10.5a.347.347 0 0 0-.281.131l-5.25 6a.365.365 0 0 0 .01.497l10.5 11.25a.364.364 0 0 0 .543 0l10.5-11.25a.366.366 0 0 0 .01-.497zm-1.106-.132H16.79l-4.032-5.25h4.322l4.594 5.25zm-14.531.75 3.731 9.122-8.512-9.122h4.78zm8.897 0-4.041 9.881-4.04-9.881h8.08zm-7.885-.75L12 5.332l3.844 5.006H8.155zm8.7.75h4.782l-8.513 9.122 3.731-9.122zm-9.937-6h4.322l-4.032 5.25H2.324l4.594-5.25z"
                              fill="#000"
                            ></path>
                          </svg>
                        </div>
                        <div className="link-txt">
                          <h3>Grants Program</h3>
                          <p>Support the growth of Velas ecosystem</p>
                        </div>
                      </a>
                      <a href="#" className="individual-link">
                        <div className="icon">
                          <svg
                            width="24"
                            height="24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.375 20.088H20.25V4.713a.375.375 0 0 0-.375-.375h-5.25a.375.375 0 0 0-.375.375v4.125H9.375A.375.375 0 0 0 9 9.213v4.125H4.125a.375.375 0 0 0-.375.375v6.375H2.625a.375.375 0 1 0 0 .75h18.75a.375.375 0 0 0 0-.75zM9.75 9.588h4.5v10.5h-4.5v-10.5zm-5.25 4.5H9v6H4.5v-6zm10.5 6v-15h4.5v15H15z"
                              fill="#000"
                            ></path>
                          </svg>
                        </div>
                        <div className="link-txt">
                          <h3>Hackathon</h3>
                          <p>
                            Join the Velas hackathons to get benefits and
                            rewards
                          </p>
                        </div>
                      </a>
                    </div>
                    <a href="" className="flex-row flex-link flex-alter">
                      <div className="individual-link">
                        <div className="icon">
                          <svg
                            width="24"
                            height="24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m6.245 9.504-4.153 3.459 4.153 3.46a.384.384 0 0 1 .047.534.404.404 0 0 1-.29.13.403.403 0 0 1-.244-.084l-4.5-3.75a.385.385 0 0 1 0-.58l4.5-3.75a.38.38 0 1 1 .487.58zm16.5 3.168-4.5-3.75a.38.38 0 0 0-.487.582l4.162 3.459-4.162 3.46a.384.384 0 0 0-.047.534.405.405 0 0 0 .29.13c.089 0 .174-.03.244-.084l4.5-3.75a.386.386 0 0 0 0-.58zm-7.612-8.315a.394.394 0 0 0-.488.225l-6 16.5a.394.394 0 0 0 .225.487l.132.019a.384.384 0 0 0 .356-.244l6-16.5a.394.394 0 0 0-.225-.487z"
                              fill="#000"
                            ></path>
                          </svg>
                        </div>
                        <div className="link-txt">
                          <h3>Start developing</h3>
                          <p>
                            Start creating with the world’s fastest EVM-chain
                          </p>
                        </div>
                      </div>
                      <div className="new-arrow">
                        <svg
                          class="arrow"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.2497 12C17.247 12.1988 17.1701 12.3894 17.0341 12.5344L9.5341 20.0344C9.38838 20.154 9.20338 20.2151 9.01509 20.2059C8.8268 20.1966 8.64869 20.1177 8.51539 19.9844C8.38208 19.8511 8.30313 19.673 8.29388 19.4847C8.28464 19.2964 8.34576 19.1114 8.46535 18.9657L15.4404 12L8.46535 5.0344C8.34576 4.88868 8.28464 4.70368 8.29388 4.5154C8.30313 4.32711 8.38208 4.14899 8.51539 4.01569C8.64869 3.88239 8.8268 3.80343 9.01509 3.79418C9.20338 3.78494 9.38838 3.84606 9.5341 3.96565L17.0341 11.4657C17.1701 11.6106 17.247 11.8012 17.2497 12Z"
                            fill="black"
                          ></path>
                        </svg>
                      </div>
                    </a>
                  </div>
                </li>
                <li
                  className={
                    mobileMenu3
                      ? "jss1229 static active-bar"
                      : "jss1229 static closeAn "
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
                  <div
                    className="float-overlay"
                    onMouseEnter={toggleFalse3}
                  ></div>
                  <div
                    onMouseLeave={toggleFalse3}
                    className="float-dv alters-section"
                  >
                    <a href="" className="flex-row flex-link flex-alter">
                      <div className="individual-link">
                        <div className="icon">
                          <svg
                            width="24"
                            height="24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.926 12.963c.797-1.096 1.454-2.184 1.913-3.225.975-2.156 1.012-3.834.122-4.734-.89-.9-2.578-.853-4.735.122-1.04.46-2.128 1.115-3.225 1.912-1.096-.797-2.184-1.453-3.225-1.912-2.156-.975-3.834-1.013-4.734-.122-.9.89-.853 2.578.122 4.734.46 1.041 1.116 2.129 1.912 3.225-.796 1.097-1.453 2.185-1.912 3.225-.975 2.157-1.013 3.835-.122 4.735.431.422 1.04.637 1.8.637s1.819-.253 2.934-.76c1.116-.505 2.129-1.115 3.225-1.912 1.097.797 2.185 1.453 3.225 1.913 1.041.46 2.11.76 2.935.76.825 0 1.368-.216 1.8-.638.89-.9.853-2.578-.122-4.735-.46-1.04-1.116-2.128-1.913-3.225zm1.5-7.425c.647.657.554 2.072-.262 3.9a17.071 17.071 0 0 1-1.716 2.897 26.993 26.993 0 0 0-2.268-2.55 26.072 26.072 0 0 0-2.56-2.278c3.16-2.26 5.85-2.925 6.806-1.969zm-2.437 7.425c-.72.934-1.5 1.82-2.335 2.654a28.869 28.869 0 0 1-2.653 2.334 28.882 28.882 0 0 1-2.653-2.335 27.355 27.355 0 0 1-2.334-2.653c.72-.933 1.5-1.82 2.334-2.653a28.874 28.874 0 0 1 2.653-2.334 28.86 28.86 0 0 1 2.654 2.334 27.34 27.34 0 0 1 2.334 2.653zM4.839 9.438c-.816-1.828-.91-3.243-.263-3.9.282-.28.722-.422 1.275-.422 1.322 0 3.31.797 5.532 2.391a26.067 26.067 0 0 0-2.56 2.278 26.992 26.992 0 0 0-2.268 2.55 17.072 17.072 0 0 1-1.716-2.897zm-.263 10.95c-.646-.656-.553-2.072.263-3.9a17.07 17.07 0 0 1 1.716-2.896c.701.896 1.459 1.748 2.268 2.55a26.072 26.072 0 0 0 2.56 2.278c-3.16 2.259-5.85 2.925-6.807 1.968zm14.85 0c-.956.957-3.646.291-6.806-1.968a26.077 26.077 0 0 0 2.56-2.279 26.994 26.994 0 0 0 2.268-2.55 17.07 17.07 0 0 1 1.716 2.897c.816 1.829.91 3.244.262 3.9zm-6.675-7.425a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z"
                              fill="#000"
                            ></path>
                          </svg>
                        </div>
                        <div className="link-txt">
                          <h3>Ecosystem</h3>
                          <p>Discover top projects and dApps built on Velas</p>
                        </div>
                      </div>
                      <div className="new-arrow">
                        <svg
                          class="arrow"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.2497 12C17.247 12.1988 17.1701 12.3894 17.0341 12.5344L9.5341 20.0344C9.38838 20.154 9.20338 20.2151 9.01509 20.2059C8.8268 20.1966 8.64869 20.1177 8.51539 19.9844C8.38208 19.8511 8.30313 19.673 8.29388 19.4847C8.28464 19.2964 8.34576 19.1114 8.46535 18.9657L15.4404 12L8.46535 5.0344C8.34576 4.88868 8.28464 4.70368 8.29388 4.5154C8.30313 4.32711 8.38208 4.14899 8.51539 4.01569C8.64869 3.88239 8.8268 3.80343 9.01509 3.79418C9.20338 3.78494 9.38838 3.84606 9.5341 3.96565L17.0341 11.4657C17.1701 11.6106 17.247 11.8012 17.2497 12Z"
                            fill="black"
                          ></path>
                        </svg>
                      </div>
                    </a>
                    <a href="" className="flex-row flex-link flex-alter">
                      <div className="individual-link">
                        <div className="icon">
                          <svg
                            width="24"
                            height="24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M23.1 14.388a.403.403 0 0 1-.225.075.393.393 0 0 1-.3-.15 5.22 5.22 0 0 0-4.2-2.1.375.375 0 0 1 0-.75 2.625 2.625 0 1 0-2.578-3.122.379.379 0 0 1-.44.3.377.377 0 0 1-.3-.44 3.375 3.375 0 1 1 5.071 3.524 5.906 5.906 0 0 1 3.047 2.138.375.375 0 0 1-.075.525zm-5.363 6.656a.384.384 0 0 1-.178.506.376.376 0 0 1-.497-.169 5.625 5.625 0 0 0-10.124 0 .366.366 0 0 1-.497.17.384.384 0 0 1-.178-.507 6.404 6.404 0 0 1 3.834-3.3 4.125 4.125 0 1 1 3.806 0 6.403 6.403 0 0 1 3.835 3.3zM12 17.463a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75zm-6.375-6A2.625 2.625 0 1 1 8.203 8.34a.377.377 0 1 0 .74-.14 3.375 3.375 0 1 0-5.071 3.524 5.906 5.906 0 0 0-3.047 2.138.375.375 0 0 0 .3.6.393.393 0 0 0 .3-.15 5.22 5.22 0 0 1 4.2-2.1.375.375 0 1 0 0-.75z"
                              fill="#000"
                            ></path>
                          </svg>
                        </div>
                        <div className="link-txt">
                          <h3>Community</h3>
                          <p>
                            Join more than 300K+ members across different
                            communities
                          </p>
                        </div>
                      </div>
                      <div className="new-arrow">
                        <svg
                          class="arrow"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.2497 12C17.247 12.1988 17.1701 12.3894 17.0341 12.5344L9.5341 20.0344C9.38838 20.154 9.20338 20.2151 9.01509 20.2059C8.8268 20.1966 8.64869 20.1177 8.51539 19.9844C8.38208 19.8511 8.30313 19.673 8.29388 19.4847C8.28464 19.2964 8.34576 19.1114 8.46535 18.9657L15.4404 12L8.46535 5.0344C8.34576 4.88868 8.28464 4.70368 8.29388 4.5154C8.30313 4.32711 8.38208 4.14899 8.51539 4.01569C8.64869 3.88239 8.8268 3.80343 9.01509 3.79418C9.20338 3.78494 9.38838 3.84606 9.5341 3.96565L17.0341 11.4657C17.1701 11.6106 17.247 11.8012 17.2497 12Z"
                            fill="black"
                          ></path>
                        </svg>
                      </div>
                    </a>

                    <div className="flex-row">
                      <a href="#" className="individual-link">
                        <div className="icon">
                          <svg
                            width="24"
                            height="24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.625 9.963A.375.375 0 0 1 9 9.588h6a.375.375 0 0 1 0 .75H9a.375.375 0 0 1-.375-.375zM9 13.338h6a.375.375 0 0 0 0-.75H9a.375.375 0 1 0 0 .75zm3 2.25H9a.375.375 0 1 0 0 .75h3a.375.375 0 0 0 0-.75zm8.625-10.125v10.19a1.116 1.116 0 0 1-.328.797l-4.81 4.81a1.116 1.116 0 0 1-.796.328H4.5a1.125 1.125 0 0 1-1.125-1.125v-15A1.125 1.125 0 0 1 4.5 4.338h15a1.125 1.125 0 0 1 1.125 1.125zM4.5 20.838h10.125v-4.875a.375.375 0 0 1 .375-.375h4.875V5.463a.375.375 0 0 0-.375-.375h-15a.375.375 0 0 0-.375.375v15a.375.375 0 0 0 .375.375zm14.85-4.5h-3.975v3.965l3.975-3.965z"
                              fill="#000"
                            ></path>
                          </svg>
                        </div>
                        <div className="link-txt">
                          <h3>Blog</h3>
                          <p>
                            Keep in tune with the latest Velas news and updates
                          </p>
                        </div>
                      </a>
                      <a href="#" className="individual-link">
                        <div className="icon">
                          <svg
                            width="24"
                            height="24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19.5 4.338h-15a1.125 1.125 0 0 0-1.125 1.125v15A1.125 1.125 0 0 0 4.5 21.588h10.19a1.116 1.116 0 0 0 .798-.328l4.809-4.81a1.115 1.115 0 0 0 .328-.796V5.462A1.125 1.125 0 0 0 19.5 4.338zm-4.125 15.965v-3.965h3.975l-3.975 3.965zm4.5-4.715H15a.375.375 0 0 0-.375.375v4.875H4.5a.375.375 0 0 1-.375-.375v-15a.375.375 0 0 1 .375-.375h15a.375.375 0 0 1 .375.375v10.125z"
                              fill="#000"
                            ></path>
                          </svg>
                        </div>
                        <div className="link-txt">
                          <h3>Whitepaper</h3>
                          <p>
                            Discover what Velas packs under the hood in our
                            whitepaper
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="flex-row no-margin">
                      <a href="#" className="individual-link">
                        <div className="icon">
                          <svg
                            width="24"
                            height="24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 3.588a9.375 9.375 0 1 0 9.375 9.375A9.394 9.394 0 0 0 12 3.588zm0 18a8.625 8.625 0 1 1 8.625-8.625A8.634 8.634 0 0 1 12 21.588zm.75-3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm2.25-6.75a3.009 3.009 0 0 1-2.625 2.981v.394a.375.375 0 0 1-.75 0v-.75a.375.375 0 0 1 .375-.375 2.25 2.25 0 1 0-2.25-2.25.375.375 0 0 1-.75 0 3 3 0 1 1 6 0z"
                              fill="#000"
                            ></path>
                          </svg>
                        </div>
                        <div className="link-txt">
                          <h3>FAQ</h3>
                          <p>Get answers to the most common questions</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </li>
                <li
                  className={
                    mobileMenu4
                      ? "jss1229 static active-bar"
                      : "jss1229 static closeAn "
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
                  <div
                    className="float-overlay"
                    onMouseEnter={toggleFalse4}
                  ></div>
                  <div
                    id="about-sec"
                    onMouseLeave={toggleFalse4}
                    className="float-dv alters-section"
                  >
                    <a href="" className="flex-row flex-link flex-alter">
                      <div className="individual-link">
                        <div className="icon">
                          <svg
                            width="24"
                            height="24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21 5.838H3a1.125 1.125 0 0 0-1.125 1.125v12A1.125 1.125 0 0 0 3 20.088h18a1.125 1.125 0 0 0 1.125-1.125v-12A1.125 1.125 0 0 0 21 5.838zm-18 .75h18a.375.375 0 0 1 .375.375v2.71H2.625v-2.71A.375.375 0 0 1 3 6.588zm18 12.75H3a.375.375 0 0 1-.375-.375v-8.54h18.75v8.54a.375.375 0 0 1-.375.375zm-1.875-2.625a.375.375 0 0 1-.375.375h-3a.375.375 0 0 1 0-.75h3a.375.375 0 0 1 .375.375zm-6 0a.375.375 0 0 1-.375.375h-1.5a.375.375 0 0 1 0-.75h1.5a.375.375 0 0 1 .375.375z"
                              fill="#000"
                            ></path>
                          </svg>
                        </div>
                        <div className="link-txt">
                          <h3>Buy with a Card</h3>
                          <p>Buy $VLX with a debit/credit card</p>
                        </div>
                      </div>
                      <div className="new-arrow">
                        <svg
                          class="arrow"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.2497 12C17.247 12.1988 17.1701 12.3894 17.0341 12.5344L9.5341 20.0344C9.38838 20.154 9.20338 20.2151 9.01509 20.2059C8.8268 20.1966 8.64869 20.1177 8.51539 19.9844C8.38208 19.8511 8.30313 19.673 8.29388 19.4847C8.28464 19.2964 8.34576 19.1114 8.46535 18.9657L15.4404 12L8.46535 5.0344C8.34576 4.88868 8.28464 4.70368 8.29388 4.5154C8.30313 4.32711 8.38208 4.14899 8.51539 4.01569C8.64869 3.88239 8.8268 3.80343 9.01509 3.79418C9.20338 3.78494 9.38838 3.84606 9.5341 3.96565L17.0341 11.4657C17.1701 11.6106 17.247 11.8012 17.2497 12Z"
                            fill="black"
                          ></path>
                        </svg>
                      </div>
                    </a>

                    <a href="" className="flex-row flex-link flex-alter">
                      <div className="individual-link">
                        <div className="icon">
                          <svg
                            width="24"
                            height="24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <mask
                              id="a8"
                              maskUnits="userSpaceOnUse"
                              x="1"
                              y="1.963"
                              width="22"
                              height="22"
                              fill="#000"
                            >
                              {" "}
                              <path fill="#fff" d="M1 1.963h22v22H1z"></path>
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M11.997 2.963a9.973 9.973 0 0 1 7.061 2.92V4.662c0-.375.565-.375.565 0v1.894a.28.28 0 0 1-.282.282h-1.9c-.374 0-.374-.564 0-.564h1.232A9.41 9.41 0 0 0 11.997 3.5c-5.21 0-9.433 4.239-9.433 9.46 0 1.428.315 2.779.88 3.995.163.353-.31.63-.516.222A10.031 10.031 0 0 1 2 12.96c0-5.52 4.478-9.997 9.997-9.997zm-7.06 18.773v-1.894a.28.28 0 0 1 .281-.282h1.9c.375 0 .375.564 0 .564h-1.28a9.366 9.366 0 0 0 6.16 2.302c5.215 0 9.438-4.24 9.438-9.466a9.508 9.508 0 0 0-.798-3.815c-.201-.456.38-.614.51-.223A9.93 9.93 0 0 1 22 12.96c0 5.525-4.478 10.003-10.003 10.003a9.973 9.973 0 0 1-6.496-2.399v1.172c0 .375-.565.375-.565 0z"
                              ></path>
                            </mask>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.997 2.963a9.973 9.973 0 0 1 7.061 2.92V4.662c0-.375.565-.375.565 0v1.894a.28.28 0 0 1-.282.282h-1.9c-.374 0-.374-.564 0-.564h1.232A9.41 9.41 0 0 0 11.997 3.5c-5.21 0-9.433 4.239-9.433 9.46 0 1.428.315 2.779.88 3.995.163.353-.31.63-.516.222A10.031 10.031 0 0 1 2 12.96c0-5.52 4.478-9.997 9.997-9.997zm-7.06 18.773v-1.894a.28.28 0 0 1 .281-.282h1.9c.375 0 .375.564 0 .564h-1.28a9.366 9.366 0 0 0 6.16 2.302c5.215 0 9.438-4.24 9.438-9.466a9.508 9.508 0 0 0-.798-3.815c-.201-.456.38-.614.51-.223A9.93 9.93 0 0 1 22 12.96c0 5.525-4.478 10.003-10.003 10.003a9.973 9.973 0 0 1-6.496-2.399v1.172c0 .375-.565.375-.565 0z"
                              fill="#000"
                            ></path>
                            <path
                              clip-rule="evenodd"
                              d="M11.997 2.963a9.973 9.973 0 0 1 7.061 2.92V4.662c0-.375.565-.375.565 0v1.894a.28.28 0 0 1-.282.282h-1.9c-.374 0-.374-.564 0-.564h1.232A9.41 9.41 0 0 0 11.997 3.5c-5.21 0-9.433 4.239-9.433 9.46 0 1.428.315 2.779.88 3.995.163.353-.31.63-.516.222A10.031 10.031 0 0 1 2 12.96c0-5.52 4.478-9.997 9.997-9.997zm-7.06 18.773v-1.894a.28.28 0 0 1 .281-.282h1.9c.375 0 .375.564 0 .564h-1.28a9.366 9.366 0 0 0 6.16 2.302c5.215 0 9.438-4.24 9.438-9.466a9.508 9.508 0 0 0-.798-3.815c-.201-.456.38-.614.51-.223A9.93 9.93 0 0 1 22 12.96c0 5.525-4.478 10.003-10.003 10.003a9.973 9.973 0 0 1-6.496-2.399v1.172c0 .375-.565.375-.565 0z"
                              stroke="#000"
                              stroke-width=".2"
                              mask="url(#a)"
                            ></path>
                            <mask
                              id="b8"
                              maskUnits="userSpaceOnUse"
                              x="5.652"
                              y="8.443"
                              width="12"
                              height="11"
                              fill="#000"
                            >
                              <path
                                fill="#fff"
                                d="M5.652 8.443h12v11h-12z"
                              ></path>
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M6.652 9.443H17.35l-.337.565H6.99l-.337-.565zm9.542 1.938-4.196 7.04-4.19-7.04h8.386zm-1.227.971-2.969 4.983-3.202-5.406h6.426l-.255.423z"
                              ></path>
                            </mask>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.652 9.443H17.35l-.337.565H6.99l-.337-.565zm9.542 1.938-4.196 7.04-4.19-7.04h8.386zm-1.227.971-2.969 4.983-3.202-5.406h6.426l-.255.423z"
                              fill="#000"
                            ></path>
                            <path
                              clip-rule="evenodd"
                              d="M6.652 9.443H17.35l-.337.565H6.99l-.337-.565zm9.542 1.938-4.196 7.04-4.19-7.04h8.386zm-1.227.971-2.969 4.983-3.202-5.406h6.426l-.255.423z"
                              stroke="#000"
                              stroke-width=".2"
                              mask="url(#b)"
                            ></path>
                          </svg>
                        </div>
                        <div className="link-txt">
                          <h3>Exchanges & Wallets</h3>
                          <p>
                            Get to know where to buy, sell, and store your $VLX
                          </p>
                        </div>
                      </div>
                      <div className="new-arrow">
                        <svg
                          class="arrow"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.2497 12C17.247 12.1988 17.1701 12.3894 17.0341 12.5344L9.5341 20.0344C9.38838 20.154 9.20338 20.2151 9.01509 20.2059C8.8268 20.1966 8.64869 20.1177 8.51539 19.9844C8.38208 19.8511 8.30313 19.673 8.29388 19.4847C8.28464 19.2964 8.34576 19.1114 8.46535 18.9657L15.4404 12L8.46535 5.0344C8.34576 4.88868 8.28464 4.70368 8.29388 4.5154C8.30313 4.32711 8.38208 4.14899 8.51539 4.01569C8.64869 3.88239 8.8268 3.80343 9.01509 3.79418C9.20338 3.78494 9.38838 3.84606 9.5341 3.96565L17.0341 11.4657C17.1701 11.6106 17.247 11.8012 17.2497 12Z"
                            fill="black"
                          ></path>
                        </svg>
                      </div>
                    </a>
                    <a href="" className="flex-row flex-link flex-alter">
                      <div className="individual-link">
                        <div className="icon">
                          <svg
                            width="24"
                            height="24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.875 9.691v-.853c0-2.1-3.46-3.75-7.875-3.75-4.416 0-7.875 1.65-7.875 3.75v3.75c0 1.79 2.522 3.253 6 3.647v.853c0 2.1 3.46 3.75 7.875 3.75 4.416 0 7.875-1.65 7.875-3.75v-3.75c0-1.772-2.447-3.244-6-3.647zm5.25 3.647c0 1.453-2.86 3-7.125 3-.88.001-1.758-.071-2.625-.216v-.131c2.681-.59 4.5-1.875 4.5-3.403V10.45c3.019.357 5.25 1.566 5.25 2.888zM7.528 15.522H7.5a13.087 13.087 0 0 1-1.125-.15v-2.99c.868.138 1.746.207 2.625.206.88 0 1.757-.068 2.625-.206v2.99A15.18 15.18 0 0 1 9 15.588c-.516 0-1.003-.019-1.472-.066zm8.597-5.062v2.128c0 1.022-1.425 2.09-3.75 2.634v-2.981c1.65-.366 2.981-.994 3.75-1.781zM9 5.838c4.266 0 7.125 1.547 7.125 3s-2.86 3-7.125 3c-4.266 0-7.125-1.547-7.125-3s2.86-3 7.125-3zm-7.125 6.75V10.46c.769.787 2.1 1.415 3.75 1.781v2.981c-2.325-.543-3.75-1.612-3.75-2.634zm6 4.5V16.3c.366.028.74.038 1.125.038.384 0 .76-.01 1.125-.038.489.18.99.324 1.5.432v2.99c-2.325-.544-3.75-1.612-3.75-2.634zm4.5 2.784v-2.99c.868.136 1.746.205 2.625.206.88 0 1.757-.068 2.625-.206v2.99a16.092 16.092 0 0 1-5.25 0zm9.75-2.784c0 1.022-1.425 2.09-3.75 2.634v-2.981c1.65-.366 2.981-.994 3.75-1.781v2.128z"
                              fill="#000"
                            ></path>
                          </svg>
                        </div>
                        <div className="link-txt">
                          <h3>Staking</h3>
                          <p>How to delegate/undelegate and claim rewards</p>
                        </div>
                      </div>
                      <div className="new-arrow">
                        <svg
                          class="arrow"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.2497 12C17.247 12.1988 17.1701 12.3894 17.0341 12.5344L9.5341 20.0344C9.38838 20.154 9.20338 20.2151 9.01509 20.2059C8.8268 20.1966 8.64869 20.1177 8.51539 19.9844C8.38208 19.8511 8.30313 19.673 8.29388 19.4847C8.28464 19.2964 8.34576 19.1114 8.46535 18.9657L15.4404 12L8.46535 5.0344C8.34576 4.88868 8.28464 4.70368 8.29388 4.5154C8.30313 4.32711 8.38208 4.14899 8.51539 4.01569C8.64869 3.88239 8.8268 3.80343 9.01509 3.79418C9.20338 3.78494 9.38838 3.84606 9.5341 3.96565L17.0341 11.4657C17.1701 11.6106 17.247 11.8012 17.2497 12Z"
                            fill="black"
                          ></path>
                        </svg>
                      </div>
                    </a>
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
      {/* {fullFloat && ( */}
      <div
        className={fullFloat ? "full-float" : "hide-it full-float"}
        onMouseLeave={() => setfullFloat(false)}
      >
        <div className="MuiContainer-root-1268 jss768 jss769 MuiContainer-maxWidthLg-1274">
          <div className="jss753 case-studies">
            <div className="jss1276 jss1277">
              <a
                className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss1285 MuiButton-textPrimary-109 MuiButton-disableElevation-117"
                tabIndex={0}
                aria-disabled="false"
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
                      Serving up a multi-chain connection for the DeFi chefs at
                      SushiSwap.
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
                      Explosive scalability delivered for BOMB Money with their
                      own AppChain.
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
      {/* )} */}
    </>
  );
};

export default Header;
