import axios from "axios";
import {
  setAllUsers,
  setUserPlans,
  setUserBlogs,
  setUserFollowing,
  setUserFollowed,
  setUserFavorite,
  setUsersFavorite,
} from "./userSlice";

export const getLogin = (obj) => {
  return async () => {
    try {
      const response = await axios.post("/api/v1/auth/login", {
        ...obj,
      });

      document.cookie =
        "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie =
        "csrftoken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      const newCookie = `token=${response.data.token}; max-age=604800; path=/;`;
      document.cookie = newCookie;

      localStorage.setItem("user", JSON.stringify(response.data.user));
    } catch (error) {
      console.error(error.response);
    }
  };
};

export const getLoginGoogle = (token, user) => {
  return async () => {
      if (token && user){
        document.cookie =
        "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie =
          "csrftoken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = `token=${token}; max-age=604800; path=/;`;

        localStorage.setItem("user", JSON.stringify(user));
      }
  };
};

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

export const postUser = (obj) => {
  return async () => {
    try {
      await axios.post("/api/v1/users", {
        ...obj,
      });
    } catch (error) {
      console.error(error.response);
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

export const editUser = (obj, nickName) => {
  return async () => {
    try {
      await axios.patch(`/api/v1/users/${nickName}`, {
        ...obj,
      });
    } catch (error) {
      return console.log(error.message);
    }
  };
};

export const followUser = async (myNickName, userNickName) => {
  try {
    const response = await axios.post(`/api/v1/users/${userNickName}/follow`, {
      userNickName: myNickName,
    });
  } catch (error) {
    console.error(error);
  }
};

export const unfollowUser = async (myNickName, userNickName) => {
  try {
    const response = await axios.delete(
      `/api/v1/users/${userNickName}/follow`,
      { data: { userNickName: myNickName } }
    );
  } catch (error) {
    console.error(error.response.data.message);
  }
};

export const getFollowing = (nickName) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/v1/users/${nickName}/following`);
      dispatch(setUserFollowing(response.data.data.data));
    } catch (error) {
      dispatch(setUserFollowing([]));
      console.error(error.response.data.message);
    }
  };
};

export const getFollowed = (myNickName) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/v1/users/${myNickName}/followed`);
      dispatch(setUserFollowed(response.data.data.followedUsers));
    } catch (error) {
      dispatch(setUserFollowed([]));
      console.error(error.response.data.message);
    }
  };
};

export const getFavorites = (myNickName) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `/api/v1/plans/${myNickName}/plansfavorite`
      );
      dispatch(setUserFavorite(response.data));
    } catch (error) {
      dispatch(setUserFavorite([]));
      console.error(error);
    }
  };
};

export const getFavoritesUser = (userNickName) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `/api/v1/plans/${userNickName}/plansfavorite`
      );
      dispatch(setUsersFavorite(response.data));
    } catch (error) {
      dispatch(setUsersFavorite([]));
      console.error(error);
    }
  };
};
