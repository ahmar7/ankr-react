import React from 'react';
import DeffiProjetContent from './ProjectsContent';

const Projects = () => {
    return (
      <section className="exchanges-wallets dapps-projects  MuiContainer-root-81 MuiContainer-maxWidthLg-87">
        <div className="wrapper">
          <div className="main-header__block">
            <h2 className="main__title">Metaverses built on Velas</h2>
            <p className="main__text">
              Take a look at crucial elements and whole immersive metaverse
              solutions built on the Velas blockchain foundation.
            </p>
            <a
              href="https://velas.com/en/ecosystem#dapps"
              className="main-arrow-link"
            >
              Discover All dApps
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
          <div className="exchanges-block">
            <div className="ecosystem-blog__items">
              {DeffiProjetContent.map((item, key) => (
                <div key={key} className="ecosystem-blog__item">
                  <div className="ecosystem-blog__item-content">
                    <div className="ecosystem-blog__item-content__top">
                      <div className="ecosystem-blog__item-header">
                        <a
                          href={item.hrefLink}
                          className="ecosystem-blog__item-header__logo"
                        >
                          <img
                            data-src={item.headerImg}
                            data-theme-src={item.headerImg}
                            alt="logo"
                            className="ecosystem-blog__item-header__icon lozad"
                            src={item.headerImg}
                            data-loaded="true"
                          />
                        </a>
                        <a
                          href={item.hrefLink}
                          className="main__title medium blog"
                        >
                          {item.mainTitle}
                        </a>
                      </div>
                      <p className="main__text">{item.mainText}</p>
                    </div>
                    <div className="ecosystem-blog__item-content__bottom">
                      <div className="ecosystem-blog__item-categories">
                        <a
                          href="#!"
                          className="ecosystem-blog__item-category disabled"
                        >
                          {item.bottomTag1}
                        </a>
                        <a
                          href="#!"
                          className="ecosystem-blog__item-category disabled"
                        >
                          {item.bottomTag2}
                        </a>
                        <a
                          href="#!"
                          className="ecosystem-blog__item-category disabled"
                        >
                          {item.bottomTag3}
                        </a>
                      </div>
                      <button
                        data-upvote-project-id={31}
                        className="main__upvote"
                      >
                        <svg
                          width={20}
                          height={17}
                          viewBox="0 0 20 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.13397 0.500001C9.51887 -0.166666 10.4811 -0.166667 10.866 0.5L19.5263 15.5C19.9112 16.1667 19.4301 17 18.6603 17H1.33975C0.569946 17 0.0888207 16.1667 0.473721 15.5L9.13397 0.500001Z"
                            fill="#AEBFDF"
                          />
                        </svg>
                        <span className="main__upvote-number">
                          {item.upVote}
                        </span>
                      </button>
                    </div>
                  </div>
                  <a
                    href={item.hrefLink}
                    className="ecosystem-blog__item-imgLink"
                  >
                    <img
                      data-src={item.bannerImg}
                      data-rjs={2}
                      alt="img"
                      className="ecosystem-blog__item-img lozad"
                      width={700}
                      height={316}
                      data-rjs-processed="true"
                      src={item.bannerImg}
                      data-loaded="true"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
}

export default Projects;
