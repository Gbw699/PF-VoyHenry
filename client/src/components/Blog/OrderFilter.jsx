import style from "./OrderFilter.module.css";

export default function OrderFilter({ filters, setFilters }) {
  return (
    <div className={style.container}>
      <h3>Ordenar</h3>
      <hr
        width="100%"
        color="#F1E100"
      />
      <button
        className={style.buttonOrder}
        value="alfabetico"
        onClick={(event) =>
          setFilters({ ...filters, order: event.target.value })
        }
      >
        A - Z
      </button>
      <button
        className={style.buttonOrder}
        value="reverso"
        onClick={(event) =>
          setFilters({ ...filters, order: event.target.value })
        }
      >
        Z - A
      </button>
      <button
        className={style.button}
        value="masvotados"
        onClick={(event) =>
          setFilters({ ...filters, order: event.target.value })
        }
      >
        Más votados
      </button>
      <button
        className={style.button}
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
