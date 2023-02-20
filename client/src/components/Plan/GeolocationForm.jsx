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
        {/* <h3 className={style.filterTitle}>Fecha</h3>
        <input type="date" placeholder="Seleccionar fecha" className={style.inputs} /> */}
        <FilterByCities className={style.inputs}/>
        {/* <h3 className={style.filterTitle}>Lugar</h3>
        <input type="text" placeholder="Seleccionar locación" className={style.inputs} /> */}
        <FilterByRating className={style.inputs}/>
        {/* <h3 className={style.filterTitle}>Valoración</h3>
        <input type="text" placeholder="Filtrar por valoraciones" className={style.inputs} /> */}
      </div>
    </div>
  );
}
