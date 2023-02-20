import React from "react";
import { useEffect, useState } from "react";
import style from "./ProfileInfo.module.css";

export default function ProfileInfo({
  image,
  name,
  nationality,
  following,
  followers,
  assistedPlans,
  plansCreated,
  reviewsCreated,
}) {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    setBackgroundImage(`url(${image})`);
  });

  return (
    <div className={style.container}>
      <div className={style.mainInfo}>
        <div className={style.imgCont} style={{ backgroundImage: backgroundImage }} />
        <p className={style.name}>{name}</p>
        <p className={style.nacionality}>{nationality}</p>
      </div>
      <div className={style.profileInfo}>
        <div className={style.infoCont}>
          <p className={style.infoTitle}>Siguiendo</p>
          <p className={style.infoCount}>{following}</p>
        </div>
        <div className={style.infoCont}>
          <p className={style.infoTitle}>Seguidores</p>
          <p className={style.infoCount}>{followers}</p>
        </div>
        <div className={style.infoCont}>
          <p className={style.infoTitle}>Planes asistidos</p>
          <p className={style.infoCount}>{assistedPlans}</p>
        </div>
        <div className={style.infoCont}>
          <p className={style.infoTitle}>Planes creados</p>
          <p className={style.infoCount}>{plansCreated}</p>
        </div>
        <div className={style.infoCont}>
          <p className={style.infoTitle}>Reseñas creadas</p>
          <p className={style.infoCount}>{reviewsCreated}</p>
        </div>
      </div>
    </div>
  );
}
