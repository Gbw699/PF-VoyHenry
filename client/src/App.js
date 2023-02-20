import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import axios from "axios";
import NavBar from "./components/Navbar/Navbar";
import LandingPage from "./views/LandingPage/LandingPage";
import LogIn from "./views/LogIn/LogIn";
import SignUp from "./views/SignUp/SignUp";
import Home from "./views/Home/Home";
import MarketPlace from "./views/MarketPlace/MarketPlace";
import Footer from "./views/Footer/Footer";
import Profile from "./views/Profile/Profile";
import DetailMarketPlace from "./views/DetailMarketPlace/DetailMarketPlace";
import ShoppingCart from "./views/ShoppingCart/ShoppingCart";
import Blog from "./views/Blog/Blog";
import Plan from "./views/Plan/Plan";
import AboutUs from "./views/AboutUs/AboutUs";
import Error404 from "./views/Error404/Error404";
import PlanForm from "./components/Home/PlanForm";

axios.defaults.baseURL = "http://localhost:3001/";

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
        />
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
        <Route
          path="/plans/create"
          element={<PlanForm />}
        />
        <Route
          path="/blog"
          element={<Blog />}
        />
        <Route
          path="/plans"
          element={<Plan />}
        />
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
          path="/marketplace/shoppingCart"
          element={<ShoppingCart />}
        />
        <Route
          path="/aboutUs"
          element={<AboutUs />}
        />
        <Route
          path="*"
          element={<Error404 />}
        />
      </Routes>
      {location.pathname !== "/" &&
        location.pathname !== "/signUp" &&
        location.pathname !== "/logIn" && <Footer />}
    </div>
  );
}

export default App;
