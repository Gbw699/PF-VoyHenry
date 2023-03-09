import React, { useState } from "react";
import FiltersContainer from "./FiltersContainer";
import PlanCardList from "../../recycle/PlanCardList/PlansCardList";
import PlansSections from "../../recycle/PlansSections/PlansSections";
import style from "./Plan.module.css";
import PlanForm from "./PlanForm";

export default function Plan() {
  const [showPlanForm, setShowPlanForm] = useState(false);

  return (
    <div className={style.container}>
      <div className={style.planForm}>
        {!showPlanForm && (
          <FiltersContainer setShowPlanForm={setShowPlanForm} />
        )}
        {showPlanForm && <PlanForm setShowPlanForm={setShowPlanForm} />}
      </div>
      <div className={style.plans}>{!showPlanForm && <PlanCardList />}</div>
      <div className={style.sections}>{!showPlanForm && <PlansSections />}</div>
    </div>
  );
}
