import React, { useEffect, useState } from "react";
import PlanCard from "../PlanCard/PlanCard";
import style from "./PlansCardList.module.css";
import { getPlansPerPage, getTotalPages } from "../../redux/slices/planSlice/thunk";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";

export default function PlanList() {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlansPerPage(page));
    dispatch(getTotalPages());
  }, [page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const plans = useSelector((state) => state.planStore.renderPlans);

  const totalPages = 34;

  return (
    <div className={style.container}>
      <div className={style.cardCont}>
        {plans?.map((plan) => (
          <PlanCard
            key={plan.id}
            id={plan.id}
            mainImage={plan.mainImage}
            title={plan.title}
            summary={plan.summary}
          />
        ))}
      </div>
      {
        plans?.length < 9
          ? null
          : <Pagination
            onChange={handlePageChange}
            count={totalPages}
            page={page}
          />
      }
    </div>
  );
}