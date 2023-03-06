import axios from "axios";
import { setBlogsSearch, setBlogs, setBlogById } from "./blogSlice";

export const getBlogs = (page, date = "", order = "") => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `/api/v1/blogs?page=${page}&date=${date}&order=${order}`
      );
      dispatch(setBlogs(response.data));
    } catch (error) {
      console.error(error.response);
    }
  };
};

export const getBlogsSearch = (nickName) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/v1/users/${nickName}/blogs`);
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
  return async (dispatch) => {
    try {
      await axios.post("/api/v1/blogs", { ...obj });
      window.alert("La reseña fue creada");
      dispatch(getBlogs(1));
    } catch (error) {
      console.error(error.response);
    }
  };
};

export const editBlog = (obj, id) => {
  return async () => {
    try {
      await axios.patch(`/api/v1/blogs/${id}`, {
        ...obj,
      });
    } catch (error) {
      return console.error(error.response);
    }
  };
};
