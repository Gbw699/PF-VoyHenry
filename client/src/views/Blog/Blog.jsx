import { useState } from "react";
import BlogsReviews from "../../components/Blog/BlogsReviews";
import BlogForm from "../../recycle/BlogForm/BlogForm";
import BlogUsers from "../../components/Blog/BlogUsers";
import style from "./Blog.module.css";

export default function Blog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={style.container}>
      <div className={style.reviews}>
        <BlogForm
          open={isOpen}
          setState={setIsOpen}
          close={() => setIsOpen(false)}
        />
        <BlogsReviews setIsOpen={setIsOpen} />
      </div>
      <div className={style.users}>
        <BlogUsers />
      </div>
    </div>
  );
}
