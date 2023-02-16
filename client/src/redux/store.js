import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice/userSlice.js";
import blogSlice from "./slices/blogSlice/blogSlice";
import planSlice from "./slices/planSlice/planSlice";

const store = configureStore({
  reducer: {
    userStore: userSlice,
    blogStore: blogSlice,
    planStore: planSlice,
  },
});

export default store;
