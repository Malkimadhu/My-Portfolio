import React, { useState } from "react";
import "./experience.css";

const Experience = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={()=> toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={()=> toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Undergraduate</h3>
                <span className="qualification__subtitle">
                  Uva Wellassa University of Sri Lanka
                </span>
                <div className="qualification__calander">
                  <i class="uil uil-calendar-alt"></i> 2021-present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">IT Diploma</h3>
                <span className="qualification__subtitle">
                  ESOFT Metro Campus
                </span>
                <div className="qualification__calander">
                  <i class="uil uil-calendar-alt"></i> 2021 (6 months)
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Traineer at BOC</h3>
                <span className="qualification__subtitle">
                  Bank of Cyelon - Kotiyakumbura
                </span>
                <div className="qualification__calander">
                  <i class="uil uil-calendar-alt"></i> 2021 (6 months)
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Adavnced Level - Physics Stream
                </h3>
                <span className="qualification__subtitle">
                  Kegalu Balika Vidyalaya
                </span>
                <div className="qualification__calander">
                  <i class="uil uil-calendar-alt"></i> 2017-2019
                </div>
              </div>
            </div>
          </div>

          <div className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Technical Lead - Women in FOSS Commiunity UWU
                </h3>
                <span className="qualification__subtitle">
                  Uva Wellassa University of Sri Lanka
                </span>
                <div className="qualification__calander">
                  <i class="uil uil-calendar-alt"></i> 2023-2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Member of Editorial IEEE UWU
                </h3>
                <span className="qualification__subtitle">
                  Uva Wellassa University of Sri Lanka
                </span>
                <div className="qualification__calander">
                  <i class="uil uil-calendar-alt"></i> 2023-2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Women in FOSS Core Member UWU
                </h3>
                <span className="qualification__subtitle">
                  Uva Wellassa University of Sri Lanka
                </span>
                <div className="qualification__calander">
                  <i class="uil uil-calendar-alt"></i> 2022-2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
