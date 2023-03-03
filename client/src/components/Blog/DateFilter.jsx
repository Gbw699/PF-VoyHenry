import style from "./DateFilter.module.css";

export default function DateFilter({ filters, setFilters }) {
  return (
    <div className={style.container}>
      <p className={style.filterTitle}>Fecha</p>
      <hr
        width="100%"
        color="#b1b1b1"
      />
      <input
        className={style.input}
        type="date"
        name="dateInput"
        onChange={(event) =>
          setFilters({ ...filters, date: event.target.value })
        }
      />
            <button
        className={style.buttons}

      >
        Nuevos
      </button>
      <button
        className={style.buttons}
      >
        Antiguos
      </button>
    </div>
  );
}
