import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    allBlogs: {},
    blog: {},
  },
  reducers: {
    setBlogs: (state, action) => {
      state.allBlogs = { ...action.payload };
    },
    setBlogsSearch(state, action) {
      state.allBlogs = { ...action.payload };
    },
    setBlogById(state, action) {
      state.blog = { ...action.payload.data.blog };
    },
    resetBlogById(state) {
      state.blog = {};
    },
  },
});

export const { setBlogs, setBlogsSearch, setBlogById, resetBlogById } =
  blogSlice.actions;
export default blogSlice.reducer;
