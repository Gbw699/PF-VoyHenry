import React from "react";
import { useNavigate } from "react-router-dom";
import ShoppingCartCard from "./ShoppingCartCard";
import productCartData from "../../plans.json";
import style from "./ShoppingCartSection.module.css";

export default function ShoppingCartSection() {
  const navigate = useNavigate();
  // const productsShoppingCart = localStorage.getItem("shoppingCart");
  const backHandler = () => {
    navigate("/home");
  };
  return (
    <div className={style.container}>
      <div className={style.cartCont}>
        <h4 className={style.cartTitle}>Carrito</h4>
        <hr
          color="#F1E100"
          width="100%"
        />
        {productCartData.data.map((element) => (
          <div key={element.id}>
            <ShoppingCartCard
              image={element.image}
              title={element.title}
              unitPrice="100"
              totalPrice="200"
              quantity="2"
            />
          </div>
        ))}
      </div>
      <div className={style.btnsCont}>
        <button
          type="submit"
          className={style.buyBtn}
        >
          Comprar
        </button>
        <button
          type="submit"
          className={style.emptyBtn}
        >
          Vaciar carrito
        </button>
        <button
          onClick={backHandler}
          className={style.backBtn}
        >
          Volver
        </button>
      </div>
    </div>
  );
}
