import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import React, { useState } from "react";

import LandingPage from "./components/LandingPage";
import AboutMe from "./components/AboutMe";
import AboutMeButton from "./components/AboutMeButton";
import Icon from "./components/Icon";
import Skills from "./components/Skills";

function App() {
  // const [showAboutMe, setShowAboutMe] = useState(false);

  const [activeTile, setActiveTile] = useState(<Icon />);

  const handleAboutMeClick = (event) => {
    event.preventDefault();
    setActiveTile(<AboutMe />);
  };

  const handleSkillsClick = (event) => {
    event.preventDefault();
    setActiveTile(<Skills />);
  };

  return (
    <div className="grid">
      <LandingPage
        handleAboutMeClick={handleAboutMeClick}
        handleSkillsClick={handleSkillsClick}
      />
      {activeTile}
    </div>
  );
}

export default App;
