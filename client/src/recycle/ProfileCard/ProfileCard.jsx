import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getFollowed, getFollowing } from "../../redux/slices/userSlice/thunks";
import style from "./ProfileCard.module.css";

export default function ProfileCard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const followed = useSelector((state) => state.userStore.userFollowed);
  const following = useSelector((state) => state.userStore.userFollowing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFollowing(user?.nickName));
    dispatch(getFollowed(user?.nickName));
  }, [following.length]);
  return (
    <Link to="/profile">
      <div className={style.container}>
        <div className={style.profileCont}>
          <img
            className={style.imgCont}
            src={user.image}
            alt={`${user.firstName} ${user.lastName}`}
            title={`${user.firstName} ${user.lastName}`}
            loading="lazy"
          />
          <hr
            width="150em"
            color="#F1E100"
          />
          <p
            className={style.profileName}
          >{`${user?.firstName} ${user?.lastName}`}</p>
          <h4 className={style.profileCountry}>
            {user?.nationality ? user.nationality : "Sin nacionalidad"}
          </h4>
          <div className={style.followersCont}>
            <div className={style.followers}>
              <p className={style.followTitle}>Siguiendo</p>
              <span className={style.followNum}>{following.length}</span>
            </div>
            <div className={style.followers}>
              <p className={style.followTitle}>Seguidores</p>
              <span className={style.followNum}>{followed.length}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
