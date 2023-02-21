import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getBlogs } from "../../redux/slices/blogSlice/thunk";
import BlogReview from "../../recycle/BlogReview/BlogReview";
import style from "./BlogsReviews.module.css";
import { Pagination } from "@mui/material";

export default function BlogsReviews() {
  const dispatch = useDispatch();

  let allBlogs = useSelector((state) => state.blogStore.allBlogs);

  const [page, setPage] = useState(1);
  const blogsPerPage = 3;
  const count = Math.ceil(allBlogs.length / blogsPerPage);

  allBlogs = allBlogs.slice((page - 1) * blogsPerPage, page * blogsPerPage);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    if (!allBlogs.length) {
      dispatch(getBlogs());
    }
  }, []);

  return (
    <div className={style.container}>
      <div className={style.cardsCont}>
        {allBlogs?.map((blog) => {
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
        count={count}
        page={page}
        onChange={handlePageChange}
      />
    </div>
  );
}
