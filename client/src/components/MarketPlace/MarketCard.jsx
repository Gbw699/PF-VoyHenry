import React from "react";
import style from "./MarketCard.module.css";

export default function MarketCard({ title, image, price }) {
  return (
    <div className={style.Card}>
      <h5>{title}</h5>
      <img
        className={style.img}
        src={image}
        alt={title}
      />
      <h6>{price}</h6>
    </div>
  );
}
