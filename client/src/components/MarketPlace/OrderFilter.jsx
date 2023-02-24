import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductsByOrder } from "../../redux/slices/marketPlaceSlice/marketPlaceSlice";
// import { useState } from "react";
import { getProductsByOrder } from "../../redux/slices/marketPlaceSlice/thunk";
import style from "./Filters.module.css";

export default function OrderFilter() {
  const dispatch = useDispatch();
  // const renderProducts = useSelector(
  //   (state) => state.marketPlace.renderProducts
  // );

  const handleClick = (event) => {
    const selectedOrder = event.target.value;
    console.log("Selected order: ", selectedOrder);
    dispatch(getProductsByOrder({ filter: "order", order: selectedOrder }));
  };

  return (
    <div className={style.container}>
      <h3>Ordenar por</h3>
      <hr
        width="100%"
        color="#F1E100"
      />
      <select onChange={(event) => handleClick(event)}>
        <option value="">-- Selecciona una opción --</option>
        <option value="ascendente">Precio ascendente</option>
        <option value="descendente">Precio descendente</option>
        <option value="alfabetico">Nombre A-Z</option>
        <option value="reverso">Nombre Z-A</option>
      </select>
    </div>
  );
}
