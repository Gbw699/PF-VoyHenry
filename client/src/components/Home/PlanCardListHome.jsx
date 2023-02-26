import React, { useEffect } from "react";
import PlanCard from "../../recycle/PlanCard/PlanCard";
import style from "./PlanCardListHome.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getLimitPlans } from "../../redux/slices/planSlice/thunk";

export default function PlanCardListHome() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLimitPlans());
  }, []);

  const renderPlans = useSelector((state) => state.planStore.renderPlans);
  const { plans, pageNumber, pages } = renderPlans;

  return (
    <div className={style.container}>
      <div className={style.cardCont}>
        {plans?.plans.map((plan) => (
          <PlanCard
            key={plan.id}
            id={plan.id}
            country={plan.country}
            province={plan.province}
            mainImage={plan.mainImage}
            title={plan.title}
            summary={plan.summary}
            average={plan.average}
          />
        ))}
      </div>
    </div>
  );
}
