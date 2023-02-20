import React from "react";
import { useEffect, useState } from "react";
import style from "./ProfileMyFriendsActivity.module.css";

export const ProfileMyFriendsActivity = ({
  myFriendsActivityImg,
  myFriendsActivityName,
}) => {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    setBackgroundImage(`url(${myFriendsActivityImg})`);
  });

  return (
    <div className={style.container}>
      <div>
        <div className={style.img} style={{ backgroundImage: backgroundImage }} />
      </div>
      <div>
        <p className={style.title}>{myFriendsActivityName}</p>
      </div>
    </div>
  );
};
