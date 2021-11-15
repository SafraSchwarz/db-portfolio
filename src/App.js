import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import React, { useState } from "react";

import LandingPage from "./components/LandingPage";
import AboutMe from "./components/AboutMe";
import AboutMeButton from "./components/AboutMeButton";

function App() {
  const [aboutMeClicked, setAboutMeClicked] = useState(false);

  return (
    <div>
      <LandingPage />

      <AboutMeButton />
    </div>
  );
}

export default App;
