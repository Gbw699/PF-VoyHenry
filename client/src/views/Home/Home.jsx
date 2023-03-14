import React from "react";
import PlansCardListHome from "../../components/Home/PlanCardListHome";
import PlansSections from "../../recycle/PlansSections/PlansSections";
import BlogHome from "../../components/Home/BlogHome";
import ProfileCard from "../../recycle/ProfileCard/ProfileCard";
import style from "./Home.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import getMediaQuery from "../../recycle/MediaQuerys/mediaQuerys.mjs";

export default function Home() {

  const isMobile = useMediaQuery(getMediaQuery("xs"));
  const isTablet = useMediaQuery(getMediaQuery("sm"));

  console.log(isMobile);
  console.log(isTablet);

  return (
    <div className={style.container}>
      {!isMobile && !isTablet && <div className={style.profileCont}>
        <ProfileCard />
      </div>}
      <div className={style.featured}>
        <h3 className={style.featuredTitle}>Planes Destacados</h3>
        <hr
          width="100%"
          color="#F1E100"
        />
        <PlansCardListHome />
        {!isMobile && <h3 className={style.featuredTitle}>Reseñas Destacadas</h3>}
        {!isMobile && <hr
          width="100%"
          color="#F1E100"
        />}
        {!isMobile && <BlogHome />}
      </div>
      {!isMobile && !isTablet && <div className={style.sections}>
        <PlansSections />
      </div>}
    </div>
  );
}
