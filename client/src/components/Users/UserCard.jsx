import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./UserCard.module.css";
import {
  followUser,
  getFollowing,
  unfollowUser,
} from "../../redux/slices/userSlice/thunks";

export default function UserCard({
  role,
  nickName,
  image,
  firstName,
  lastName,
  nationality,
  following,
  setFollowing,
  loginUser,
  userFollowed,
  userFollowing,
}) {
  const [followed, setFollowed] = useState(userFollowed);
  const handleClick = async (event) => {
    if (event.target.value === "follow") {
      followUser(loginUser, nickName);
      const response = await getFollowing(loginUser);
      setFollowing([...following, response]);
      setFollowed(followed + 1);
    } else {
      unfollowUser(loginUser, nickName);
      const response = await getFollowing(loginUser);
      setFollowing([response]);
      setFollowed(followed - 1);
    }
  };
  return (
    <div>
      <div className={style.profileCont}>
        <div className={style.subCont}>
          <div className={style.imgCont}>
            <Link to={`/users/${nickName}`}>
              <div
                className={style.img}
                style={{ backgroundImage: `url(${image})` }}
              />
            </Link>
          </div>
          <div className={style.profileInfo}>
            <div>
              <div className={style.profileInfo_flex}>
                <p className={style.name}>{`${firstName} ${lastName} `}</p>
                {role === "admin" && <p className={style.nameRole}>Dueño</p>}
              </div>
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
              <span className={style.followNum}>{userFollowing}</span>
              <p className={style.followTitle}>Seguidores</p>
              <span className={style.followNum}>{followed}</span>
            </div>
          </div>
        </div>
        <div className={style.buttons}>
          {!following?.find((follow) => follow.nickName === nickName) ? (
            <button
              className={style.buttonUnfollow}
              onClick={handleClick}
              value="follow"
            >
              Seguir
            </button>
          ) : (
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
