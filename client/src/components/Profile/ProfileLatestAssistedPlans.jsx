import React from "react";
import { useEffect, useState } from "react";
import style from "./ProfileLatestAssistedPlans.module.css";

export default function ProfileLatestAssistedPlans({
  latestAssistedPlansImg,
  latestAssistedPlansName,
}) {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    setBackgroundImage(`url(${latestAssistedPlansImg})`);
  });

  return (
    <div className={style.container}>
      <div className={style.img} style={{ backgroundImage: backgroundImage }}>
        <hr color="white" width="100%" />
        <p className={style.title}>{latestAssistedPlansName}</p>
      </div>
    </div>
  );
}
