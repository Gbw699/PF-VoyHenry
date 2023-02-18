import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../redux/slices/blogSlice/thunk";
import BlogReview from "../../recycle/BlogReview/BlogReview";
import style from "./BlogsReviews.module.css";

export default function BlogsReviews() {
  const dispatch = useDispatch();
  const allBlogs = useSelector((state) => state.blogStore.allBlogs);
  console.log(allBlogs);
  useEffect(() => {
    if (!allBlogs.length) {
      dispatch(getBlogs());
    }
  }, []);

  return (
    <div className={style.container}>
      {/* acá hay que hace un map para poder renderizar todas las reviews */}

      {allBlogs?.map((blog) => {
        return (
          <BlogReview
            key={blog.id}
            usernickName={blog.usernickName}
            userimage={blog.userimage}
            title={blog.title}
            image={blog.image}
            content={blog.content}
            rating={blog.rating}
          />
        );
      })}
    </div>
  );
}
