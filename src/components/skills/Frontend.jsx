import React from "react";
import { frontEndrow1, frontEndrow2 } from "./Data";
import { Fade } from "react-awesome-reveal";
const Frontend = () => {
  return (
    <div className="skills_content">
      <Fade direction="down" duration={2300}>
        <h3 className="skills_title">Frontend developer</h3>
      </Fade>

      <Fade duration={2600}>
        <div className="skills_box">
          <div className="skills_group">
            {frontEndrow1.map((skill) => {
              return (
                <div className="skills_data">
                  <i className="bx bx-badge-check"></i>
                  <div>
                    <h3 className="skills_name">{skill.skills_name}</h3>
                    <span className="skills_level">{skill.skills_level}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="skills_group">
            {frontEndrow2.map((skill) => {
              return (
                <div className="skills_data">
                  <i className="bx bx-badge-check"></i>
                  <div>
                    <h3 className="skills_name">{skill.skills_name}</h3>
                    <span className="skills_level">{skill.skills_level}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Frontend;
