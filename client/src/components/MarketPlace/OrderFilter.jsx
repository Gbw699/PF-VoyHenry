import { useState } from "react";
import style from "./Filters.module.css";

export default function OrderFilter({ onOrderChange }) {
  const [order, setOrder] = useState("");

  const handleOrderChange = (event) => {
    const newOrder = event.target.value;
    setOrder(newOrder);
    onOrderChange(newOrder);
  };

  return (
    <div className={style.container}>
      <h3>Ordenar por</h3>
      <hr width="100%" color="#F1E100" />
      <select value={order} onChange={handleOrderChange}>
        <option value="">-- Selecciona una opción --</option>
        <option value="price_asc">Precio ascendente</option>
        <option value="price_desc">Precio descendente</option>
        <option value="name_asc">Nombre A-Z</option>
        <option value="name_desc">Nombre Z-A</option>
      </select>
    </div>
  );
}
