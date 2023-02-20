import React from "react";
import style from "./DetailMarketPlaceImg.module.css";

export default function DetailMarketPlaceImg({ image }) {
  return (
    <div className={style.container}>
      <div className={style.extraImg}>
        <div className={style.extraImgPh}>
          {/* //!! Comienza imageExtra.map*/}
          <img
            // src={element}
            alt=""
          />
          {/* //!! Termina map */}
        </div>
        <div className={style.extraImgPh} />
        <div className={style.extraImgPh} />
      </div>
      {/* //TODO Acá iría la imagen grande */}
      <div>
        <img
          src={image}
          alt=""
          width="90%"
          height="90%"
        />
      </div>
    </div>
  );
}
