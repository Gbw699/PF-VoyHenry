import React, { useEffect, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import OrderFilter from "./OrderFilter";
import AvailabilityFilter from "./AvailabilityFilter";
import style from "./Filters.module.css";
import { useDispatch } from "react-redux";
// import { getProducts } from "../../redux/slices/marketPlaceSlice/thunk";

export default function Filters() {
  // const dispatch = useDispatch();

  // const [filters, setFilters] = useState({
  //   category: "",
  //   order: "",
  //   availability: "",
  // });

  // useEffect(() => {
  //   dispatch(getProducts(filters.category, filters.order, filters.availability))
  // }, [filters]);

  return (
    <div className={style.container}>
      <div className={style.filters}>
        <CategoryFilter 
          // filters={filters}
          // setFilters={setFilters}
        />
        {/* <OrderFilter 
          filters={filters}
          setFilters={setFilters}
        />
        <AvailabilityFilter 
          filters={filters}
          setFilters={setFilters}
        /> */}
      </div>
    </div>
  );
};
