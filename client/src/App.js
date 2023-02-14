import React from "react";
import "./App.css";
import axios from "axios";
import LandingPage from "./views/LandingPage";
axios.defaults.baseURL = "";

function App() {
  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;
