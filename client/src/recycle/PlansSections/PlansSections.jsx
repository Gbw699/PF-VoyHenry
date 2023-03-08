import React from "react";
import CurrentPlans from "../FilteredPlans/CurrentPlans";
import NextPlans from "../FilteredPlans/NextPlans";
import CompletedPlans from "../FilteredPlans/CompletedPlans";
import style from "./PlansSections.module.css";

export default function PlansSections() {
  return (
    <div className={style.sectionsCont}>
      <NextPlans />
      <CurrentPlans />
      <CompletedPlans />
    </div>
  );
}
