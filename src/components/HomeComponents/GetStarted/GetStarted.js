import React from 'react';
import "./GetStarted.css";
const GetStarted = () => {
    return (
      <section className="MuiPaper-root-178 jss563 MuiPaper-elevation0-181">
        <div className="MuiContainer-root-271 MuiContainer-maxWidthLg-277">
          <h1 className="MuiTypography-root-281 jss564 MuiTypography-h1-286">
            Get started with
            <br />
            <span className="jss565">Ankr AppChain.</span>
          </h1>
          <div className="jss566">
            <a
              className="MuiButtonBase-root-263 MuiButton-root-236 MuiButton-contained-244 jss567 MuiButton-containedPrimary-245 MuiButton-disableElevation-247"
              tabIndex={0}
              aria-disabled="false"
              role="link"
              href="#"
            >
              <span className="MuiButton-label-237">Build now</span>
            </a>
            <a
              className="MuiButtonBase-root-263 MuiButton-root-236 MuiButton-contained-244 jss567 MuiButton-containedPrimary-245 MuiButton-disableElevation-247"
              tabIndex={0}
              aria-disabled="false"
              href="#"
              role="link"
              target="_blank"
              rel="noreferrer"
            >
              <span className="MuiButton-label-237">Talk to Sales</span>
            </a>
          </div>
        </div>
      </section>
    );
}

export default GetStarted;
