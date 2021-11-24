import React from "react";

const AboutMeButton = (props) => {
  return (
    <div className="about-me-button" onClick={props.handleAboutMeClick}>
      About me
    </div>
  );
};

export default AboutMeButton;
