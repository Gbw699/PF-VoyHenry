import React from "react";
import { useEffect, useState } from "react";
import style from "./ProfileMyFriendsActivity.module.css";

export const ProfileMyFriendsActivity = ({ image, name }) => {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    setBackgroundImage(`url(${image})`);
  });

  return (
    <div className={style.container}>
      <div>
        <div
          className={style.img}
          style={{ backgroundImage: backgroundImage }}
        />
      </div>
      <div>
        <p className={style.title}>{name}</p>
      </div>
    </div>
  );
};
