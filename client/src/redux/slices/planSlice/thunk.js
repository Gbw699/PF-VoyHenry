import axios from "axios";
import { setPlansSearch, setLimitPlans, setAllPlans } from "./planSlice";

export const getPlansSearch = (user) => {
  return async (dispatch) => {
    try {
      //hablar sobre la ruta
      const response = await axios.get(`/api/v1/plans/${user}`);
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
