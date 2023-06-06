import React from 'react';
// import './Banner.css'
// import './page.css'
const Banner = () => {
    return (
      <section className="MuiPaper-root-175 jss165 MuiPaper-elevation0-178">
        <div className="MuiContainer-root-228 jss166 MuiContainer-maxWidthLg-234">
          <div className="jss167">
            <h2 className="MuiTypography-root-236 jss168 jss173 jss174 MuiTypography-h2-242">
              Ankr Brand Guidelines
            </h2>
            <p className="MuiTypography-root-236 jss169 jss173 jss174 MuiTypography-body1-238">
              The brand book contains the most important and new information on
              the use of Ankr assets
            </p>
          </div>
          <div className="jss170">
            <button
              className="MuiButtonBase-root-293 MuiButton-root-266 MuiButton-contained-274 jss171 MuiButton-disableElevation-277"
              tabIndex={0}
              type="button"
            >
              <span className="MuiButton-label-267">
                <a
                  className="jss172"
                  href="/ankr-brand-guidelines.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download Brandbook
                </a>
              </span>
            </button>
          </div>
        </div>
      </section>
    );
}

export default Banner;
