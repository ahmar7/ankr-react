import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <section className="aMuiPaper-root-174 ajss164 aMuiPaper-elevation0-177">
      <div className="aMuiBox-root-258 ajss259 ajss165">
        <h2 className="aMuiTypography-root-228 ajss166 aMuiTypography-h2-234">
          <span>
            <span>Paving the way to the open</span>{" "}
            <span>internet of the future.</span>
          </span>
        </h2>
        <h4 className="aMuiTypography-root-228 ajss167 aMuiTypography-h4-236">
          <span>
            <span>Web3 is shaking things up. Ankr has</span>{" "}
            <span>a big role to play.</span>
          </span>
        </h4>
        <a
          className="aMuiButtonBase-root-287 aMuiButton-root-260 aMuiButton-contained-268 ajss169 aMuiButton-containedPrimary-269 aMuiButton-disableElevation-271"
          tabIndex={0}
          aria-disabled="false"
          href="https://boards.greenhouse.io/ankrnetwork"
          role="link"
          target="_blank"
          rel="noreferrer"
        >
          <span className="aMuiButton-label-261">View current openings</span>
        </a>
        <img
          className="ajss168"
          src="https://www.ankr.com/_next/static/images/arrow-mobile-575056796ea8f072c0059ca3aa5a077e.png"
          alt="arrow"
        />
      </div>
      <div className="aMuiContainer-root-288 ajss171 aMuiContainer-maxWidthLg-294">
        <div className="aMuiGrid-root-296 ajss172 aMuiGrid-container-297 aMuiGrid-spacing-xs-2-320">
          <div className="aMuiGrid-root-296 ajss173">
            <img
              src="https://www.ankr.com/_next/static/images/cointelegraph-a4da559a3a50fe1578d56e2a2ac6d337.svg"
              alt="CoinTelegraph"
            />
          </div>
          <div className="aMuiGrid-root-296 ajss173">
            <img
              src="https://www.ankr.com/_next/static/images/forbes-66066332d4d6ae358271419c749a264f.svg"
              alt="Forbes"
            />
          </div>
          <div className="aMuiGrid-root-296 ajss173">
            <img
              src="https://www.ankr.com/_next/static/images/binance-0e2209079e341aebc2342a6c68a1fa64.svg"
              alt="Binance"
            />
          </div>
          <div className="aMuiGrid-root-296 ajss173">
            <img
              src="https://www.ankr.com/_next/static/images/business-insider-446d2a4c38c09f46244a0716ab282de9.svg"
              alt="Business Insider"
            />
          </div>
          <div className="aMuiGrid-root-296 ajss173">
            <img
              src="https://www.ankr.com/_next/static/images/coinnewsspan-425f88ffcd8ff226b4de9c9f422782d6.svg"
              alt="CoinNewsSpan"
            />
          </div>
          <div className="aMuiGrid-root-296 ajss173">
            <img
              src="https://www.ankr.com/_next/static/images/nasdad-59ee5246130ab18b641e4b83fcb21914.svg"
              alt="Nasdad"
            />
          </div>
          <div className="aMuiGrid-root-296 ajss173">
            <img
              src="https://www.ankr.com/_next/static/images/coinmarketcap-6fd1a1eb09e72e468a56815e397b8fe5.svg"
              alt="CoinMarketcap"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
