import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    allBlogs: [],
  },
  reducers: {
    setBlogs: (state, action) => {
      state.allBlogs = action.payload.blogs;
    },
    setBlogsSearch(state, action) {
      state.allBlogs = [...action.payload];
    },
  },
});

export const { setBlogs, setBlogsSearch } = blogSlice.actions;
export default blogSlice.reducer;
