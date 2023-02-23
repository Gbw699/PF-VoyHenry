export default function DateFilter({ filters, setFilters }) {
  return (
    <div>
      <h3>Fecha</h3>
      <input
        type="date"
        name="dateInput"
        onChange={(event) =>
          setFilters({ ...filters, date: event.target.value })
        }
      />
    </div>
  );
}
