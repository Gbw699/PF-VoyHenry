import ProfileCard from "../../recycle/ProfileCard/ProfileCard";
import BlogsReviews from "../../components/Blog/BlogsReviews";
import BlogUsers from "../../components/Blog/BlogUsers";
import style from "./Blog.module.css";

export default function Blog() {
  return (
    <div className={style.container}>
      <div className={style.profileCont}>
        <ProfileCard />
        <button type="submit" className={style.writeBtn}>Escribir reseña</button>
      </div>
      <BlogsReviews />
      <BlogUsers />
    </div>
  );
}
