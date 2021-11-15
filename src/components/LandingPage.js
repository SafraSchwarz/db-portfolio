import React from "react";

import AboutMeButton from "./AboutMeButton";

const LandingPage = (props) => {
  return (
    <div className="landing-page">
      <h1 className="my-name">Davon Belvin</h1>
      <p className="my-title">Front End Developer</p>
      <div>
        <AboutMeButton />
      </div>
    </div>
  );
};

export default LandingPage;
