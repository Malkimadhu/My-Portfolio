import React from "react";
import Progress_bar from "./Progress_bar";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">BackEnd Developer</h3>
      <div className="skills__box">
        {/* <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">PHP</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Java</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Django</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Firebase</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">C</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div> */}
        <div className="App">
          <Progress_bar bgcolor="rgba(27, 182, 161, 1)" progress="80" height={20} name={"PHP"}/>
          <Progress_bar bgcolor="rgba(27, 182, 161, 1)" progress="70" height={20} name={"Java"}/>
          <Progress_bar bgcolor="rgba(27, 182, 161, 1)" progress="50" height={20} name={"Spring boot"}/>
          <Progress_bar bgcolor="rgba(27, 182, 161, 1)" progress="85" height={20} name={"SQL"}/>
          <Progress_bar bgcolor="rgba(27, 182, 161, 1)" progress="45" height={20} name={"Phython"}/>
          <Progress_bar bgcolor="rgba(27, 182, 161, 1)" progress="70" height={20} name={"Django"}/>
        </div>
      </div>
    </div>
  );
};

export default Backend;
