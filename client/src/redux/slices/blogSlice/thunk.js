import axios from "axios";
import { setBlogsSearch, setBlog, setAllBlogs } from "./blogSlice";

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

export const getBlog = (id) => {
  return async (dispatch) => {
    try {
      //hablar sobre la ruta
      const response = await axios.get(`/api/v1/blogs/${id}`);
      dispatch(setBlog(response.data));
    } catch (error) {
      return window.alert("No se pudo realizar la petición");
    }
  };
};

export const getAllBlogs = () => {
  return async (dispatch) => {
    try {
      //hablar sobre la ruta
      const response = await axios.get("/api/v1/blogs/");
      dispatch(setAllBlogs(response.data));
    } catch (error) {
      return window.alert("No se pudo realizar la petición");
    }
  };
};