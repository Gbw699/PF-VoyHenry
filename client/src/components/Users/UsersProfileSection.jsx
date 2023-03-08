import React from "react";
import { Link } from "react-router-dom";
import ProfileInfo from "../Profile/ProfileInfo";
import ProfileMyPlans from "../Profile/ProfileMyPlans";
import ProfileAboutMe from "../Profile/ProfileAboutMe";
import ProfileLatestAssistedPlans from "../Profile/ProfileLatestAssistedPlans";
import ProfileLatestReviews from "../Profile/ProfileLatestReviews";
import style from "./UsersProfileSection.module.css";

export default function UsersProfileSection({
  user,
  plans,
  blogs,
  followed,
  following,
  favorites,
}) {
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
          plansCreated={plans.length}
          reviewsCreated={blogs.length}
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
            {following.length === 0
            ? <p className={style.message}>Este usuario aún no sigue a nadie.</p>
            : following.map((element) => (
              <Link
                key={element.id}
                to={`/users/${element.nickName}`}
                className={style.friendLink}
              >
                <img
                  className={style.friendImg}
                  src={element.image}
                  alt={`${element.firstName} ${element.lastName}`}
                  title={`${element.firstName} ${element.lastName}`}
                  loading="lazy"
                />
              </Link>
            ))}
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
              {favorites.length === 0
                ? <p className={style.message}>Este usuario no tiene un plan en favoritos.</p>
                : favorites.map((element) => (
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
                  ))}
            </div>
          </div>
          <div>
            <h6 className={style.title}>Mis planes</h6>
            <hr
              color="#F1E100"
              width="100%"
            />
            <div className={style.plansCont}>
              {plans.length === 0
                ? <p className={style.message}>Este usuario aún no ha creado ningún plan.</p>
                : plans?.map((element) => (
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
              {blogs.length === 0
                ? <p className={style.message}>Este usuario aún no ha hecho ninguna reseña.</p>
                : blogs?.map((element) => (
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
