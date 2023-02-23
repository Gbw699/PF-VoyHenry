import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import style from "./BlogReview.module.css";

export default function BlogReview({ blog }) {
  const [userImage, setUserImage] = useState("");
  const [reviewImage, setReviewImage] = useState("");

  useEffect(() => {
    setUserImage(`url(${blog.userimage})`);
  });

  useEffect(() => {
    setReviewImage(`url(${blog.image})`);
  });

  return (
    <div className={style.container}>
      <div className={style.reviewCont}>
        <div
          className={style.userImg}
          style={{ backgroundImage: userImage }}
        />
        <div className={style.userCont}>
          <div className={style.nameDate}>
            <h3 className={style.name}>{blog.userNickName}</h3>
            <p>{blog.date}</p>
          </div>
          <hr
            color="#F1E100"
            width="100%"
          />
          <NavLink
            to={`/blog/${blog.id}`}
            className={style.review}
          >
            <div
              className={style.reviewImg}
              style={{ backgroundImage: reviewImage }}
            />
            <div className={style.reviewInfo}>
              <h4 className={style.infoName}>{blog.title}</h4>
              <p className={style.infoDescription}>{blog.content}</p>
              <p className={style.infoValoration}>
                Valoración:{" "}
                <span className={style.infoValNum}>{blog.evaluation}</span>
              </p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
