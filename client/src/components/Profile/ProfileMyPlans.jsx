import React from "react";
import style from "./ProfileMyPlans.module.css";

export default function ProfileMyPlans({ myPlansImage, myPlansName }) {
  return (
    <div className={style.container}>
      <img
        className={style.img}
        src={myPlansImage}
        alt={myPlansName}
        title={myPlansName}
        loading="lazy"
      />
      <hr
        color="white"
        width="100%"
      />
      <p className={style.title}>{myPlansName}</p>
    </div>
  );
}
