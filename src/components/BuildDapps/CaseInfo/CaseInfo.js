import React from 'react';

const CaseInfo = () => {
    return (
      <section className="cases-info">
        <div className="wrapper">
          <div className="main-info__items">
            <a href="https://docs.velas.com/evm" className="main-info__item">
              <img
                data-src="https://velas.com/assets/img/main/light/info-1@2x.webp"
                data-theme-src="https://velas.com/assets/img/main/dark/info-1.webp"
                data-rjs={2}
                alt="info"
                className="main-info__itemImg lozad"
                width={370}
                height={370}
                data-rjs-processed="true"
                src="https://velas.com/assets/img/main/light/info-1@2x.webp"
                data-loaded="true"
              />
              <h2 className="main__title medium">Velas EVM</h2>
              <p className="main__text small">
                The fastest and most accessible blockchain to tailor smart
                contracts and build dApps
              </p>
              <p className="main-more__link">
                Learn more
                <svg
                  width={16}
                  height={16}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.644 12.144 10.794 5H5.5a.5.5 0 1 1 0-1H12a.5.5 0 0 1 .5.5V11a.5.5 0 0 1-1 0V5.706l-7.144 7.15a.507.507 0 0 1-.712-.712z"
                    fill="#414142"
                  />
                </svg>
              </p>
            </a>
            <a
              href="https://docs.velas.com/introduction"
              className="main-info__item"
            >
              <img
                data-src="https://velas.com/assets/img/main/light/info-2@2x.webp"
                data-theme-src="https://velas.com/assets/img/main/dark/info-2.webp"
                data-rjs={2}
                alt="info"
                className="main-info__itemImg lozad"
                width={370}
                height={370}
                data-rjs-processed="true"
                src="https://velas.com/assets/img/main/light/info-2@2x.webp"
                data-loaded="true"
              />
              <h2 className="main__title medium">Velas eBPF</h2>
              <p className="main__text small">
                Leveraging Solana codebase for the fastest blockchain
                performance ever.
              </p>
              <p className="main-more__link">
                Learn more
                <svg
                  width={16}
                  height={16}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.644 12.144 10.794 5H5.5a.5.5 0 1 1 0-1H12a.5.5 0 0 1 .5.5V11a.5.5 0 0 1-1 0V5.706l-7.144 7.15a.507.507 0 0 1-.712-.712z"
                    fill="#414142"
                  />
                </svg>
              </p>
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://medium.com/@velasblockchain/velas-is-the-future-of-eco-friendly-blockchains-with-zero-emissions-9d58864fc414"
              className="main-info__item"
            >
              <img
                data-src="https://velas.com/assets/img/main/light/info-3@2x.webp"
                data-theme-src="https://velas.com/assets/img/main/dark/info-3.webp"
                data-rjs={2}
                alt="info"
                className="main-info__itemImg lozad"
                width={370}
                height={370}
                data-rjs-processed="true"
                src="https://velas.com/assets/img/main/light/info-3@2x.webp"
                data-loaded="true"
              />
              <h2 className="main__title medium">Carbon Neutral</h2>
              <p className="main__text small">
                A carbon neutral blockchain based on an energy-efficient DPoS
                mechanism.
              </p>
              <p className="main-more__link">
                Learn more
                <svg
                  width={16}
                  height={16}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.644 12.144 10.794 5H5.5a.5.5 0 1 1 0-1H12a.5.5 0 0 1 .5.5V11a.5.5 0 0 1-1 0V5.706l-7.144 7.15a.507.507 0 0 1-.712-.712z"
                    fill="#414142"
                  />
                </svg>
              </p>
            </a>
          </div>{" "}
        </div>
      </section>
    );
}

export default CaseInfo;
