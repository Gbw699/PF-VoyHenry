import axios from "axios";
import {
  setPlansSearch,
  setTopPlans,
  setAllPlans,
  setSectionPlans,
} from "./planSlice";

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
      // AGREGAR QUERY
      const response = await axios.get("/api/v1/plans/");
      dispatch(setTopPlans(response.data));
    } catch (error) {
      return window.alert("No se pudo realizar la petición");
    }
  };
};
// section plans tiene 4 filtros, hay que ampliar
// PRÓXIMOS EVENTOS, EVENTROS EN PROCESO, EVENTOS FINALIZADOS Y EVENTOS ON-LINE.
export const getSectionPlans = () => {
  return async (dispatch) => {
    try {
      // AGREGAR QUERY
      const response = await axios.get("/api/v1/plans/");
      dispatch(setSectionPlans(response.data));
    } catch (error) {
      return window.alert("No se pudo realizar la petición");
    }
  };
};
