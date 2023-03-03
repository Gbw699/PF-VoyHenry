import style from "./BlogFilters.module.css";

export default function DateFilter({ filters, setFilters }) {
  return (
    <div>
      <p>Fecha</p>
      <hr
        width="100%"
        color="#b1b1b1"
      />
      <input
        type="date"
        name="dateInput"
        onChange={(event) =>
          setFilters({ ...filters, date: event.target.value })
        }
      />
      <button>
        Nuevos
      </button>
      <button>
        Antiguos
      </button>
    </div>
  );
}
