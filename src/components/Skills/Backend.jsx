// import React from "react";
// import Progress_bar from "./Progress_bar";

// const Backend = () => {
//   return (
//     <div className="skills__content">
//       <h3 className="skills__title">BackEnd Developer</h3>
//       <div className="skills__box">
//         {/* <div className="skills__group">
//           <div className="skills__data">
//             <i class="bx bx-badge-check"></i>

//             <div>
//               <h3 className="skills__name">PHP</h3>
//               <span className="skills__level">Intermediate</span>
//             </div>
//           </div>
//           <div className="skills__data">
//             <i class="bx bx-badge-check"></i>

//             <div>
//               <h3 className="skills__name">Java</h3>
//               <span className="skills__level">Basic</span>
//             </div>
//           </div>
//           <div className="skills__data">
//             <i class="bx bx-badge-check"></i>

//             <div>
//               <h3 className="skills__name">Django</h3>
//               <span className="skills__level">Basic</span>
//             </div>
//           </div>
//         </div>

//         <div className="skills__group">
//           <div className="skills__data">
//             <i class="bx bx-badge-check"></i>

//             <div>
//               <h3 className="skills__name">MySQL</h3>
//               <span className="skills__level">Intermediate</span>
//             </div>
//           </div>
//           <div className="skills__data">
//             <i class="bx bx-badge-check"></i>

//             <div>
//               <h3 className="skills__name">Firebase</h3>
//               <span className="skills__level">Basic</span>
//             </div>
//           </div>
//           <div className="skills__data">
//             <i class="bx bx-badge-check"></i>

//             <div>
//               <h3 className="skills__name">C</h3>
//               <span className="skills__level">Basic</span>
//             </div>
//           </div>
//         </div> */}
//         <div className="App">
//           <Progress_bar bgcolor="rgba(27, 182, 161, 1)" progress="80" height={20} name={"PHP"}/>
//           <Progress_bar bgcolor="rgba(27, 182, 161, 1)" progress="70" height={20} name={"Java"}/>
//           <Progress_bar bgcolor="rgba(27, 182, 161, 1)" progress="50" height={20} name={"Spring boot"}/>
//           <Progress_bar bgcolor="rgba(27, 182, 161, 1)" progress="85" height={20} name={"SQL"}/>
//           <Progress_bar bgcolor="rgba(27, 182, 161, 1)" progress="45" height={20} name={"Phython"}/>
//           <Progress_bar bgcolor="rgba(27, 182, 161, 1)" progress="70" height={20} name={"Django"}/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Backend;

import React from "react";

const BackEnd = () => {
  const skills = [
    { name: "PHP", percentage: 80 },
    { name: "Java", percentage: 70 },
    { name: "Spring boot", percentage: 50 },
    { name: "SQL", percentage: 85 },
    { name: "Python", percentage: 45 },
    { name: "Django", percentage: 70 },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skill-content">
        <div className="section-heading text-center">
          <h2>BackEnd</h2>
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
