import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import CategoryFilter from "./CategoryFilter";
import OrderFilter from "./OrderFilter";
import AvailabilityFilter from "./AvailabilityFilter";
import { getProducts, getProductsByOrder } from "../../redux/slices/marketPlaceSlice/thunk";
import style from "./Filters.module.css";
// import productMarketPlace from "../../marketPlace.json";

export default function Filters() {
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    category: "",
    order: "",
    availability: "",
  });

  const handleFilterChange = () => {
    dispatch(getProductsByOrder(filters)), [filters];
  };

  // useEffect(() => {
  //   dispatch(getProducts(filters));
  // }, [filters]);

  return (
    <div className={style.container}>
      <CategoryFilter
        filters={filters}
        setFilters={setFilters}
        onChange={handleFilterChange}
      />
      <OrderFilter
        filters={filters}
        setFilters={setFilters}
        onChange={handleFilterChange}
      />
      <AvailabilityFilter
        filters={filters}
        setFilters={setFilters}
        onChange={handleFilterChange}
      />
    </div>
  );
}
