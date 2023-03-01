import { useDispatch } from "react-redux";
import { getProductsbyOrder } from "../../redux/slices/marketPlaceSlice/thunk";
import style from "./Filters.module.css";

export default function AvailabilityFilter() {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    console.log(event.target.value);
    dispatch(getProductsbyOrder("availability", event.target.value));
  };

  return (
    <div>
      <label>
        Disponibilidad
        <hr
          width="100%"
          color="#F1E100"
        />
        <select
          onChange={handleChange}
          className={style.selectFilter}
        >
          <option value="">Todos los productos</option>
          <option value="true">En stock</option>
          <option value="false">Agotados</option>
        </select>
      </label>
    </div>
  );
}
