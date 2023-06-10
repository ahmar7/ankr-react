import React from "react";
import "./Banner.css";
import "../Ambassador.css";
const Banner = () => {
  return (
    <section className="MuiPaper-root-170 bjss165 MuiPaper-elevation0-173">
      <div className="MuiContainer-root-223 MuiContainer-maxWidthLg-229">
        <h1 className="MuiTypography-root-231 bjss166 MuiTypography-h1-236">
          Become an
          <br />
          <span className="bjss167">Ankr Ambassador</span>
        </h1>
        <h2 className="MuiTypography-root-231 bjss168 MuiTypography-h2-237">
          Spread the Word, Earn Exclusive Rewards &amp; Perks!
        </h2>
        <a
          className="MuiButtonBase-root-288 MuiButton-root-261 MuiButton-contained-269 bjss169 MuiButton-containedPrimary-270 MuiButton-disableElevation-272"
          tabIndex={0}
          aria-disabled="false"
          href="https://bit.ly/JoinAnkr"
          role="link"
          target="_blank"
          rel="noreferrer"
        >
          <span className="MuiButton-label-262">Apply now</span>
        </a>
      </div>
    </section>
  );
};

export default Banner;
