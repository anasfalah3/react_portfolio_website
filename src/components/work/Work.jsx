import React from "react";
import { Fade } from "react-awesome-reveal";

import "./work.css";
import Works from "./Works";
const Work = () => {
  return (
    <section className="work section" id="portfolio">
      <Fade direction="down">
        <h2 className="section_title">Portfolio</h2>
        <span className="section_subtitle">Most recent works</span>
      </Fade>

      <Works />
    </section>
  );
};

export default Work;
