import { useState } from "react";
import { useSelector } from "react-redux";
import BlogReview from "../../recycle/BlogReview/BlogReview";
import style from "./BlogsReviews.module.css";
import { Pagination } from "@mui/material";

export default function BlogsReviews() {
  const [pagePagination, setPagePagination] = useState(1);

  const allBlogs = useSelector((state) => state.blogStore.allBlogs);
  let { blogs, page, pages } = allBlogs;

  const handlePageChange = (event, value) => {
    setPagePagination(value);
  };

  return (
    <div className={style.container}>
      <div className={style.reviewCont}>
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
