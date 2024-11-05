import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <section className="body" id="experience">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">My Voulnteer Journey</span>
      <div class="container">
        <div class="main-timeline">
          <div class="timeline">
            <div class="icon"></div>
            <div class="date-content">
              <div class="date-outer">
                <span class="date">
                  <span class="month">1 Years</span>
                  <span class="year">2024</span>
                </span>
              </div>
            </div>
            <div class="timeline-content">
              <h5 class="title">Technical Lead - Women In Foss UWU</h5>
              <p class="description">
                As Technical Lead at Women in FOSS UWU, I empower and mentor
                female students in open-source projects, fostering skills and
                confidence to make meaningful tech contributions.
              </p>
            </div>
          </div>
          <div class="timeline">
            <div class="icon"></div>
            <div class="date-content">
              <div class="date-outer">
                <span class="date">
                  <span class="month">1 Years</span>
                  <span class="year">2024</span>
                </span>
              </div>
            </div>
            <div class="timeline-content">
              <h5 class="title">Editorial Member - IEEE CS Chapter UWU</h5>
              <p class="description">
                I’m excited to be an editorial member of the UWU IEEE Computer
                Society Chapter, where I will help create content that showcases
                our activities and technological advancements.
              </p>
            </div>
          </div>
          <div class="timeline">
            <div class="icon"></div>
            <div class="date-content">
              <div class="date-outer">
                <span class="date">
                  <span class="month">1 Years</span>
                  <span class="year">2023</span>
                </span>
              </div>
            </div>
            <div class="timeline-content">
              <h5 class="title">Core Member Women in FOSS UWU</h5>
              <p class="description">
                Last year, I became a core member of Women in FOSS at Uva
                Wellassa University, where I promote gender diversity in tech
                and support women in open-source software development.
              </p>
            </div>
          </div>
          <div class="timeline">
            <div class="icon"></div>
            <div class="date-content">
              <div class="date-outer">
                <span class="date">
                  <span class="month">1 Years</span>
                  <span class="year">2022</span>
                </span>
              </div>
            </div>
            <div class="timeline-content">
              <h5 class="title">Core Member Computer Society UWU</h5>
              <p class="description">
                In 2022, I was appointed as a core member of the Computer
                Society at Uva Wellassa University, where I contribute to
                organizing events and initiatives that enhance our members'
                technical skills.
              </p>
            </div>
          </div>
          <div class="timeline">
            <div class="icon"></div>
            <div class="date-content">
              <div class="date-outer">
                <span class="date">
                  <span class="month">6 Months</span>
                  <span class="year">2022</span>
                </span>
              </div>
            </div>
            <div class="timeline-content">
              <h5 class="title">Traineer at Bank of Ceylon</h5>
              <p class="description">
                In 2022, I worked as a trainee at the Bank of Ceylon (BOC),
                gaining practical experience in banking operations and customer
                service while developing valuable skills in finance and
                communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
