import axios from "axios";
import setUser from "./userSlice";

export const getUser = (nickname) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/v1/users/${nickname}`);
      dispatch(setUser(response.data));
    } catch (error) {
      return window.alert("No se pudo realizar la petición");
    }
  };
};
