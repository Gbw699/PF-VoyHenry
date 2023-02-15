import React from "react";
import { useSelector } from "react-redux";
import PlanSection from "./PlanSection";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";

export default function HomePlansSections() {
  const plans = useSelector((state) => { state.plans.sectionPlans; });
  return (
    <>
      <Container>
        {plans?.map((plan) => {
          <Link key={plan.id}>
            <PlanSection
              id={plan.id}
              title={plan.title}
              mainImage={plan.mainImage}
              eventDate={plan.eventDate}
              state={plan.state}
            />;
          </Link>;
        })}
      </Container>
    </>
  );
}
