import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    allUsers: [],
    userPlans: [],
    userBlogs: [],
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
  },
});

export const { setAllUsers, setUserPlans, setUserBlogs } = userSlice.actions;
export default userSlice.reducer;
