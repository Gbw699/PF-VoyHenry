import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    allBlogs: [],
    renderBlogs: [],
    blog: {}
  },
  reducers: {
    setBlogsSearch(state, action) {
      state.renderBlogs = [...action.payload];
    },
    setBlog(state, action) {
      state.blog = [...action.payload];
    },
    setAllBlogs(state, action) {
      state.blog = [...action.payload];
    },
  },
});

export const { setBlogsSearch, setBlog, setAllBlogs } = blogSlice.actions;
export default blogSlice.reducer;
