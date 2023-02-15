import React from "react";
import { useSelector } from "react-redux";
import PlanCard from "../PlanCard/PlanCard";
import Container from "@mui/material/Container";
import Typography from "@material-ui/core/Typography";

export default function PlansCardList() {
  // este componente dispatchea la action de traer los planes
  const plans = useSelector((state) => state.plan.topPlans);
  return (
    <>
      <Container>
        <Typography>
          Planes Destacados
        </Typography>
        {plans?.map((plan) => {
          <div key={plan.id}>
            <PlanCard
              id={plan.id}
              title={plan.title}
              mainImage={plan.mainImage}
              summary={plan.summary}
              eventDate={plan.eventDate}
              state={plan.state}
            />;
          </div>;
        })}
      </Container>
    </>
  );
}
