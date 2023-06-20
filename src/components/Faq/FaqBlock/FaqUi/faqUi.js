import React from "react";
import '../Faq.css'
const AccordionItem = ({ faq, onToggle, active }) => {
  const { question, answer } = faq;
  return (
    <>
      <div
        className={
          active
            ? "exchanges-exchanges__list-item active"
            : "exchanges-exchanges__list-item"
        }
        onClick={onToggle}
      >
        <div className="exchanges-exchanges__list-item__header">
          <h3 className="main__title small blog">{question}</h3>
          <div className="exchanges-exchanges__list-item__svg">
            <span className="exchanges-exchanges__list-item__svg-line" />
            <span className="exchanges-exchanges__list-item__svg-line" />
          </div>
        </div>
        <div
          style={{ display: "block" }}
          className={
            active
              ? "terms__block exchanges-exchanges__list-item__content active-faq"
              : "terms__block exchanges-exchanges__list-item__content no-height"
          }
        >
          <p className="main__text">{answer}</p>
        </div>
      </div>
    </>
  );
};

export default AccordionItem;
