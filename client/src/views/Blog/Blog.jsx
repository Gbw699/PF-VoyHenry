import ProfileCard from "../../recycle/ProfileCard/ProfileCard";
import BlogsReviews from "../../components/Blog/BlogsReviews";
import BlogUsers from "../../components/Blog/BlogUsers";

export default function Blog() {
  return (
    <div>
      <ProfileCard />
      <button>Escribir reseña</button>
      <BlogsReviews />
      <BlogUsers />
    </div>
  );
}
