import React from "react";
import plansData from "../../plans.json";
import PlanCard from "../PlanCard/PlanCard";


export default function PlansCardList() {
  // este componente dispatchea la action de traer los planes
  const plans = plansData.data;
  console.log(plans);
  return (
    <div>
      {plans?.map((plan) => {
        return (
          <PlanCard
            key={plan.id}
            title={plan.title}
            mainImage={plan.mainImage}
            summary={plan.summary}
            eventDate={plan.eventDate}
          />
        );
      })}
    </div>
  );
}