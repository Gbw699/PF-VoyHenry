import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./UserCard.module.css";
import { followUser, unfollowUser } from "../../redux/slices/userSlice/thunks";

export default function UserCard({
  nickName,
  image,
  firstName,
  lastName,
  nationality,
  following,
  loginUser,
}) {
  const [isFollowing, setIsFollowing] = useState(
    following?.find((follow) => follow.nickName === nickName)
  );

  const handleClick = (event) => {
    if (event.target.value === "follow") {
      followUser(loginUser, nickName);
      setIsFollowing(true);
    } else {
      unfollowUser(loginUser, nickName);
      setIsFollowing(false);
    }
  };

  return (
    <div>
      <div className={style.profileCont}>
        <div className={style.subCont}>
          <div className={style.imgCont}>
            <Link to={`/users/${nickName}`}>
              <div
                style={{ backgroundImage: `url(${image})` }}
                className={style.img}
              />
            </Link>
          </div>
          <div className={style.profileInfo}>
            <div>
              <p className={style.name}>{`${firstName} ${lastName}`}</p>
              <hr color="#F1E100" width="100%" />
              <p className={style.nacionality}>
                {nationality ? nationality : "Sin nacionalidad"}
              </p>
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
          {!isFollowing && (
            <button
              className={style.buttonUnfollow}
              onClick={handleClick}
              value="follow"
            >
              Seguir
            </button>
          )}
          {isFollowing && (
            <button
              className={style.buttonUnfollow}
              onClick={handleClick}
              value="unfollow"
            >
              Dejar de Seguir
            </button>
          )}
          <Link to={`/users/${nickName}`}>
            <button className={style.buttonPerfil} type="submit">
              Ver perfil
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}