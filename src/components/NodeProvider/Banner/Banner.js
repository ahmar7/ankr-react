import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <section className="MuiPaper-root njss164 MuiPaper-elevation0">
      <div className="MuiContainer-root MuiContainer-maxWidthLg">
        <div className="njss165">
          <div className="njss167">
            <div className="njss168">
              <span className="njss169">Coming Soon!</span>
            </div>
            <div className="njss170">
              We are in the process of building our Independent Node Provider
              onboarding program and are eager to bring it to the community
              soon!
            </div>
          </div>
          <div className="njss166">
            <div className="njss171">Become an Ankr Node Provider</div>
            <div className="njss172">
              Deploy nodes on Ankr Network and power Web3 development.
            </div>
            <div className="njss174">
              <a className="njss175" href="#">
                Use Ankr Servers
              </a>
              <a className="njss175 njss176" href="#">
                Use Your Hardware
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
