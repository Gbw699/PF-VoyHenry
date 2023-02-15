import React from "react";
import { useSelector } from "react-redux";
import PlanCard from "../../recycle/PlanCard/PlanCard";
import Container from "@mui/material/Container";
import Typography from "@material-ui/core/Typography";

export default function HomePlansCardList() {
  // este componente dispatchea la action de traer los planes
  const plans = useSelector((state) => state.plan.topPlans);
  return (
    <>
      <Container>
        <Typography component="h2">
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
