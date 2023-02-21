import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    allUsers: [],
    user: [],
    userPlans: [],
    userBlogs: [],
  },
  reducers: {
    setAllUsers: (state, action) => {
      state.allUsers = action.payload;
    },
    setUser: (state, action) => {
      state.user = [action.payload];
    },
    setUserPlans: (state, action) => {
      state.userPlans = action.payload;
    },
    setUserBlogs: (state, action) => {
      state.userBlogs = action.payload;
    },
  },
});

export const { setAllUsers, setUser, setUserPlans, setUserBlogs } =
  userSlice.actions;
export default userSlice.reducer;
