import axios from "axios";
import { setAllUsers, setUser } from "./userSlice";

export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/api/v1/users");
      dispatch(setAllUsers(response.data));
    } catch (error) {
      return window.alert("No se pudo hacer el pedido de getallusers");
    }
  };
};

export const getUser = (nickname) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/v1/users/${nickname}`);
      dispatch(setUser(response.data));
    } catch (error) {
      return window.alert("No se pudo hacer el pedido");
    }
  };
};
