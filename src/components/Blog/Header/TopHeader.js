import React from 'react';
import '../Blog.css'
import './TopHeader.css'
const TopHeader = () => {
    return (
      <section className="thMuiPaper-root-173 thjss166 thMuiPaper-elevation0-176">
        <div className="thMuiContainer-root-226 thjss167 thMuiContainer-maxWidthLg-232">
          <h1 className="thMuiTypography-root-234 thjss168 thMuiTypography-h1-239">
            Blog
          </h1>
          <form className="thjss169">
            <input defaultValue className="thjss170" placeholder="Search" />
            <button type="submit" className="thjss171">
              <svg
                className="thjss172"
                fill="none"
                height={24}
                viewBox="0 0 24 24"
                width={24}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  stroke="currentColor"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                  strokeWidth={2}
                >
                  <path d="M19 19l-3-3" />
                  <circle cx={11} cy={11} r={6} />
                </g>
              </svg>
            </button>
          </form>
        </div>
      </section>
    );
}

export default TopHeader;
