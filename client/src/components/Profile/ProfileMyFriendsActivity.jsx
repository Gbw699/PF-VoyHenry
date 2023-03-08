import React from "react";
import style from "./ProfileMyFriendsActivity.module.css";

export const ProfileMyFriendsActivity = ({ image }) => {
  return (
    <div className={style.container}>
      <div
        className={style.img}
        style={{ backgroundImage: `url(${image})` }}
      />
    </div>
  );
};
