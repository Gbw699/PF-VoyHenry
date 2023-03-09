import SearchBar from "./SearchBar";
import AccountMenu from "./AccountMenu";
import { NavLink, useLocation } from "react-router-dom";
import img from "../../assets/voyHENRY_title.svg";
import imgCarrito from "../../assets/carrito-de-compras.png";
import style from "./Navbar.module.css";
import { useContext } from "react";
import ProductContext from "../../context/ProductContext";

export default function NavBar() {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));

  const productContext = useContext(ProductContext);

  const totalQuantity = () => {
    const totalesQuantity = productContext.products.map(
      (product) => product.quantity
    );

    let total = 0;
    totalesQuantity.forEach((e) => (total += e));
    return total;
  };

  const navLinkClassName = (navData) =>
    navData.isActive ? style.linkFontActive : style.linkFont;

  return (
    <header className={style.header}>
      <NavLink to="/home">
        <img
          src={img}
          alt="voyHENRY"
          title="voyHENRY"
          className={style.img}
          width="100%"
          height="100%"
          loading="lazy"
        />
      </NavLink>
      {user?.role === "admin" && (
        <NavLink
          to={"/admin"}
          className={navLinkClassName}
        >
          <h4>ADMIN</h4>
        </NavLink>
      )}
      {location.pathname === "/blog" && <SearchBar placeholder="Buscar blog" />}
      {location.pathname === "/plans" && (
        <SearchBar placeholder="Buscar plan" />
      )}
      <div className={style.linksCont}>
        <NavLink
          to={"/home"}
          className={navLinkClassName}
        >
          <h4>INICIO</h4>
        </NavLink>
        <NavLink
          to={"/plans"}
          className={navLinkClassName}
        >
          <h4>PLANES</h4>
        </NavLink>
        <NavLink
          to={"/blog"}
          className={navLinkClassName}
        >
          <h4>BLOG</h4>
        </NavLink>
        <NavLink
          to={"/users"}
          className={navLinkClassName}
        >
          <h4>USUARIOS</h4>
        </NavLink>
        <NavLink
          to={"/messages"}
          className={navLinkClassName}
        >
          <h4>CHAT</h4>
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
            height="100%"
            alt="Carrito de compras"
            title="Carrito de compras"
            loading="lazy"
          />
          <span className={style.spanCart}>{totalQuantity()}</span>
        </NavLink>
        <AccountMenu />
      </div>
    </header>
  );
}
