import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../redux/slices/blogSlice/thunk";
import BlogReview from "../../recycle/BlogReview/BlogReview";
import style from "./BlogsReviews.module.css";

export default function BlogsReviews() {
  const dispatch = useDispatch();
  const renderBlogs = useSelector((state) => state.blogStore.renderBlogs);

  useEffect(() => {
    if (!renderBlogs.length) {
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
