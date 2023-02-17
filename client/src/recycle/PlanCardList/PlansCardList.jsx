import React from "react";
import plansData from "../../topPlans.json";
import PlanCard from "../PlanCard/PlanCard";
import { Card } from "@mui/material";
import style from "./PlansCardList.module.css";

export default function Plan() {
  const plans = plansData.data;
  return (
    <div className={style.CardContainer}>
      <Card className={style.Card}>
        {plans.map((plan) => (
          <PlanCard
            className={style.PlanCard}
            key={plan.id}
            mainImage={plan.mainImage}
            title={plan.title}
          />
        ))}
      </Card>
    </div>
  );
}
