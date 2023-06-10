import React, { useState } from "react";
import "./Trade.css";

const Trade = () => {
  const [wallets, setwallets] = useState(false);
  const [exchanges, setexchanges] = useState(true);
  let setExchangeTrue = () => {
    setwallets(true);
    setexchanges(false);
  };
  let setWalletsTrue = () => {
    setwallets(false);
    setexchanges(true);
  };
  return (
    <section className="MuiPaper-root tjss305 MuiPaper-elevation0">
      <div className="MuiContainer-root MuiContainer-maxWidthLg">
        <div className="tjss307">
          <div className="tjss306">Where to Trade ANKR</div>
          <div className="tjss308">
            <div
              onClick={setWalletsTrue}
              className={exchanges ? "customU5  customU6" : "customU5"}
            >
              Exchanges
            </div>
            <div
              onClick={setExchangeTrue}
              className={wallets ? "customU5  customU6" : "customU5"}
            >
              Wallets
            </div>
          </div>
        </div>
        {exchanges && (
          <div className="tjss309">
            <a
              className="tjss310"
              rel="noreferrer"
              target="_blank"
              href="https://www.coinbase.com/"
            >
              <svg
                width={76}
                height={76}
                viewBox="0 0 76 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.344 29.381a1.959 1.959 0 0 0-1.958 1.959v13.32c0 1.081.877 1.958 1.958 1.958h13.319a1.959 1.959 0 0 0 1.958-1.959V31.34a1.959 1.959 0 0 0-1.958-1.959H31.344z"
                  fill="#2560F6"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M.007 27.436c0-9.704 0-14.557 1.919-18.25a17.04 17.04 0 0 1 7.266-7.267C12.885 0 17.737 0 27.441 0h21.125c9.704 0 14.556 0 18.249 1.919a17.04 17.04 0 0 1 7.266 7.267C76 12.879 76 17.732 76 27.436v21.127c0 9.705 0 14.557-1.919 18.25a17.04 17.04 0 0 1-7.266 7.268c-3.693 1.918-8.545 1.918-18.249 1.918H27.441c-9.704 0-14.556 0-18.249-1.918a17.04 17.04 0 0 1-7.266-7.267C.007 63.12.007 58.268.007 48.564V27.435zM64.64 38c0 14.712-11.925 26.639-26.636 26.639-14.711 0-26.637-11.927-26.637-26.64 0-14.712 11.926-26.638 26.637-26.638C52.714 11.36 64.64 23.287 64.64 38z"
                  fill="#2560F6"
                />
              </svg>
              <span>Coinbase</span>
            </a>
            <a
              className="tjss310"
              rel="noreferrer"
              target="_blank"
              href="https://www.binance.com/en"
            >
              <svg
                width={84}
                height={84}
                viewBox="0 0 84 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.977 35.417L42 19.397l16.03 16.029 9.322-9.323L41.999.75 16.655 26.095l9.322 9.322zM19.395 41.998l-9.322-9.322L.75 41.998l9.322 9.323 9.323-9.323zM25.977 48.582l16.021 16.02 16.03-16.028 9.327 9.317-.005.006-25.352 25.352-25.344-25.344-.013-.013 9.336-9.31zM73.927 51.325l9.323-9.323-9.322-9.322-9.323 9.322 9.322 9.323z"
                  fill="#F3BA2F"
                />
                <path
                  d="M51.454 41.995h.004l-9.46-9.46-6.99 6.991h-.002l-.802.804-1.657 1.657-.013.013.013.013 9.451 9.452 9.46-9.46.005-.005-.009-.005z"
                  fill="#F3BA2F"
                />
              </svg>
              <span>Binance</span>
            </a>
            <a
              className="tjss310"
              rel="noreferrer"
              target="_blank"
              href="https://crypto.com/us/"
            >
              <img
                src="https://www.ankr.com/_next/static/images/icon3-23f925a0dbe5cdfe244d71275f9fd61d.png"
                alt=""
              />
              <span>Crypto.com</span>
            </a>
            <a
              className="tjss310"
              rel="noreferrer"
              target="_blank"
              href="https://sg.upbit.com/home"
            >
              <img
                src="https://www.ankr.com/_next/static/images/icon4-495c007d32ecab60eb32538b3efaf669.png"
                alt=""
              />
              <span>Upbit</span>
            </a>
            <a
              className="tjss310"
              rel="noreferrer"
              target="_blank"
              href="https://www.bithumb.com/"
            >
              <svg
                width={64}
                height={84}
                viewBox="0 0 64 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.464 20.006h11.772l-9.153 22.74s-4.785-.08-6.248-4.326a6.849 6.849 0 0 1-.1-3.898l3.729-14.516z"
                  fill="#D53127"
                />
                <path
                  d="M50.12 20.492l-14.97-.264 3.37-11.286a7.011 7.011 0 0 0-1.036-6.13A6.782 6.782 0 0 0 32.022 0H18.36L2.74 56.981S-2.857 81.35 18.36 83.555c0 0 33.54 6.964 44.302-34.2 0 0 5.68-24.897-12.542-28.863zm-10.231 28.26s-.599 10.514-8.409 12.36a4.99 4.99 0 0 1-3.441-.36c-1.224-.635-2.489-1.952-2.458-4.712.02-.798.147-1.59.375-2.353l2.885-10.942h7.872s3.566 1.18 3.176 6.008z"
                  fill="#F47320"
                />
                <path
                  d="M63.38 37.879C61.948 21.152 50.119 20.49 50.119 20.49l-14.969-.264-6.43 22.65h7.852c1.442.079 4.071 2.495 3.217 6.773"
                  fill="url(#paint0_linear_5091_36099)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_5091_36099"
                    x1="60.631"
                    y1="52.375"
                    x2="41.582"
                    y2={24}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".41" stopColor="#F47320" />
                    <stop offset=".5" stopColor="#F16D21" />
                    <stop offset=".62" stopColor="#E95C22" />
                    <stop offset=".75" stopColor="#DC4125" />
                    <stop offset=".81" stopColor="#D53127" />
                  </linearGradient>
                </defs>
              </svg>
              <span>Bithumb</span>
            </a>
            <a
              className="tjss310"
              rel="noreferrer"
              target="_blank"
              href="https://www.huobi.com/en-us/"
            >
              <img
                src="https://www.ankr.com/_next/static/images/icon6-2ffe3a057aefd1ae4d4c4a78ed7c4881.png"
                alt=""
              />
              <span>Houbi Global</span>
            </a>
            <a
              className="tjss310"
              rel="noreferrer"
              target="_blank"
              href="https://www.digifinex.com/en-ww/markets"
            >
              <img
                src="https://www.ankr.com/_next/static/images/icon7-00a8b65fde9c5a8f7d9002ffecc219cb.png"
                alt=""
              />
              <span>Digifinex</span>
            </a>
            <a
              className="tjss310"
              rel="noreferrer"
              target="_blank"
              href="https://uniswap.org/"
            >
              <img
                src="https://www.ankr.com/_next/static/images/icon8-6cc5c595cf4d5d30b34343047a9ddb10.png"
                alt=""
              />
              <span>Uniswap V2</span>
            </a>
          </div>
        )}
        {wallets && (
          <div className="tjss309">
            <a
              className="tjss310"
              rel="noreferrer"
              target="_blank"
              href="https://metamask.io/"
            >
              <svg
                width={84}
                height={77}
                viewBox="0 0 84 77"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M78.91.46L46.917 24.225l5.916-14.02L78.911.461z"
                  fill="#E2761B"
                  stroke="#E2761B"
                  strokeWidth=".052"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.05.46l31.738 23.99-5.627-14.246L5.05.461zM67.4 55.545L58.877 68.6l18.233 5.017 5.24-17.783-14.952-.29zM1.672 55.834l5.21 17.783L25.113 68.6l-8.521-13.055-14.92.29z"
                  fill="#E4761B"
                  stroke="#E4761B"
                  strokeWidth=".052"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.087 33.487l-5.08 7.685 18.104.804-.644-19.454-12.38 10.965zM59.876 33.495l-12.54-11.19-.419 19.68 18.072-.804-5.113-7.686zM25.114 68.592l10.87-5.305-9.39-7.332-1.48 12.637zM47.98 63.287l10.9 5.305-1.511-12.637-9.39 7.332z"
                  fill="#E4761B"
                  stroke="#E4761B"
                  strokeWidth=".052"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M58.878 68.597l-10.9-5.306.868 7.107-.097 2.99 10.13-4.791zM25.114 68.597l10.13 4.79-.065-2.99.804-7.106-10.869 5.306z"
                  fill="#D7C1B3"
                  stroke="#D7C1B3"
                  strokeWidth=".052"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M35.405 51.269l-9.068-2.67 6.399-2.925 2.669 5.595zM48.554 51.269l2.67-5.595 6.43 2.926-9.1 2.669z"
                  fill="#233447"
                  stroke="#233447"
                  strokeWidth=".052"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.113 68.6l1.544-13.055-10.065.29L25.113 68.6zM57.334 55.545L58.877 68.6l8.521-12.765-10.064-.29zM64.987 41.172l-18.071.804 1.671 9.293 2.67-5.595 6.43 2.926 7.3-7.428zM26.336 48.6l6.431-2.926 2.637 5.595 1.705-9.293-18.104-.804 7.331 7.428z"
                  fill="#CD6116"
                  stroke="#CD6116"
                  strokeWidth=".052"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.007 41.172l7.588 14.792-.257-7.364-7.331-7.428zM57.69 48.6l-.322 7.364 7.62-14.792L57.69 48.6zM37.111 41.97l-1.704 9.294 2.123 10.965.482-14.438-.9-5.82zM46.92 41.97l-.869 5.79.386 14.47 2.154-10.966-1.672-9.293z"
                  fill="#E4751F"
                  stroke="#E4751F"
                  strokeWidth=".052"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M48.59 51.263l-2.155 10.965 1.544 1.06 9.39-7.33.32-7.364-9.1 2.669zM26.337 48.594l.257 7.364 9.39 7.33 1.543-1.06-2.122-10.965-9.068-2.67z"
                  fill="#F6851B"
                  stroke="#F6851B"
                  strokeWidth=".052"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M48.749 73.393l.097-2.99-.804-.708H35.919l-.74.707.064 2.991-10.129-4.791 3.537 2.894 7.171 4.984h12.316l7.203-4.984 3.537-2.894-10.13 4.791z"
                  fill="#C0AD9E"
                  stroke="#C0AD9E"
                  strokeWidth=".052"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M47.978 63.292l-1.543-1.062h-8.908l-1.543 1.062-.804 7.106.74-.707h12.122l.804.707-.868-7.106z"
                  fill="#161616"
                  stroke="#161616"
                  strokeWidth=".052"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M80.267 25.768L83 12.648 78.916.461 47.982 23.42 59.88 33.484l16.818 4.92 3.73-4.34-1.608-1.158 2.572-2.348-1.994-1.543 2.573-1.962-1.704-1.286zM1 12.646l2.733 13.12-1.736 1.286 2.572 1.962-1.961 1.543 2.572 2.348-1.607 1.157 3.697 4.341 16.818-4.92L35.986 23.42 5.052.459 1 12.646z"
                  fill="#763D16"
                  stroke="#763D16"
                  strokeWidth=".052"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M76.694 38.404l-16.818-4.92 5.113 7.686-7.621 14.792 10.032-.13h14.953l-5.66-17.428zM24.085 33.484l-16.818 4.92-5.595 17.429h14.92l10.001.129-7.589-14.792 5.081-7.686zM46.918 41.977l1.062-18.554 4.887-13.216H31.162l4.823 13.216 1.126 18.554.386 5.853.032 14.406h8.907L46.5 47.83l.418-5.853z"
                  fill="#F6851B"
                  stroke="#F6851B"
                  strokeWidth=".052"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>MetaMask</span>
            </a>
            <a
              className="tjss310"
              rel="noreferrer"
              target="_blank"
              href="https://wallet.clover.finance/#/"
            >
              <svg
                width={76}
                height={76}
                viewBox="0 0 76 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 38c10.493 0 19-8.506 19-19C38 8.507 29.493 0 19 0 8.506 0 0 8.507 0 19c0 10.494 8.506 19 19 19zm38 0c10.493 0 19-8.506 19-19C76 8.507 67.493 0 57 0S38 8.507 38 19c0 10.494 8.507 19 19 19zm19 19c0 10.494-8.507 19-19 19s-19-8.506-19-19c0-10.493 8.507-19 19-19s19 8.507 19 19zM19 76c10.493 0 19-8.506 19-19 0-10.493-8.507-19-19-19C8.506 38 0 46.507 0 57c0 10.494 8.506 19 19 19z"
                  fill="#68E19B"
                />
              </svg>
              <span>Clover</span>
            </a>
            <a
              className="tjss310"
              rel="noreferrer"
              target="_blank"
              href="https://trustwallet.com/"
            >
              <svg
                width={76}
                height={76}
                viewBox="0 0 76 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.589 12.967C0 18.05 0 24.7 0 38s0 19.95 2.589 25.033A23.819 23.819 0 0 0 12.967 73.41C18.05 76 24.7 76 38 76s19.95 0 25.033-2.589A23.819 23.819 0 0 0 73.41 63.033C76 57.95 76 51.3 76 38s0-19.95-2.589-25.032a23.819 23.819 0 0 0-10.378-10.38C57.95 0 51.3 0 38 0S18.05 0 12.968 2.589a23.82 23.82 0 0 0-10.38 10.378zm54.375 7.53a2.49 2.49 0 0 1 1.758.736c.463.475.724 1.116.712 1.769-.118 7.077-.391 12.492-.902 16.78-.499 4.286-1.247 7.469-2.375 10.046-.76 1.721-1.698 3.146-2.803 4.358-1.484 1.603-3.182 2.767-5.035 3.871-.792.474-1.615.941-2.479 1.432-1.843 1.046-3.87 2.197-6.166 3.734a2.457 2.457 0 0 1-2.743 0c-2.331-1.555-4.384-2.72-6.244-3.775-.414-.234-.818-.464-1.213-.69-2.173-1.26-4.133-2.459-5.843-4.192-1.14-1.14-2.125-2.53-2.909-4.18-1.069-2.21-1.793-4.881-2.328-8.337-.712-4.619-1.068-10.663-1.199-19.047a2.475 2.475 0 0 1 .7-1.77 2.518 2.518 0 0 1 1.77-.736h1.021c3.147.012 10.094-.297 16.103-4.975a2.477 2.477 0 0 1 3.028 0c6.009 4.678 12.956 4.987 16.114 4.975h1.033zm-5.521 27.751c.771-1.591 1.413-3.788 1.9-6.947.581-3.776.938-8.906 1.104-15.888-3.705-.107-10.07-.82-16.138-4.905-6.068 4.073-12.433 4.786-16.126 4.905.13 5.77.391 10.26.807 13.786.475 4.014 1.152 6.734 1.995 8.645.558 1.271 1.176 2.185 1.912 2.993.986 1.08 2.232 1.971 3.93 2.992.705.423 1.482.863 2.327 1.341 1.506.853 3.23 1.829 5.155 3.053 1.889-1.204 3.588-2.17 5.077-3.017.449-.255.878-.499 1.288-.735 2.09-1.2 3.634-2.197 4.785-3.361.772-.796 1.402-1.662 1.984-2.862z"
                  fill="#3375BB"
                />
              </svg>
              <span>Trust Wallet</span>
            </a>
            <a
              className="tjss310"
              rel="noreferrer"
              target="_blank"
              href="https://www.ledger.com/"
            >
              <svg
                width={120}
                height={41}
                viewBox="0 0 120 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M102.652 37.788v2.54H120V28.876h-2.528v8.912h-14.82zm0-37.788v2.539h14.82v8.912H120V0h-17.348zm-8.947 19.641v-5.9h3.966c1.933 0 2.627.648 2.627 2.415v1.046c0 1.817-.67 2.44-2.627 2.44h-3.966zM100 20.687c1.809-.473 3.073-2.166 3.073-4.182 0-1.27-.496-2.415-1.437-3.336-1.19-1.146-2.777-1.718-4.833-1.718h-5.576v17.425h2.478v-6.945h3.718c1.908 0 2.676.797 2.676 2.789v4.157h2.528v-3.76c0-2.737-.644-3.783-2.627-4.082v-.348zm-20.867.572h7.633v-2.29h-7.633V13.74h8.377v-2.29H76.605v17.425H87.88v-2.29h-8.748V21.26zm-8.303.921v1.195c0 2.514-.917 3.336-3.222 3.336h-.545c-2.305 0-3.42-.747-3.42-4.207v-4.68c0-3.485 1.165-4.208 3.47-4.208h.495c2.255 0 2.974.847 2.998 3.187h2.727c-.248-3.436-2.528-5.6-5.948-5.6-1.66 0-3.049.522-4.09 1.517-1.56 1.47-2.428 3.959-2.428 7.444 0 3.36.744 5.85 2.28 7.393 1.04 1.02 2.478 1.568 3.891 1.568 1.487 0 2.85-.598 3.544-1.892h.347v1.643h2.28V19.89h-6.717v2.29h4.338zm-21.858-8.439h2.701c2.553 0 3.941.647 3.941 4.133v4.58c0 3.485-1.388 4.132-3.94 4.132h-2.702V13.741zm2.924 15.136c4.734 0 6.493-3.61 6.493-8.713 0-5.178-1.883-8.712-6.543-8.712h-5.353v17.425h5.403zm-17.373-7.618h7.634v-2.29h-7.634V13.74H42.9v-2.29H31.995v17.425h11.277v-2.29h-8.749V21.26zm-14.622-9.808h-2.528v17.425h11.4v-2.29h-8.872V11.451zM0 28.877v11.45h17.348V37.79H2.528v-8.912H0zM0 0v11.451h2.528V2.539h14.82V0H0z"
                  fill="#000"
                />
              </svg>
              <span>Ledger</span>
            </a>
            <a
              className="tjss310"
              rel="noreferrer"
              target="_blank"
              href="https://trezor.io/"
            >
              <img
                src="https://www.ankr.com/_next/static/images/icon5-17dda0afef4debbc2e79d1f5e9c630c0.png"
                alt=""
              />
              <span>Trezor</span>
            </a>
            <a
              className="tjss310"
              rel="noreferrer"
              target="_blank"
              href="https://token.im/?locale=en-us"
            >
              <svg
                width={77}
                height={54}
                viewBox="0 0 77 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M76.802 1.999C79.31 35.959 57.48 52.01 37.91 53.723 19.715 55.314 2.59 44.134 1.086 26.957-.154 12.767 8.617 6.725 15.51 6.122c7.087-.62 13.043 4.267 13.56 10.185.498 5.69-3.053 8.28-5.522 8.495-1.953.171-4.409-1.014-4.63-3.56-.191-2.187.64-2.485.436-4.808-.36-4.137-3.968-4.619-5.943-4.448-2.39.21-6.726 3-6.117 9.947.611 7.009 7.331 12.546 16.14 11.776 9.506-.83 16.125-8.232 16.622-18.613a3.77 3.77 0 0 1 .34-1.594l.003-.013c.102-.218.222-.426.358-.625.203-.304.463-.64.799-1.008.003-.009.003-.009.01-.009.243-.276.538-.574.87-.894C46.589 7.035 61.544-2.205 75.688.721A1.417 1.417 0 0 1 76.802 2z"
                  fill="url(#paint0_linear_5091_36562)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_5091_36562"
                    x1="74.874"
                    y1="1.66"
                    x2="25.662"
                    y2="71.319"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#11C4D1" />
                    <stop offset={1} stopColor="#0062AD" />
                  </linearGradient>
                </defs>
              </svg>
              <span>imToken</span>
            </a>
            <a
              className="tjss310"
              rel="noreferrer"
              target="_blank"
              href="https://mathwallet.org/en-us/"
            >
              <svg
                width={120}
                height={56}
                viewBox="0 0 120 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M89.556 22.454a6.492 6.492 0 0 1 0-9.138 6.39 6.39 0 0 1 9.078 0 6.493 6.493 0 0 1 0 9.138 6.39 6.39 0 0 1-9.078 0zm-21.56 21.704a4.87 4.87 0 0 1 0-6.854 4.792 4.792 0 0 1 6.809 0 4.869 4.869 0 0 1 0 6.854 4.792 4.792 0 0 1-6.809 0zm34.043-11.423a4.87 4.87 0 0 1 0-6.854 4.791 4.791 0 0 1 6.808 0 4.87 4.87 0 0 1 0 6.854 4.791 4.791 0 0 1-6.808 0zM90.691 44.158a4.87 4.87 0 0 1 0-6.854 4.792 4.792 0 0 1 6.809 0 4.87 4.87 0 0 1 0 6.854 4.792 4.792 0 0 1-6.809 0zm23.83-1.143a3.247 3.247 0 0 1 0-4.569 3.195 3.195 0 0 1 4.539 0 3.247 3.247 0 0 1 0 4.57 3.194 3.194 0 0 1-4.539 0zm-11.348 11.423a3.247 3.247 0 0 1 0-4.569 3.195 3.195 0 0 1 4.539 0 3.245 3.245 0 0 1 0 4.57 3.194 3.194 0 0 1-4.539 0zM78.209 33.877a6.492 6.492 0 0 1 0-9.138 6.39 6.39 0 0 1 9.078 0 6.492 6.492 0 0 1 0 9.138 6.39 6.39 0 0 1-9.078 0zm0-22.846a6.492 6.492 0 0 1 0-9.138 6.39 6.39 0 0 1 9.078 0 6.492 6.492 0 0 1 0 9.138 6.39 6.39 0 0 1-9.078 0zM66.86 22.454a6.492 6.492 0 0 1 0-9.138 6.39 6.39 0 0 1 9.078 0 6.492 6.492 0 0 1 0 9.138 6.39 6.39 0 0 1-9.078 0zm-22.8 0a6.492 6.492 0 0 1 0-9.138 6.39 6.39 0 0 1 9.078 0 6.492 6.492 0 0 1 0 9.138 6.39 6.39 0 0 1-9.078 0zM22.5 44.158a4.87 4.87 0 0 1 0-6.854 4.792 4.792 0 0 1 6.808 0 4.87 4.87 0 0 1 0 6.854 4.792 4.792 0 0 1-6.809 0zm34.042-11.423a4.87 4.87 0 0 1 0-6.854 4.792 4.792 0 0 1 6.809 0 4.87 4.87 0 0 1 0 6.854 4.792 4.792 0 0 1-6.809 0zM45.196 44.158a4.869 4.869 0 0 1 0-6.854 4.792 4.792 0 0 1 6.808 0 4.87 4.87 0 0 1 0 6.854 4.792 4.792 0 0 1-6.808 0zM.94 43.015a3.246 3.246 0 0 1 0-4.569 3.195 3.195 0 0 1 4.54 0 3.246 3.246 0 0 1 0 4.57 3.194 3.194 0 0 1-4.54 0zm11.348 11.423a3.246 3.246 0 0 1 0-4.569 3.195 3.195 0 0 1 4.539 0 3.246 3.246 0 0 1 0 4.57 3.194 3.194 0 0 1-4.54 0zm45.39 0a3.246 3.246 0 0 1 0-4.569 3.195 3.195 0 0 1 4.539 0 3.246 3.246 0 0 1 0 4.57 3.195 3.195 0 0 1-4.54 0zM11.153 32.735a4.87 4.87 0 0 1 0-6.854 4.792 4.792 0 0 1 6.808 0 4.87 4.87 0 0 1 0 6.854 4.792 4.792 0 0 1-6.808 0zm21.56 1.142a6.492 6.492 0 0 1 0-9.138 6.39 6.39 0 0 1 9.078 0 6.492 6.492 0 0 1 0 9.138 6.39 6.39 0 0 1-9.078 0zm0-22.846a6.492 6.492 0 0 1 0-9.138 6.39 6.39 0 0 1 9.078 0 6.492 6.492 0 0 1 0 9.138 6.39 6.39 0 0 1-9.078 0zM21.366 22.454a6.492 6.492 0 0 1 0-9.138 6.39 6.39 0 0 1 9.078 0 6.492 6.492 0 0 1 0 9.138 6.39 6.39 0 0 1-9.078 0z"
                  fill="#2E343C"
                />
              </svg>
              <span>Math Wallet</span>
            </a>
            <a
              className="tjss310"
              rel="noreferrer"
              target="_blank"
              href="https://rainbow.me/"
            >
              <img
                src="https://www.ankr.com/_next/static/images/icon8-7cf5edb369eb1dd9fee7edc9783a74c9.png"
                alt=""
              />
              <span>Rainbow</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Trade;
