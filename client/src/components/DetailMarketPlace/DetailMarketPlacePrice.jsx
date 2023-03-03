import React from "react";
import style from "./DetailMarketPlacePrice.module.css";

export default function DetailMarketPlacePrice({ stock, title, price }) {
  return (
    <div className={style.container}>
      <p className={style.stock}>{stock} disponibles</p>
      <h3 className={style.title}>{title}</h3>
      <h5 className={style.price}>$ {price}</h5>
    </div>
  );
}
