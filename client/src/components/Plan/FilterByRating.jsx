import React from "react";
import { useDispatch } from "react-redux";
import { getPlansbyOrder } from "../../redux/slices/planSlice/thunk";
import style from "./GeolocationForm.module.css";

export default function FilterByRating() {
  const dispatch = useDispatch();
  const handleClick = (event) => {
    const selectedRating = event.target.value;
    dispatch(getPlansbyOrder("order", selectedRating));
  };
  return (
    <div className={style.FilterByRating}>
      <h3 className={style.filterTitle}>Valoración</h3>
      <hr
        width="100%"
        color="#b1b1b1"
      />
      <button
        className={style.filterBtn}
        value="masvotados"
        onClick={handleClick}
      >
        Mas votados
      </button>
      <button
        className={style.filterBtn}
        value="menosvotados"
        onClick={handleClick}
      >
        Menos votados
      </button>
    </div>
  );
}
