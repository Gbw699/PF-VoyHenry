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
        const response = await axios.get("/api/v1/products/");
        dispatch(setProducts(response.data.products));
      } catch (error) {
        return console.log("No se pudo hacer el pedido");
      }
    }
  };
};

export const getProductsbyOrder = (filter, order) => {
  const queryUrl = queryString(filter, order);
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/v1/products?${queryUrl}`);
      dispatch(setProductsByOrder(response.data.products));
    } catch (error) {
      console.log("No se pudo realizar la petición:", error.message);
    }
  };
};

export const createProduct = (obj) => {
  return async () => {
    try {
      await axios.post("/api/v1/products", { ...obj });
      window.alert("El producto fue creado");
    } catch (error) {
      console.error(error.response);
    }
  };
};

export const editProduct = (id, obj) => {
  console.log(id);
  console.log({ ...obj });

  return async () => {
    try {
      await axios.patch(`/api/v1/products/${id}`, { ...obj });
      window.alert("El producto fue editado");
    } catch (error) {
      console.error(error.response);
    }
  };
};

export const deactivateProduct = async (id) => {
  await axios.delete(`/api/v1/products/${id}`);
};
