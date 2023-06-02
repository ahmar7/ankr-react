import React from 'react';
import { Explorer, Rpc, Faucet, Exchange } from "../../../utils/allImg";
import './BlockChain.css'
const BlockChain = () => {
    return (
      <section className="MuiPaper-root-178 jss339 MuiPaper-elevation0-181">
        <div className="MuiContainer-root-271 jss340 MuiContainer-maxWidthLg-277">
          <div className="jss341 jss279 jss280">
            <h2 className="MuiTypography-root-281 jss343 MuiTypography-h1-286">
              Ankr’s
              <br />
              <span className="jss342">Blockchain in a toolbox.</span>
            </h2>
            <p className="MuiTypography-root-281 jss344 MuiTypography-body1-283">
              Everything you need to build, go to market, scale, and win massive
              adoption. Ankr provides development teams with everything they
              need to satisfy the requirements of exchanges and industry
              standards.
            </p>
          </div>
          <div className="jss345">
            <div className="jss346 jss347">
              <div className="jss349 jss351 jss352 jss279">
                <h4 className="MuiTypography-root-281 jss353 jss354 MuiTypography-h2-287">
                  <span>
                    Validator binary + <br />
                    Config file
                  </span>
                </h4>
                <p className="MuiTypography-root-281 jss355 MuiTypography-body1-283">
                  Get validator nodes up and running for your AppChain easily
                  with all of the necessary information to launch validators in
                  accordance with your chosen parent-chain.
                </p>
              </div>
            </div>
            <div className="jss346 jss348">
              <div className="jss349 jss351 jss279">
                <div className="jss362">
                  <div className="jss363">
                    <h4 className="MuiTypography-root-281 jss353 jss354 MuiTypography-h2-287">
                      Load-balanced RPC endpoint
                    </h4>
                    <p className="MuiTypography-root-281 jss355 MuiTypography-body1-283">
                      Ankr provides load-balanced RPC endpoints that empower
                      AppChain developers to have as many full nodes as they
                      would like in the regions closest to their users.
                    </p>
                  </div>
                  <div className="jss364">
                    <img
                      className="jss365"
                      src={Rpc}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="jss346">
              <div className="jss349 jss279 relative-pos">
                <div className="jss358">
                  <div className="jss359">
                    <h4 className="MuiTypography-root-281 jss353 MuiTypography-h2-287">
                      White-labeled block explorer
                    </h4>
                    <p className="MuiTypography-root-281 jss355 MuiTypography-body1-283">
                      Transparently display transaction and address data for
                      your users without building anything on your own by
                      integrating your chain with Ankr’s block explorer.
                    </p>
                  </div>
                  <div className="jss360">
                    <img
                      className="jss361"
                      src={Explorer}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="jss346 jss348">
              <div className="jss349 jss351 jss279">
                <div className="jss362">
                  <div className="jss363">
                    <h4 className="MuiTypography-root-281 jss353 jss354 MuiTypography-h2-287">
                      Faucet for testnet tokens
                    </h4>
                    <p className="MuiTypography-root-281 jss355 MuiTypography-body1-283">
                      Use Ankr’s codebase to create customizable testnet faucet
                      solutions to provide your app or game with the resources
                      needed for testing before going live on the mainnet.
                    </p>
                  </div>
                  <div className="jss364">
                    <img
                      className="jss365"
                      src={Faucet}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="jss346 jss347">
              <div className="jss349 jss352 jss351 jss279">
                <h4 className="MuiTypography-root-281 jss353 jss354 MuiTypography-h2-287">
                  Direct staking support
                </h4>
                <p className="MuiTypography-root-281 jss355 MuiTypography-body1-283">
                  Grow your application and increase your staking TVL with
                  access to Ankr Staking, an integration that lets your token
                  holders stake to validators with an easy-to-use interface.
                </p>
              </div>
            </div>
            <div className="jss346">
              <div className="jss349 jss350 jss279">
                <div className="jss366">
                  <div className="jss370">
                    <img
                      className="jss371"
                      src={Exchange}
                      alt=""
                    />
                  </div>
                  <div className="jss367">
                    <h4 className="MuiTypography-root-281 jss353 MuiTypography-h2-287">
                      <span>
                        Ankr’s <em>Exchange Readiness</em> program
                      </span>
                    </h4>
                    <p className="MuiTypography-root-281 jss355 jss368 MuiTypography-body1-283">
                      Get your token ready for listing on major exchanges with
                      Ankr to guide you through the technical due diligence
                      process and assist with introductory calls.
                    </p>
                    <a
                      className="MuiButtonBase-root-263 MuiButton-root-236 MuiButton-contained-244 jss356 jss369 MuiButton-containedPrimary-245 MuiButton-disableElevation-247"
                      tabIndex={0}
                      aria-disabled="false"
                      role="link"
                      href="/app-chains-configurator/"
                    >
                      <span className="MuiButton-label-237">Build now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default BlockChain;
