import React from "react";
import style from "./UserCard.module.css";

export default function UserCard({ image, firstName, lastName, nationality }) {
  const handleClick = () => {};

  return (
    <div className={style.container}>
      <div className={style.profileCont}>
        <div className={style.imgCont}>
          <img
            className={style.img}
            src={image}
            alt={`${firstName} ${lastName}`}
            loading="lazy"
          />
        </div>
        <div className={style.profileInfo}>
          <div className={style.name}>{`${firstName} ${lastName}`}</div>

          <h4>{nationality ? nationality : "Sin nacionalidad"}</h4>
          <div className={style.followers}>
            <p className={style.followTitle}>Siguiendo:</p>
            <span className={style.followNum}> 103</span>
            <p className={style.followTitle}>Seguidores:</p>
            <span className={style.followNum}> 98</span>
          </div>
        </div>
        <div className={style.buttons}>
          <button
            className={style.buttonUnfollow}
            type="submit"
            onClick={handleClick}
          >
            Seguir
          </button>
          <button
            className={style.buttonPerfil}
            type="submit"
          >
            Ver perfil
          </button>
        </div>
      </div>
    </div>
  );
}
