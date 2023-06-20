import React from 'react';
 
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
              className="breadcrumb-item active"
              property="itemListElement"
              typeof="ListItem"
            >
              <span property="name">FAQ</span>
              <meta property="position" content={2} />
            </li>
          </ul>
        </div>
      </section>
    );
}

export default Breadcrumbs;
