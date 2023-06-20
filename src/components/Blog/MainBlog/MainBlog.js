import React from 'react';
import './MainBlog.css' 
import { Link } from 'react-router-dom';
const MainBlog = () => {
    return (
      <section className="thMuiPaper-root-173 thjss264 thMuiPaper-elevation0-176">
        <div className="thMuiContainer-root-226 thMuiContainer-maxWidthLg-232">
          <div className="thMuiBox-root-269 thjss270 thjss265">
            <div className="thMuiBox-root-269 thjss271 thjss266">
              <div className="thMuiBox-root-269 thjss272 thjss267 thjss268" />
            </div>
            <section className="thMuiPaper-root-173 thjss273 thMuiPaper-elevation0-176">
              <Link
                className="thMuiButtonBase-root-310 thMuiButton-root-283 thMuiButton-text-285 thjss274 thMuiButton-disableElevation-294"
                tabIndex={0}
                aria-disabled="false"
                role="link"
                to="/blog/ankr-s-enterprise-rpc-and-app-chain-solutions-now-available-on-microsoft-azure-marketplace/"
              >
                <span className="thMuiButton-label-284">
                  <div className="thMuiBox-root-269 thjss311 thjss275">
                    <div className="thMuiBox-root-269 thjss312 thjss276">
                      <img
                        className="thjss277"
                        src="https://s3-frontend-strapi.s3.us-west-1.amazonaws.com/Ankr_x_Microsoft_blog_a3fedea096.png"
                        alt="Ankr’s Enterprise RPC and AppChain Solutions Now Available On Microsoft Azure Marketplace"
                      />
                    </div>

                    <div className="thMuiBox-root-269 thjss313 thjss278">
                      <p className="thMuiTypography-root-234 thjss279 thMuiTypography-body1-236">
                        AppChains, Development, Web3, Announcements
                      </p>
                      <h2 className="thMuiTypography-root-234 thjss280 thMuiTypography-h2-240">
                        Ankr’s Enterprise RPC and AppChain Solutions Now
                        Available On Microsoft Azure Marketplace
                      </h2>

                      <div className="thMuiBox-root-269 thjss314 thjss281">
                        <p>
                          <img
                            src="https://s3-frontend-strapi.s3.us-west-1.amazonaws.com/Ankr_x_Microsoft_blog_a3fedea096.png"
                            alt="Ankr x Microsoft blog.png"
                          />
                        </p>

                        <p>
                          In February of this year, Ankr and Microsoft{" "}
                          <a
                            href="https://www.ankr.com/blog/ankr-and-microsoft-partner-to-offer-enterprise-node-services/?search=microsoft&page=1"
                            target="_blank"
                          >
                            announced
                          </a>{" "}
                          our partnership to offer Enterprise RPC services on
                          Microsoft’s Azure Marketplace. After integration and
                          testing, we’ve now launched the service that provides
                          a readily accessible gateway to blockchain
                          infrastructure for Azure’s millions of monthly
                          customers. While some companies...
                        </p>
                      </div>
                      <section className="thMuiPaper-root-173 thjss315 thMuiPaper-elevation0-176">
                        <div className="thMuiBox-root-269 thjss321 thjss282 thjss316">
                          <img
                            className="thjss317"
                            src="https://s3-frontend-strapi.s3.us-west-1.amazonaws.com/Ankr_Blue_Symbol_White_BG_1x_71e7d5b87e.png"
                            alt="Ankr Team "
                          />
                          <p className="thMuiTypography-root-234 thjss318 thMuiTypography-body1-236">
                            Ankr Team{" "}
                          </p>
                          <p className="thMuiTypography-root-234 thjss318 thjss320 thjss319 thMuiTypography-body1-236">
                            June 8, 2023
                          </p>
                        </div>
                      </section>
                    </div>
                  </div>
                </span>
              </Link>
            </section>
          </div>
        </div>
      </section>
    );
}

export default MainBlog;
