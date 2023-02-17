import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../redux/slices/blogSlice/thunk";
import BlogReview from "../../recycle/BlogReview/BlogReview";
import style from "./BlogsReviews.module.css";

export default function BlogsReviews() {
  const dispatch = useDispatch();
  const allBlogs = useSelector((state) => state.blogStore.allBlogs);

  useEffect(() => {
    if (!allBlogs.length) {
      dispatch(getBlogs());
    }
  }, []);

  return (
    <div className={style.container}>
        {/* acá hay que hace un map para poder renderizar todas las reviews */}
      <BlogReview />
    </div>
  );
}
