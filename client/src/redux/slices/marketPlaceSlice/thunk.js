import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { marketQueryString } from "./queryStringMarket.js";
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

export const getProductsByFilter = createAsyncThunk(
  "marketplace/fecthproducts",
  async (filters) => {
    const queryString = marketQueryString(filters);
    const response = await axios.get(`/api/v1/products?${queryString}`);
    return response.data;
  }
);
