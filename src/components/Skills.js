import React from "react";
import { skills } from "./projectdata";
import '../styling/skills.css';

export default function Skills() {
  return (
    <>
        <h1 className="skills-title">Skills &amp; Technologies</h1>
        <div className="skills-container">
            {skills.map((skill) => (
                <div key={skill} className="card">
                    <div className="card-body">
                        <span className="card-text">{skill}</span>
                    </div>
                </div>
            ))}
      </div>
    </>
  );
}