import React from "react";
import { Zoom } from "react-awesome-reveal";
const Social = () => {
  return (
    <div className="home_social">
      <Zoom cascade>
      <a href="https://instagram.com/" className="home_social-icon" target="_blank">
        <i className="uil uil-instagram"></i>
      </a>
      <a href="https://www.linkedin.com/in/" className="home_social-icon" target="_blank">
        <i className="uil uil-linkedin-alt"></i>
      </a>
      <a href="https://github.com/" className="home_social-icon" target="_blank">
        <i className="uil uil-github-alt"></i>
      </a>
      </Zoom>
    </div>
  );
};

export default Social;
