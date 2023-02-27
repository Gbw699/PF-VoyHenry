import React from "react";
import style from "./MarketCard.module.css";

export default function MarketCard({ title, image, price }) {
  return (
    <div className={style.card}>
      <h5 className={style.name}>{title}</h5>
      <img
        className={style.img}
        src={image}
        alt={title}
      />
      <hr
        color="#F1E100"
        width="100%"
      />
      <h6 className={style.price}>💲 {price}</h6>
    </div>
  );
}
