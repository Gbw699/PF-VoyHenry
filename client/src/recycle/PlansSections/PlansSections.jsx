import * as React from "react";
import CurrentPlans from "../FilteredPlans/CurrentPlans";
import NextPlans from "../FilteredPlans/NextPlans";
import CompletedPlans from "../FilteredPlans/CompletedPlans";
import OnlinePlans from "../FilteredPlans/OnlinePlans";
// import { Container } from "semantic-ui-react";
import style from "./PlansSections.module.css";

export default function PlansSections() {
  return (
    <div className={style.sectionsCont}>
      <NextPlans />
      <CurrentPlans />
      <CompletedPlans />
      <OnlinePlans />
    </div>
  );
}
