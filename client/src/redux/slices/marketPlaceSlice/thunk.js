import axios from "axios";
import { queryString } from "./queryStringMarket.js";
import {
  setProducts,
  setDetailProducts,
  setProductsByOrder,
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

export const getProductsByOrder = (filter, order) => {
  const queryUrl = queryString(filter, order);
  console.log(queryUrl.slice(0, -1));
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `/api/v1/products?${queryUrl.slice(0, -1)}`
      );
      dispatch(setProductsByOrder(response.data.products.products));
    } catch (error) {
      console.log("No se pudo realizar la petición:", error.message);
    }
  };
};
