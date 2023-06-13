import React, { useState } from "react";
import "./Benefits.css";
const Benefits = () => {
  const [ToggleOne, setToggleOne] = useState(false);
  const [ToggleTwo, setToggleTwo] = useState(false);
  const [ToggleThree, setToggleThree] = useState(false);
  const [ToggleFour, setToggleFour] = useState(false);
  let toggle1 = () => {
    if (ToggleOne === false) {
      setToggleOne(true);
    } else {
      setToggleOne(false);
    }
  };
  let toggle2 = () => {
    if (ToggleTwo === false) {
      setToggleTwo(true);
    } else {
      setToggleTwo(false);
    }
  };
  let toggle3 = () => {
    if (ToggleThree === false) {
      setToggleThree(true);
    } else {
      setToggleThree(false);
    }
  };
  let toggle4 = () => {
    if (ToggleFour === false) {
      setToggleFour(true);
    } else {
      setToggleFour(false);
    }
  };

  return (
    <section className="MuiPaper-root njss185 MuiPaper-elevation0">
      <div className="MuiContainer-root MuiContainer-maxWidthLg">
        <div className="njss186">
          <div className="njss187">
            <div className="njss190">
              <div className="njss189">Serve Traffic, Earn ANKR</div>
            </div>
            <div className="njss191">
              Use your nodes to serve requests from Ankr Network and earn ANKR
              tokens. Our native utility and governance token, ANKR, can also be
              staked to maximize your earnings.
            </div>
            <img
              className="njss192"
              src="https://www.ankr.com/_next/static/images/image1-b69bdf326686bb4e89849839331c0bc4.png"
              alt=""
            />
          </div>
          <div
            className={ToggleOne ? "njss188 njss194" : "njss188"}
            onClick={toggle1}
          >
            <div className={ToggleOne ? "none" : "njss190"}>
              Provide Resources Flexibly
            </div>

            <span className={ToggleOne ? "njss191 block-display" : "njss191"}>
              Deploy nodes to Ankr Network flexibly and opt in or out of serving
              traffic at any time to fit your needs. No contracts or
              one-size-fits-all service plans.
            </span>

            <div className="njss193">
              {ToggleOne ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 6l12 12M6 18L18 6"
                    stroke="#356DF3"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              ) : (
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 12H5M12 19V5"
                    stroke="#356DF3"
                    strokeWidth={2}
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>
          <div
            className={ToggleTwo ? "njss188 njss194" : "njss188"}
            onClick={toggle2}
          >
            <div className={ToggleTwo ? "none" : "njss190"}>
              Control Your Infrastructure
            </div>
            <span className={ToggleTwo ? "njss191 block-display" : "njss191"}>
              Node providers are the true owners and operators of Ankr Network
              via Ankr DAO governance. Vote with your earned ANKR to make the
              network better serve your needs.
            </span>
            <div className="njss193">
              {ToggleTwo ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 6l12 12M6 18L18 6"
                    stroke="#356DF3"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              ) : (
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 12H5M12 19V5"
                    stroke="#356DF3"
                    strokeWidth={2}
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>
          <div
            className={ToggleThree ? "njss188 njss194" : "njss188"}
            onClick={toggle3}
          >
            <div className={ToggleThree ? "none" : "njss190"}>
              Save Time and Money
            </div>
            <span className={ToggleThree ? "njss191 block-display" : "njss191"}>
              Get quick, easy, affordable access to node infrastructure on
              multiple blockchains from one convenient source — all while
              avoiding centralized providers and rigid service plans.
            </span>
            <div className="njss193">
              {ToggleThree ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 6l12 12M6 18L18 6"
                    stroke="#356DF3"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              ) : (
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 12H5M12 19V5"
                    stroke="#356DF3"
                    strokeWidth={2}
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>
          <div
            className={ToggleFour ? "njss188 njss194" : "njss188"}
            onClick={toggle4}
          >
            <div className={ToggleFour ? "none" : "njss190"}>
              Maximize Security and Uptime
            </div>
            <span className={ToggleFour ? "njss191 block-display" : "njss191"}>
              Enjoy the built-in security and redundancy of Ankr Network. If
              your nodes experience an outage, our intelligent load-balancer
              will redirect your traffic and ensure you stay connected.
            </span>
            <div className="njss193">
              {ToggleFour ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 6l12 12M6 18L18 6"
                    stroke="#356DF3"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              ) : (
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 12H5M12 19V5"
                    stroke="#356DF3"
                    strokeWidth={2}
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>
          <div className="njss187">
            <div className="njss190">
              <div className="njss189">Decentralize and Scale</div>
            </div>
            <div className="njss191">
              Ankr Network is the world’s fastest-growing decentralized
              infrastructure provider for Web3. Your nodes help make it possible
              to build the future of Web3 in a more decentralized way.
            </div>
            <img
              className="njss192"
              src="https://www.ankr.com/_next/static/images/image2-f4af0d0b2b447dd41ba0c0e6f4c3d41f.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
