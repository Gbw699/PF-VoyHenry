import React from "react";
import CurrentPlans from "../FilteredPlans/CurrentPlans";
import NextPlans from "../FilteredPlans/NextPlans";
import CompletedPlans from "../FilteredPlans/CompletedPlans";
import OnlinePlans from "../FilteredPlans/OnlinePlans";
import style from "./PlansSections.module.css";
import axios from "axios";

export default function PlansSections() {
  const today = new Date().toISOString().slice(0, 10);
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayString = yesterday.toISOString().slice(0, 10);

  async function performTask(today, yesterday) {
    const resToday = await axios.get(`/api/v1/plans?date=${today}`);
    resToday.data.plans.plans.forEach(async (element) => {
      await axios.patch(`http://localhost:3001/api/v1/plans/${element.id}`, {
        state: "En progreso",
      });
    });
    const resYesterday = await axios.get(`/api/v1/plans?date=${yesterday}`);
    resYesterday.data.plans.plans.forEach(async (element) => {
      await axios.patch(`http://localhost:3001/api/v1/plans/${element.id}`, {
        state: "Finalizado",
      });
    });
  }

  performTask(today, yesterdayString);

  return (
    <div className={style.sectionsCont}>
      <NextPlans />
      <CurrentPlans />
      <CompletedPlans />
      <OnlinePlans />
    </div>
  );
}
