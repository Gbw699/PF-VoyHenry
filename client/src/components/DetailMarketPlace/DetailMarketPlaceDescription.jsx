import React from "react";
import style from "./DetailMarketPlaceDescription.module.css";

export default function DetailMarketPlaceDescription({ material }) {
  return (
    <div>
      <p className={style.description}>Material: {material}</p>
    </div>
  );
}
