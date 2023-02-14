import SearchBar from "./SearchBar";
import AccountMenu from "./AccountMenu";
import { NavLink } from "react-router-dom";
import img from "../../assets/voyHENRY_title.png";

export default function NavBar() {
  return (
    <header>
      <img
        src={img}
        alt="img"
      />
      <SearchBar />
      <NavLink to={"/home"}>
        <h4>Inicio</h4>
      </NavLink>
      <NavLink to={"/blog"}>
        <h4>Blog</h4>
      </NavLink>
      <NavLink to={"/planes"}>
        <h4>Planes</h4>
      </NavLink>
      <NavLink to={"/marketplace"}>
        <h4>Tienda</h4>
      </NavLink>
      <AccountMenu />
    </header>
  );
}
