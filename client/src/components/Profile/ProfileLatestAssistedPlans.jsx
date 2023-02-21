import React from "react";
import { useEffect, useState } from "react";
import style from "./ProfileLatestAssistedPlans.module.css";

export default function ProfileLatestAssistedPlans({ image, name }) {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    setBackgroundImage(`url(${image})`);
  });

  return (
    <div className={style.container}>
      <div
        className={style.img}
        style={{ backgroundImage: backgroundImage }}
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
