import axios from "axios";
import { setBlogsSearch } from "./blogSlice";

export const getBlogsSearch = (user) => {
  return async (dispatch) => {
    try {
      //hablar sobre la ruta
      const response = await axios.get(`/api/v1/blogs/${user}`);
      dispatch(setBlogsSearch(response.data));
    } catch (error) {
      return window.alert("No se pudo realizar la petición");
    }
  };
};
