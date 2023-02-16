import React from "react";
// import style from "./DetailMarketPlacePrice.module.css";

export default function DetailMarketPlacePrice({ stock, title, price }) {
  return (
    <div>
      <p>{stock}</p>
      <h3>{title}</h3>
      <h5>$ {price}</h5>
    </div>
  );
}
