import style from "./UserCard.module.css";

export default function UserCard({ nickName, image }) {
  return (
    <div className={style.container}>
      <div
        className={style.imgCont}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={style.infoCont}>
        <h1 className={style.name}>{nickName}</h1>
        <hr
          color="#F1E100"
          width="100%"
        />
        <h4 className={style.nacionality}>Nacionalidad</h4>
        <div className={style.followInfo}>
          <p className={style.followTitle}>Siguiendo</p>
          <span className={style.followCount}>312</span>
        </div>
        <div className={style.followInfo}>
          <p className={style.followTitle}>Seguidores</p>
          <span className={style.followCount}>432</span>
        </div>
      </div>
    </div>
  );
}
