import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import React, { useState } from "react";

import LandingPage from "./components/LandingPage";
import AboutMe from "./components/AboutMe";
import AboutMeButton from "./components/AboutMeButton";
import Icon from "./components/Icon";

function App() {
  const [aboutMeClicked, setAboutMeClicked] = useState(false);

  return (
    <div className="grid">
      <LandingPage />
      <Icon />
    </div>
  );
}

export default App;
