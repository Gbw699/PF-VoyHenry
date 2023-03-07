import axios from "axios";
import {
  setAllUsers,
  setUser,
  setUserPlans,
  setUserBlogs,
  setUserFollowing,
  setUserFollowed,
  setUserFollowedAdd,
  setUserFollowedRemoved,
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
      document.cookie = `token=${response.data.token}; max-age=604800; path=/;`;

      localStorage.setItem("user", JSON.stringify(response.data.user));
    } catch (error) {
      console.error(error.response);
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

// export const getUser = (nickname) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get(`/api/v1/users/${nickname}`);
//       dispatch(setUser(response.data.data.user));
//     } catch (error) {
//       return window.alert("No se pudo hacer el pedido");
//     }
//   };
// };

export const postUser = (obj) => {
  return async () => {
    try {
      await axios.post("/api/v1/users", {
        ...obj,
      });
      console.log("Usuario creado");
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

<<<<<<< HEAD
export const getFollowing = async (myNickName) => {
  try {
    const response = await axios.get(
      `/api/v1/users/${myNickName}/following`
    );
    if (response && response.data) {
      return response.data.data;
=======
export const getFollowing = (nickName) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/v1/users/${nickName}/following`);
      dispatch(setUserFollowing(response.data.data.followingUsers));
    } catch (error) {
      if (error.response.data.message === "no user is following you") {
        return { followedUsers: [], data: [], count: 0 };
      }
      console.error(error.response.data.message);
>>>>>>> 2bc278025fa36224bbdc4c29f4819d739cf7d1d1
    }
  };
};

export const getFollowed = (myNickName) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/v1/users/${myNickName}/followed`);
      dispatch(setUserFollowed(response.data.data.followedUsers));
    } catch (error) {
      console.error(error.response.data.message);
    }
  };
};
