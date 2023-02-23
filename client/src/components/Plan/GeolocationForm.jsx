import React, { useState } from "react";
import FilterByCities from "./FilterByCities";
import FilterByDate from "./FilterByDate";
import FilterByRating from "./FilterByRating";
import style from "./GeolocationForm.module.css";
import { useDispatch } from "react-redux";
import { getPlansPerPage } from "../../redux/slices/planSlice/thunk";
import FilterByTitle from "./FilterByTitle";

export default function GeolocationForm() {
  const [filtros, setFiltros] = useState()
  const dispatch = useDispatch(event);
  const handleClick = () => {
    dispatch(getPlansPerPage(1));
  };
  return (
    <div className={style.container}>
      <h3 className={style.title}>Filtros</h3>
      <hr color="#F1E100" width="100%" />
      <div className={style.filtersCont}>
        <FilterByDate className={style.inputs}/>
        <FilterByCities className={style.inputs}/>
        <FilterByRating className={style.inputs}/>
        <FilterByTitle className={style.inputs}/>
        <button value="refresh" onClick={handleClick}>Refresh</button>
      </div>
    </div>
  );
}
