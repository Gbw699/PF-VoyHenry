import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./FilteredPlans.module.css";
import { queryString } from "./queryStringPlan";

export default function NextPlans() {
  const [plansData, setPlansData] = useState(null);
  const queryUrl = queryString("state", "En planeacion");
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/api/v1/plans?${queryUrl}`);
      setPlansData(response.data.plans.plans);
    }
    fetchData();
  }, []);

  if (!plansData) {
    return (
      <div className={style.cardCont}>
        <h3 className={style.cardTitle}>Próximos planes</h3>
        <hr
          width="100%"
          color="#F1E100"
        />
        <div className={style.imgCont}>
          No hay planes próximos en este momento
        </div>
      </div>
    );
  }

  if (plansData.length < 2) {
    return <div>Loading...</div>;
  }

  if (plansData) {
    const plans = [plansData[0], plansData[1]];

    return (
      <div className={style.cardCont}>
        <h3 className={style.cardTitle}>Próximos Planes</h3>
        <hr
          width="100%"
          color="#F1E100"
        />
        <div className={style.imgCont}>
          {plans.map((plan) => (
            <Link
              to={`/plans/${plan.id}`}
              key={plan.id}
            >
              <img
                className={style.planImg}
                src={plan.mainImage}
                alt={plan.title}
                title={plan.title}
                loading="lazy"
              />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
