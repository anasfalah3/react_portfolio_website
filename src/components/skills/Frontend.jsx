import React from "react";
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
            <div className="skills_data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="skills_name">HTML</h3>
                <span className="skills_level">Basic</span>
              </div>
            </div>
            <div className="skills_data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="skills_name">CSS</h3>
                <span className="skills_level">Advanced</span>
              </div>
            </div>
            <div className="skills_data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="skills_name">JavaScript</h3>
                <span className="skills_level">Intermediate</span>
              </div>
            </div>
          </div>
          <div className="skills_group">
            <div className="skills_data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="skills_name">Bootstrap</h3>
                <span className="skills_level">Intermediate</span>
              </div>
            </div>
            <div className="skills_data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="skills_name">Git</h3>
                <span className="skills_level">Intermediate</span>
              </div>
            </div>
            <div className="skills_data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="skills_name">React</h3>
                <span className="skills_level">Intermediate</span>
              </div>
            </div>
          </div>
      </div>
        </Fade>
    </div>
  );
};

export default Frontend;
