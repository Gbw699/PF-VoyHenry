import React from "react";
import style from "./ProfileMyPlans.module.css";

export default function ProfileMyPlans({ myPlansImage, myPlansName }) {
  return (
    <div className={style.container}>
      <div
        className={style.img}
        style={{ backgroundImage: `url(${myPlansImage})` }}
      >
        <hr
          color="white"
          width="100%"
        />
        <p className={style.title}>{myPlansName}</p>
      </div>
    </div>
  );
}
