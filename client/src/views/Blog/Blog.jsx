import { useState } from "react";
import ProfileCard from "../../recycle/ProfileCard/ProfileCard";
import BlogsReviews from "../../components/Blog/BlogsReviews";
import BlogFilters from "../../components/Blog/BlogFilters";
import BlogForm from "../../recycle/BlogForm/BlogForm";
import BlogUsers from "../../components/Blog/BlogUsers";
import style from "./Blog.module.css";

export default function Blog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={style.container}>
      <div className={style.profileCont}>
        <ProfileCard />
        <button
          onClick={() => setIsOpen(true)}
          className={style.writeBtn}
        >
          Escribir reseña
        </button>
        <BlogFilters />
        <BlogForm
          open={isOpen}
          close={() => setIsOpen(false)}
        />
      </div>
      <BlogsReviews />
      <BlogUsers />
    </div>
  );
}
