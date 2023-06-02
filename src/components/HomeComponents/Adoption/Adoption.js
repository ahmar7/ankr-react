import React from "react";
import './Adoption.css'
import { BinanceLogo, Avalanche, Polygon } from "../../../utils/allImg";
const Adoption = () => {
  return (
    <section className="MuiPaper-root-178 jss528 MuiPaper-elevation0-181">
      <div className="MuiContainer-root-271 MuiContainer-maxWidthLg-277">
        <h1 className="MuiTypography-root-281 jss529 MuiTypography-h1-286">
          Enhancing Web3 mass adoption.
        </h1>
        <div className="MuiGrid-root-381 jss530 MuiGrid-container-382">
          <div className="MuiGrid-root-381 jss531 jss536 MuiGrid-item-383 MuiGrid-grid-xs-12-427 MuiGrid-grid-md-4-447">
            <div className="MuiBox-root-234 jss540">
              <h3 className="MuiTypography-root-281 jss532 MuiTypography-h3-288">
                L1 AppChains
              </h3>
              <div className="MuiBox-root-234 jss541 jss533">like:</div>
            </div>
            <div className="MuiBox-root-234 jss542 jss534">
              <div className="MuiBox-root-234 jss543 jss535">
                <img src={BinanceLogo} alt="Binance Application Chains" />
                Binance Application Chains
              </div>
              <div className="MuiBox-root-234 jss544 jss535">
                <img src={Avalanche} alt="Avalanche Subnets" />
                Avalanche Subnets
              </div>
              <div className="MuiBox-root-234 jss545 jss535">
                <img src={Polygon} alt="Polygon Edge" />
                Polygon Edge
              </div>
            </div>
            <div className="MuiBox-root-234 jss546 jss539">
              <img
                src="https://www.ankr.com/_next/static/images/plus-ff37df5f63597f8dd2a1f26b880f3ce2.svg"
                alt="img"
              />
            </div>
          </div>
          <div className="MuiGrid-root-381 jss531 jss537 MuiGrid-item-383 MuiGrid-grid-xs-12-427 MuiGrid-grid-md-4-447">
            <div className="MuiBox-root-234 jss547">
              <h3 className="MuiTypography-root-281 jss532 MuiTypography-h3-288">
                Ankr AppChains
              </h3>
            </div>
            <div className="MuiBox-root-234 jss548 jss534">
              <div className="MuiBox-root-234 jss549 jss535">RPC endpoints</div>
              <div className="MuiBox-root-234 jss550 jss535">
                Block explorer
              </div>
              <div className="MuiBox-root-234 jss551 jss535">
                Direct staking UI
              </div>
              <div className="MuiBox-root-234 jss552 jss535">
                Testnet faucet
              </div>
              <div className="MuiBox-root-234 jss553 jss535">
                Exchange-Readiness Program
              </div>
              <div className="MuiBox-root-234 jss554 jss535">
                Validator setup
              </div>
            </div>
            <div className="MuiBox-root-234 jss555 jss539">
              <img
                src="https://www.ankr.com/_next/static/images/euqal-c716087d38b59f2911c60ebb1ce66f6f.svg"
                alt="img"
              />
            </div>
          </div>
          <div className="MuiGrid-root-381 jss531 jss538 MuiGrid-item-383 MuiGrid-grid-xs-12-427 MuiGrid-grid-md-4-447">
            <div className="MuiBox-root-234 jss556">
              <h3 className="MuiTypography-root-281 jss532 MuiTypography-h3-288">
                Web3 Mass Adoption
              </h3>
            </div>
            <div className="MuiBox-root-234 jss557 jss534">
              <div className="MuiBox-root-234 jss558 jss535">
                Increased Web3 participation
              </div>
              <div className="MuiBox-root-234 jss559 jss535">
                Enhanced developer capabilities
              </div>
              <div className="MuiBox-root-234 jss560 jss535">
                Web2 → Web3 orgs
              </div>
              <div className="MuiBox-root-234 jss561 jss535">
                Improved Web3 game quality
              </div>
              <div className="MuiBox-root-234 jss562 jss535">
                Decrease in Web3 investing speculation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Adoption;
