import axios from "axios";
import { setAllUsers, setUser, setUserPlans, setUserBlogs } from "./userSlice";

export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/api/v1/users");
      dispatch(setAllUsers(response.data));
    } catch (error) {
      return window.alert("No se pudo hacer el pedido de getAllUsers");
    }
  };
};

export const getUser = (nickname) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/v1/users/${nickname}`);
      dispatch(setUser(response.data.data.user));
    } catch (error) {
      return window.alert("No se pudo hacer el pedido");
    }
  };
};

export const postUser = (obj) => {
  return async () => {
    try {
      await axios.post("/api/v1/users", {
        ...obj,
      });
      console.log("El usuario se creó correctamente");
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getUserPlans = (nickName) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/v1/users/${nickName}/plans`);
      dispatch(setUserPlans(response.data));
    } catch (error) {
      return console.log("No se pudo realizar la petición");
    }
  };
};

export const getUserBlogs = (nickName) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/v1/users/${nickName}/blogs`);
      dispatch(setUserBlogs(response.data));
    } catch (error) {
      return console.log("No se pudo realizar la petición");
    }
  };
};
