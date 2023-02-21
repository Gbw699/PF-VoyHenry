import axios from "axios";
import { setBlogsSearch, setBlogs } from "./blogSlice";

export const getBlogs = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/api/v1/blogs");
      dispatch(setBlogs(response.data));
    } catch (error) {
      return window.alert("No se pudo hacer el pedido");
    }
  };
};

export const getBlogsSearch = (user) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/v1/blogs/${user}`);
      dispatch(setBlogsSearch(response.data));
    } catch (error) {
      return window.alert("No se pudo realizar la petición");
    }
  };
};

export const postBlog = (obj) => {
  return async () => {
    try {
      await axios.post("/api/v1/blogs", {
        ...obj,
      });
      window.alert("La reseña fue creada");
    } catch (error) {
      window.alert(error.message);
    }
  };
};
