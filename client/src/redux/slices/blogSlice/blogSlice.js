import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    allBlogs: [],
    renderBlogs: [],
  },
  reducers: {
    setBlogs: (state, action) => {
      state.allBlogs = [...action.payload];
      state.renderBlogs = [...action.payload];
    },
    setBlogsSearch(state, action) {
      state.renderBlogs = [...action.payload];
    },
  },
});

export const { setBlogs, setBlogsSearch } = blogSlice.actions;
export default blogSlice.reducer;
