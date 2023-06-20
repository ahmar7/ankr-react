import React from 'react';
import '../BuildDapps.css'
// import '../swiper-bundle.css'
// import '../selectize.css'
// import '../main.css'
// import '../fancybox.css'
const Breadcrumbs = () => {
    return (
      <section className="main-breadcrumbs">
        <div className="wrapper">
          <ul
            className="breadcrumb"
            vocab="https://schema.org/"
            typeof="BreadcrumbList"
          >
            <li
              className="breadcrumb-item"
              property="itemListElement"
              typeof="ListItem"
            >
              <a property="item" typeof="WebPage" href="https://velas.com/en">
                <span property="name">Velas</span>
              </a>
              <meta property="position" content={1} />
            </li>
            <li
              className="breadcrumb-item"
              property="itemListElement"
              typeof="ListItem"
            >
              <a
                property="item"
                typeof="WebPage"
                href="https://velas.com/en/ecosystem"
              >
                <span property="name">Ecosystem</span>
              </a>
              <meta property="position" content={2} />
            </li>
            <li
              className="breadcrumb-item active"
              property="itemListElement"
              typeof="ListItem"
            >
              <span property="name">dApps</span>
              <meta property="position" content={3} />
            </li>
          </ul>
        </div>
        <div className="main-breadcrumbs__scroll">
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.3741 9.9999C14.3719 10.1656 14.3078 10.3244 14.1944 10.4452L7.94443 16.6952C7.823 16.7949 7.66883 16.8458 7.51193 16.8381C7.35502 16.8304 7.20659 16.7646 7.0955 16.6535C6.98442 16.5424 6.91862 16.394 6.91092 16.2371C6.90321 16.0802 6.95415 15.926 7.05381 15.8046L12.8663 9.9999L7.05381 4.19521C6.95415 4.07378 6.90321 3.91961 6.91092 3.76271C6.91862 3.6058 6.98442 3.45737 7.0955 3.34628C7.20659 3.2352 7.35502 3.1694 7.51193 3.1617C7.66883 3.15399 7.823 3.20492 7.94443 3.30459L14.1944 9.55459C14.3078 9.67542 14.3719 9.83425 14.3741 9.9999Z"
              fill="#0C0C0C"
            />
          </svg>
        </div>
      </section>
    );
}

export default Breadcrumbs;
