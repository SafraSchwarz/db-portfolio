import React from "react";

import AboutMeButton from "./AboutMeButton";
import ProjectsButton from "./ProjectsButton";
import ContactButton from "./ContactButton";
import SkillsButton from "./SkillsButton";
import FillerButton from "./FillerButton";

const LandingPage = (props) => {
  return (
    <div className="landing-page">
      <h1 className="my-name">Davon Belvin</h1>
      <p className="my-title">Front End Developer</p>
      <div className="button-container">
        <AboutMeButton handleAboutMeClick={props.handleAboutMeClick} />
        <ProjectsButton />
        <SkillsButton handleSkillsClick={props.handleSkillsClick} />
      </div>
      <div className="button-container-row-2">
        <ContactButton />
        <FillerButton />
      </div>
    </div>
  );
};

export default LandingPage;
