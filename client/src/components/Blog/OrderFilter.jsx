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
        value="alfabetico"
        onClick={(event) =>
          setFilters({ ...filters, order: event.target.value })
        }
      >
        AZ
      </button>
      <button
        value="reverso"
        onClick={(event) =>
          setFilters({ ...filters, order: event.target.value })
        }
      >
        ZA
      </button>
      <button
        value="masvotados"
        onClick={(event) =>
          setFilters({ ...filters, order: event.target.value })
        }
      >
        Más votados
      </button>
      <button
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
