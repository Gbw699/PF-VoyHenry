import React, { useEffect } from "react";
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
  getUser,
  getUserPlans,
  getUserBlogs,
} from "../../redux/slices/userSlice/thunks";

export default function ProfileSection() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser("Leslie"));
    dispatch(getUserPlans("Leslie"));
    dispatch(getUserBlogs("Leslie"));
  }, []);

  const user = useSelector((state) => state.userStore);
  const userPlans = useSelector((state) => state.userStore.userPlans.length);
  const userBlogs = useSelector((state) => state.userStore.userBlogs.length);

  return (
    <div className={style.mainContainer}>
      <div className={style.profileCont}>
        {user.user.map((element) => (
          <div key={element.nickName}>
            <ProfileInfo
              image={element.image}
              firstName={element.firstName}
              lastName={element.lastName}
              genre={element.genre}
              nationality="Argentina"
              following="156"
              followers="165"
              assistedPlans="12"
              plansCreated={userPlans}
              reviewsCreated={userBlogs}
            />
          </div>
        ))}
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
                {console.log(element2)}
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
            {user.user.map((element, index) => (
              <ProfileAboutMe
                key={index}
                aboutMe={element.about}
              />
            ))}
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
            {/* //!! FALTA CONECTAR CON EL BACK-END PORQUE NO ESTÁ */}
          </div>
          <div>
            <h6 className={style.title}>Mis planes</h6>
            <hr
              color="#F1E100"
              width="100%"
            />
            <div className={style.plansCont}>
              {user.userPlans.map((element) => (
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
              {user.userBlogs.map((element) => (
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
