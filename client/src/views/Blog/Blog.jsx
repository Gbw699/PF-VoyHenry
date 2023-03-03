import { useState } from "react";
import BlogsReviews from "../../components/Blog/BlogsReviews";
import BlogForm from "../../recycle/BlogForm/BlogForm";
import BlogUsers from "../../components/Blog/BlogUsers";
import style from "./Blog.module.css";
import BlogFilters from "../../components/Blog/BlogFilters";

export default function Blog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={style.container}>
      <div className={style.profileCont}>
        <h3 className={style.title}>Filtros</h3>
        <hr
          color="#F1E100"
          width="100%"
        />
        <BlogFilters />
        <button
          onClick={() => setIsOpen(true)}
          className={style.writeBtn}
        >
          Escribir reseña
        </button>
        <BlogForm
          open={isOpen}
          close={() => setIsOpen(false)}
        />
      </div>
      <div className={style.reviews}>
        <BlogsReviews />
      </div>
      <div className={style.users}>
        <BlogUsers />
      </div>
    </div>
  );
}
