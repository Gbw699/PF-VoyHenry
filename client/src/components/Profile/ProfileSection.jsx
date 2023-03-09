import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileAboutMe from "./ProfileAboutMe";
import ProfileInfo from "./ProfileInfo";
import ProfileLatestAssistedPlans from "./ProfileLatestAssistedPlans";
import ProfileLatestReviews from "./ProfileLatestReviews";
import ProfileMyPlans from "./ProfileMyPlans";
import style from "./ProfileSection.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserPlans,
  getUserBlogs,
  getFollowing,
  getFollowed,
  getFavorites,
} from "../../redux/slices/userSlice/thunks";

export default function ProfileSection() {
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("user"));

  const userPlans = useSelector((state) => state.userStore.userPlans);
  const userBlogs = useSelector((state) => state.userStore.userBlogs);
  const followed = useSelector((state) => state.userStore.userFollowed);
  const following = useSelector((state) => state.userStore.userFollowing);
  const favorites = useSelector((state) => state.userStore.userFavorite);
  const [morePlans, setMorePlans] = useState(true);
  useEffect(() => {
    dispatch(getFavorites(user?.nickName));
    dispatch(getUserPlans(user?.nickName));
    dispatch(getUserBlogs(user?.nickName));
    dispatch(getFollowing(user?.nickName));
    dispatch(getFollowed(user?.nickName));
  }, []);

  const handleMorePlans = () => {
    setMorePlans(!morePlans);
  };

  return (
    <div className={style.container}>
      <div className={style.profileCont}>
        <ProfileInfo
          image={user.image}
          firstName={user.firstName}
          lastName={user.lastName}
          genre={user.genre}
          nationality={user.nationality ? user.nationality : "Sin nacionalidad"}
          following={following.length}
          followed={followed.length}
          assistedPlans="12"
          plansCreated={userPlans.length}
          reviewsCreated={userBlogs.length}
        />
      </div>
      <div className={style.infoCont}>
        <div className={style.friendsAct}>
          <h6 className={style.title}>Usuarios que sigues</h6>
          <hr
            color="#F1E100"
            width="100%"
          />
          <div className={style.friendsCont}>
            {following.length === 0 ? (
              <p className={style.message}>Aún no sigues a nadie.</p>
            ) : (
              following.map((element) => (
                <Link
                  key={element.id}
                  to={`/users/${element.nickName}`}
                  className={style.friendLink}
                >
                  <div
                    className={style.friendImg}
                    style={{ backgroundImage: `url(${element.image})` }}
                  />
                </Link>
              ))
            )}
          </div>
        </div>
        <div className={style.activityCont}>
          <div>
            <h6 className={style.title}>Sobre mí</h6>
            <hr
              color="#F1E100"
              width="100%"
            />
            <ProfileAboutMe aboutMe={user.about} />
          </div>
          <div>
            <h6 className={style.title}>Mis planes favoritos</h6>
            <hr
              color="#F1E100"
              width="100%"
            />
            <div className={style.plansCont}>
              {favorites.length === 0 ? (
                <p className={style.message}>
                  Aún no has agregado ningún plan en favoritos.
                </p>
              ) : (
                favorites.map((element) => (
                  <Link
                    key={element.id}
                    to={`/plans/${element.id}`}
                    className={style.link}
                  >
                    <ProfileLatestAssistedPlans
                      image={element.mainImage}
                      name={element.title}
                    />
                  </Link>
                ))
              )}
            </div>
          </div>
          <div>
            <div>
              <div className={style.containerOfButton}>
                <div className={style.myPlansCont}>
                  <h6 className={style.title}>Mis planes</h6>
                  {morePlans && (
                    <button
                      onClick={handleMorePlans}
                      className={style.buttons}
                    >
                      Mostrar más
                    </button>
                  )}
                  {!morePlans && (
                    <button
                      onClick={handleMorePlans}
                      className={style.buttons}
                    >
                      Mostrar menos
                    </button>
                  )}
                </div>
              </div>
              <hr
                color="#F1E100"
                width="100%"
              />
            </div>
            <div className={style.plansCont}>
              {morePlans &&
                (userPlans.length === 0 ? (
                  <p className={style.message}>
                    Aún no has creado ningún plan.
                  </p>
                ) : (
                  userPlans.slice(0, 8).map((element) => (
                    <Link
                      key={element.id}
                      to={`/plans/${element.id}`}
                      className={style.link}
                    >
                      <ProfileMyPlans
                        myPlansImage={element.mainImage}
                        myPlansName={element.title}
                      />
                    </Link>
                  ))
                ))}
              {!morePlans &&
                userPlans.map((element) => (
                  <Link
                    key={element.id}
                    to={`/plans/${element.id}`}
                    className={style.link}
                  >
                    <ProfileMyPlans
                      myPlansImage={element.mainImage}
                      myPlansName={element.title}
                    />
                  </Link>
                ))}
            </div>
          </div>
          <div>
            <h6 className={style.title}>Últimas reseñas</h6>
            <hr
              color="#F1E100"
              width="100%"
            />
            <div className={style.plansCont}>
              {userBlogs.length === 0 ? (
                <p className={style.message}>
                  Aún no has realizado una reseña.
                </p>
              ) : (
                userBlogs.map((element) => (
                  <Link
                    key={element.id}
                    to={`/blog/${element.id}`}
                  >
                    <ProfileLatestReviews
                      image={element.image}
                      name={element.title}
                      description={element.content}
                      assessment="50"
                    />
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
