import React from "react";
import "./skills.css";

const Logo = ({name,logo,width,height}) => {
  return (

    <section >
      
      <img className="logo__image" src={name} alt={logo} width={width} height={height}></img>
    </section>
    
  );
};

export default Logo;
