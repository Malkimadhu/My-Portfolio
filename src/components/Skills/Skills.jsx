import React from "react";
import "./skills.css";
import FrontEnd from "./FrontEnd";
import BackEnd from "./Backend";
import Logo from "./Logo";
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
import php from "../../assets/skills/php.png";
import java from "../../assets/skills/java.png";
import spring from "../../assets/skills/spring.png";
import sql from "../../assets/skills/sql.png";
import python from "../../assets/skills/python.png";
import dj from "../../assets/skills/dj.png";
import vs from "../../assets/skills/vs.png";
import ij from "../../assets/skills/ij.png";

const Skills = () => {
  return (
    <section className="Skills section" id="Skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Level</span>

      <section className="logo">
        <p className="skill__paragraph">
          I have experience in both manual and automated testing, with the
          ability to work on front-end and back-end quality assurance. I focus
          on designing test cases, executing them effectively, and identifying
          issues to help deliver reliable and user-friendly software.
        </p>
        <Logo name={html} logo="HTML5 Logo" width={100} height={100} />
        <Logo name={css} logo="css Logo" width={100} height={100} />
        <Logo name={react} logo="React Logo" width={100} height={100} />
        <Logo name={js} logo="Java Script Logo" width={100} height={100} />
        <Logo name={boostarp} logo="Boostrap Logo" width={100} height={100} />
        <Logo name={git} logo="Git hub Logo" width={100} height={100} />
        <Logo name={gitt} logo="Git Logo" width={100} height={100} />
        <Logo name={figma} logo="Figma Logo" width={100} height={100} />
        <Logo name={postman} logo="Postman Logo" width={100} height={100} />
        <Logo name={canva} logo="Cnva Logo" width={100} height={100} />
        <Logo name={php} logo="Php Logo" width={100} height={100} />
        <Logo name={java} logo="Java Logo" width={100} height={100} />
        <Logo name={spring} logo="Spring Logo" width={100} height={100} />
        <Logo name={sql} logo="MySQL Logo" width={100} height={100} />
        <Logo name={python} logo="Python Logo" width={100} height={100} />
        <Logo name={dj} logo="Django Logo" width={100} height={100} />
        <Logo name={vs} logo="VSCode Logo" width={100} height={100} />
        <Logo name={ij} logo="Intelij IDEA Logo" width={100} height={100} />
      </section>
      <div className="skills__container container grid">
        <FrontEnd />
        <BackEnd />
      </div>
    </section>
  );
};

export default Skills;
