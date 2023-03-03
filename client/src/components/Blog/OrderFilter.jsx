import style from "./BlogFilters.module.css";

export default function OrderFilter({ filters, setFilters }) {
  return (
    <div>
      <h3>Valoración</h3>
      <hr
        width="100%"
        color="#b1b1b1"
      />
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
      <h3>Alfabeticamente</h3>
      <hr
        width="100%"
        color="#b1b1b1"
      />
      <div>
        <button
          value="alfabetico"
          onClick={(event) =>
            setFilters({ ...filters, order: event.target.value })
          }
        >
          A - Z
        </button>
        <button
          value="reverso"
          onClick={(event) =>
            setFilters({ ...filters, order: event.target.value })
          }
        >
          Z - A
        </button>
      </div>
    </div>
  );
}
