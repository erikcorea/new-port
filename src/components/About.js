import React from "react";
import "../styling/about.css";

const About = () => {
  
  return (
    <div className="about">
        <div className="name">
            <h1>Hi, Im Erik Correa.</h1>
        </div>
        <div className="title">
            <h2>Software Engineer</h2>
        </div>
        <div className="about-paragraph">
            <p>
                Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur.
                Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! 
                Maiores minima consectetur 
            </p>
        </div>
        <div className="buttons">
            <button>RESUME</button>
            <button>LinkedIn</button>
            <button>GitHub</button>
        </div>
    </div>
  );
};

export default About;