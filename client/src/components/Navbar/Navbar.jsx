import SearchBar from "./SearchBar";
import AccountMenu from "./AccountMenu";
import { NavLink, useLocation } from "react-router-dom";
import img from "../../assets/voyHENRY_title.png";
import imgCarrito from "../../assets/carrito-de-compras.png";
import style from "./Navbar.module.css";

export default function NavBar() {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));

  const navLinkClassName = (navData) =>
    navData.isActive ? style.linkFontActive : style.linkFont;

  return (
    <header className={style.header}>
      <NavLink to="/home">
        <img
          src={img}
          alt="img"
          height="35px"
        />
      </NavLink>
      {user.role === "admin" && (
        <NavLink
          to={"/admin"}
          className={navLinkClassName}
        >
          <h4>ADMIN</h4>
        </NavLink>
      )}
      {location.pathname === "/blog" && <SearchBar />}
      <div className={style.linksCont}>
        <NavLink
          to={"/home"}
          className={navLinkClassName}
        >
          <h4>INICIO</h4>
        </NavLink>
        <NavLink
          to={"/users"}
          className={navLinkClassName}
        >
          <h4>USERS</h4>
        </NavLink>

        <NavLink
          to={"/blog"}
          className={navLinkClassName}
        >
          <h4>BLOG</h4>
        </NavLink>
        <NavLink
          to={"/plans"}
          className={navLinkClassName}
        >
          <h4>PLANES</h4>
        </NavLink>
        <NavLink
          to={"/marketplace"}
          className={navLinkClassName}
        >
          <h4>TIENDA</h4>
        </NavLink>
        <NavLink
          to="/marketplace/shoppingcart"
          className={navLinkClassName}
        >
          <img
            src={imgCarrito}
            width="20px"
            alt="Carrito de compras"
          />
        </NavLink>
        <AccountMenu />
      </div>
    </header>
  );
}
