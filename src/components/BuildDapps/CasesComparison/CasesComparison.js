import React from 'react';

const CasesComparison = () => {
    return (
      <section className="cases-comparison">
        <div className="wrapper">
          <div className="main-slider cases-page cases-page-slider">
            <div className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden swiper-pagination-disabled">
              <div
                className="swiper-wrapper"
                id="swiper-wrapper-fbb1df212441a2f1"
                aria-live="polite"
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
              >
                <div
                  className="swiper-slide swiper-slide-active"
                  role="group"
                  aria-label="1 / 4"
                  style={{ marginRight: "20px" }}
                >
                  <div className="cases-comparison__item gradient-border velas">
                    <img
                      data-src="https://velas.com/assets/img/cases/light/comp-1@2x.webp"
                      data-theme-src="https://velas.com/assets/img/cases/dark/comp-1.webp"
                      data-rjs={2}
                      alt="logo"
                      className="cases-comparison__item-logo lozad"
                      width={189}
                      height={100}
                      data-rjs-processed="true"
                      src="https://velas.com/assets/img/cases/light/comp-1@2x.webp"
                      data-loaded="true"
                    />
                    <p className="cases-comparison__item-text">
                      Transaction Throughput:
                    </p>
                    <p className="cases-comparison__item-value">
                      Up to 75 000 TPS
                    </p>
                    <span className="cases-comparison__item-delimiter" />
                    <p className="cases-comparison__item-text">
                      Transaction Fee:
                    </p>
                    <p className="cases-comparison__item-value">$0.00001</p>
                    <span className="cases-comparison__item-delimiter" />
                    <p className="cases-comparison__item-text">
                      Transaction Finality:
                    </p>
                    <p className="cases-comparison__item-value">1.2 sec</p>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-next"
                  role="group"
                  aria-label="2 / 4"
                  style={{ marginRight: "20px" }}
                >
                  <div className="cases-comparison__item">
                    <img
                      data-src="https://velas.com/assets/img/cases/light/comp-2@2x.webp"
                      data-theme-src="https://velas.com/assets/img/cases/dark/comp-2.webp"
                      data-rjs={2}
                      alt="logo"
                      className="cases-comparison__item-logo lozad"
                      width={189}
                      height={100}
                      data-rjs-processed="true"
                      src="https://velas.com/assets/img/cases/light/comp-2@2x.webp"
                      data-loaded="true"
                    />
                    <p className="cases-comparison__item-text">
                      Transaction Throughput:
                    </p>
                    <p className="cases-comparison__item-value">
                      ~1000-5000 TPS
                    </p>
                    <span className="cases-comparison__item-delimiter" />
                    <p className="cases-comparison__item-text">
                      Transaction Fee:
                    </p>
                    <p className="cases-comparison__item-value" />
                    <p className="cases-comparison__item-value">~$6</p>
                    <span className="cases-comparison__item-delimiter" />
                    <p className="cases-comparison__item-text">
                      Transaction Finality:
                    </p>
                    <p className="cases-comparison__item-value">
                      6 mins (32 blocks)
                    </p>
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-label="3 / 4"
                  style={{ marginRight: "20px" }}
                >
                  <div className="cases-comparison__item">
                    <img
                      data-src="https://velas.com/assets/img/cases/light/comp-3@2x.webp"
                      data-theme-src="https://velas.com/assets/img/cases/dark/comp-3.webp"
                      data-rjs={2}
                      alt="logo"
                      className="cases-comparison__item-logo lozad"
                      width={189}
                      height={100}
                      data-rjs-processed="true"
                      src="https://velas.com/assets/img/cases/light/comp-3@2x.webp"
                      data-loaded="true"
                    />
                    <p className="cases-comparison__item-text">
                      Transaction Throughput:
                    </p>
                    <p className="cases-comparison__item-value">~160 TPS</p>
                    <span className="cases-comparison__item-delimiter" />
                    <p className="cases-comparison__item-text">
                      Transaction Fee:
                    </p>
                    <p className="cases-comparison__item-value">$0.15</p>
                    <span className="cases-comparison__item-delimiter" />
                    <p className="cases-comparison__item-text">
                      Transaction Finality:
                    </p>
                    <p className="cases-comparison__item-value">75 sec</p>
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-label="4 / 4"
                  style={{ marginRight: "20px" }}
                >
                  <div className="cases-comparison__item">
                    <img
                      data-src="https://velas.com/assets/img/cases/light/comp-4@2x.webp"
                      data-theme-src="https://velas.com/assets/img/cases/dark/comp-4.webp"
                      data-rjs={2}
                      alt="logo"
                      className="cases-comparison__item-logo lozad"
                      width={189}
                      height={100}
                      data-rjs-processed="true"
                      src="https://velas.com/assets/img/cases/light/comp-4@2x.webp"
                      data-loaded="true"
                    />
                    <p className="cases-comparison__item-text">
                      Transaction Throughput:
                    </p>
                    <p className="cases-comparison__item-value">
                      Up to 7 000 TPS
                    </p>
                    <span className="cases-comparison__item-delimiter" />
                    <p className="cases-comparison__item-text">
                      Transaction Fee:
                    </p>
                    <p className="cases-comparison__item-value">~$0.000169</p>
                    <span className="cases-comparison__item-delimiter" />
                    <p className="cases-comparison__item-text">
                      Transaction Finality:
                    </p>
                    <p className="cases-comparison__item-value">
                      30 mins to 1.5+ hours
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination" />
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              />
            </div>
          </div>
        </div>
      </section>
    );
}

export default CasesComparison;
