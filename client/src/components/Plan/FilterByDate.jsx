import React from "react";
import style from "./GeolocationForm.module.css";
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
    <div>
      <h3 className={style.filterTitle}>Fecha</h3>
      <input
        type="date"
        id="dateInput"
        name="dateInput"
        placeholder="Seleccionar fecha"
        className={style.inputs}
        onChange={handleInputChange}
      />
      <br />
      <button
        className={style.buttons}
        value="nuevos"
        onClick={handleClick}
      >
        Nuevos
      </button>
      <button
        className={style.buttons}
        value="antiguos"
        onClick={handleClick}
      >
        Antiguos
      </button>
      <hr
        width="100%"
        color="#F1E100"
      />
    </div>
  );
}
