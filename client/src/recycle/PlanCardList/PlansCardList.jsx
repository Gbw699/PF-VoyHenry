import React from "react";
import plansData from "../../topPlans.json";
import PlanCard from "../PlanCard/PlanCard";
import { Card } from "@mui/material";

export default function Plan() {
    const plans = plansData.data;
    return (
        <Card>
            {plans.map((plan) => (
                <PlanCard key={plan.id}
                    mainImage={plan.mainImage}
                    title={plan.title}
                />
            ))}
        </Card>
    );
}


