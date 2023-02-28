import style from "./Filters.module.css";

export default function CategoryFilter({ filters, setFilters }) {
  return (
    <div className={style.container}>
      <label>
        Categorías
        <hr
          width="100%"
          color="#F1E100"
        />
        <select onChange={(event) => 
          setFilters({ ...filters, order: event.target.value })}
        >
          <option value="">-- Seleccionar categoría --</option>
          <option value="Remeras">Remeras</option>
          <option value="Pantalones">Pantalones</option>
          <option value="Gorros">Gorros</option>
        </select>
      </label>
    </div>
  );
};
