import React from "react";
import { Link } from "react-router-dom";
import ProfileInfo from "../Profile/ProfileInfo";
import ProfileMyPlans from "../Profile/ProfileMyPlans";
import profileData from "../../profileData.json";
import { ProfileMyFriendsActivity } from "../Profile/ProfileMyFriendsActivity";
import ProfileAboutMe from "../Profile/ProfileAboutMe";
import ProfileLatestAssistedPlans from "../Profile/ProfileLatestAssistedPlans";
import ProfileLatestReviews from "../Profile/ProfileLatestReviews";
import style from "./UsersProfileSection.module.css";

export default function UsersProfileSection({ user, plans, blogs, followed, following }) {
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
          plansCreated={plans.length}
          reviewsCreated={blogs.length}
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
            {/* //!! FALTA CONECTAR CON EL BACK-END PORQUE NO ESTÁ */}
          </div>
          <div>
            <h6 className={style.title}>Mis planes</h6>
            <hr
              color="#F1E100"
              width="100%"
            />
            <div className={style.plansCont}>
              {plans?.map((element) => (
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
              {blogs?.map((element) => (
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
