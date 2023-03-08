import React from "react";
import ShoppingCartSection from "../../components/ShoppingCart/ShoppingCartSection";
import style from "./ShoppingCart.module.css";

export default function ShoppingCart() {
  return (
    <div className={style.container}>
      <ShoppingCartSection />
    </div>
  );
}
