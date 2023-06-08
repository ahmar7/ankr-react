import React from "react";
import "./Page.css";
import "./Banner.css";
const Banner = () => {
  return (
    <section className="MuiPaper-root-177 custom1 MuiPaper-elevation0-180">
      <div className="MuiContainer-root-230 custom2 MuiContainer-maxWidthLg-236">
        <img
          src="https://www.ankr.com/_next/static/images/bg-preview-3c28ea1917059b23d4614775730a9188.jpg"
          alt="preview"
          className="custom3"
        />
        <div className="custom5">
          <svg
            className="custom4"
            fill="none"
            height={120}
            viewBox="0 0 121 120"
            width={121}
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="60.5" cy={60} fill="#356df3" r={60} />
            <g fill="#fff">
              <path d="M65.443 22.83l24.736 13.122c3.797 2.28 7.35 4.94 7.513 12.769v6.282h-9.724v-8.59L60.602 31.706l-27.57 14.709v8.59h-9.723V48.72c.149-7.79 3.675-10.462 7.445-12.728l24.993-13.177a10.347 10.347 0 0 1 9.696.014z" />
              <path
                clipRule="evenodd"
                d="M65.457 87.177L87.955 74.57v-9.39h9.723v6.269c-.15 7.83-3.716 10.503-7.513 12.768L65.443 97.341a10.347 10.347 0 0 1-9.696.013L30.754 84.178c-3.77-2.266-7.283-4.953-7.445-12.728v-6.27h9.736v9.39l22.702 12.62V77c-7.92-1.86-13.114-8.292-13.114-16.922 0-10.448 7.215-17.464 17.969-17.464 10.754 0 17.968 7.016 17.968 17.464 0 8.617-5.207 15.063-13.113 16.922zm-4.855-35.973c-5.764 0-8.937 3.148-8.937 8.874 0 5.564 3.336 8.875 8.937 8.875s8.937-3.325 8.937-8.874c0-5.727-3.174-8.875-8.937-8.875z"
                fillRule="evenodd"
              />
            </g>
          </svg>
          <div className="custom6">The ANKR Token</div>
          <div className="custom7">
            ANKR is the backbone of the world's fastest-growing decentralized
            infrastructure network. Meet the utility token powering our
            multi-chain ecosystem.
          </div>
          <button
            className="MuiButtonBase-root-265 MuiButton-root-238 MuiButton-contained-246 MuiButton-containedPrimary-247 MuiButton-disableElevation-249"
            tabIndex={0}
            type="submit"
          >
            <span className="MuiButton-label-239">
              Watch Video
              <span className="MuiButton-endIcon-261 MuiButton-iconSizeMedium-263">
                <svg
                  fill="none"
                  height={24}
                  viewBox="0 0 25 24"
                  width={25}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.596 4.413a1 1 0 0 1 1.808 0l1.888 3.996 4.298.67a1 1 0 0 1 .564 1.684l-3.136 3.23.72 4.487a1 1 0 0 1-1.469 1.035l-3.769-2.07-3.77 2.07a1 1 0 0 1-1.468-1.035l.72-4.486-3.136-3.231a1 1 0 0 1 .564-1.685l4.298-.669z"
                    stroke="#fff"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
