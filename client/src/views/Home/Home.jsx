import React from "react";
import PlansCardListHome from "../../components/Home/PlanCardListHome";
import PlansSections from "../../recycle/PlansSections/PlansSections";
import BlogReview from "../../components/Home/BlogReview";
// import { Container } from "@mui/material";
import ProfileCard from "../../recycle/ProfileCard/ProfileCard";
import style from "./Home.module.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const handleSubmit = () => {
      navigate("/createPlan");
  };

  return (
    <div className={style.container}>
      <div className={style.profileCont}>
        <ProfileCard />
        <button
          type="submit"
          className={style.createBtn}
          onClick={handleSubmit}
        >
          Crea tu evento
        </button>
      </div>
      <div className={style.featured}>
        <h3 className={style.featuredTitle}>Planes Destacados</h3>
        <hr width="100%" color="#F1E100" />
        <PlansCardListHome />
        <BlogReview />
      </div>
      <PlansSections />
    </div>
  );
}
