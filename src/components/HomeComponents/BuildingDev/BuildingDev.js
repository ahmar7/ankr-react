import React from 'react';
import { Rocket, Projects, Gaming } from "../../../utils/allImg";
const BuildingDev = () => {
    return (
      <section className="MuiPaper-root-178 jss372 MuiPaper-elevation0-181">
        <div className="MuiContainer-root-271 MuiContainer-maxWidthLg-277">
          <h1 className="MuiTypography-root-281 jss373 MuiTypography-h1-286">
            All developers can build on{/* */}
            <span className="jss374">AppChains.</span>
          </h1>
          <div className="MuiGrid-root-381 jss375 MuiGrid-container-382">
            <div className="MuiGrid-root-381 jss376 MuiGrid-item-383 MuiGrid-grid-xs-12-427 MuiGrid-grid-md-4-447">
              <h5 className="MuiTypography-root-281 jss377 MuiTypography-h5-290">
                Startups and new Web3 projects
              </h5>
              <div className="MuiBox-root-234 jss484 jss378">
                Receive Ankr’s invaluable experience as a launch partner.
              </div>
              <div className="jss379">
                <img
                  alt="Startups and new Web3 projects"
                  className="jss380"
                  src={Rocket}
                />
              </div>
            </div>
            <div className="MuiGrid-root-381 jss376 MuiGrid-item-383 MuiGrid-grid-xs-12-427 MuiGrid-grid-md-4-447">
              <h5 className="MuiTypography-root-281 jss377 MuiTypography-h5-290">
                Established Web3 projects
              </h5>
              <div className="MuiBox-root-234 jss485 jss378">
                Get off gas guzzling L1s and build a blockchain tailor made to
                your exact specs.
              </div>
              <div className="jss379">
                <img
                  alt="Established Web3 projects"
                  className="jss380"
                  src={Projects}
                />
              </div>
            </div>
            <div className="MuiGrid-root-381 jss376 MuiGrid-item-383 MuiGrid-grid-xs-12-427 MuiGrid-grid-md-4-447">
              <h5 className="MuiTypography-root-281 jss377 MuiTypography-h5-290">
                Web2 companies and gaming studios
              </h5>
              <div className="MuiBox-root-234 jss486 jss378">
                Begin your journey to Web3 the right way with expert resources
                and assistance.
              </div>
              <div className="jss379">
                <img
                  alt="Web2 companies and gaming studios"
                  className="jss380"
                  src={Gaming}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default BuildingDev;
