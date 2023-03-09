import React, { useEffect } from "react";
import PlanCard from "../../recycle/PlanCard/PlanCard";
import style from "./PlanCardListHome.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getPlansbyOrder } from "../../redux/slices/planSlice/thunk";

export default function PlanCardListHome() {
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();

  useEffect(() => {
    location.reload();
    dispatch(getPlansbyOrder("order", "masvotados"));
  }, [userInfo]);

  const renderPlans = useSelector((state) => state.planStore.renderPlans);
  const { plans } = renderPlans;

  return (
    <div className={style.container}>
      <div className={style.cardCont}>
        {plans?.plans.slice(0, 6).map((plan) => (
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
