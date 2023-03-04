import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ProductContextProvider } from "./context/ProductContext";
import "./App.css";
import axios from "axios";
import NavBar from "./components/Navbar/Navbar";
import LandingPage from "./views/LandingPage/LandingPage";
import LogIn from "./views/LogIn/LogIn";
import SignUp from "./views/SignUp/SignUp";
import Home from "./views/Home/Home";
import MarketPlace from "./routers/MarketPlace.routes";
import Profile from "./views/Profile/Profile";
import Blog from "./routers/Blog.routes";
import Plans from "./routers/Plans.routes";
import AboutUs from "./views/AboutUs/AboutUs";
import Error404 from "./views/Error404/Error404";
import Auth from "./views/Auth/Auth";
import Users from "./routers/Users.routes";
import RecoveryPass from "./views/RecoveryPass/Recoverypass";
import ChangePass from "./views/ChangePass/ChangePass";
import Configuration from "./views/EditProfile/EditProfile";
import EditProfile from "./views/EditProfile/EditProfile";
import LoadSpinning from "./views/LoadSpinning/LoadSpinning";
import Favorite from "./views/Favorite/Favorite";
import FooterSection from "./components/Footer/FooterSection";
import AdminSection from "./views/AdminSection/AdminSection";

axios.defaults.baseURL = "http://localhost:3001/";
const cookie = document.cookie.split("=");
axios.defaults.headers.common["Authorization"] = `Bearer ${cookie[1]}`;
const user = JSON.parse(localStorage.getItem("user"));
function App() {
  useEffect(() => {}, [document.cookie]);

  const location = useLocation();
  return (
    <ProductContextProvider>
      {location.pathname !== "/" &&
        location.pathname !== "/recoveryPass" &&
        location.pathname !== "/changePass" &&
        location.pathname !== "/signUp" &&
        location.pathname !== "/logIn" && <NavBar />}
      <Auth />
      <Routes>
        {user?.role === "admin" && (
          <Route
            path="/admin/*"
            element={<AdminSection />}
          />
        )}
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
          path="/blog/*"
          element={<Blog />}
        />
        <Route
          path="/plans/*"
          element={<Plans />}
        />
        <Route
          path="/profile"
          element={<Profile />}
        />
        <Route
          path="/marketplace/*"
          element={<MarketPlace role={user?.role} />}
        />
        <Route
          path="/aboutUs"
          element={<AboutUs />}
        />
        <Route
          path="/users/*"
          element={<Users />}
        />
        <Route
          path="/profile/edit"
          element={<EditProfile />}
        />
        <Route
          path="/loadSpinning"
          element={<LoadSpinning />}
        />
        <Route
          path="/favorite"
          element={<Favorite />}
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
        location.pathname !== "/logIn" && <FooterSection />}
    </ProductContextProvider>
  );
}

export default App;
