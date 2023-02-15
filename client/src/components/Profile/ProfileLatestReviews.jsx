import React from "react";
// import style from "./ProfileLatestReviews.module.css";

export default function ProfileLatestReviews({
  latestReviewsImg,
  latestReviewsName,
  latestReviewsDescription,
  latestReviewsAssessment,
}) {
  return (
    <div>
      <div>
        <img
          src={latestReviewsImg}
          alt={latestReviewsName}
        />
      </div>
      <div>
        <h6>{latestReviewsName}</h6>
        <hr />
        <p>{latestReviewsDescription}</p>
        <hr />
        {/* //TODO AGREGAR LÓGICA CON ESTRELLAS */}
        <h6>Valoración: {latestReviewsAssessment}</h6>
      </div>
    </div>
  );
}
