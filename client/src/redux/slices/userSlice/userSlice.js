import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    allUsers: [],
    userPlans: [],
    userBlogs: [],
    userFollowing: [],
    userFollowed: [],
    userFavorite: [],
    usersFavorites: [],
  },
  reducers: {
    setAllUsers: (state, action) => {
      state.allUsers = action.payload;
    },
    setUserPlans: (state, action) => {
      state.userPlans = [...action.payload];
    },
    setUserBlogs: (state, action) => {
      state.userBlogs = [...action.payload.blogs.blogs];
    },
    setUserFollowing: (state, action) => {
      state.userFollowing = [...action.payload];
    },
    setUserFollowed: (state, action) => {
      state.userFollowed = [...action.payload];
    },
    setUserFavorite: (state, action) => {
      state.userFavorite = [...action.payload];
    },
    setUsersFavorite: (state, action) => {
      state.usersFavorites = [...action.payload];
    },
  },
});

export const {
  setAllUsers,
  setUserPlans,
  setUserBlogs,
  setUserFollowing,
  setUserFollowed,
  setUserFavorite,
  setUsersFavorite,
} = userSlice.actions;
export default userSlice.reducer;
