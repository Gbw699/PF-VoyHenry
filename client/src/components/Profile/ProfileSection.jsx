import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileAboutMe from "./ProfileAboutMe";
import ProfileInfo from "./ProfileInfo";
import ProfileLatestAssistedPlans from "./ProfileLatestAssistedPlans";
import ProfileLatestReviews from "./ProfileLatestReviews";
import { ProfileMyFriendsActivity } from "./ProfileMyFriendsActivity";
import ProfileMyPlans from "./ProfileMyPlans";
import profileData from "../../profileData.json";
import style from "./ProfileSection.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserPlans,
  getUserBlogs,
  getFollowing,
  getFollowed,
} from "../../redux/slices/userSlice/thunks";

export default function ProfileSection() {
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("user"));

  const userPlans = useSelector((state) => state.userStore.userPlans);
  const userBlogs = useSelector((state) => state.userStore.userBlogs);
  const followed = useSelector((state) => state.userStore.userFollowed);
  const following = useSelector((state) => state.userStore.userFollowing);
  const [morePlans, setMorePlans] = useState(true);

  useEffect(() => {
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
          <h6 className={style.title}>Actividad de mis amigos</h6>
          <hr
            color="#F1E100"
            width="100%"
          />
          {/* //!! FALTA CONECTAR CON EL BACK-END PORQUE NO ESTÁ */}
          {profileData.data.map((element) =>
            element.myFriends.map((element2) => (
              <Link
                key={element2.id}
                to={`/plans/${element2.id}`}
              >
                <ProfileMyFriendsActivity
                  image={element2.latestAssistedPlansImg}
                  name={element2.latestAssistedPlansName}
                />
              </Link>
            ))
          )}
        </div>
        {/* //!! FALTA CONECTAR CON EL BACK-END PORQUE NO ESTÁ */}
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
            <h6 className={style.title}>Últimos planes asistidos</h6>
            <hr
              color="#F1E100"
              width="100%"
            />
            {/* //!! FALTA CONECTAR CON EL BACK-END PORQUE NO ESTÁ */}
            <div className={style.plansCont}>
              {profileData.data.map((element) =>
                element.latestAssistedPlans.map((element2) => (
                  <Link
                    key={element2.id}
                    to={`/plans/${element2.id}`}
                    className={style.link}
                  >
                    <ProfileLatestAssistedPlans
                      image={element2.latestAssistedPlansImg}
                      name={element2.latestAssistedPlansName}
                    />
                  </Link>
                ))
              )}
            </div>
          </div>
          <div>
            <div>
              <div className={style.containerOfButton}>
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
              <hr
                color="#F1E100"
                width="100%"
              />
            </div>
            <div className={style.plansCont}>
              {morePlans &&
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
              {userBlogs.map((element) => (
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
