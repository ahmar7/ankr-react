import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
      <section className="MuiPaper-root-175 branBanner MuiPaper-elevation0-178">
        <div className="MuiContainer-root-228 inner-banner MuiContainer-maxWidthLg-234">
          <div className="banner-max ">
            <h2 className="MuiTypography-root-236 main-brand banner1608 jss1703 jss1704 MuiTypography-h2-242">
              Ankr Brand Guidelines
            </h2>
            <p className="MuiTypography-root-236  banner1609 jss1703 jss1704 MuiTypography-body1-238">
              The brand book contains the most important and new information on
              the use of Ankr assets
            </p>
          </div>
          <div className="jss1700">
            <button
              className="MuiButtonBase-root-293 MuiButton-root-266 MuiButton-contained-274 banner171 MuiButton-disableElevation-277"
              tabIndex={0}
              type="button"
            >
              <span className="MuiButton-label-267">
                <a
                  className="jss1702"
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
