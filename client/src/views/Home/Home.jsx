import React from "react";
import PlansCardList from "../../recycle/PlanCardList/PlansCardList";
import PlansSections from "../../recycle/PlansSections/PlansSections";
import BlogReview from "../../components/Home/BlogReview";
// import { Container } from "@mui/material";
import ProfileCard from "../../recycle/ProfileCard/ProfileCard";
import style from "./Home.module.css";

export default function Home() {
  // const dispatch = useDispatch();
  return (
    <div className={style.container}>
      <ProfileCard />
      <div className={style.featured}>
        <PlansCardList />
        <BlogReview />
      </div>
      <PlansSections /> 
    </div>
  );
}

