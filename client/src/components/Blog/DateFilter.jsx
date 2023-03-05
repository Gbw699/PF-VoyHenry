import style from "./BlogFilters.module.css";

export default function DateFilter({ filters, setFilters }) {
  return (
    <div className={style.FilterByDate}>
      <p className={style.filterTitle}>Fecha</p>
      <hr
        width="100%"
        color="#f1e100"
      />
      <input
        type="date"
        name="dateInput"
        onChange={(event) =>
          setFilters({ ...filters, date: event.target.value })
        }
        className={style.inputs}
      />
      <button className={style.filterBtn}>
        Nuevos
      </button>
      <button className={style.filterBtn}>
        Antiguos
      </button>
    </div>
  );
}
