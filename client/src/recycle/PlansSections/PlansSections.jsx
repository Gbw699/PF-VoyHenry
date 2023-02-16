import * as React from "react";
import CurrentPlans from "../FilteredPlans/CurrentPlans";
import NextPlans from "../FilteredPlans/NextPlans";
import CompletedPlans from "../FilteredPlans/CompletedPlans";
import OnlinePlans from "../FilteredPlans/OnlinePlans";
import { Container } from "semantic-ui-react";

export default function PlansSections() {
    return (
        <Container
        style={{width: "300px"}}
        >
            <NextPlans />
            <CurrentPlans />
            <CompletedPlans />
            <OnlinePlans />
        </Container>
    );
}

