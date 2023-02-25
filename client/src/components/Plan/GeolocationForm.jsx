import React from "react";
import FilterByDate from "./FilterByDate";
import FilterByRating from "./FilterByRating";
import style from "./GeolocationForm.module.css";
import { useDispatch } from "react-redux";
import { getPlansPerPage } from "../../redux/slices/planSlice/thunk";
import FilterByTitle from "./FilterByTitle";
import FilterByCountry from "./FilterByCountry";

export default function GeolocationForm() {
  const dispatch = useDispatch(event);
  const handleClick = () => {
    dispatch(getPlansPerPage(1));
  };
  return (
    <div className={style.container}>
      <h3 className={style.title}>Filtros</h3>
      <hr
        color="#F1E100"
        width="100%"
      />
      <div className={style.filtersCont}>
        <FilterByDate className={style.inputs} />
        <FilterByCountry className={style.inputs} />
        <FilterByRating className={style.inputs} />
        <FilterByTitle className={style.inputs} />
        <button
          className={style.buttonActualizar}
          value="refresh"
          onClick={handleClick}
        >
          Actualizar
        </button>
      </div>
    </div>
  );
}