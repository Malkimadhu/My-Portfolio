import React , { useEffect }  from "react";

const BackEnd = () => {
  const skills = [
    { name: "HTML", percentage: 90 },
    { name: "Css", percentage: 90 },
    { name: "React", percentage: 80 },
    { name: "JavaScript", percentage: 60 },
    { name: "Boostrap", percentage: 80 },
    { name: "Git", percentage: 50 },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skill-content">
        <div className="section-heading text-center">
          <h2>FrontEnd</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {skills.map((skill, index) => (
                <div key={index} className="single-skill-content">
                  <div className="barWrapper">
                    <span className="progressText">{skill.name}</span>
                    <div className="single-progress-txt">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: `${skill.percentage}%` }} // This will dynamically set the width
                        ></div>
                      </div>
                      <h3>{skill.percentage}%</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackEnd;
