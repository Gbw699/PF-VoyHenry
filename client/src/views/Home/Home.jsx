import React from "react";
import PlansCardList from "../../recycle/PlanCardList/PlansCardList";
import PlansSections from "../../recycle/PlansSections/PlansSections";
import BlogReview from "../../components/Home/BlogReview";
import { Container } from "@mui/material";
import ProfileCard from "../../recycle/ProfileCard/ProfileCard";

export default function Home() {
  // const dispatch = useDispatch();
  return (
    <Container>
      <ProfileCard />
      <PlansCardList />
      <PlansSections /> 
      <BlogReview />
    </Container>
  );
}

