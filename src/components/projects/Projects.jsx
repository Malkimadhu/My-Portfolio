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

  const [toggleState2, setToggleState2] = useState(0);

  const toggleTab2 = (index) => {
    setToggleState2(index);
  };

  const [toggleState3, setToggleState3] = useState(0);

  const toggleTab3 = (index) => {
    setToggleState3(index);
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

              <h3 className="projects__modal-title">
                GardenGURU Web Application
              </h3>
              <p className="projects__modal-description">
                The Garden Guru project uses HTML, JavaScript, CSS, and
                Bootstrap for the frontend to create a responsive design. For
                the backend, we use PHP to manage server-side logic, with MySQL
                handling data storage and retrieval efficiently.
              </p>

              <ul className="projects__modal-projects grid">
                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">Plant Suggestions</p>
                </li>

                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">Communication Forum</p>
                </li>

                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">Advertisement</p>
                </li>

                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">Plant Selling</p>
                </li>
                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">Reporting</p>
                </li>

                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">Payment Gateway</p>
                </li>

                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">Newsfeed</p>
                </li>

                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">Blog</p>
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
            <span className="projects__button" onClick={() => toggleTab2(1)}>
              View More
              <i className="uil uil-arrow-right projects__button-icon"></i>
            </span>
          </div>

          <div
            className={
              toggleState2 === 1
                ? "projects__modal active-modal"
                : "projects__modal"
            }
          >
            <div className="projects__modal-content">
              <i
                onClick={() => toggleTab2(0)}
                className="uil uil-times projects__modal-close"
              ></i>

              <h3 className="projects__modal-title">Castello Hotel Web Application</h3>
              <p className="projects__modal-description">
                The Castello Hotel project features a React-based frontend for a
                dynamic and responsive user experience. On the backend, we use
                Django to handle server-side operations, while MySQL is used as
                the database to manage user reservations and other data
                efficiently.
              </p>

              <ul className="projects__modal-projects grid">
                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">Room Booking</p>
                </li>

                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">Restuerent</p>
                </li>

                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">Rating and Feedback</p>
                </li>

                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">User Registration</p>
                </li>

                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">User Registration</p>
                </li>

                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">Admin Dashborad</p>
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
            <span className="projects__button" onClick={() => toggleTab3(1)}>
              View More
              <i className="uil uil-arrow-right projects__button-icon"></i>
            </span>
          </div>

          <div
            className={
              toggleState3 === 1
                ? "projects__modal active-modal"
                : "projects__modal"
            }
          >
            <div className="projects__modal-content">
              <i
                onClick={() => toggleTab3(0)}
                className="uil uil-times projects__modal-close"
              ></i>

              <h3 className="projects__modal-title">
                Trend Hire Web Application
              </h3>
              <p className="projects__modal-description">
                The Trend Hire project utilizes HTML, CSS, and JavaScript for
                the frontend, along with Bootstrap for responsive design. The
                backend is powered by Java Servlet for handling server-side
                logic, while MySQL manages data storage efficiently for the
                online job application portal.
              </p>

              <ul className="projects__modal-projects grid">
                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                  User registration and profile management
                  </p>
                </li>

                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                  Job application process
                  </p>
                </li>

                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                  Company registration and job posting
                  </p>
                </li>

                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                  Administration module for platform oversight
                  </p>
                </li>

                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                  User-friendly interface
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
