import style from "./PlanCard.module.css";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PlanCard(props) {
  const navigate = useNavigate();
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    setBackgroundImage(`url(${props.mainImage})`);
  }, [props]);


  return (
    <div
      className={style.cardCont}
      style={{ backgroundImage: backgroundImage }}
    >
        {/* <br/>
        <h1 className={style.titlePro} style={{color: "white", textAlign: "center", fontSize: "50px"}}>{props.title}</h1> */}
      <div className={style.card}>
        <div className={style.details}>
          <p className={style.title}>{props.title}</p>
          <hr
            color="white"
            width="80%"
          />
          <p className={style.info}>{props.country}</p>
          <p className={style.info}>{props.province}</p>
          <p className={style.info}>{props.eventDate}</p>{" "}
          <p className={style.summary}>{props.title}</p>{" "}
          <p className={style.summary}>{props.summary}</p>
          <hr
            color="white"
            width="100%"
          />
          <button
            className={style.detailBtn}
            onClick={() => navigate(`/plans/${props.id}`)}
          >
            Ver detalles
          </button>
        </div>
      </div>
    </div>
  );
}
