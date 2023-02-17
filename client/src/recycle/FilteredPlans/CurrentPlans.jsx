import React from "react";
import currentPlansData from "../../currentPlans.json";
import style from "./FilteredPlans.module.css";

export default function CurrentPlans() {
  const plans = currentPlansData.data;
  return (
    <div className={style.cardCont}>
      <h3 className={style.cardTitle}>Eventos en proceso</h3>
      <hr
        width="100%"
        color="#F1E100"
      />
      <div className={style.imgCont}>
        {plans.map((plan) => (
          <img
            key={plan.id}
            className={style.planImg}
            src={plan.mainImage}
            title={plan.title}
          />
        ))}
      </div>
      <button className={style.btn}>Unirse Ahora</button>
    </div>
  );
}
