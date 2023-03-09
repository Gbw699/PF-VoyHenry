import axios from "axios";
import { setBlogsSearch, setBlogs, setBlogById } from "./blogSlice";
import customAlert from "../../../recycle/Alert/CustomAlert";

export const getBlogs = (page, date = "", order = "") => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `/api/v1/blogs?page=${page}&date=${date}&order=${order}`
      );
      dispatch(setBlogs(response.data));
    } catch (error) {
      dispatch(setBlogs([]));
      console.error(error.response);
    }
  };
};

export const getBlogsSearch = (contains) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/v1/blogs?contains=${contains}`);
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
      console.log(response.data.data);
      dispatch(setBlogById(response.data.data));
    } catch (error) {
      console.error(error.response);
    }
  };
};

export const postBlog = (obj) => {
  return async (dispatch) => {
    try {
      await axios.post("/api/v1/blogs", { ...obj });
      customAlert("El blog se creó correctamente");
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
