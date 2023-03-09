import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import DateFilter from "./DateFilter";
import OrderFilter from "./OrderFilter";
import { getBlogs } from "../../redux/slices/blogSlice/thunk";
import style from "./BlogFilters.module.css";

export default function BlogFilters({ pagePagination }) {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    date: "",
    order: "",
  });
  console.log(pagePagination);
  useEffect(() => {
    dispatch(getBlogs(pagePagination, filters.date, filters.order));
  }, [pagePagination, filters]);

  return (
    <div className={style.container}>
      <DateFilter
        filters={filters}
        setFilters={setFilters}
      />
      <OrderFilter
        filters={filters}
        setFilters={setFilters}
      />
    </div>
  );
}
