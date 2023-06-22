import React from 'react'; 
const DappsWhat = (props) => {

    return (
      <section className="dapps-what">
        <div className="wrapper">
          <div className="dapps-what__content">
            <h2 className="main__title">{props.mainTitle}</h2>
            <p className="main__text">{props.mainText}</p>
            <a
              href="https://velas.com/en/ecosystem#dapps"
              className="main-arrow-link"
            >
              Discover dApps
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
          <div className="dapps-what__items">
            <div className="dapps-what__item">
              <svg
                className="book"
                width={34}
                height={34}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.75 6.375h-8.5A5.312 5.312 0 0 0 17 8.5a5.312 5.312 0 0 0-4.25-2.125h-8.5A2.125 2.125 0 0 0 2.125 8.5v17a2.125 2.125 0 0 0 2.125 2.125h8.5a3.2 3.2 0 0 1 3.188 3.188 1.062 1.062 0 1 0 2.124 0 3.2 3.2 0 0 1 3.188-3.188h8.5a2.125 2.125 0 0 0 2.125-2.125v-17a2.125 2.125 0 0 0-2.125-2.125zm-17 19.125h-8.5v-17h8.5a3.2 3.2 0 0 1 3.188 3.188v14.874A5.312 5.312 0 0 0 12.75 25.5zm17 0h-8.5c-1.15 0-2.268.373-3.188 1.063V11.688A3.2 3.2 0 0 1 21.25 8.5h8.5v17z"
                  fill="#0037C1"
                />
              </svg>
              <p className="main__text">
                <span>{props.featureTitle1}</span> {props.featureText1}
              </p>
            </div>
            <div className="dapps-what__item">
              <svg
                width={34}
                height={34}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m32.667 13.109-7.437-8.5a1.063 1.063 0 0 0-.797-.359H9.558a1.063 1.063 0 0 0-.797.359l-7.438 8.5a1.076 1.076 0 0 0 .027 1.434l14.875 15.938a1.06 1.06 0 0 0 1.54 0l14.876-15.938a1.076 1.076 0 0 0 .026-1.434zm-3.134-.359h-5.499l-4.887-6.375h4.808l5.578 6.375zM9.757 14.875l4.064 9.908-9.257-9.908h5.193zm12.179 0-4.94 12.073-4.941-12.073h9.88zm-9.31-2.125 4.37-5.698 4.369 5.698h-8.74zm11.608 2.125h5.192l-9.256 9.908 4.064-9.908zm-14.198-8.5h4.808L9.956 12.75H4.458l5.578-6.375z"
                  fill="#D183DE"
                />
              </svg>
              <p className="main__text">
                <span>{props.featureTitle2}</span> {props.featureText2}
              </p>
            </div>
            <div className="dapps-what__item">
              <svg
                width={34}
                height={34}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.625 5.313H6.375A2.125 2.125 0 0 0 4.25 7.438v7.796c0 11.873 10.067 15.818 12.086 16.482.431.142.897.142 1.328 0 2.019-.664 12.086-4.609 12.086-16.482V7.438a2.125 2.125 0 0 0-2.125-2.125zm0 9.92C27.625 25.62 18.806 29.1 17 29.698c-1.793-.598-10.625-4.064-10.625-14.463V7.438h21.25v7.796zm-17.2 3.069a1.063 1.063 0 1 1 1.462-1.541l3.16 3.015 7.066-6.734a1.062 1.062 0 0 1 1.461 1.54l-7.783 7.438a1.076 1.076 0 0 1-1.474 0l-3.891-3.718z"
                  fill="#DEBA57"
                />
              </svg>
              <p className="main__text">
                <span>{props.featureTitle3}</span> {props.featureText3}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default DappsWhat;
