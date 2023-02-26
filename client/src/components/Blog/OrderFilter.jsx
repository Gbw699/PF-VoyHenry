import style from "./OrderFilter.module.css";

export default function OrderFilter({ filters, setFilters }) {
  return (
    <div className={style.container}>
      <h3 className={style.name}>Ordenar</h3>

      <button
        className={style.buttons}
        value="alfabetico"
        onClick={(event) =>
          setFilters({ ...filters, order: event.target.value })
        }
      >
        A - Z
      </button>
      <button
        className={style.buttons}
        value="reverso"
        onClick={(event) =>
          setFilters({ ...filters, order: event.target.value })
        }
      >
        Z - A
      </button>
      <button
        className={style.buttons}
        value="masvotados"
        onClick={(event) =>
          setFilters({ ...filters, order: event.target.value })
        }
      >
        Más votados
      </button>
      <button
        className={style.buttons}
        value="menosvotados"
        onClick={(event) =>
          setFilters({ ...filters, order: event.target.value })
        }
      >
        Menos votados
      </button>
    </div>
  );
}
