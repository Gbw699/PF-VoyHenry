import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import DateFilter from "./DateFilter";
import OrderFilter from "./OrderFilter";
import LimitFilter from "./LimitFilter";
import { getBlogs } from "../../redux/slices/blogSlice/thunk";
import style from "./BlogFilter.module.css";

export default function BlogFilters() {
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    date: "",
    order: "",
    //limit: undefined,
  });

  useEffect(() => {
    dispatch(getBlogs(1, filters.date, filters.order));
  }, [filters]);

  return (
    <div className={style.container}>
      <h3 className={style.name}>Filtros</h3>
      <hr
        width="100%"
        color="#F1E100"
      />
      <DateFilter
        filters={filters}
        setFilters={setFilters}
      />

      <OrderFilter
        filters={filters}
        setFilters={setFilters}
      />
      {/* <LimitFilter
        filters={filters}
        setFilters={setFilters}
      /> */}
    </div>
  );
}
