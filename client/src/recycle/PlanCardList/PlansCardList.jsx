import React, { useState } from "react";
import plansData from "../../plans.json";
import PlanCard from "../PlanCard/PlanCard";
import { Card, Pagination } from "@mui/material";

export default function PlanCardList() {
    const [page, setPage] = useState(1);
    const plansPerPage = 9;
    const plans = plansData.data.slice((page - 1) * plansPerPage, page * plansPerPage);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    return (
        <Card>
            <Pagination
                count={Math.ceil(plansData.data.length / plansPerPage)}
                page={page}
                onChange={handlePageChange}
            />
            {plans.map((plan) => (
                <PlanCard key={plan.id}
                    mainImage={plan.mainImage}
                    title={plan.title}
                />
            ))}
        </Card>
    );
}