import axios from "axios";
import { setUser, setAllUsers, setFollowers } from "./userSlice";

export const getUser = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/v1/users/${id}`);
      dispatch(setUser(response.data));
    } catch (error) {
      return window.alert("No se pudo realizar la petición");
    }
  };
};

export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/api/v1/users");
      dispatch(setAllUsers(response.data));
    } catch (error) {
      return window.alert("No se pudo realizar la petición");
    }
  };
};

export const getFollowers = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/v1/users/${id}/followers`);
      dispatch(setFollowers(response.data));
    } catch (error) {
      return window.alert("No se pudo realizar la petición");
    }
  }
}
