import React, { useState } from "react";
import "./projects.css";
import pic1 from "../../assets/projects/gardenguru.png";
import pic2 from "../../assets/projects/cstello.png";
import pic3 from "../../assets/projects/trendhire.png";

const Projects = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">What I done</span>

      <div className="projects__container container grid">
        <div className="projects__content">
          <img src={pic1}></img>
          <div>
            <h3 className="projects__title">
              {/* <i className="uil uil-web-grid projects__icon"></i> */}
              GardenGURU Web Application
            </h3>
            <p className="project__des">
              Garden Guru is a web application designed for gardening
              enthusiasts to help them make informed decisions about planting
              based on their local environment. With tailored recommendations,
              users can explore the best plants to grow in their region and
              enjoy numerous benefits such as personalized tips, seasonal
              planting suggestions, and guidance on sustainable gardening
              practices. Whether you're a beginner or a seasoned gardener,
              Garden Guru provides the perfect tools to create and maintain a
              thriving garden.
            </p>
          </div>
          <div className="button-div">
            <span className="projects__button" onClick={() => toggleTab(1)}>
              View More
              <i className="uil uil-arrow-right projects__button-icon"></i>
            </span>
          </div>

          <div
            className={
              toggleState === 1
                ? "projects__modal active-modal"
                : "projects__modal"
            }
          >
            <div className="projects__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times projects__modal-close"
              ></i>

              <h3 className="projects__modal-title">GardenGURU</h3>
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
          <img src={pic2}></img>
          <div>
            <h3 className="projects__title">
              {/* <i className="uil uil-web-grid projects__icon"></i> */}
              Castello Hotel Web Application
            </h3>
            <p className="project__des">
              The Castello Hotel web application is a user-friendly platform
              tailored for seamless hotel management and guest interaction.
              Guests can easily book rooms, order food, and explore hotel
              services, all from the comfort of their device. With a clean and
              intuitive interface, the application simplifies the entire booking
              process while providing personalized options for an enhanced stay.
              Whether it's managing reservations or accessing hotel amenities,
              Castello Hotel makes everything convenient, ensuring both guests
              and hotel staff have a smooth and efficient experience.
            </p>
          </div>
          <div className="button-div">
            <span className="projects__button" onClick={() => toggleTab(1)}>
              View More
              <i className="uil uil-arrow-right projects__button-icon"></i>
            </span>
          </div>

          <div
            className={
              toggleState === 1
                ? "projects__modal active-modal"
                : "projects__modal"
            }
          >
            <div className="projects__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times projects__modal-close"
              ></i>

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
          <img src={pic3}></img>
          <div>
            <h3 className="projects__title">
              {/* <i className="uil uil-web-grid projects__icon"></i> */}
              Trend Hire Web Application
            </h3>
            <p className="project__des">
              Trend Hire is an advanced job application portal that connects job
              seekers with employers in a fast and efficient way. The platform
              offers a smooth, user-friendly interface where users can easily
              browse job listings, submit applications, and manage their job
              search process. Job seekers can create detailed profiles, upload
              resumes, and receive personalized job suggestions based on their
              skills. For employers, Trend Hire simplifies the recruitment
              process, allowing them to post job openings, filter candidates,
              and review applications efficiently. 
            </p>
          </div>
          <div className="button-div">
            <span className="projects__button" onClick={() => toggleTab(1)}>
              View More
              <i className="uil uil-arrow-right projects__button-icon"></i>
            </span>
          </div>

          <div
            className={
              toggleState === 1
                ? "projects__modal active-modal"
                : "projects__modal"
            }
          >
            <div className="projects__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times projects__modal-close"
              ></i>

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
      </div>
    </section>
  );
};

export default Projects;
