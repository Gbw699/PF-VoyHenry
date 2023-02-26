import React from "react";
import { useDispatch } from "react-redux";
import { setProductsByOrder } from "../../redux/slices/marketPlaceSlice/marketPlaceSlice";
import style from "./Filters.module.css";

export default function CategoryFilter() {
  const dispatch = useDispatch();

  const handleClick = (event) => {
    dispatch(setProductsByOrder(event.target.value));
  };

  return (
    <div>
      <h3>Categorías</h3>
      <hr
        width="100%"
        color="#F1E100"
      />
      <button
        className={style.button}
        value="remeras"
        onClick={(event) => handleClick(event)}
      >
        Remeras
      </button>
      <button
        className={style.button}
        value="pantalones"
        onClick={(event) => handleClick(event)}
      >
        Pantalones
      </button>
      <button
        className={style.button}
        value="gorros"
        onClick={(event) => handleClick(event)}
      >
        Gorros
      </button>
    </div>
  );
}
