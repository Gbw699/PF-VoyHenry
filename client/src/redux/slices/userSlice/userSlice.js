import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    allUsers: [],
    user: {},
    followers: [],
  },
  reducers: {
    setAllUsers(state, action) {
      state.allUsers = action.payload;
    },
    setUser(state, action) {
      //en vez de luis, debería estar el action.payload
      state.user = action.payload;
    },
    setFollowers(state, action) {
      state.followers = action.payload;
    },
  },
});

export const { setUser, setAllUsers, setFollowers } = userSlice.actions;
export default userSlice.reducer;
