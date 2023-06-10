import React from "react";
import "./HowItWorks.css";
const HowItWorks = () => {
  return (
    <section className="MuiPaper-root njss177 MuiPaper-elevation0">
      <div className="MuiContainer-root MuiContainer-maxWidthLg">
        <div className="njss178">
          <div className="njss179">How it works</div>
          <div className="njss184">
            <img
              className="njss183"
              src="https://www.ankr.com/_next/static/images/image-3ae781608b2cc9020593633309eecc58.png"
              alt=""
            />
          </div>
          <div>
            <div className="njss181">
              <div className="njss180">
                Developers &amp; dApps make RPC requests
              </div>
              <div className="njss182">
                Developers and projects pay to access the data on Ankr Network
                nodes via remote procedure calls.
              </div>
            </div>
            <div className="njss181">
              <div className="njss180">
                Requests are routed through the RPC aggregator
              </div>
              <div className="njss182">
                Blockchain request traffic is aggregated and distributed to the
                best-suited nodes to serve it using an intelligent load
                balancer.
              </div>
            </div>
            <div className="njss181">
              <div className="njss180">
                Node Providers serve requests &amp; earn ANKR
              </div>
              <div className="njss182">
                Node providers operate nodes, serve traffic from the aggregator,
                earn ANKR token rewards, and contribute to Ankr DAO.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
