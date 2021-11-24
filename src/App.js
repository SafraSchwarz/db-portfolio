import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import React, { useState } from "react";

import LandingPage from "./components/LandingPage";
import AboutMe from "./components/AboutMe";
import AboutMeButton from "./components/AboutMeButton";
import Icon from "./components/Icon";

function App() {
  const [showAboutMe, setShowAboutMe] = useState(false);

  let activeTile = <Icon />;

  const handleAboutMeClick = (event) => {
    event.preventDefault();
    setShowAboutMe(!showAboutMe);
  };

  if (showAboutMe) {
    activeTile = <AboutMe />;
  } else {
    activeTile = <Icon />;
  }

  return (
    <div className="grid">
      <LandingPage handleAboutMeClick={handleAboutMeClick} />
      {activeTile}
    </div>
  );
}

export default App;
