import style from "./Filters.module.css";

export default function AvailabilityFilter({ filters, setFilters }) {
  return (
    <div className={style.container}>
      <label>Disponibilidad
        <hr
          width="100%"
          color="#F1E100"
        />
        <select onChange={(event) => 
          setFilters({ ...filters, order: event.target.value })}
        >
          <option value="">-- Todos los productos --</option>
          <option value="true">En stock</option>
          <option value="false">Agotados</option>
        </select>
      </label>
    </div>
  );
};
