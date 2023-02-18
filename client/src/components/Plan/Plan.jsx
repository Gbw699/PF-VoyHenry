import React from "react";
import GeolocationForm from "./GeolocationForm";
import PlanCardList from "../../recycle/PlanCardList/PlansCardList";
import PlansSections from "../../recycle/PlansSections/PlansSections";
import style from "./Plan.module.css";

export default function Plan() {
  return (
    <div className={style.container}>
      <GeolocationForm />
      <div className={style.plans}>
        <PlanCardList />
      </div>
      <PlansSections />
    </div>
  );
}
