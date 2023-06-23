import React from "react";
const AccordionItem = ({ faq, onToggle, active }) => {
  const { question, answer } = faq;
  return (
    <div className="tjss441" onClick={onToggle}>
      <div className="tjss442">{question}</div>
      <div className="tjss444">
        {active ? (
          <svg
            width={16}
            height={2}
            viewBox="0 0 16 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 1H1"
              stroke="#356DF3"
              strokeWidth={2}
              strokeLinecap="square"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 12H5M12 19V5"
              stroke="#356DF3"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="round"
            ></path>
          </svg>
        )}
      </div>
      {active && <div className="tjss443">{answer}</div>}
    </div>
  );
};

export default AccordionItem;
