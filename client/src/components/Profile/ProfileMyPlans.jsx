import React from "react";
import { useEffect, useState } from "react";
import style from "./ProfileMyPlans.module.css";

export default function ProfileMyPlans({ myPlansImage, myPlansName }) {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    setBackgroundImage(`url(${myPlansImage})`);
  });

  return (
    <div className={style.container}>
      <div className={style.img} style={{ backgroundImage: backgroundImage }}>
        <hr color="white" width="100%" />
        <p className={style.title}>{myPlansName}</p>
      </div>
    </div>
  );
}
