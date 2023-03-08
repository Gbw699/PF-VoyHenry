import React from "react";
import style from "./ProfileLatestAssistedPlans.module.css";

export default function ProfileLatestAssistedPlans({ image, name }) {
  return (
    <div className={style.container}>
      <div
        className={style.img}
        style={{ backgroundImage: `url(${image})` }}
      >
        <hr
          color="white"
          width="100%"
        />
        <p className={style.title}>{name}</p>
      </div>
    </div>
  );
}
