import { ImageList } from "@mui/material";
import React from "react";
import plansData from "../../plans.json";
import PlanCard from "../PlanCard/PlanCard";

export default function PlansCardList() {
  // este componente dispatchea la action de traer los planes
  const plans = plansData.data;

  return (
    <ImageList sx={{ width: 700, height: 650 }} cols={3}>
      {plans.map((plan) => (
          <PlanCard key={plan.id}
          mainImage={plan.mainImage}
          title={plan.title}
          />
      ))}
    </ImageList>
  );
}

