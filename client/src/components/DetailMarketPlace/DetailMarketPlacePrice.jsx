import React from "react";
import style from "./DetailMarketPlacePrice.module.css";

export default function DetailMarketPlacePrice({ stock, title, price }) {
  return (
    <div className={style.container}>
      {/* vv BORRAR CUANDO HAYA STOCK vv */}
      <p className={style.stock}>Stock</p>
      {/* <p className={style.stock}>{stock}</p> */}
      <h3 className={style.title}>{title}</h3>
      <h5 className={style.price}>$ {price}</h5>
    </div>
  );
}
