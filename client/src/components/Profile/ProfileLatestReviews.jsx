import React from "react";
import { useEffect, useState } from "react";
import style from "./ProfileLatestReviews.module.css";

export default function ProfileLatestReviews({
  image,
  name,
  description,
  assessment,
}) {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    setBackgroundImage(`url(${image})`);
  });

  return (
    <div className={style.container}>
      <div className={style.reviewCont}>
        <div>
          <div
            className={style.img}
            style={{ backgroundImage: backgroundImage }}
          />
        </div>
        <div className={style.reviewInfo}>
          <h6 className={style.title}>{name}</h6>
          <hr
            color="#707070"
            width="100%"
          />
          <p className={style.review}>{description}</p>
          <hr
            color="#707070"
            width="100%"
          />
          {/* //TODO AGREGAR LÓGICA CON ESTRELLAS */}
          <h6 className={style.score}>Valoración: {assessment}</h6>
        </div>
      </div>
    </div>
  );
}
