import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./UserCard.module.css";
import {
  followUser,
  getFollowing,
  unfollowUser,
} from "../../redux/slices/userSlice/thunks";
import { useMediaQuery } from "@mui/material";
import getMediaQuery from "../../recycle/MediaQuerys/mediaQuerys.mjs";

export default function UserCard({
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
  const isMobile = useMediaQuery(getMediaQuery("xs"));
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
              <p className={style.name}>{`${firstName} ${lastName}`}</p>
              <hr
                color="#F1E100"
                width="100%"
              />
              {!isMobile && <p className={style.nacionality}>
                {nationality ? nationality : "Sin nacionalidad"}
              </p>}
            </div>
            {!isMobile && <div className={style.followers}>
              <p className={style.followTitle}>Siguiendo</p>
              <span className={style.followNum}>{userFollowing}</span>
              <p className={style.followTitle}>Seguidores</p>
              <span className={style.followNum}>{followed}</span>
            </div>}
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
