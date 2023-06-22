import React from 'react';

const DappsPower = (props) => {
    return (
     
        <div className="wrapper">
          <img
            data-src="https://velas.com/assets/img/main/light/hero-gradient-2.svg"
            data-theme-src="https://velas.com/assets/img/main/dark/hero-gradient-2.svg"
            alt="gradient"
            className="main-decor dapps-power__decor lozad"
            src="https://velas.com/assets/img/main/light/hero-gradient-2.svg"
            data-loaded="true"
          />
          <div className="dapps-power__textBlock">
            <h2 className="main__title">{props.MainTitle}</h2>
            <p className="main__text">
         {props.MainText}
            </p>
          </div>
          <div className="dapps-power__items">
            <div className="dapps-power__item">
              <div className="dapps-power__item-header">
                <img
                  data-src="https://velas.com/assets/img/dapps/power-1@2x.webp"
                  data-rjs={2}
                  alt="power"
                  className="dapps-power__item-img lozad"
                  width={160}
                  height={160}
                  data-rjs-processed="true"
                  src="https://velas.com/assets/img/dapps/power-1@2x.webp"
                  data-loaded="true"
                />
                <h3 className="main__title medium">{props.BlockTitle1}</h3>
              </div>
              <p className="main__text">
                {props.BlockText1}
              </p>
              <div className="dapps-power__item-links">
                <a
                  href="https://velas.com/en/develop"
                  className="main-arrow-link"
                >
                  Start developing
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.6953 3.93057L17.3203 9.55557C17.4358 9.67503 17.5004 9.8347 17.5004 10.0009C17.5004 10.1671 17.4358 10.3267 17.3203 10.4462L11.6953 16.0712C11.5739 16.1709 11.4197 16.2218 11.2628 16.2141C11.1059 16.2064 10.9575 16.1406 10.8464 16.0295C10.7353 15.9184 10.6695 15.77 10.6618 15.6131C10.6541 15.4562 10.705 15.302 10.8047 15.1806L15.3672 10.6259H3.125C2.95924 10.6259 2.80027 10.56 2.68306 10.4428C2.56585 10.3256 2.5 10.1666 2.5 10.0009C2.5 9.83512 2.56585 9.67615 2.68306 9.55894C2.80027 9.44173 2.95924 9.37588 3.125 9.37588H15.3672L10.8047 4.82119C10.705 4.69976 10.6541 4.54559 10.6618 4.38868C10.6695 4.23178 10.7353 4.08334 10.8464 3.97226C10.9575 3.86118 11.1059 3.79538 11.2628 3.78767C11.4197 3.77997 11.5739 3.8309 11.6953 3.93057V3.93057Z"
                      fill="#0C0C0C"
                    />
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://t.me/VelasDevelopers"
                  className="main-arrow-link"
                >
                  Join dev community
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.6953 3.93057L17.3203 9.55557C17.4358 9.67503 17.5004 9.8347 17.5004 10.0009C17.5004 10.1671 17.4358 10.3267 17.3203 10.4462L11.6953 16.0712C11.5739 16.1709 11.4197 16.2218 11.2628 16.2141C11.1059 16.2064 10.9575 16.1406 10.8464 16.0295C10.7353 15.9184 10.6695 15.77 10.6618 15.6131C10.6541 15.4562 10.705 15.302 10.8047 15.1806L15.3672 10.6259H3.125C2.95924 10.6259 2.80027 10.56 2.68306 10.4428C2.56585 10.3256 2.5 10.1666 2.5 10.0009C2.5 9.83512 2.56585 9.67615 2.68306 9.55894C2.80027 9.44173 2.95924 9.37588 3.125 9.37588H15.3672L10.8047 4.82119C10.705 4.69976 10.6541 4.54559 10.6618 4.38868C10.6695 4.23178 10.7353 4.08334 10.8464 3.97226C10.9575 3.86118 11.1059 3.79538 11.2628 3.78767C11.4197 3.77997 11.5739 3.8309 11.6953 3.93057V3.93057Z"
                      fill="#0C0C0C"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="dapps-power__item">
              <div className="dapps-power__item-header">
                <img
                  data-src="https://velas.com/assets/img/dapps/power-2@2x.webp"
                  data-rjs={2}
                  alt="power"
                  className="dapps-power__item-img lozad"
                  width={160}
                  height={160}
                  data-rjs-processed="true"
                  src="https://velas.com/assets/img/dapps/power-2@2x.webp"
                  data-loaded="true"
                />
                <h3 className="main__title medium">{props.BlockTitle2}</h3>
              </div>
              <p className="main__text">
              {props.BlockText2}
              </p>
            </div>
            <div className="dapps-power__item">
              <div className="dapps-power__item-header">
                <img
                  data-src="https://velas.com/assets/img/dapps/power-3@2x.webp"
                  data-rjs={2}
                  alt="power"
                  className="dapps-power__item-img lozad"
                  width={160}
                  height={160}
                  data-rjs-processed="true"
                  src="https://velas.com/assets/img/dapps/power-3@2x.webp"
                  data-loaded="true"
                />
                <h3 className="main__title medium">{props.BlockTitle3}</h3>
              </div>
              <p className="main__text">
               {props.BlockText3}
              </p>
            </div>
            <div className="dapps-power__item">
              <div className="dapps-power__item-header">
                <img
                  data-src="https://velas.com/assets/img/dapps/power-4@2x.webp"
                  data-rjs={2}
                  alt="power"
                  className="dapps-power__item-img lozad"
                  width={160}
                  height={160}
                  data-rjs-processed="true"
                  src="https://velas.com/assets/img/dapps/power-4@2x.webp"
                  data-loaded="true"
                />
                <h3 className="main__title medium">{props.BlockTitle4}</h3>
              </div>
              <p className="main__text">
                {props.BlockText4}
              </p>
            </div>
            <div className="dapps-power__item left-corner">
              <div className="dapps-power__item-header">
                <img
                  data-src="https://velas.com/assets/img/dapps/power-5@2x.webp"
                  data-rjs={2}
                  alt="power"
                  className="dapps-power__item-img lozad"
                  width={160}
                  height={160}
                  data-rjs-processed="true"
                  src="https://velas.com/assets/img/dapps/power-5@2x.webp"
                  data-loaded="true"
                />
                <h3 className="main__title medium">{props.BlockTitle5}</h3>
              </div>
              <p className="main__text">
               {props.BlockText5}
              </p>
            </div>
          </div>
        </div>
     
    );
}

export default DappsPower;
