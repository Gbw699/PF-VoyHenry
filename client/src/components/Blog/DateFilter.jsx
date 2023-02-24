import style from "./DateFilter.module.css";

export default function DateFilter({ filters, setFilters }) {
  return (
    <div className={style.container}>
      <h3 className={style.name}>Fecha</h3>

      <input
        type="date"
        name="dateInput"
        onChange={(event) =>
          setFilters({ ...filters, date: event.target.value })
        }
      />
      <hr
        width="100%"
        color="#F1E100"
      />
    </div>
  );
}
