import React from "react";
import { Routes, Route, useLocation } from "react-router";
import "./App.css";
import axios from "axios";
import NavBar from "./components/Navbar/Navbar";
// import Home from "./views/Home";
import LandingPage from "./views/LandingPage/LandingPage";
import LogIn from "./views/LogIn/LogIn";
import SignUp from "./views/SignUp/SignUp";
import Home from "./views/Home/Home";

axios.defaults.baseURL = "";

function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/" &&
        location.pathname !== "/signUp" &&
        location.pathname !== "/logIn" && <NavBar />}

      <Routes>
        <Route
          path="/home"
          element={<Home />}

        /> */}
        <Route
          path="/"
          element={<LandingPage />}
        />
        <Route
          path="/logIn"
          element={<LogIn />}
        />
        <Route
          path="/signUp"
          element={<SignUp />}
        />
      </Routes>
    </div>
  );
}

export default App;