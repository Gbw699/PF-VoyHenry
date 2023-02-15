import axios from "axios";
import { setPlansSearch, setTopPlans, setAllPlans, setSectionPlans } from "./planSlice";

export const getAllPlans = () => {
  return async (dispatch) => {
    try {
      //hablar sobre la ruta
      const response = await axios.get("/api/v1/plans/");
      dispatch(setAllPlans(response.data));
    } catch (error) {
      return window.alert("No se pudo realizar la petición");
    }
  };
};

export const getPlansSearch = (user) => {
  return async (dispatch) => {
    try {
      //hablar sobre la ruta
      const response = await axios.get(`/api/v1/plans/${user}`);
      dispatch(setPlansSearch(response.data));
    } catch (error) {
      return window.alert("No se pudo realizar la petición");
    }
  };
};

export const getTopPlans = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/api/v1/topPlans/");
      dispatch(setTopPlans(response.data));
    } catch (error) {
      return window.alert("No se pudo realizar la petición");
    }
  };
};

export const getSectionPlans = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/api/v1/sectionPlans/");
      dispatch(setSectionPlans(response.data));
    } catch (error) {
      return window.alert("No se pudo realizar la petición");
    }
  };
};