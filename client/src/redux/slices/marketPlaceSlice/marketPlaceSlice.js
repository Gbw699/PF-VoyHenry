import { createSlice } from "@reduxjs/toolkit";

const marketPlaceSlice = createSlice({
  name: "marketPlace",
  initialState: {
    allProducts: [],
  },
  reducers: {
    getProducts: (state, action) => {
      state.allBlogs = action.payload.blogs;
    },
  },
});

export const { getProducts } = marketPlaceSlice.actions;
export default marketPlaceSlice.reducer;
