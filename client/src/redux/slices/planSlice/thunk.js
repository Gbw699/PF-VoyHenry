import axios from "axios";
import { setPlansSearch } from "./planSlice";

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