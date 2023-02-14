import SearchBar from "./SearchBar";
import AccountMenu from "./AccountMenu";
import { NavLink, useLocation } from "react-router-dom";
import img from "../../assets/voyHENRY_title.png";

export default function NavBar() {
  const location = useLocation();
  return (
    <header>
      <img
        src={img}
        alt="img"
      />
      {location.pathname !== "/home" && <SearchBar />}
      <NavLink to={"/home"}>
        <h4>Inicio</h4>
      </NavLink>
      <NavLink to={"/blog"}>
        <h4>Blog</h4>
      </NavLink>
      <NavLink to={"/plans"}>
        <h4>Planes</h4>
      </NavLink>
      <NavLink to={"/marketplace"}>
        <h4>Tienda</h4>
      </NavLink>
      <AccountMenu />
    </header>
  );
}
