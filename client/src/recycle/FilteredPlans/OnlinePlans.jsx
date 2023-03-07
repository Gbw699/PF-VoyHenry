import React from "react";
import { Link } from "react-router-dom";
import plansData from "../../onlinePlans.json";
import style from "./FilteredPlans.module.css";

export default function OnlinePlans() {
  const plans = plansData.data;
  return (
    <div className={style.cardCont}>
      <h3 className={style.cardTitle}>Eventos On-line</h3>
      <hr
        width="100%"
        color="#F1E100"
      />
      <div className={style.imgCont}>
        {plans.map((plan) => (
          <Link
            to={`/plans/${plan.id}`}
            key={plan.id}
          >
            <img
              className={style.planImg}
              src={plan.mainImage}
              alt={plan.title}
              title={plan.title}
              loading="lazy"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
