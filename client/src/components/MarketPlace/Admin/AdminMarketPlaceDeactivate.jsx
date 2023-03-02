import React from "react";
// import style from './AdminMarketPlaceDeactivate.module.css'
import { useSelector } from "react-redux";

export default function AdminMarketPlaceDeactivate() {
  const { products } = useSelector(
    (state) => state.marketPlaceStore.filteredProducts
  );
  return !products ? (
    <select>
      <option>No hay productos</option>
    </select>
  ) : (
    <select>
      {products.map((element) => (
        <option key={element.id}>{element.title}</option>
      ))}
    </select>
  );
}
