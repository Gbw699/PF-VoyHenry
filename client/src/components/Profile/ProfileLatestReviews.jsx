import React from "react";
import { useEffect, useState } from "react";
import style from "./ProfileLatestReviews.module.css";

export default function ProfileLatestReviews({
  latestReviewsImg,
  latestReviewsName,
  latestReviewsDescription,
  latestReviewsAssessment,
}) {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    setBackgroundImage(`url(${latestReviewsImg})`);
  });

  return (
    <div className={style.container}>
      <div className={style.reviewCont}>
        <div>
          <div className={style.img} style={{ backgroundImage: backgroundImage }} />
        </div>
        <div className={style.reviewInfo}>
          {/* <h6>{latestReviewsName}</h6> */}
          <h6 className={style.title}>Título</h6> {/* BORRAR CUANDO HAYA latestReviewsName */}
          <hr color="#707070" width="100%" />
          <p className={style.review}>{latestReviewsDescription}</p>
          <hr color="#707070" width="100%" />
          {/* //TODO AGREGAR LÓGICA CON ESTRELLAS */}
          <h6 className={style.score}>Valoración: {latestReviewsAssessment}</h6>
        </div>
      </div>
    </div>
  );
}
