// Filename - Progress_bar.js

import React from "react";
import "./skills.css"

const Progress_bar = ({ bgcolor, progress, height, name }) => {
  const Parentdiv = {
    height: height,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 40,
    margin: 20,
  };


  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 10,
    textAlign: "right",
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };

  const namestext = {
    color: "gray",
    fontWeight: 100,
  };

  return (
    <div className="skills1">
        <div className="name-container">
            <span style={namestext}>{`${name}`}</span>
        </div>
        
       <div className="inner-container">
            <div style={Parentdiv}>
            
            <div style={Childdiv}>
                
                <span style={progresstext}>{`${progress}%`}</span>
            </div>
            
            </div>
        </div>
    </div>
  );
};

export default Progress_bar;
