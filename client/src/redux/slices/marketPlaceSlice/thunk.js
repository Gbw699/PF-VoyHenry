import axios from "axios";
import { queryString } from "./queryStringMarket";
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
        console.log("antes");
        const response = await axios.get("/api/v1/products/");
        console.log(response.data);
        dispatch(setProducts(response.data.products));
      } catch (error) {
        return console.log("No se pudo hacer el pedido");
      }
    }
  };
};

export const getProductsbyOrder = (filter, order) => {
  const queryUrl = queryString(filter, order);
  console.log(queryUrl);
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/v1/products?${queryUrl}`);
      dispatch(setProductsByOrder(response.data.products));
    } catch (error) {
      console.log("No se pudo realizar la petición:", error.message);
    }
  };
};