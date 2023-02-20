import axios from "axios";
import {
  setPlansSearch,
  setLimitPlans,
  setAllPlans,
  setPlansPerPage,
  setTotalPages,
  setPlansByDate
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