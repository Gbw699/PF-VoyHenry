import React from "react";
import FilterByCities from "./FilterByCities";
import FilterByDate from "./FilterByDate";
import FilterByRating from "./FilterByRating";
import style from "./GeolocationForm.module.css";

export default function GeolocationForm() {
  return (
    <div className={style.container}>
      <h3 className={style.title}>Filtros</h3>
      <hr color="#F1E100" width="100%" />
      <div className={style.filtersCont}>
        <FilterByDate className={style.inputs}/>
        <FilterByCities className={style.inputs}/>
        <FilterByRating className={style.inputs}/>
      </div>
    </div>
  );
}
