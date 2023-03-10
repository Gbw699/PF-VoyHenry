import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BlogReview from "../../recycle/BlogReview/BlogReview";
import { getBlogs } from "../../redux/slices/blogSlice/thunk";

export default function BlogHome() {
  const dispatch = useDispatch();
  const allBlogs = useSelector((state) => state.blogStore.allBlogs);
  const { blogs } = allBlogs;

  useEffect(() => {
    dispatch(getBlogs(1, "", "masvotados"));
  }, []);

  return <div>{blogs && <BlogReview blog={blogs.blogs[0]} />}</div>;
}
