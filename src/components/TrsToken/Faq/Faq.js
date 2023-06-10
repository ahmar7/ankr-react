import React, { useState } from "react";
import "./Faq.css";
import { faqs } from "./FaqData/Data";
import AccordionItem from "./FaqCode/faqCode";
const Faq = () => {
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  const [clicked, setClicked] = useState("0");
  return (
    <section className="MuiPaper-root tjss438 MuiPaper-elevation0">
      <div className="MuiContainer-root MuiContainer-maxWidthLg">
        <div className="tjss440">FAQ</div>
        <div className="tjss439">
          <ul className="accordion">
            {faqs.map((faq, index) => (
              <AccordionItem
                onToggle={() => handleToggle(index)}
                active={clicked === index}
                key={index}
                faq={faq}
              />
            ))}
          </ul>
          <div className="tjss445">
            <div className="tjss446">
              Have more questions? <br /> {/* */}Let's hear them!{/* */}{" "}
            </div>
            <a
              className="tjss447"
              target="_blank"
              rel="noreferrer"
              href="https://discord.gg/ankrofficial"
            >
              <svg
                width={24}
                height={20}
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.33 2.228A19.547 19.547 0 0 0 15.38.672c-.213.385-.463.904-.634 1.317a18.18 18.18 0 0 0-5.488 0A14.077 14.077 0 0 0 8.615.672c-1.738.3-3.401.83-4.955 1.56C.527 6.967-.323 11.585.102 16.137a19.798 19.798 0 0 0 6.073 3.111c.488-.673.925-1.388 1.3-2.142a12.79 12.79 0 0 1-2.048-.997c.172-.127.34-.26.502-.397 3.95 1.847 8.24 1.847 12.142 0 .164.137.332.27.502.398-.65.39-1.337.726-2.052.998.376.752.81 1.47 1.3 2.142a19.755 19.755 0 0 0 6.077-3.113c.498-5.277-.851-9.853-3.568-13.91zM8.013 13.337c-1.185 0-2.157-1.107-2.157-2.454 0-1.348.951-2.457 2.157-2.457s2.179 1.107 2.158 2.457c.002 1.347-.952 2.454-2.158 2.454zm7.974 0c-1.186 0-2.158-1.107-2.158-2.454 0-1.348.951-2.457 2.158-2.457 1.206 0 2.178 1.107 2.157 2.457 0 1.347-.951 2.454-2.157 2.454z"
                  fill="#5865F2"
                />
              </svg>
              Contact Support on Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
