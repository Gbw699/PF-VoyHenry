import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import DateFilter from "./DateFilter";
import OrderFilter from "./OrderFilter";
// import LimitFilter from "./LimitFilter";
import { getBlogs } from "../../redux/slices/blogSlice/thunk";
import style from "./BlogFilters.module.css";

export default function BlogFilters({ pagePagination }) {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    date: "",
    order: "",
    //limit: undefined,
  });

  useEffect(() => {
    dispatch(getBlogs(pagePagination, filters.date, filters.order));
  }, [pagePagination, filters]);

  return (
    <div className={style.container}>
      <h3 className={style.title}>Filtros</h3>
      <hr
        color="#F1E100"
        width="100%"
      />
      {/* <hr
        width="100%"
        color="#F1E100"
      /> */}
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
