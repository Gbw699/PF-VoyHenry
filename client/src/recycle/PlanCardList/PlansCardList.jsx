import React from "react";
import plansData from "../../topPlans.json";
import PlanCard from "../PlanCard/PlanCard";

import style from "./PlansCardList.module.css";

export default function Plan() {
  const plans = plansData.data;
  return (
    <div>
      <h3>Planes Destacados</h3>
      <hr
        width="100%"
        color="#F1E100"
      />

      <div className={style.cardCont}>
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            src={plan.mainImage}
            title={plan.title}
          />
        ))}
      </div>
    </div>
  );
}
