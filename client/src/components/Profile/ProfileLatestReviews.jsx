import React from "react";
import style from "./ProfileLatestReviews.module.css";

export default function ProfileLatestReviews({
  image,
  name,
  description,
  assessment,
}) {
  return (
    <div className={style.container}>
      <div className={style.reviewCont}>
        <div className={style.reviewImg}>
          <div
            className={style.img}
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>
        <div className={style.reviewInfo}>
          <h6 className={style.title}>{name}</h6>
          <hr
            color="#b1b1b1"
            width="100%"
          />
          <p className={style.review}>{description}</p>
          <hr
            color="#b1b1b1"
            width="100%"
          />
          {/* //TODO AGREGAR LÓGICA CON ESTRELLAS */}
          <h6 className={style.score}>Valoración: {assessment}</h6>
        </div>
      </div>
    </div>
  );
}
