import React from "react";
import CategoryFilter from "./CategoryFilter";
import OrderBy from "./OrderFilter";
import AvailabilityFilter from "./AvailabilityFilter";
import style from "./Filters.module.css";

export default function Filters() {
  return (
    <div className={style.container}>
      <CategoryFilter />
      <OrderBy />
      <AvailabilityFilter />
    </div>
  );
};
