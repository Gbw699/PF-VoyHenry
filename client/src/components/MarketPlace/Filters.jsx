import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryFilter from "./CategoryFilter";
import OrderFilter from "./OrderFilter";
import AvailabilityFilter from "./AvailabilityFilter";
import {
  getProducts,
  getProductsByOrder,
} from "../../redux/slices/marketPlaceSlice/thunk";
import style from "./Filters.module.css";

export default function Filters() {
  const dispatch = useDispatch();
  const selected = useSelector(getProductsByOrder);

  useEffect(() => {
    dispatch(getProducts(selected));
  }, [selected]);

  return (
    <div className={style.container}>
      <div className={style.filters}>
        <CategoryFilter />
        <OrderFilter />
        <AvailabilityFilter />
      </div>
    </div>
  );
}
