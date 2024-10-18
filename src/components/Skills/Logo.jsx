import React from "react";
import css from "../../assets/skills/css.png";
import html from "../../assets/skills/html.png";
import react from "../../assets/skills/react.png";
import js from "../../assets/skills/js.png";
import boostarp from "../../assets/skills/boostrap.png";
import git from "../../assets/skills/git.png";
import gitt from "../../assets/skills/Gitt.png";
import figma from "../../assets/skills/figma.png";
import postman from "../../assets/skills/postman.jpg";
import canva from "../../assets/skills/canva.png";
import "./skills.css";

const Logo = () => {
  return (
    <section className="logo">
        <div>
      <img src={html} alt="HTML5 Logo" width="100" height="100"></img>
      <img src={css} alt="CSS3 Logo" width="90" height="90"></img>
      <img src={react} alt="React Logo" width="95" height="95"></img>
      <img src={js} alt="JS Logo" width="100" height="100"></img>
      <img src={boostarp} alt="Boostrap Logo" width="110" height="110"></img>
      <img src={git} alt="Git hub Logo" width="120" height="120"></img>
      <img src={gitt} alt="Git Logo" width="95" height="95"></img>
      <img src={figma} alt="Figma Logo" width="90" height="90"></img>
      <img src={postman} alt="Postman Logo" width="95" height="95"></img>
      <img src={canva} alt="canva Logo" width="100" height="100"></img>
      </div>

      <div>
      <img src={html} alt="HTML5 Logo" width="100" height="100"></img>
      <img src={css} alt="CSS3 Logo" width="90" height="90"></img>
      <img src={react} alt="React Logo" width="95" height="95"></img>
      <img src={js} alt="JS Logo" width="100" height="100"></img>
      <img src={boostarp} alt="Boostrap Logo" width="110" height="110"></img>
      <img src={git} alt="Git hub Logo" width="120" height="120"></img>
      <img src={html} alt="HTML5 Logo" width="100" height="100"></img>
      <img src={css} alt="CSS3 Logo" width="90" height="90"></img>
      <img src={react} alt="React Logo" width="95" height="95"></img>
      <img src={js} alt="JS Logo" width="100" height="100"></img>
      </div>
    </section>
    
  );
};

export default Logo;
