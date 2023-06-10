import React from "react";
import "./Program.css";
const Program = () => {
  return (
    <section className="MuiPaper-root-298 bjss289 MuiPaper-elevation0-301">
      <div className="MuiContainer-root-351 MuiContainer-maxWidthLg-357">
        <h2 className="MuiTypography-root-359 bjss290 MuiTypography-h2-365">
          Join Ankr’s Ambassador program
        </h2>
        <div className="MuiGrid-root-389 bjss291 MuiGrid-container-390">
          <div className="MuiGrid-root-389 MuiGrid-item-391 MuiGrid-grid-xs-12-435 MuiGrid-grid-sm-6-443">
            <div className="MuiBox-root-492 bjss493 bjss292">
              <img
                className="bjss293"
                src="https://www.ankr.com/_next/static/images/join@1x-6339d787e124a1f0717889cf3e35e242.png"
                alt="Join Ankr’s Ambassador program"
              />
            </div>
          </div>
          <div className="MuiGrid-root-389 MuiGrid-item-391 MuiGrid-grid-xs-12-435 MuiGrid-grid-sm-6-443">
            <div className="MuiBox-root-492 bjss494 bjss294">
              <h5 className="MuiTypography-root-359 bjss295 MuiTypography-h5-368">
                Ankr needs ambassadors to spread Ankr’s vision and mission with
                the greater Web3 community
              </h5>
              <p className="MuiTypography-root-359 bjss296 MuiTypography-body1-361">
                Ankr makes it easier for all developers and dApps to interact
                with blockchains via nodes with a connection that is faster,
                more reliable, more affordable, and more decentralized – and we
                need your help in making sure the world knows this!
              </p>
              <a
                className="MuiButtonBase-root-522 MuiButton-root-495 MuiButton-contained-503 bjss297 MuiButton-containedPrimary-504 MuiButton-disableElevation-506"
                tabIndex={0}
                aria-disabled="false"
                href="https://bit.ly/JoinAnkr"
                role="link"
                target="_blank"
                rel="noreferrer"
              >
                <span className="MuiButton-label-496">Apply now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
