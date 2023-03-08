import style from "./UserCard.module.css";
import { useState } from "react";
import AxiosFollowers from "./AxiosFollowers";

export default function UserCard({ user }) {
  const [followed, setFollowed] = useState(0);
  const [following, setFollowing] = useState(0);

  return (
    <div className={style.container}>
      <AxiosFollowers
        setFollowed={setFollowed}
        setFollowing={setFollowing}
        nickName={user.nickName}
      />
      <div
        className={style.imgCont}
        style={{ backgroundImage: `url(${user.image})` }}
      />
      <div className={style.infoCont}>
        <h1 className={style.name}>{user.firstName}</h1>
        <hr
          color="#F1E100"
          width="100%"
        />
        <h4 className={style.nacionality}>{user.nationality}</h4>
        <div className={style.followInfo}>
          <p className={style.followTitle}>Siguiendo</p>
          <span className={style.followCount}>{following}</span>
        </div>
        <div className={style.followInfo}>
          <p className={style.followTitle}>Seguidores</p>
          <span className={style.followCount}>{followed}</span>
        </div>
      </div>
    </div>
  );
}
