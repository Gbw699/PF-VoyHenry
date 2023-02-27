import axios from "axios";
import { queryString } from "./queryStringPlan.js";
import {
  setPlansSearch,
  setPlanById,
  setPlansbyOrder,
} from "./planSlice";

export const getPlansSearch = (content) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/v1/plans?content=${content}`);
      dispatch(setPlansSearch(response.data.plans.plans));
    } catch (error) {
      return console.log("No se pudo realizar la petición");
    }
  };
};

export const getPlanById = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/v1/plans/${id}`);
      dispatch(setPlanById(response.data.data.plan));
    } catch (error) {
      return console.log("No se pudo realizar la petición");
    }
  };
};

export const postPlan = (obj) => {
  return async () => {
    try {
      await axios.post("/api/v1/plans", {
        ...obj,
      });
      window.alert("El plan se creó correctamente");
    } catch (error) {
      console.error(error.response);
    }
  };
};

export const getPlansbyOrder = (filter, order) => {
  const queryUrl = queryString(filter, order);
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/v1/plans?${queryUrl}`);
      dispatch(setPlansbyOrder(response.data));
    } catch (error) {
      console.log("No se pudo realizar la petición:", error.message);
    }
  };
};

export const postComment = (id, obj) => {
  return async () => {
    try {
      await axios.post(`/api/v1/plans/${id}/comment`, {
        ...obj,
      });
      window.alert("El comentario se envió correctamente");
    } catch (error) {
      console.error(error.message);
    }
  };
};