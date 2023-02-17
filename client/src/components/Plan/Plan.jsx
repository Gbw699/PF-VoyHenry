import React from "react";
import GeolocationForm from "./GeolocationForm";
import PlanCardList from "../../recycle/PlanCardList/PlansCardList";
import PlansSections from "../../recycle/PlansSections/PlansSections";

export default function Plan() {

    return (
        <div>
            <GeolocationForm />
            <PlanCardList />
            <PlansSections />
        </div>
    );
}