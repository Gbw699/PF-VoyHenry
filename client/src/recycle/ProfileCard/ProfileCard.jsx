import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getFollowing } from "../../redux/slices/userSlice/thunks";
import style from "./ProfileCard.module.css";

export default function ProfileCard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [following, setFollowing] = useState([]);
  const [followed, setFollowed] = useState([]);

  return (
    <Link to="/profile">
      <div className={style.container}>
        <div className={style.profileCont}>
          <div
            className={style.imgCont}
            style={{ backgroundImage: `url(${user.image})` }}
          />
          <hr
            width="150em"
            color="#F1E100"
          />
          <h1
            className={style.profileName}
          >{`${user.firstName} ${user.lastName}`}</h1>
          <h4 className={style.profileCountry}>
            {user.nationality ? user.nationality : "Sin nacionalidad"}
          </h4>
          <div className={style.followersCont}>
            <div className={style.followers}>
              <p className={style.followTitle}>Siguiendo</p>
              {/* vv MODIFICAR PARA QUE SE MUESTRE EL N° DE SIGUIENDO vv */}
              <span className={style.followNum}>300</span>
            </div>
            <div className={style.followers}>
              <p className={style.followTitle}>Seguidores</p>
              {/* vv MODIFICAR PARA QUE SE MUESTRE EL N° DE SEGUIDORES vv */}
              <span className={style.followNum}>123</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
