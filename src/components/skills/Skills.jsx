import React from "react";
import { Fade } from "react-awesome-reveal";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <Fade direction="down">
        <h2 className="section_title">Skills</h2>
        <span className="section_subtitle">My technical level</span>
      </Fade>
      <div className="skills_container container grid">
        <Fade direction="left" duration={2000}>
          <Frontend />
        </Fade>
        <Fade direction="right" duration={2000}>
          <Backend />
        </Fade>
      </div>
    </section>
  );
};

export default Skills;
