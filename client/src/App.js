import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import axios from "axios";
import NavBar from "./components/Navbar/Navbar";
import LandingPage from "./views/LandingPage/LandingPage";
import LogIn from "./views/LogIn/LogIn";
import SignUp from "./views/SignUp/SignUp";
// import Home from "./views/Home/Home";
import MarketPlace from "./views/MarketPlace/MarketPlace";
import Footer from "./views/Footer/Footer";
import Profile from "./views/Profile/Profile";
import DetailMarketPlace from "./views/DetailMarketPlace/DetailMarketPlace";
import ShoppingCart from "./views/ShoppingCart/ShoppingCart";

axios.defaults.baseURL = "";

function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/" &&
        location.pathname !== "/signUp" &&
        location.pathname !== "/logIn" && <NavBar />}
      <Routes>
        {/* <Route
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
        {/* <Route
          path="/blog"
          element={<Blog />}
        /> */}
        {/* <Route
          path="/plans"
          element={<Plans />}
        /> */}
        <Route
          path="/profile"
          element={<Profile />}
        >
          {/* <Route
            path="edit"
            element={<ProfileEdit />}
          /> */}
        </Route>
        <Route
          path="/marketplace"
          element={<MarketPlace />}
        />
        <Route
          path="/marketplace/:id"
          element={<DetailMarketPlace />}
        />
        <Route
          path="/shoppingCart"
          element={<ShoppingCart />}
        />
      </Routes>
      {location.pathname !== "/" &&
        location.pathname !== "/signUp" &&
        location.pathname !== "/logIn" && <Footer />}
    </div>
  );
}

export default App;
