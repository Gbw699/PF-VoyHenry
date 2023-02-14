import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice/userSlice.js";

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;
