import style from "./BlogReview.module.css";

export default function BlogReview({
  usernickName,
  userimage,
  title,
  image,
  content,
  rating,
}) {
  return (
    <div className={style.container}>
      <div className={style.reviewCont}>
        <img
          src={userimage}
          alt="Imagen de usuario"
          width="150px"
          height="150px"
        />
        <div className={style.userCont}>
          <div className={style.nameDate}>
            <h3 className={style.name}>{usernickName}</h3>
            <p>Fecha de publicación</p>
          </div>
          <hr color="#F1E100" width="100%" />
          <div className={style.review}>
            <img
              src={image}
              alt="Imagen del plan"
              width="150px"
              height="150px"
            />
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
