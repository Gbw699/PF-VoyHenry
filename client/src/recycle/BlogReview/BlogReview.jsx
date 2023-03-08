import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import style from "./BlogReview.module.css";

export default function BlogReview({ blog }) {
  return (
    <div className={style.container}>
      <div className={style.reviewCont}>
        <Link
          aria-label="Ver más detalles de esta reseña"
          to={`/users/${blog.userNickName}`}
        >
          <div
            className={style.userImg}
            style={{ backgroundImage: `url(${blog.userimage})` }}
          />
        </Link>
        <div className={style.userCont}>
          <div className={style.nameDate}>
            <h3 className={style.name}>{blog.userNickName}</h3>
            <p>{blog.date}</p>
          </div>
          <hr
            color="#707070"
            width="100%"
          />
          <NavLink
            to={`/blog/${blog.id}`}
            className={style.review}
          >
            <div
              className={style.reviewImg}
              style={{ backgroundImage: `url(${blog.image})` }}
            />
            <div className={style.reviewInfo}>
              <h4 className={style.infoName}>{blog.title}</h4>
              <p className={style.infoDescription}>{blog.content}</p>
              <p className={style.infoValoration}>
                Valoración:{" "}
                <span className={style.infoValNum}><Rating defaultValue={blog?.average} value={blog?.average}/></span>
              </p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
