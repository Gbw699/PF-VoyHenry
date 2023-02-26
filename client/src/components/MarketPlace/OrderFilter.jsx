import React from "react";
import { useDispatch } from "react-redux";
import { setProductsByOrder } from "../../redux/slices/marketPlaceSlice/marketPlaceSlice";
import style from "./Filters.module.css";

export default function OrderFilter() {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setProductsByOrder(event.target.value));
  };

  return (
    <div>
      <h3>Ordenar por</h3>
      <hr
        width="100%"
        color="#F1E100"
      />
      <select
        onChange={handleChange}
        className={style.handle}
      >
        <option value="">-- Selecciona una opción --</option>
        <option value="alfabetico">Nombre A-Z</option>
        <option value="reverso">Nombre Z-A</option>
        <option value="ascendente">Precio ascendente</option>
        <option value="descendente">Precio descendente</option>
      </select>
    </div>
  );
}
