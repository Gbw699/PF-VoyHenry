import React, { useState } from "react";
import FiltersContainer from "./FiltersContainer";
import PlanCardList from "../../recycle/PlanCardList/PlansCardList";
import PlansSections from "../../recycle/PlansSections/PlansSections";
import style from "./Plan.module.css";
import PlanForm from "./PlanForm";
import { useMediaQuery } from "@mui/material";
import getMediaQuery from "../../recycle/MediaQuerys/mediaQuerys.mjs";

export default function Plan() {

  const isMobile = useMediaQuery(getMediaQuery("xs"));
  const isTablet = useMediaQuery(getMediaQuery("sm"));

  const [showPlanForm, setShowPlanForm] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className={style.container}>
      {isMobile && <button className={style.showFiltersButton} onClick={() => setShowFilters(!showFilters)}>Filtros</button>}
      <div className={style.planForm}>
        {!showPlanForm && showFilters && (
          <FiltersContainer/>
        )}
        {!showPlanForm && !isMobile && (
          <FiltersContainer setShowPlanForm={setShowPlanForm} />
        )}
        {showPlanForm && <PlanForm setShowPlanForm={setShowPlanForm} />}
      </div>
      <div className={style.plans}>{!showPlanForm && <PlanCardList />}</div>
      {isMobile && <button
        className={style.buttons}
        onClick={()=>setShowPlanForm(true)}
      >
        Crea tu evento
      </button>}
      {!isMobile && !isTablet && <div className={style.sections}>{!showPlanForm && <PlansSections />}</div>}
    </div>
  );
}
