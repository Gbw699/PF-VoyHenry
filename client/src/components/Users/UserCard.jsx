import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./UserCard.module.css";
import {
  followUser,
  getFollowed,
  getFollowing,
  unfollowUser,
} from "../../redux/slices/userSlice/thunks";

export default function UserCard({
  nickName,
  image,
  firstName,
  lastName,
  nationality,
  following,
  setFollowing,
  loginUser,
  followed,
}) {
  console.log(following.length);
  const handleClick = async (event) => {
    if (event.target.value === "follow") {
      followUser(loginUser, nickName);
      const response = await getFollowing(loginUser);
      setFollowing([...following, response]);
      console.log(following);
    } else {
      unfollowUser(loginUser, nickName);
      const response = await getFollowing(loginUser);
      setFollowing([...following, response]);
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
              <hr
                color="#F1E100"
                width="100%"
              />
              <p className={style.nacionality}>
                {nationality ? nationality : "Sin nacionalidad"}
              </p>
            </div>
            <div className={style.followers}>
              <p className={style.followTitle}>Siguiendo</p>
              <span className={style.followNum}>{following.count}</span>
              <p className={style.followTitle}>Seguidores</p>
              <span className={style.followNum}>{followed.count}</span>
            </div>
          </div>
        </div>
        <div className={style.buttons}>
          {console.log(following)}
          {!following?.find((follow) => follow === nickName) && (
            <button
              className={style.buttonUnfollow}
              onClick={handleClick}
              value="follow"
            >
              Seguir
            </button>
          )}
          {following?.find((follow) => follow === nickName) && (
            <button
              className={style.buttonUnfollow}
              onClick={handleClick}
              value="unfollow"
            >
              Dejar de Seguir
            </button>
          )}
          <Link to={`/users/${nickName}`}>
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
