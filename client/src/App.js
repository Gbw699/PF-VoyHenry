import React from "react";
import { Routes, Route, useLocation } from "react-router";
import "./App.css";
import axios from "axios";
import NavBar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";

axios.defaults.baseURL = "";

function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route
          path="/home"
          element={<Home />}
        />
      </Routes>
    </div>
  );
}

export default App;
