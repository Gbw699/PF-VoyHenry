import { useDispatch } from "react-redux";
import { getProductsbyOrder } from "../../redux/slices/marketPlaceSlice/thunk";
import style from "./Filters.module.css";

export default function CategoryFilter() {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    console.log(event.target.value);
    dispatch(getProductsbyOrder("category", event.target.value));
  };

  return (
    <div className={style.containerFilter}>
      <label>
        Categorías
        <hr
          width="100%"
          color="#F1E100"
        />
        <select
          onChange={handleChange}
          className={style.selectFilter}
        >
          {/* Está hardcodeado */}
          <option value="">Seleccionar categoría</option>
          <option value="Remeras">Remeras</option>
          <option value="Pantalones">Pantalones</option>
          <option value="Gorros">Gorros</option>
        </select>
      </label>
    </div>
  );
}
