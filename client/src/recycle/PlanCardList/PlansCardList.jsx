import React, { useState } from "react";
import plansData from "../../plans.json";
import PlanCard from "../PlanCard/PlanCard";
import style from "./PlansCardList.module.css";
import { Pagination } from "@mui/material";

export default function PlanCardList() {
  const [page, setPage] = useState(1);
  const plansPerPage = 9;
  const plans = plansData.data.slice(
    (page - 1) * plansPerPage,
    page * plansPerPage
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <div className={style.cardCont}>
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            mainImage={plan.mainImage}
            title={plan.title}
          />
        ))}
      </div>
      <Pagination
        size="large"
        count={Math.ceil(plansData.data.length / plansPerPage)}
        page={page}
        onChange={handlePageChange}
      />
    </div>
  );
}
