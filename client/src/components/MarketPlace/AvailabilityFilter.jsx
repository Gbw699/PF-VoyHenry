import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterProductsByAvailability } from "../../redux/slices/marketPlaceSlice/marketPlaceSlice";
import style from "./Filters.module.css";

export default function AvailabilityFilter() {
  const dispatch = useDispatch();
  const [available, setAvailable] = useState("");

  const handleAvailableChange = (e) => {
    const newAvailable = e.target.value;
    setAvailable(newAvailable);
    console.log("New availability selected:", newAvailable);
    dispatch(filterProductsByAvailability(newAvailable === "true"));
  };

  return (
    <div className={style.container}>
      <label>Disponibilidad
        <hr
          width="100%"
          color="#F1E100"
        />
        <select value={available} onChange={handleAvailableChange}>
          <option value="">-- Todos los productos --</option>
          <option value="true">En stock</option>
          <option value="false">Agotados</option>
        </select>
      </label>
    </div>
  );
};
