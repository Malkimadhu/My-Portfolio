import React from "react";
import Progress_bar from "./Progress_bar";

const FrontEnd = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">FrontEnd Developer</h3>
      <div className="skills__box">
        {/* <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Bootstrap</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div> */}

        <div className="App">
        <div className="skill__item">
          <Progress_bar bgcolor="rgba(27, 182, 161, 1)" progress="90" height={20} name={"HTML"}/>
          <Progress_bar bgcolor="rgba(27, 182, 161, 1)" progress="90" height={20} name={"css"} />
          <Progress_bar bgcolor="rgba(27, 182, 161, 1)" progress="80" height={20} name={"React"}/>
          <Progress_bar bgcolor="rgba(27, 182, 161, 1)" progress="60" height={20} name={"JavaScript"}/>
          <Progress_bar bgcolor="rgba(27, 182, 161, 1)" progress="80" height={20} name={"Boostrap"}/>
          <Progress_bar bgcolor="rgba(27, 182, 161, 1)" progress="50" height={20} name={"Git"}/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FrontEnd;
