import React from "react";
import CategoryFilter from "./CategoryFilter";
import OrderFilter from "./OrderFilter";
import AvailabilityFilter from "./AvailabilityFilter";
import style from "./Filters.module.css";

export default function Filters() {
  return (
    <div className={style.container}>
      <div className={style.filters}>
        <CategoryFilter />
        <OrderFilter />
        <AvailabilityFilter />
      </div>
    </div>
  );
}
