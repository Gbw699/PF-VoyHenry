import style from "./Filters.module.css";

export default function AvailabilityFilter({ filters, setFilters }) {
  return (
    <div className={style.container}>
      <h3>Disponibilidad</h3>
      <hr
        width="100%"
        color="#F1E100"
      />
      <button
        className={style.button}
        value="true"
        onClick={(event) =>
          setFilters({ ...filters, availability: event.target.value })
        }
      >
        En stock
      </button>
      <button
        className={style.button}
        value="false"
        onClick={(event) =>
          setFilters({ ...filters, availability: event.target.value })
        }
      >
        Agotado
      </button>
    </div>
  );
}
