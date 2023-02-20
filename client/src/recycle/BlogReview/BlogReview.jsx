import { useState, useEffect } from "react";
import style from "./BlogReview.module.css";

export default function BlogReview({
  usernickName,
  userimage,
  title,
  image,
  content,
  rating,
}) {
  const [userImage, setUserImage] = useState("");
  const [reviewImage, setReviewImage] = useState("");

  useEffect(() => {
    setUserImage(`url(${userimage})`);
  });

  useEffect(() => {
    setReviewImage(`url(${image})`);
  });

  return (
    <div className={style.container}>
      <div className={style.reviewCont}>
        <div className={style.userImg} style={{ backgroundImage: userImage }} />
        <div className={style.userCont}>
          <div className={style.nameDate}>
            {/* vv BORRAR CUANDO HAYA NOMBRE DE PERFIL vv */}
            {/* <h3 className={style.name}>{usernickName}</h3> */}
            <h3 className={style.name}>Nombre</h3>
            <p>Fecha de publicación</p>
          </div>
          <hr color="#F1E100" width="100%" />
          <div className={style.review}>
            <div className={style.reviewImg} style={{ backgroundImage: reviewImage }} />
            <div className={style.reviewInfo}>
              <h4 className={style.infoName}>{title}</h4>
              <p className={style.infoDescription}>{content}</p>
              <p className={style.infoValoration}>
                Valoración: <span className={style.infoValNum}>{rating}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
