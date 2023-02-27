import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sortProductsByTitle, sortProductsByPrice } from "../../redux/slices/marketPlaceSlice/marketPlaceSlice";
import style from "./Filters.module.css";

export default function OrderBy() {
  const dispatch = useDispatch();
  const [order, setOrder] = useState("");

  const handleOrderChange = (e) => {
    const newOrder = e.target.value;
    setOrder(newOrder);
    console.log("New order selected:", newOrder);

    if (newOrder === "title") {
      dispatch(sortProductsByTitle());
    } else if (newOrder === "price") {
      dispatch(sortProductsByPrice());
    }
  };

  return (
    <div className={style.container}>
      <label>Ordenar por
        <hr
          width="100%"
          color="#F1E100"
        />
        <select value={order} onChange={handleOrderChange}>
          <option value="">-- Seleccionar opción --</option>
          <option value="alfabetico">A-Z</option>
          <option value="reverso">Z-A</option>
          <option value="ascendente">Más baratos</option>
          <option value="descendente">Más caros</option>
        </select>
      </label>
    </div>
  );
};
