import React from 'react';

const Projects = () => {
    return (
      <section className="web3-projects">
        <div className="wrapper">
          <div className="web3-projects__block">
            <div className="web3-projects__textBlock">
              <h2 className="main__title">Power your Web 3.0 projects</h2>
              <p className="main__text">
                Velas offers freedom for developers and entrepreneurs to power
                their projects across domains.
              </p>
            </div>
            <img
              data-src="https://velas.com/assets/img/web3/light/atoms.webp"
              data-theme-src="https://velas.com/assets/img/web3/dark/atoms.webp"
              alt="projects"
              className="main-decor web3-projects__img-2 lozad"
              src="https://velas.com/assets/img/web3/light/atoms.webp"
              data-loaded="true"
            />
            <img
              data-src="https://velas.com/assets/img/web3/light/gradient.svg"
              data-theme-src="https://velas.com/assets/img/web3/dark/gradient.svg"
              alt="projects"
              className="main-decor web3-projects__img-1 lozad"
              src="https://velas.com/assets/img/web3/light/gradient.svg"
              data-loaded="true"
            />
            <img
              data-src="https://velas.com/assets/img/web3/light/projects.webp"
              data-theme-src="https://velas.com/assets/img/web3/dark/projects.webp"
              data-rjs={2}
              alt="projects"
              className="main-decor web3-projects__img lozad"
              src="https://velas.com/assets/img/web3/light/projects.webp"
              data-loaded="true"
            />
            <img
              data-src="https://velas.com/assets/img/web3/light/projects-mobile.webp"
              data-theme-src="https://velas.com/assets/img/web3/dark/projects-mobile.webp"
              data-rjs={2}
              alt="projects"
              className="main-decor web3-projects__img mobile lozad"
            />
          </div>
        </div>
      </section>
    );
}

export default Projects;
