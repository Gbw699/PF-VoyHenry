import axios from "axios";
import { getProducts } from "./marketPlaceSlice";

export const getProducts = (id) => {
  return async (dispatch) => {
    if (id) {
      try {
        const response = await axios.get(`/products/${id}`);
        dispatch(getProducts(response.data));
      } catch (error) {
        return window.alert("No se pudo hacer el pedido");
      }
    } else {
      try {
        const response = await axios.get("/products/");
        dispatch(getProducts(response.data));
      } catch (error) {
        return window.alert("No se pudo hacer el pedido");
      }
    }
  };
};
