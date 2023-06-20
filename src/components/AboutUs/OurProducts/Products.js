import React from "react";
import "./Product.css";
const Products = () => {
  return (
    <section className="aMuiPaper-root-174 ajss399 aMuiPaper-elevation0-177">
      <div className="aMuiContainer-root-288 ajss400 aMuiContainer-maxWidthLg-294">
        <h2 className="aMuiTypography-root-228 ajss401 aMuiTypography-h2-234">
          <span>
            Web3 is a smarter internet — it incorporates new tech like
            blockchain systems that enable us to disrupt the intermediaries and
            gatekeepers that have dominated the web (and the world) so far. This
            gives us an opportunity to democratize services across the board,
            from finance to data storage.
          </span>
        </h2>
        <ul className="ajss402">
          <div className="ajss403">
            <h2 className="aMuiTypography-root-228 ajss404 aMuiTypography-h2-234">
              Our job: make Web3 accessible for everyone
            </h2>
            <p className="aMuiTypography-root-228 ajss405 aMuiTypography-body1-230">
              Every blockchain use case requires access to nodes. Ankr provides
              streamlined access to our global network of nodes running on 18
              different blockchains. This greatly simplifies the process of
              building, operating, and maintaining all the decentralized
              applications of the new web.
            </p>
            <div className="aMuiBox-root-258 ajss410 ajss406">
              <img
                className="ajss407"
                src="https://www.ankr.com/_next/static/images/our-job-90cbd30d3be44164d918797e52c8dcb9.png"
                alt="Our job: make Web3 accessible for everyone"
              />
            </div>
          </div>
          <div className="ajss403">
            <h2 className="aMuiTypography-root-228 ajss404 aMuiTypography-h2-234">
              Our products make it easy to build on Web3
            </h2>
            <p className="aMuiTypography-root-228 ajss405 aMuiTypography-body1-230">
              Ankr connects developers, dApps, wallets, exchanges, and all other
              use cases to blockchains
            </p>
            <div>
              <ul className="ajss408">
                <li className="ajss409">
                  RPCs and APIs connect developers and dApps to blockchains
                </li>
                <li className="ajss409">
                  Staking solutions make it easy for anyone to stake or
                  integrate staking with their platform
                </li>
                <li className="ajss409">
                  AppChains, Gaming, and SDKs provide solutions for any Web3
                  enterprise
                </li>
              </ul>
            </div>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default Products;
