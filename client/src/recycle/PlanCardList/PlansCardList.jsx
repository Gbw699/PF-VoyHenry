import React, { useState } from "react";
import plansData from "../../plans.json";
import PlanCard from "../PlanCard/PlanCard";
import style from "./PlansCardList.module.css";
import { Pagination } from "@mui/material";

export default function PlanCardList() {
    const [page, setPage] = useState(1);
    const plansPerPage = 9;
    const plans = plansData.data.slice((page - 1) * plansPerPage, page * plansPerPage);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    return (
        <div>
            <h3>Planes Destacados</h3>
            <hr
                width="100%"
                color="#F1E100"
            />
            <Pagination
                count={Math.ceil(plansData.data.length / plansPerPage)}
                page={page}
                onChange={handlePageChange}
            />

            <div className={style.cardCont}>
                {plans.map((plan) => (
                    <PlanCard
                        key={plan.id}
                        src={plan.mainImage}
                        title={plan.title}
                    />
                ))}
            </div>
        </div>
    );
}