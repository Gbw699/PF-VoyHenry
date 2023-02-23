import axios from "axios";
import { queryString } from "./queryStringPlan.js";
import {
  setPlansSearch,
  setLimitPlans,
  setAllPlans,
  setPlansPerPage,
  setTotalPages,
  setPlansByDate,
  setPlanById,
  setPlansbyOrder,
} from "./planSlice";

export const getPlansSearch = (content) => {
  return async (dispatch) => {
    try {
      //hablar sobre la ruta
      const response = await axios.get(`/api/v1/plans?content=${content}`);
      dispatch(setPlansSearch(response.data.plans.plans));
    } catch (error) {
      return console.log("No se pudo realizar la petición");
    }
  };
};

export const getLimitPlans = () => {
  return async (dispatch) => {
    try {
      //hablar sobre la ruta
      const response = await axios.get("/api/v1/plans?limit=6");
      dispatch(setLimitPlans(response.data.plans.plans));
    } catch (error) {
      return console.log("No se pudo realizar la petición");
    }
  };
};

export const getPlansPerPage = (page) => {
  return async (dispatch) => {
    try {
      //hablar sobre la ruta
      const response = await axios.get(`/api/v1/plans?page=${page}`);
      dispatch(setPlansPerPage(response.data.plans.plans));
      dispatch(setTotalPages(response.data));
    } catch (error) {
      return console.log("No se pudo realizar la petición");
    }
  };
};

export const getTotalPages = () => {
  return async (dispatch) => {
    try {
      //hablar sobre la ruta
      const response = await axios.get("/api/v1/plans");
      dispatch(setTotalPages(response.data.pages));
    } catch (error) {
      return console.log("No se pudo realizar la petición");
    }
  };
};

export const getAllPlans = () => {
  return async (dispatch) => {
    try {
      //hablar sobre la ruta
      const response = await axios.get("/api/v1/plans");
      dispatch(setAllPlans(response.data.plans.plans));
    } catch (error) {
      return console.log("No se pudo realizar la petición");
    }
  };
};

export const getPlanById = (id) => {
  return async (dispatch) => {
    try {
      //hablar sobre la ruta
      const response = await axios.get(`/api/v1/plans/${id}`);
      dispatch(setPlanById(response.data.data.plan));
    } catch (error) {
      return console.log("No se pudo realizar la petición");
    }
  };
};

export const getPlansByDate = (date) => {
  return async (dispatch) => {
    try {
      //hablar sobre la ruta
      const response = await axios.get(`/api/v1/plans?date=${date}`);
      dispatch(setPlansByDate(response.data.plans.plans));
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
      console.log(error.message);
    }
  };
};

export const getPlansbyOrder = (filter, order) => {
  const queryUrl = queryString(filter, order);
  console.log(queryUrl.slice(0, -1));
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `/api/v1/plans?${queryUrl.slice(0, -1)}`
      );
      dispatch(setPlansbyOrder(response.data.plans.plans));
    } catch (error) {
      console.log("No se pudo realizar la petición:", error.message);
    }
  };
};

export const postComment = (id,obj) => {
  return async () => {
    try {
      await axios.post(`/api/v1/plans/${id}/comment`, {
        ...obj,
      });
      window.alert("El comentario se envió correctamente");
    } catch (error) {
      console.log(error.message);
    }
  };
};