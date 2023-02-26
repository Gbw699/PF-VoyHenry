import React from "react";
import { useDispatch } from "react-redux";
import { setProductsByOrder } from "../../redux/slices/marketPlaceSlice/marketPlaceSlice";
import style from "./Filters.module.css";

export default function AvailabilityFilter() {
  const dispatch = useDispatch();

  const handleClick = (event) => {
    dispatch(setProductsByOrder(event.target.value === "true"));
  };

  return (
    <div className={style.container}>
      <h3>Disponibilidad</h3>
      <hr
        width="100%"
        color="#F1E100"
      />
      <button
        className={style.button}
        value="true"
        onClick={handleClick}
      >
        En stock
      </button>
      <button
        className={style.button}
        value="false"
        onClick={handleClick}
      >
        Agotado
      </button>
    </div>
  );
}
