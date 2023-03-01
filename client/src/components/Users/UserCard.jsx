import React from "react";
import { Link } from "react-router-dom";
import style from "./UserCard.module.css";

export default function UserCard({ nickName, image, firstName, lastName, nationality }) {
  const handleClick = () => {};

  return (
    <div>
      <div className={style.profileCont}>
        <div className={style.subCont}>
          <div className={style.imgCont}>
            <div
              style={{ backgroundImage: `url(${image})` }}
              className={style.img}
            />
          </div>
          <div className={style.profileInfo}>
            <div>
              <p className={style.name}>{`${firstName} ${lastName}`}</p>
              <hr color="#F1E100" width="100%" />
              <p className={style.nacionality}>{nationality} Argentina</p>
            </div>
            <div className={style.followers}>
              <p className={style.followTitle}>Siguiendo</p>
              <span className={style.followNum}> 103</span>
              <p className={style.followTitle}>Seguidores</p>
              <span className={style.followNum}> 98</span>
            </div>
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
          <Link
            to={`/users/${nickName}`}
            key={nickName}
          >
            <button
              className={style.buttonPerfil}
              type="submit"
            >
              Ver perfil
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
