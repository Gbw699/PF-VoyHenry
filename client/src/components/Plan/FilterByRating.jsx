import React from "react";
import { useDispatch } from "react-redux";
import { getPlansbyOrder } from "../../redux/slices/planSlice/thunk";
import style from "./GeolocationForm.module.css";

export default function FilterByRating() {
  const dispatch = useDispatch();
  const handleClick = (event) => {
    const selectedRating = event.target.value;
    dispatch(getPlansbyOrder("rating", selectedRating));
  };
  return (
    <div>
      <h3 className={style.filterTitle}>Valoración</h3>
      <button
        className={style.buttonsValoracion}
        value="masvotados"
        onClick={handleClick}
      >
        Mas votados
      </button>
      <button
        className={style.buttonsValoracion}
        value="menosvotados"
        onClick={handleClick}
      >
        Menos votados
      </button>
      <hr
        width="100%"
        color="#F1E100"
      />
    </div>
  );
}
