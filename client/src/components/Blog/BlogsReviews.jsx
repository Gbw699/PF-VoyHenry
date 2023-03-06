import { useState } from "react";
import { useSelector } from "react-redux";
import BlogFilters from "./BlogFilters";
import BlogReview from "../../recycle/BlogReview/BlogReview";
import style from "./BlogsReviews.module.css";
import { Pagination } from "@mui/material";

export default function BlogsReviews(props) {
  const [pagePagination, setPagePagination] = useState(1);

  const allBlogs = useSelector((state) => state.blogStore.allBlogs);
  let { blogs, page, pages } = allBlogs;

  const handlePageChange = (event, value) => {
    setPagePagination(value);
  };

  return (
    <div className={style.container}>
      <div className={style.filtersContainer}>
      <BlogFilters pagePagination={pagePagination} />
      <button
          onClick={() => props.setIsOpen(true)}
          className={style.writeBtn}
        >
          Escribir reseña
        </button>
      </div>
      <div className={style.reviewContainer}>
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
        style={{
          display: "flex",
          justifyContent: "center"
        }}
        size="large"
        count={pages}
        page={page}
        onChange={handlePageChange}
      />
      </div>
    </div>
  );
}
