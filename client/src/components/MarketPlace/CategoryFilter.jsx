import style from "./Filters.module.css";

export default function CategoryFilter({ filters, setFilters }) {
  return (
    <div className={style.container}>
      <h3>Categorías</h3>
      <hr
        width="100%"
        color="#F1E100"
      />
      <button
        className={style.button}
        value="remeras"
        onClick={(event) =>
          setFilters({ ...filters, category: event.target.value })
        }
      >
        Remeras
      </button>
      <button
        className={style.button}
        value="pantalones"
        onClick={(event) =>
          setFilters({ ...filters, category: event.target.value })
        }
      >
        Pantalones
      </button>
      <button
        className={style.button}
        value="gorros"
        onClick={(event) =>
          setFilters({ ...filters, category: event.target.value })
        }
      >
        Gorros
      </button>
    </div>
  );
}
