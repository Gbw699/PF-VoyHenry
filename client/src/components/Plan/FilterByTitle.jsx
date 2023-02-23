import React from "react";
import { useDispatch } from "react-redux";
import { getPlansbyOrder } from "../../redux/slices/planSlice/thunk";
import style from "./GeolocationForm.module.css";
export default function FilterByTitle() {
  const dispatch = useDispatch();
  const handleClick = (event) => {
    const selectedOrder = event.target.value;
    dispatch(getPlansbyOrder("order", selectedOrder));
  };
  return (
    <div>
      <button
        className={style.buttonsOrdenamiento}
        value="alfabetico"
        onClick={handleClick}
      >
        A - Z
      </button>
      <button
        className={style.buttonsOrdenamiento}
        value="reverso"
        onClick={handleClick}
      >
        Z - A
      </button>
      <hr
        width="100%"
        color="#F1E100"
      />
    </div>
  );
}
