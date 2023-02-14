import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    allBlogs: [],
    renderBlogs: [],
  },
  reducers: {
    setBlogsSearch(state, action) {
      state.renderBlogs = [...action.payload];
    },
  },
});

export const { setBlogsSearch } = blogSlice.actions;
export default blogSlice.reducer;
