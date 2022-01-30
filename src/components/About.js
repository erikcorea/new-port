import React from "react";
import "../styling/about.css";
import { SocialIcon } from 'react-social-icons';

const About = () => {
  
  return (
    <div className="about">
        <div className="name">
            <h1>Hi, Im <span className="erik">Erik Correa</span>.</h1>
        </div>
        <div className="title">
            <h2>Software Engineer</h2>
        </div>
        <div className="about-paragraph">
            <p>
            Hello! I'm Erik Correa, a Chicago based software engineer.(willing to relocate) 
            I am experienced in full stack development. My skills allow me to tackle complex programming problems presented on the job.
            My love for programming stems from my passion to know how things work, how to build them, and how to fix them.
            Contact me to get started working together! 
            </p>
        </div>
        <div className="buttons">
            <button className="resume">RESUME</button>
            <div className="icons">
                <div className="linkedin">
                    <SocialIcon  url="https://www.linkedin.com/in/erik-correa/" />
                </div>
                <div className="github">
                    <SocialIcon url="https://github.com/erikcorea" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;