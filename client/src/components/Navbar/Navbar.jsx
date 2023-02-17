import SearchBar from "./SearchBar";
import AccountMenu from "./AccountMenu";
import { NavLink, useLocation } from "react-router-dom";
import img from "../../assets/voyHENRY_title.png";
import style from "./Navbar.module.css";

export default function NavBar() {
  const location = useLocation();
  return (
    <header className={style.header}>
      <img
        src={img}
        alt="img"
        height="35px"
      />
      {location.pathname !== "/home" && <SearchBar />}
      <div className={style.linksCont}>
        <NavLink to={"/home"} className={style.linkFont}>
          <h4>INICIO</h4>
        </NavLink>
        <NavLink to={"/blog"} className={style.linkFont}>
          <h4>BLOG</h4>
        </NavLink>
        <NavLink to={"/plans"} className={style.linkFont}>
          <h4>PLANES</h4>
        </NavLink>
        <NavLink to={"/marketplace"} className={style.linkFont}>
          <h4>TIENDA</h4>
        </NavLink>
        <AccountMenu />
      </div>
    </header>
  );
}
