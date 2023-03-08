import React from "react";
import style from "./FiltersContainer.module.css";
import { useDispatch } from "react-redux";
import { getPlansbyOrder } from "../../redux/slices/planSlice/thunk";

export default function FilterByDate() {
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const selectedDate = event.target.value;
    dispatch(getPlansbyOrder("date", selectedDate));
  };

  const handleClick = (event) => {
    const selectedOrder = event.target.value;
    dispatch(getPlansbyOrder("order", selectedOrder));
  };

  return (
    <div className={style.FilterByDate}>
      <h3 className={style.filterTitle}>Fecha</h3>
      <hr
        width="100%"
        color="#f1e100"
      />
      <input
        type="date"
        id="dateInput"
        name="dateInput"
        placeholder="Seleccionar fecha"
        className={style.inputs}
        onChange={handleInputChange}
      />
      <button
        className={style.filterBtn}
        value="nuevos"
        onClick={handleClick}
      >
        Nuevos
      </button>
      <button
        className={style.filterBtn}
        value="antiguos"
        onClick={handleClick}
      >
        Antiguos
      </button>
    </div>
  );
}
