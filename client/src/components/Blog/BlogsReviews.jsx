import { useState } from "react";
import { useSelector } from "react-redux";
import BlogFilters from "./BlogFilters";
import BlogReview from "../../recycle/BlogReview/BlogReview";
import style from "./BlogsReviews.module.css";
import { Pagination, useMediaQuery } from "@mui/material";
import getMediaQuery from "../../recycle/MediaQuerys/mediaQuerys.mjs";

export default function BlogsReviews(props) {
  const isMobile = useMediaQuery(getMediaQuery("xs"));
  const [pagePagination, setPagePagination] = useState(1);
  // const [showButton, setShowButton] = useState(true);
  const [showFilters, setShowFilters] = useState("none");

  const allBlogs = useSelector((state) => state.blogStore.allBlogs);
  let { blogs, page, pages } = allBlogs;

  // const handleClick = () => {
  //   props.setIsOpen(false);
  //   setShowButton(false);
  // };

  const handlePageChange = (event, value) => {
    setPagePagination(value);
  };

  return (
    <div className={style.container}>
      {!isMobile && <div className={style.filtersContainer}>
        <BlogFilters pagePagination={pagePagination} />
        <button
          onClick={() => props.setIsOpen(true)}
          className={style.writeBtn}
        >
          Escribir reseña
        </button>
      </div>}
      {isMobile && <div className={style.filtersContainer} style={{ display: `${showFilters}` }}>
        <BlogFilters pagePagination={pagePagination} />
      </div>}
      {isMobile && <button className={style.showFiltersButton} onClick={() => setShowFilters(showFilters == "none" ? "flex" : "none")}>Filtros</button>}
      <div className={style.reviewContainer}>
        {blogs?.blogs.map((blog) => {
          return (
            <BlogReview
              key={blog.id}
              blog={blog}
            />
          );
        })}
        <Pagination
          className={style.pagination}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          size="large"
          count={pages}
          page={page}
          onChange={handlePageChange}
        />
      </div>
      {isMobile && !props.isOpen && <button
        onClick={() => props.setIsOpen(true)}
        className={style.writeBtn}
      >
        Escribir reseña
      </button>}
    </div>
  );
}
