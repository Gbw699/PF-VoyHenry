import React, { useEffect, useState } from "react";
import PlanCard from "../PlanCard/PlanCard";
import style from "./PlansCardList.module.css";
import {
  getPlansPerPage,
  getTotalPages,
} from "../../redux/slices/planSlice/thunk";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";

export default function PlanList() {
  const plans = useSelector((state) => state.planStore.renderPlans);
  const totalPages = useSelector((state) => state.planStore.totalPages);

  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlansPerPage(page));
    dispatch(getTotalPages());
  }, [page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  if (!plans || !totalPages) {
    return <div>Loading...</div>;
  }

  if (plans.length === 0 || !totalPages) {
    return <div>Loading...</div>;
  }

  if (plans.length < 8) {
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
              eventDate={plan.eventDate}
            />
          ))}
        </div>
      </div>
    );
  }

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
            eventDate={plan.eventDate}
          />
        ))}
      </div>
      <Pagination
        onChange={handlePageChange}
        count={totalPages}
        page={page}
      />
    </div>
  );
}
