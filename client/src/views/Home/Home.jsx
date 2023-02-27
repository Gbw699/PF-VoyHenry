import React from "react";
import PlansCardListHome from "../../components/Home/PlanCardListHome";
import PlansSections from "../../recycle/PlansSections/PlansSections";
import BlogHome from "../../components/Home/BlogHome";
// import { Container } from "@mui/material";
import ProfileCard from "../../recycle/ProfileCard/ProfileCard";
import style from "./Home.module.css";

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.profileCont}>
        <ProfileCard />
      </div>

      <div className={style.featured}>
        <h3 className={style.featuredTitle}>Planes Destacados</h3>
        <hr
          width="100%"
          color="#F1E100"
        />
        <PlansCardListHome />
        <BlogHome />
      </div>

      <PlansSections />
    </div>
  );
}
