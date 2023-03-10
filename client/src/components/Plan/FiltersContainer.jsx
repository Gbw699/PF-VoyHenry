import React from "react";
import FilterByDate from "./FilterByDate";
import FilterByRating from "./FilterByRating";
import style from "./FiltersContainer.module.css";
import { useDispatch } from "react-redux";
import { getPlansbyOrder } from "../../redux/slices/planSlice/thunk";
import FilterByTitle from "./FilterByTitle";
import FilterByCountry from "./FilterByCountry";

export default function FiltersContainer() {
  const dispatch = useDispatch(event);

  const handleClick = () => {
    dispatch(getPlansbyOrder("clean", 1));
  };

  return (
    <div className={style.container}>
      <div className={style.filtersCont}>
        
        {/* <SearchPlan className={style.inputs} /> */}
        <FilterByDate className={style.inputs} />
        <FilterByCountry className={style.inputs} />
        <FilterByRating className={style.inputs} />
        <FilterByTitle className={style.inputs} />
        <div className={style.btnCont}>
          <button
            className={style.buttons}
            value="refresh"
            onClick={handleClick}
          >
            Actualizar
          </button>
        </div>
      </div>
    </div>
  );
}
