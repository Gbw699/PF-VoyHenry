import axios from "axios";
import {
  setProducts,
  setDetailProducts
} from "./marketPlaceSlice";

export const getProducts = (id) => {
  return async (dispatch) => {
    if (id) {
      try {
        const response = await axios.get(`/api/v1/products/${id}`);
        dispatch(setDetailProducts(response.data));
      } catch (error) {
        return console.log("No se pudo hacer el pedido");
      }
    } else {
      try {
        const response = await axios.get("/api/v1/products/");
        dispatch(setProducts(response.data));
      } catch (error) {
        return console.log("No se pudo hacer el pedido");
      }
    }
  };
};

export const getProductsByFilter = (category = "", order = "", availability = "") => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `/api/v1/products?category=${category}&order=${order}&availability=${availability}`
      );
      dispatch(setProducts(response.data.products));
    } catch (error) {
      console.error(error.message);
    }
  };
};
