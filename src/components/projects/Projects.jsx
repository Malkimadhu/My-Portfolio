import React, { useState } from "react";
import "./projects.css";

const Projects = () => {
  const [toggleState,setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">What I done</span>

      <div className="projects__container container grid">
        <div className="projects__content">
          <div>
            <i className="uil uil-web-grid projects__icon"></i>
            <h3 className="projects__title">
              GardenGuru <br /> Webapp
            </h3>
          </div>

          <span className="projects__button" onClick={() => toggleTab(1) }>
            View More
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>

          <div className={toggleState === 1 ? "projects__modal active-modal" : "projects__modal"}>
            <div className="projects__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>

              <h3 className="projects__modal-title">GardenGuru</h3>
              <p className="projects__modal-description">
                Here, you'll find a collection of projects that reflect my
                journey and growth as a Computer Science and Technology student
                at Uva Wellassa University.
              </p>

              <ul className="projects__modal-projects grid">
                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                    GardenGuru - Webapplication for encourage gardening
                  </p>
                </li>

                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                    CASTELLO - Hotel Management Webapplication
                  </p>
                </li>

                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                    TrendHire - Online job application portal
                  </p>
                </li>

                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                    Vsit Sri Lanka - Website for promote tourism
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="projects__content">
          <div>
            <i className="uil uil-arrow projects__icon"></i>
            <h3 className="projects__title">
              CASTELLO <br /> Webapp
            </h3>
          </div>
          <span className="projects__button" onClick={() => toggleTab(2) }>
            View More
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>

          <div className={toggleState === 2 ? "projects__modal active-modal" : "projects__modal"}>
            <div className="projects__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>

              <h3 className="projects__modal-title">CASTELLO</h3>
              <p className="projects__modal-description">
                Here, you'll find a collection of projects that reflect my
                journey and growth as a Computer Science and Technology student
                at Uva Wellassa University.
              </p>

              <ul className="projects__modal-projects grid">
                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                    GardenGuru - Webapplication for encourage gardening
                  </p>
                </li>

                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                    CASTELLO - Hotel Management Webapplication
                  </p>
                </li>

                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                    TrendHire - Online job application portal
                  </p>
                </li>

                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                    Vsit Sri Lanka - Website for promote tourism
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="projects__content">
          <div>
            <i className="uil uil-edit projects__icon"></i>
            <h3 className="projects__title">
              TrendHire <br /> Webapp
            </h3>
          </div>
          <span className="projects__button" onClick={() => toggleTab(3) }>
            View More
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>

          <div className={toggleState === 3 ? "projects__modal active-modal" : "projects__modal"}>
            <div className="projects__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>

              <h3 className="projects__modal-title">TrendHire</h3>
              <p className="projects__modal-description">
                Here, you'll find a collection of projects that reflect my
                journey and growth as a Computer Science and Technology student
                at Uva Wellassa University.
              </p>

              <ul className="projects__modal-projects grid">
                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                    GardenGuru - Webapplication for encourage gardening
                  </p>
                </li>

                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                    CASTELLO - Hotel Management Webapplication
                  </p>
                </li>

                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                    TrendHire - Online job application portal
                  </p>
                </li>

                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                    Vsit Sri Lanka - Website for promote tourism
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
