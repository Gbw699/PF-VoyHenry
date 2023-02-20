import React from "react";
// import style from "./DetailMarketPlaceImg.module.css";

export default function DetailMarketPlaceImg({ image }) {
  return (
    <div>
      <div>
        {/* //!! Comienza imageExtra.map*/}
        <img
          // src={element}
          alt=""
        />
        {/* //!! Termina map */}
      </div>
      {/* //TODO Acá iría la imagen grande */}
      <div>
        <img
          src={image}
          alt=""
        />
      </div>
    </div>
  );
}
