import React from "react";
import "./Earning.css";
const Earning = () => {
  return (
    <section className="MuiPaper-root-319 tjss314 MuiPaper-elevation0-322">
      <div className="MuiContainer-root-372 MuiContainer-maxWidthLg-378">
        <div className="tjss315">
          <h2 className="MuiTypography-root-380 tjss317 MuiTypography-h2-386">
            <span>
              Start earning with
              <br />
              <span>ANKR Token.</span>
            </span>
          </h2>
          <a
            className="MuiButtonBase-root-437 MuiButton-root-410 MuiButton-contained-418 tjss318 MuiButton-containedPrimary-419 MuiButton-disableElevation-421"
            tabIndex={0}
            aria-disabled="false"
            href="https://www.ankr.com/staking/ankr-stake/stake/"
            role="link"
            target="_blank"
            rel="noreferrer"
          >
            <span className="MuiButton-label-411">Stake Now</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Earning;
