import React from "react";
import { useEffect, useState } from "react";
import style from "./ProfileMyFriendsActivity.module.css";

export const ProfileMyFriendsActivity = ({ image, name }) => {
  return (
    <div className={style.container}>
      <div>
        <img
          className={style.img}
          src={image}
          title={name}
          alt={name}
          loading="lazy"
        />
      </div>
      <div>
        <p className={style.title}>{name}</p>
      </div>
    </div>
  );
};
