import React from "react";
import { Fade } from "react-awesome-reveal";
const Backend = () => {
  return (
    <div className="skills_content">
      <Fade direction="down" duration={2300}>
        <h3 className="skills_title">Backend developer</h3>
      </Fade>

      <Fade duration={2600}>
        <div className="skills_box">
          <div className="skills_group">
            <div className="skills_data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="skills_name">PHP</h3>
                <span className="skills_level">Intermediate</span>
              </div>
            </div>
            <div className="skills_data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="skills_name">Laravel</h3>
                <span className="skills_level">Basic</span>
              </div>
            </div>
            <div className="skills_data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="skills_name">Python</h3>
                <span className="skills_level">Intermediate</span>
              </div>
            </div>
          </div>
          <div className="skills_group">
            <div className="skills_data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="skills_name">MySQL</h3>
                <span className="skills_level">Intermediate</span>
              </div>
            </div>
            <div className="skills_data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="skills_name">MongoDB</h3>
                <span className="skills_level">Intermediate</span>
              </div>
            </div>
            <div className="skills_data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="skills_name">SQL</h3>
                <span className="skills_level">Intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Backend;
