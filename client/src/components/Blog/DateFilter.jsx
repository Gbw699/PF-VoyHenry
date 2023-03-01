import style from "./DateFilter.module.css";

export default function DateFilter({ filters, setFilters }) {
  return (
    <div className={style.container}>
      <p className={style.name}>Fecha</p>
      <input
        className={style.input}
        type="date"
        name="dateInput"
        onChange={(event) =>
          setFilters({ ...filters, date: event.target.value })
        }
      />
    </div>
  );
}
