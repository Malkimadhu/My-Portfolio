// import React from "react";
// import Progress_bar from "./Progress_bar";

// const FrontEnd = () => {
//   return (
//     <div className="skills__content">
//       <h3 className="skills__title">FrontEnd Developer</h3>
//       <div className="skills__box">
//         {/* <div className="skills__group">
//           <div className="skills__data">
//             <i class="bx bx-badge-check"></i>

//             <div>
//               <h3 className="skills__name">HTML</h3>
//               <span className="skills__level">Advanced</span>
//             </div>
//           </div>
//           <div className="skills__data">
//             <i class="bx bx-badge-check"></i>

//             <div>
//               <h3 className="skills__name">CSS</h3>
//               <span className="skills__level">Advanced</span>
//             </div>
//           </div>
//           <div className="skills__data">
//             <i class="bx bx-badge-check"></i>

//             <div>
//               <h3 className="skills__name">JavaScript</h3>
//               <span className="skills__level">Basic</span>
//             </div>
//           </div>
//         </div>

//         <div className="skills__group">
//           <div className="skills__data">
//             <i class="bx bx-badge-check"></i>

//             <div>
//               <h3 className="skills__name">Bootstrap</h3>
//               <span className="skills__level">Intermediate</span>
//             </div>
//           </div>
//           <div className="skills__data">
//             <i class="bx bx-badge-check"></i>

//             <div>
//               <h3 className="skills__name">Git</h3>
//               <span className="skills__level">Intermediate</span>
//             </div>
//           </div>
//           <div className="skills__data">
//             <i class="bx bx-badge-check"></i>

//             <div>
//               <h3 className="skills__name">React</h3>
//               <span className="skills__level">Intermediate</span>
//             </div>
//           </div>
//         </div> */}

//         <div className="App">
//         <div className="skill__item">
//           <Progress_bar bgcolor="rgba(27, 182, 161, 1)" progress="90" height={20} name={"HTML"}/>
//           <Progress_bar bgcolor="rgba(27, 182, 161, 1)" progress="90" height={20} name={"css"} />
//           <Progress_bar bgcolor="rgba(27, 182, 161, 1)" progress="80" height={20} name={"React"}/>
//           <Progress_bar bgcolor="rgba(27, 182, 161, 1)" progress="60" height={20} name={"JavaScript"}/>
//           <Progress_bar bgcolor="rgba(27, 182, 161, 1)" progress="80" height={20} name={"Boostrap"}/>
//           <Progress_bar bgcolor="rgba(27, 182, 161, 1)" progress="50" height={20} name={"Git"}/>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default FrontEnd;

import React from "react";

const FrontEnd = () => {
  return (
    <section id="skills" className="skills">
      <div className="skill-content">
        <div className="section-heading text-center">
          <h2>FrontEnd</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="single-skill-content">
                <div className="barWrapper">
                  <span className="progressText">Adobe Photoshop</span>
                  <div className="single-progress-txt">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="10"
                        aria-valuemax="100"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                    <h3>90%</h3>
                  </div>
                </div>

                <div className="barWrapper">
                  <span className="progressText">Adobe Illustrator</span>
                  <div className="single-progress-txt">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="85"
                        aria-valuemin="10"
                        aria-valuemax="100"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                    <h3>85%</h3>
                  </div>
                </div>

                <div className="barWrapper">
                  <span className="progressText">Adobe After Effects</span>
                  <div className="single-progress-txt">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="97"
                        aria-valuemin="10"
                        aria-valuemax="100"
                        style={{ width: "97%" }}
                      ></div>
                    </div>
                    <h3>97%</h3>
                  </div>
                </div>

                <div className="barWrapper">
                  <span className="progressText">Sketch</span>
                  <div className="single-progress-txt">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="10"
                        aria-valuemax="100"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                    <h3>90%</h3>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontEnd;

