import React from 'react';
import './Badges.css'
import {
  badge1,
  badge2,
  badge3,
  badge4,
  badge5,
  badge6,
  badge7,
  badge8,
} from "../../../utils/allImg";

const Badges = () => {
    return (
      <section className="MuiPaper-root-691 jss682 MuiPaper-elevation0-694">
        <div className="MuiContainer-root-744 jss683 MuiContainer-maxWidthLg-750">
          <div className="MuiGrid-root-752 jss684 MuiGrid-container-753 MuiGrid-spacing-xs-3-777">
            <div className="MuiGrid-root-752 MuiGrid-item-754 MuiGrid-grid-xs-12-798 MuiGrid-grid-sm-12-812">
              <h2 className="MuiTypography-root-855 jss685 jss689 jss690 MuiTypography-h2-861">
                Ankr Badges
              </h2>
              <p className="MuiTypography-root-855 jss686 jss689 jss690 MuiTypography-body1-857">
                Projects using Ankr should to display this badge on their pages
                and applications.{/* */}
                <br />
                {/* */}Here you can download badges in .html format.
              </p>
            </div>
          </div>
          <div className="jss687">
            <ul className="jss688">
              <li className="jss885 jss890 jss892 jss891">
                <img
                  alt="Ankr decentralized infrastructure rectangular"
                  className="jss889"
                  src={badge1}
                />
                <div className="jss887">
                  <span className="jss886">White Big Badge #1</span>
                  <div>
                    <span className="jss888">Copy as HTML</span>
                  </div>
                </div>
              </li>
              <li className="jss885 jss890 jss893 jss891">
                <img
                  alt="Ankr decentralized infrastructure rectangular"
                  className="jss889"
                  src={badge2}
                />
                <div className="jss887">
                  <span className="jss886">White Big Badge #2</span>
                  <div>
                    <span className="jss888">Copy as HTML</span>
                  </div>
                </div>
              </li>
              <li className="jss885 jss890 jss894 jss891">
                <img
                  alt="Ankr decentralized infrastructure black white"
                  className="jss889"
                  src={badge3}
                />
                <div className="jss887">
                  <span className="jss886">Black Big Badge #1</span>
                  <div>
                    <span className="jss888">Copy as HTML</span>
                  </div>
                </div>
              </li>
              <li className="jss885 jss890 jss895 jss891">
                <img
                  alt="Ankr decentralized infrastructure black blue logo"
                  className="jss889"
                  src={badge4}
                />
                <div className="jss887">
                  <span className="jss886">Black Big Badge #2</span>
                  <div>
                    <span className="jss888">Copy as HTML</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="jss687">
            <ul className="jss688">
              <li className="jss885 jss890 jss896 jss891">
                <img
                  alt="Ankr decentralized infrastructure long"
                  className="jss889"
                  src={badge5}
                />
                <div className="jss887">
                  <span className="jss886">White Small Badge #1</span>
                  <div>
                    <span className="jss888">Copy as HTML</span>
                  </div>
                </div>
              </li>
              <li className="jss885 jss890 jss897 jss891">
                <img
                  alt="Ankr decentralized infrastructure "
                  className="jss889"
                  src={badge6}
                />
                <div className="jss887">
                  <span className="jss886">White Small Badge #2</span>
                  <div>
                    <span className="jss888">Copy as HTML</span>
                  </div>
                </div>
              </li>
              <li className="jss885 jss890 jss898 jss891">
                <img
                  alt="Ankr decentralized infrastructure black white"
                  className="jss889"
                  src={badge7}
                />
                <div className="jss887">
                  <span className="jss886">Black Small Badge #1</span>
                  <div>
                    <span className="jss888">Copy as HTML</span>
                  </div>
                </div>
              </li>
              <li className="jss885 jss890 jss899 jss891">
                <img
                  alt="Ankr decentralized infrastructure black white"
                  className="jss889"
                  src={badge8}
                />
                <div className="jss887">
                  <span className="jss886">Black Small Badge #2</span>
                  <div>
                    <span className="jss888">Copy as HTML</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
}

export default Badges;
