import axios from "axios";
import { setBlogsSearch, setBlogs, setBlogById } from "./blogSlice";

export const getBlogs = (page) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/v1/blogs?page=${page}`);
      dispatch(setBlogs(response.data));
    } catch (error) {
      console.error(error.response);
    }
  };
};

export const getBlogsSearch = (user) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/v1/blogs/${user}`);
      dispatch(setBlogsSearch(response.data));
    } catch (error) {
      console.error(error.response);
    }
  };
};

export const getBlogById = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/v1/blogs/${id}`);
      dispatch(setBlogById(response.data));
    } catch (error) {
      console.error(error.response);
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
      console.error(error.response);
    }
  };
};
