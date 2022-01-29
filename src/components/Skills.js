import React from "react";
import { skills } from "./projectdata";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="text-center">
          <h1 className="title">
            Skills &amp; Technologies
          </h1>
        </div>
        <div className="skilll">
          {skills.map((skill) => (
            <div key={skill} className="box">
              <div className="boxx">
                <span className="reall">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}