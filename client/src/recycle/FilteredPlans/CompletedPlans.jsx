import axios from "axios";
import React, { useState, useEffect } from "react";
import style from "./FilteredPlans.module.css";
import { queryString } from "./queryStringPlan";

export default function CurrentPlans() {
  const [plansData, setPlansData] = useState(null);
  const queryUrl = queryString("state", "Finalizado");
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/api/v1/plans?${queryUrl}`);
      setPlansData(response.data.plans.plans);
    }
    fetchData();
  }, []);

  if (!plansData) {
    return <div>Loading...</div>;
  }

  if (plansData.length < 2) {
    return <div>Loading...</div>;
  }

  if (plansData) {
    const plans = [plansData[0], plansData[1]];

    return (
      <div className={style.cardCont}>
        <h3 className={style.cardTitle}>Planes Finalizados</h3>
        <hr
          width="100%"
          color="#F1E100"
        />
        <div className={style.imgCont}>
          {plans.map((plan) => (
            <img
              key={plan.id}
              className={style.planImg}
              src={plan.mainImage}
              title={plan.title}
            />
          ))}
        </div>
        <button className={style.btn}>Deja tu reseña</button>
      </div>
    );
  }
}
