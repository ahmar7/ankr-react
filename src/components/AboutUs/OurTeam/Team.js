import React from "react";
import "./Team.css";
const Team = () => {
  return (
    <section className="aMuiPaper-root-174 ajss411 aMuiPaper-elevation0-177">
      <div className="aMuiContainer-root-288 aMuiContainer-maxWidthLg-294">
        <div className="aMuiGrid-root-296 ajss412 aMuiGrid-container-297 aMuiGrid-spacing-xs-3-321">
          <div className="aMuiGrid-root-296 aMuiGrid-item-298 aMuiGrid-grid-xs-12-342 aMuiGrid-grid-sm-6-350 aMuiGrid-grid-md-6-364">
            <h2 className="aMuiTypography-root-228 ajss413 aMuiTypography-h2-234">
              Meet the Team Bringing Web3 to the World.
            </h2>
          </div>
          <div className="aMuiGrid-root-296 aMuiGrid-item-298 aMuiGrid-grid-xs-12-342 aMuiGrid-grid-sm-6-350 aMuiGrid-grid-md-6-364">
            <p className="aMuiTypography-root-228 ajss414 aMuiTypography-body1-230">
              We operate 24/7 with a globally distributed and decentralized
              team, just like our infrastructure. Ankr is a globally distributed
              team of entrepreneurs, creators, and engineers who believe in
              using tech to build a better web and a better world. We’re spread
              across dozens of cultures, countries, and time zones, but our
              mission has never been more unified – bringing blockchain and Web3
              to the world.
            </p>
            <a
              className="aMuiButtonBase-root-287 aMuiButton-root-260 aMuiButton-text-262 ajss417 aMuiButton-textPrimary-263 aMuiButton-disableElevation-271"
              tabIndex={0}
              aria-disabled="false"
              href="https://boards.greenhouse.io/ankrnetwork"
              role="link"
              target="_blank"
              rel="noreferrer"
            >
              <span className="aMuiButton-label-261">
                <br /> Join Us
                <svg
                  className="ajss418"
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
              </span>
            </a>
          </div>
        </div>
        <div className="aMuiBox-root-258 ajss419 ajss415">
          <img
            className="ajss416"
            src="https://www.ankr.com/_next/static/images/team-9233470d14e2f84414207eabf9ff8cc1.jpg"
            alt="Ankr is democratizing Web3 for everyone to leverage decentralized applications and play an active role in the future internet."
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
