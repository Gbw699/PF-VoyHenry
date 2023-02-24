import React, { useEffect } from "react";
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
import DetailPlan from "./components/Plan/DetailPlan";
import BlogDetail from "./views/Blog/BlogDetail";
import Auth from "./views/Auth/Auth";
import Users from "./views/Users/Users";
import ProfileUser from "./views/ProfileUser/ProfileUser";
import RecoveryPass from "./views/RecoveryPass/Recoverypass";
import ChangePass from "./views/ChangePass/ChangePass";

axios.defaults.baseURL = "http://localhost:3001/";
const cookie = document.cookie.split("=");
axios.defaults.headers.common["Authorization"] = `Bearer ${cookie[1]}`;

function App() {
  useEffect(() => {}, [document.cookie]);

  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/" &&
        location.pathname !== "/recoveryPass" &&
        location.pathname !== "/changePass" &&
        location.pathname !== "/signUp" &&
        location.pathname !== "/logIn" && <NavBar />}
      <Auth />
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
          path="/recoveryPass"
          element={<RecoveryPass />}
        />
        <Route
          path="/changePass"
          element={<ChangePass />}
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
          path="/plans/:id"
          element={<DetailPlan />}
        />
        <Route
          path="/blog"
          element={<Blog />}
        />
        <Route
          path="/blog/:id"
          element={<BlogDetail />}
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
          path="/users"
          element={<Users />}
        />
        <Route
          path="/users/:nickName"
          element={<ProfileUser />}
        />
        <Route
          path="*"
          element={<Error404 />}
        />
      </Routes>
      {location.pathname !== "/" &&
        location.pathname !== "/signUp" &&
        location.pathname !== "/recoveryPass" &&
        location.pathname !== "/changePass" &&
        location.pathname !== "/logIn" && <Footer />}
    </div>
  );
}

export default App;
