import React from "react";
import { Link } from "react-router-dom";
import style from "./ProfileInfo.module.css";

export default function ProfileInfo({
  image,
  firstName,
  lastName,
  nationality,
  following,
  followed,
  plansCreated,
  reviewsCreated,
}) {
  return (
    <div className={style.container}>
      <div className={style.mainInfo}>
        <div className={style.editarPerfilCont}>
          {/* {location.pathname !== "/profile" && (
            <button className={style.addBtn}>Agregar amigo</button>
          )} */}
          {location.pathname === "/profile" && (
            <Link to="/profile/edit">
              <button className={style.editBtn}>Editar perfil</button>
            </Link>
          )}
        </div>
        <div
          className={style.imgCont}
          style={{ backgroundImage: `url(${image})` }}
        />
        <p className={style.name}>
          {firstName} {lastName}
        </p>
        <p className={style.nacionality}>{nationality}</p>
      </div>
      <div className={style.profileInfo}>
        <div className={style.infoCont}>
          <p className={style.infoTitle}>Siguiendo</p>
          <p className={style.infoCount}>{following}</p>
        </div>
        <div className={style.infoCont}>
          <p className={style.infoTitle}>Seguidores</p>
          <p className={style.infoCount}>{followed}</p>
        </div>
        <div className={style.infoCont}>
          <p className={style.infoTitle}>Planes creados</p>
          <p className={style.infoCount}>{plansCreated}</p>
        </div>
        <div className={style.infoCont}>
          <p className={style.infoTitle}>Reseñas creadas</p>
          <p className={style.infoCount}>{reviewsCreated}</p>
        </div>
      </div>
    </div>
  );
}
