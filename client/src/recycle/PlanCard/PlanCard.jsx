import style from "./PlanCard.module.css";
import React from "react";

export default function PlanCard(props) {
  return (
    <div className={style.cardCont}>
      <div className={style.Card}>
        <img
          className={style.img}
          alt={props.title}
          src={props.mainImage}
        />
        <div className={style.details}>
          <p>{props.title}</p>
          <p>{props.eventDate}</p>
          <p>Location?</p>
          <p>{props.title}</p>
          <p>{props.summary}</p>
          <p>{props.eventDate}</p>
          <p>Detail</p>
        </div>
      </div>
    </div>
  );
}
