import React from "react";
import { useDispatch } from "react-redux";
import { getPlansbyOrder } from "../../redux/slices/planSlice/thunk";
import style from "./FiltersContainer.module.css";
export default function FilterByTitle() {
  const dispatch = useDispatch();
  const handleClick = (event) => {
    const selectedOrder = event.target.value;
    dispatch(getPlansbyOrder("order", selectedOrder));
  };
  return (
    <div className={style.FilterByTitle}>
      <h3 className={style.filterTitle}>Alfabeticamente</h3>
      <hr
        width="100%"
        color="#b1b1b1"
      />
      <button
        className={style.filterBtn}
        value="alfabetico"
        onClick={handleClick}
      >
        A - Z
      </button>
      <button
        className={style.filterBtn}
        value="reverso"
        onClick={handleClick}
      >
        Z - A
      </button>
    </div>
  );
}
