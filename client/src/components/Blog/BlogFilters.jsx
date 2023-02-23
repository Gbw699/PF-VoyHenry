import { useEffect, useState } from "react";
import DateFilter from "./DateFilter";
import OrderFilter from "./OrderFilter";
import LimitFilter from "./LimitFilter";

export default function BlogFilters() {
  const [filters, setFilters] = useState({
    date: undefined,
    order: "",
    limit: undefined,
  });

  useEffect(() => {
    console.log(filters);
  }, [filters]);
  return (
    <div>
      <h3>Filtros</h3>
      <DateFilter
        filters={filters}
        setFilters={setFilters}
      />
      <OrderFilter
        filters={filters}
        setFilters={setFilters}
      />
      <LimitFilter
        filters={filters}
        setFilters={setFilters}
      />
    </div>
  );
}
