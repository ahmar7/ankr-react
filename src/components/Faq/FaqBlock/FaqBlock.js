import React, { useState } from "react";

import { GeneralFaq, CommunityFaq, StakingFaq } from "./FaqData/FaqData";
import AccordionItem from "./FaqUi/faqUi";

const FaqBlock = () => {
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  const [clicked, setClicked] = useState("0");
  return (
    <section className="faq-block MuiContainer-root-81 MuiContainer-maxWidthLg-87">
      <div className="wrapper">
        <img
          src="https://velas.com/assets/img/faq/light/hero.webp"
          data-theme-src="https://velas.com/assets/img/faq/light/hero.webp"
          alt="hero"
          className="main-decor faq-block__img"
        />
        <div className="faq-block__column">
          <h1 className="main__title">Velas FAQ</h1>
          <div className="exchanges-exchanges__list-wrapper">
            {" "}
            <h2 className="main__title medium">General</h2>
            <div className="exchanges-exchanges__list-block">
              {GeneralFaq.map((faq, index) => (
                <AccordionItem
                  onToggle={() => handleToggle(index)}
                  active={clicked === index}
                  key={index}
                  faq={faq}
                />
              ))}
            </div>
          </div>
          <div className="exchanges-exchanges__list-wrapper">
            {" "}
            <h2 className="main__title medium">Staking</h2>
            <div className="exchanges-exchanges__list-block">
              {StakingFaq.map((faq, index) => (
                <AccordionItem
                  onToggle={() => handleToggle(index)}
                  active={clicked === index}
                  key={index}
                  faq={faq}
                />
              ))}
            </div>
          </div>
          <div className="exchanges-exchanges__list-wrapper">
            {" "}
            <h2 className="main__title medium">Community</h2>
            <div className="exchanges-exchanges__list-block">
              {CommunityFaq.map((faq, index) => (
                <AccordionItem
                  onToggle={() => handleToggle(index)}
                  active={clicked === index}
                  key={index}
                  faq={faq}
                />
              ))}
            </div>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default FaqBlock;
