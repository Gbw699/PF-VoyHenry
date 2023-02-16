import * as React from "react";
import plansSelectionData from "../../plansSelection.json";
import { ImageList, ImageListItem } from "@mui/material";

export default function PlansSections() {
    const plans = plansSelectionData.data;
    return (
        <ImageList sx={{ width: 300, height: 500 }} cols={2}>
            {plans.map((plan) => (
                <ImageListItem key={plan.mainImage}>
                    <img
                        src={`${plan.mainImage}`}
                        alt={plan.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

