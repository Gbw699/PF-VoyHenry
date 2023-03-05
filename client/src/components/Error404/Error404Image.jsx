import React from "react";
import style from "./Error404Image.module.css";
import errorImage from "../../assets/error404.png";

export default function Error404Image() {
  return (
    <div className={style.imgCont}>
      <img
        src={errorImage}
        alt="Error 404"
        height="500px"
      />
    </div>
  );
}
