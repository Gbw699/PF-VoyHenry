export default function LimitFilter({ filters, setFilters }) {
  return (
    <div>
      <h3>Límite de reviews</h3>
      <input
        type="number"
        onChange={(event) =>
          setFilters({ ...filters, limit: event.target.value })
        }
        placeholder="Ingrese un número"
      />
    </div>
  );
}
