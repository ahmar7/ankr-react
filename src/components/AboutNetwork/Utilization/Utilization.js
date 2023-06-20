import React from 'react';
import './Utilization.css'
const Utilization = () => {
    return (
      <section
        className="pMuiPaper-root pjss196 pMuiPaper-elevation0"
        id="utilization"
      >
        <div className="pMuiContainer-root pMuiContainer-maxWidthLg">
          <div className="pjss198">Utilization</div>
          <div className="pjss197">Who Benefits From Ankr Network?</div>
          <div className="pjss200">
            <div className="pjss203">
              <div className="pjss201">Industries</div>
              <div className="pjss202">
                Access global multi-chain infrastructure with more affordable
                rates and lower latency — making it easier than ever to build
                your dApps with our advanced suite of tools.
              </div>
            </div>
            <div className="pjss206">How will you use Ankr Protocol?</div>
            <div className="pjss204">
              <div className="pjss205">
                DeFi <br /> {/* */}Protocols{/* */}{" "}
                <img
                  src="https://www.ankr.com/_next/static/images/item1-28583fe46cb96a5b7e113c14e7f1e74e.png"
                  alt=""
                />
              </div>
              <div className="pjss205">
                Blockchain
                <br /> {/* */}Games{/* */}{" "}
                <img
                  src="https://www.ankr.com/_next/static/images/item2-4632cfb17571d4ad11cff0149e9e7a2a.png"
                  alt=""
                />
              </div>
              <div className="pjss205">
                NFT Marketplaces
                <br /> {/* */}and Projects{/* */}{" "}
                <img
                  src="https://www.ankr.com/_next/static/images/item3-23f1d9a08d50cdf7f7ed6f95358f7065.png"
                  alt=""
                />
              </div>
              <div className="pjss205">
                Market Research
                <br /> {/* */}and Analytics{/* */}{" "}
                <img
                  src="https://www.ankr.com/_next/static/images/item4-3426b06007310cf3ed5c7f81829b1755.png"
                  alt=""
                />
              </div>
              <div className="pjss205">
                Layer-1 <br /> {/* */}Blockchains{/* */}{" "}
                <img
                  src="https://www.ankr.com/_next/static/images/item5-a022dc3b80fb8e9a0e4b8d1fb617ed61.png"
                  alt=""
                />
              </div>
              <div className="pjss205">
                Data <br /> {/* */}Indexers{/* */}{" "}
                <img
                  src="https://www.ankr.com/_next/static/images/item6-8123fbb0db7899ea515f7fa762454cf6.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="pjss199">
            <div className="pjss207">
              <button className="pjss211">Coming Soon</button>
              <div className="pjss208">Node Providers</div>
              <div className="pjss209">
                Provide your full nodes, power Web3 development, and earn ANKR
                for every request served. Anyone who meets our technical
                criteria can run a node on Ankr Network.
              </div>
              <img
                className="pjss210"
                src="https://www.ankr.com/_next/static/images/nodes-161e5167cfeafdc297a66f9f97d059e5.png"
                alt="nodes"
              />
            </div>
            <div className="pjss212">
              <div className="pjss213">Stakers</div>
              <div className="pjss214">
                Stake your ANKR tokens with full nodes operated by independent
                providers. Then mint liquid staking tokens that represent your
                staked assets so you can retain liquidity while staking.
              </div>
              <a
                className="pMuiButtonBase-root pMuiButton-root pMuiButton-contained pjss215 pMuiButton-containedPrimary pMuiButton-disableElevation"
                tabIndex={0}
                aria-disabled="false"
                href="https://www.ankr.com/staking/ankr-stake/stake/"
                role="link"
                target="_blank"
                rel="noreferrer"
              >
                <span className="pMuiButton-label">Stake Now</span>
              </a>
              <img
                className="pjss216"
                src="https://www.ankr.com/_next/static/images/stakers-ac67cf551a9eb16cf1864cd4f4638fac.png"
                alt="stakers.png"
              />
            </div>
          </div>
        </div>
      </section>
    );
}

export default Utilization;
