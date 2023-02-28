import style from "./Filters.module.css";

export default function OrderBy({ filters, setFilters }) {
  return (
    <div className={style.container}>
      <label>Ordenar por
        <hr
          width="100%"
          color="#F1E100"
        />
        <select onChange={(event) => 
          setFilters({ ...filters, order: event.target.value })}
        >
          <option value="">-- Seleccionar opción --</option>
          <option value="alfabetico">A-Z</option>
          <option value="reverso">Z-A</option>
          <option value="ascendente">Más baratos</option>
          <option value="descendente">Más caros</option>
        </select>
      </label>
    </div>
  );
};
