import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterProductsByCategory } from "../../redux/slices/marketPlaceSlice/marketPlaceSlice";
import style from "./Filters.module.css";

export default function CategoryFilter() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
    console.log("New category selected:", newCategory);
    dispatch(filterProductsByCategory({ category: newCategory }));
  };

  return (
    <div className={style.container}>
      <label>
        Categorías
        <hr
          width="100%"
          color="#F1E100"
        />
        <select value={category} onChange={handleCategoryChange}>
          <option value="">-- Seleccionar categoría --</option>
          <option value="remeras">Remeras</option>
          <option value="pantalones">Pantalones</option>
          <option value="gorros">Gorros</option>
        </select>
      </label>
    </div>
  );
};
