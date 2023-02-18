import style from "./BlogReview.module.css";

export default function BlogReview() {
  return (
    <div className={style.container}>
      <div className={style.reviewCont}>
        <img
          src=""
          alt="Imagen de usuario"
          width="150px"
          height="150px"
        />
        <div className={style.userCont}>
          <div className={style.nameDate}>
            <h3 className={style.name}>Nombre de usuario</h3>
            <p>Fecha de publicación</p>
          </div>
          <hr color="#F1E100" width="100%" />
          <div className={style.review}>
            <img
              src=""
              alt="Imagen del plan"
              width="150px"
              height="150px"
            />
            <div className={style.reviewInfo}>
              <h4 className={style.infoName}>Nombre del plan</h4>
              <p className={style.infoDescription}>Descripción</p>
              <p className={style.infoValoration}>
                Valoración: <span className={style.infoValNum}>1</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}