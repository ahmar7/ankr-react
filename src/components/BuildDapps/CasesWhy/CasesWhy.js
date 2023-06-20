import React from 'react';
import './CasesWhy.css'
const CasesWhy = () => {
    return (
      <section className="cases-why dapps">
        <div className="wrapper">
          <div className="cases-why__textBlock">
            <h2 className="main__title">Why Velas?</h2>
            <p className="main__text">
              Velas is the fastest EVM blockchain ever, handling 50 000+ TPS at
              the lowest fees. The team behind Velas has taken care of relevant
              environmental and ecological needs by integrating an innovative
              hybrid consensus of Delegated Proof-of- Stake (DPoS) with
              Proof-of-History (PoH).
            </p>
          </div>
          <div className="cases-why__column">
            <div className="cases-why__column-item">
              <p className="cases-why__column-item__value">$0.00001</p>
              <p className="main__text">Transaction Fee:</p>
            </div>
            <div className="cases-why__column-item">
              <p className="cases-why__column-item__value">1,2 second</p>
              <p className="main__text">Transaction Finality:</p>
            </div>
            <div className="cases-why__column-item">
              <p className="cases-why__column-item__value">50 000+</p>
              <p className="main__text">Transactions per second</p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default CasesWhy;
