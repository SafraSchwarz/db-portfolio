import React from "react";

const SkillsButton = (props) => {
  return (
    <div className="skills-button" onClick={props.handleSkillsClick}>
      Skills
    </div>
  );
};

export default SkillsButton;
