import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../redux/slices/blogSlice/thunk";
import BlogReview from "../../recycle/BlogReview/BlogReview";
import style from "./BlogsReviews.module.css";
import { Pagination } from "@mui/material";

export default function BlogsReviews() {
  const dispatch = useDispatch();

  const allBlogs = useSelector((state) => state.blogStore.allBlogs);
  let { blogs, page, pages } = allBlogs;

  const handlePageChange = (event, value) => {
    dispatch(getBlogs(value));
  };

  useEffect(() => {
    dispatch(getBlogs(1));
  }, []);

  return (
    <div className={style.container}>
      <div className={style.cardsCont}>
        {blogs?.blogs.map((blog) => {
          return (
            <BlogReview
              key={blog.id}
              blog={blog}
            />
          );
        })}
      </div>
      <Pagination
        size="large"
        count={pages}
        page={page}
        onChange={handlePageChange}
      />
    </div>
  );
}
