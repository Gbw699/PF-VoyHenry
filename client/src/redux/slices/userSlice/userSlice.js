import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
 name: "user",
 initialState: {
  user: "",
 },
 reducers: {
  setUser(state, action) {
   //en vez de luis, debería estar el action.payload
   state.users = action.payload;
  },
 },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
