import style from "./BlogFilters.module.css";

export default function OrderFilter({ filters, setFilters }) {
  return (
    <div className={style.FilterByOrder}>
      <p className={style.filterTitle}>Valoración</p>
      <hr
        width="100%"
        color="#f1e100"
      />
      <button
        value="masvotados"
        onClick={(event) =>
          setFilters({ ...filters, order: event.target.value })
        }
        className={style.filterBtn}
      >
        Más votados
      </button>
      <button
        value="menosvotados"
        onClick={(event) =>
          setFilters({ ...filters, order: event.target.value })
        }
        className={style.filterBtn}
      >
        Menos votados
      </button>
      <p className={style.filterTitle}>Alfabeticamente</p>
      <hr
        width="100%"
        color="#f1e100"
      />
      <button
        value="alfabetico"
        onClick={(event) =>
          setFilters({ ...filters, order: event.target.value })
        }
        className={style.filterBtn}
      >
        A - Z
      </button>
      <button
        value="reverso"
        onClick={(event) =>
          setFilters({ ...filters, order: event.target.value })
        }
        className={style.filterBtn}
      >
        Z - A
      </button>
    </div>
  );
}
