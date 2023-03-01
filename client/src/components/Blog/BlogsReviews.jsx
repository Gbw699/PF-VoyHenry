import { useState } from "react";
import { useSelector } from "react-redux";
import BlogFilters from "./BlogFilters";
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
      <BlogFilters pagePagination={pagePagination} />
      <div className={style.subCont}>
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
