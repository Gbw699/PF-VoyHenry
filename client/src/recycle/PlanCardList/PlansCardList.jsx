import React, { useEffect, useState } from "react";
import PlanCard from "../PlanCard/PlanCard";
import style from "./PlansCardList.module.css";
import { getPlansbyOrder } from "../../redux/slices/planSlice/thunk";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";

export default function PlanList() {
  const dispatch = useDispatch();
  const renderPlans = useSelector((state) => state.planStore.renderPlans);
  const { plans, pageNumber, pages } = renderPlans;

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getPlansbyOrder("page", page));
  }, [page]);

  const handleClick = (event, value) => {
    setPage(value);
  };

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
            eventDate={plan.eventDate}
            average={plan.average}
          />
        ))}
      </div>
      <Pagination
        onChange={handleClick}
        count={pages}
        page={page}
      />
    </div>
  );
}
