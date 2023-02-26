import React, { useState } from "react";
import GeolocationForm from "./GeolocationForm";
import PlanCardList from "../../recycle/PlanCardList/PlansCardList";
import PlansSections from "../../recycle/PlansSections/PlansSections";
import style from "./Plan.module.css";
import PlanForm from "./PlanForm";

export default function Plan() {
  const [showPlanForm, setShowPlanForm] = useState(false);
  const handleSubmit = () => {
    setShowPlanForm(true);
  };
  return (
    <div className={style.container}>
      {showPlanForm && <PlanForm setShowPlanForm={setShowPlanForm} />}
      {!showPlanForm && <GeolocationForm setShowPlanForm={setShowPlanForm} />}
      {!showPlanForm && (
        <div className={style.plans}>
          <PlanCardList />
        </div>
      )}
      {!showPlanForm && <PlansSections />}
    </div>
  );
}
