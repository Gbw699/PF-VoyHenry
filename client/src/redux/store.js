import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice/userSlice.js";
import blogSlice from "./slices/blogSlice/blogSlice";
import planSlice from "./slices/planSlice/planSlice";
import marketPlaceSlice from "./slices/marketPlaceSlice/marketPlaceSlice";

const store = configureStore({
  reducer: {
    userStore: userSlice,
    blogStore: blogSlice,
    planStore: planSlice,
    marketPlaceStore: marketPlaceSlice,
  },
});

export default store;
