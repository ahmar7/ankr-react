import React from 'react';

const Banner = () => {
    return (
      <section className="MuiPaper-root-178 jss165 MuiPaper-elevation0-181">
        <div className="MuiBox-root-234 jss235 jss231">
          <a
            className="MuiButtonBase-root-263 MuiButton-root-236 MuiButton-text-238 jss232 jss233 MuiButton-textPrimary-239 MuiButton-disableElevation-247"
            tabIndex={0}
            aria-disabled="false"
            role="link"
            target="_self"
            href="/app-chains/"
          >
            <span className="MuiButton-label-237">Ankr AppChains</span>
          </a>
          <button
            className="MuiButtonBase-root-263 MuiButton-root-236 MuiButton-text-238 jss232 MuiButton-disableElevation-247"
            tabIndex={0}
            type="button"
          >
            <span className="MuiButton-label-237">
              Official Partners
              <svg
                className="jss268"
                width={10}
                height={6}
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.25"
                />
                {/* Code injected by live-server */}
              </svg>
            </span>
          </button>
          <a
            className="MuiButtonBase-root-263 MuiButton-root-236 MuiButton-text-238 jss232 MuiButton-textPrimary-239 MuiButton-disableElevation-247"
            tabIndex={0}
            aria-disabled="false"
            role="link"
            target="_self"
            href="/app-chains/configurator/"
          >
            <span className="MuiButton-label-237">AppChain Configurator</span>
          </a>
        </div>
        <div className="MuiContainer-root-271 jss166 MuiContainer-maxWidthLg-277">
          <div className="jss167 jss279 jss280">
            <h2 className="MuiTypography-root-281 jss168 MuiTypography-h2-287">
              <span className="jss170">Ankr AppChains.</span>
            </h2>
            <h1 className="MuiTypography-root-281 jss169 MuiTypography-h1-286">
              Plug and play tools to build your own blockchain.
            </h1>
            <p className="MuiTypography-root-281 jss171 MuiTypography-body1-283">
              Launch your own blockchain and list your token 10x faster with
              Ankr’s AppChains.
            </p>
            <div className="jss172">
              <a
                className="MuiButtonBase-root-263 MuiButton-root-236 MuiButton-contained-244 jss173 MuiButton-containedPrimary-245 MuiButton-disableElevation-247"
                tabIndex={0}
                aria-disabled="false"
                role="link"
                href="/app-chains-configurator/"
              >
                <span className="MuiButton-label-237">Build now</span>
              </a>
              <a
                className="MuiButtonBase-root-263 MuiButton-root-236 MuiButton-contained-244 jss173 MuiButton-containedSecondary-246 MuiButton-disableElevation-247"
                tabIndex={0}
                aria-disabled="false"
                href="https://chainscanner.xyz/"
                role="link"
                target="_blank"
                rel="noreferrer"
              >
                <span className="MuiButton-label-237">View All AppChains</span>
              </a>
            </div>
            <div className="jss174">
              <p className="MuiTypography-root-281 jss175 MuiTypography-body1-283">
                Build on
              </p>
              <img
                src="/_next/static/images/build-on-b8ad2a3ee596f0e43334e281a057241b.png"
                srcSet="
                      /_next/static/images/build-on-b8ad2a3ee596f0e43334e281a057241b.png    1x,
                      /_next/static/images/build-on@2x-12cdb906a3206f4773cd013737ef7dfb.png 2x,
                      /_next/static/images/build-on@3x-7518273d04865d6e23e35d34af0e278c.png 3x
                    "
                alt=""
              />
            </div>
          </div>
          <div className="jss176 jss279 jss280">
            <video
              muted
              loop
              className="jss177"
              autoPlay
              playsInline
              __idm_id__={974849}
            >
              <source
                src="/_next/static/videos/knife-with-cubes-animation-84e3c55440830e007d9a271e5aecacbb.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </section>
    );
}

export default Banner;
