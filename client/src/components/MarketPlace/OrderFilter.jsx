import { useDispatch } from "react-redux";
import { getProductsbyOrder } from "../../redux/slices/marketPlaceSlice/thunk";
import style from "./Filters.module.css";

export default function OrderBy() {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(getProductsbyOrder("order", event.target.value));
  };

  return (
    <div className={style.containerFilter}>
      <label>
        Ordenar por
        <hr
          width="100%"
          color="#F1E100"
        />
        <select
          onChange={handleChange}
          className={style.selectFilter}
        >
          <option value="nuevos">Seleccionar opción</option>
          <option value="alfabetico">A-Z</option>
          <option value="reverso">Z-A</option>
          <option value="ascendente">Más baratos</option>
          <option value="descendente">Más caros</option>
        </select>
      </label>
    </div>
  );
}
