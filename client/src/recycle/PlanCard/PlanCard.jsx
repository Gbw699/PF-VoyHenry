import style from "./PlanCard.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function PlanCard(props) {
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <button 
        onClick={() => navigate(`/plans/${props.id}`)}
        className={style.detailBtn}
      >
        <div
          className={style.cardCont}
          style={{ backgroundImage: `url(${props.mainImage})` }}
        >
          <div className={style.card}>
              <p className={style.title}>{props.title}</p>
              <hr
                color="white"
                width="100%"
              />
              <p className={style.info}>{props.country}</p>
              <p className={style.info}>{props.province}</p>
          </div>
        </div>
      </button>
    </div>
  );
}
