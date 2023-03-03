import React from "react";
import style from "./DetailMarketPlaceImg.module.css";

export default function DetailMarketPlaceImg({ image, imageExtra, title }) {
  return (
    <div className={style.container}>
      <div className={style.extraImg}>
        <img
          src={image}
          alt={title}
          title={title}
          width="100em"
          height="100em"
        />
        {imageExtra.map((element, index) => (
          <div
            className={style.extraImgMargin}
            key={index}
          >
            <img
              src={element}
              alt={title}
              title={title}
              width="100em"
              height="100em"
            />
          </div>
        ))}
      </div>

      <div>
        <img
          src={image}
          alt={title}
          title={title}
          width="90%"
          height="90%"
        />
      </div>
    </div>
  );
}
