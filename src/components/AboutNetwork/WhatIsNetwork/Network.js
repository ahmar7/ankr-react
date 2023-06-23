import React, { useState } from "react";
import "./Network.css";
const Network = () => {
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

  return (
    <section className="pMuiPaper-root pjss185 pMuiPaper-elevation0">
      <div className="pMuiContainer-root pMuiContainer-maxWidthLg">
        <div className="pjss186">
          <div className="pjss187">What is Ankr Network?</div>
          <div className="pjss188">
            Decentralized protocols &gt; Centralized platforms
          </div>
          <div className="pjss189">
            Ankr Network is a decentralized network of nodes built for Web3
            developers to provide flexible and cost-efficient connections to
            blockchains.
          </div>
        </div>
        <div className="pjss190">
          <div
            className={ToggleOne ? "pjss191 njss194" : "pjss191"}
            onClick={toggle1}
          >
            <div className={ToggleOne ? "none" : "pjss192"}>
              Always On, All Around the World
            </div>
            {ToggleOne ? (
              ""
            ) : (
              <img
                src="https://www.ankr.com/_next/static/images/planet-01fe9a9ba028162b4f8742fdb823c3e4.png"
                alt=""
              />
            )}
            <span className={ToggleOne ? "pjss193 block-display" : "pjss193"}>
              With nodes in every corner of the globe and intelligent
              load-balancing, rest assured that you have the resiliency, uptime,
              and speed you need — without centralized vulnerabilities.
            </span>
            <button type="button" className="pjss195">
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
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="round"
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
            </button>
          </div>
          <div
            className={ToggleTwo ? "pjss191 njss194" : "pjss191"}
            onClick={toggle2}
          >
            <div className={ToggleTwo ? "none" : "pjss192"}>
              A Decentralized Economy Powered by ANKR
            </div>

            {ToggleTwo ? (
              ""
            ) : (
              <img
                src="https://www.ankr.com/_next/static/images/item2-c79b92b665a03fe429ef96a679234636.png"
                alt=""
              />
            )}
            <span className={ToggleTwo ? "pjss193 block-display" : "pjss193"}>
              Developers pay with ANKR for access to on-chain data, node
              providers serve blockchain requests to earn ANKR, and stakers
              contribute ANKR to nodes to share in the rewards.
            </span>
            <button type="button" className="pjss195">
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
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="round"
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
            </button>
          </div>
          <div
            className={ToggleThree ? "pjss191 njss194" : "pjss191"}
            onClick={toggle3}
          >
            <div className={ToggleThree ? "none" : "pjss192"}>
              DAO-Governed and DAO-Secured
            </div>

            {ToggleThree ? (
              ""
            ) : (
              <img
                src="https://www.ankr.com/_next/static/images/item3-f5c3442a2d3bc78ee64d0da49b1e5631.png"
                alt=""
              />
            )}
            <span className={ToggleThree ? "pjss193 block-display" : "pjss193"}>
              ANKR token holders are incentivized to participate in the protocol
              by staking ANKR tokens into the Ankr coverage staking contracts,
              which grants voting power in the Ankr DAO. Direct participation in
              governance by community members holds the DAO responsible for
              protocol security and incentivizes a security-first governance
              approach for the project.
            </span>
            <button type="button" className="pjss195">
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
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="round"
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
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Network;
