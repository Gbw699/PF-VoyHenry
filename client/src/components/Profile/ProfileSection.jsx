import React from "react";
import { Link } from "react-router-dom";
import ProfileAboutMe from "./ProfileAboutMe";
import ProfileInfo from "./ProfileInfo";
import ProfileLatestAssistedPlans from "./ProfileLatestAssistedPlans";
import ProfileLatestReviews from "./ProfileLatestReviews";
import { ProfileMyFriendsActivity } from "./ProfileMyFriendsActivity";
import ProfileMyPlans from "./ProfileMyPlans";
// import style from './ProfileSection.module.css'

export default function ProfileSection() {
  return (
    <div>
      <div>
        {/* //!! Empieza .map */}
        <div key={element.id}>
          <ProfileInfo
            image={element.image}
            name={element.name}
            following={element.following}
            followers={element.followers}
            assistedPlans={element.assistedPlans}
            plansCreated={element.plansCreated}
            reviewsCreated={element.reviewsCreated}
          />
        </div>
        {/* //!! termina .map */}
      </div>
      <div>
        <div>
          <h6>Actividad de mis amigos</h6>
          {/* //!! Empieza .map */}
          <Link to={element.myFriendsActivityId}>
            <ProfileMyFriendsActivity
              myFriendsActivityImg={element.myFriendsActivityImg}
              myFriendsActivityName={element.myFriendsActivityName}
            />
          </Link>
          {/* //!! termina .map */}
        </div>
        <div>
          <div>
            <h6>Sobre mí</h6>
            {/* //!! Empieza .map */}
            <ProfileAboutMe aboutMe={element.aboutMe} />
            {/* //!! termina .map */}
          </div>
          <div>
            <h6>Últimos planes asistidos</h6>
            {/* //!! Empieza .map */}
            <Link to={element.latestAssistedPlansId}>
              <ProfileLatestAssistedPlans
                latestAssistedPlansImg={element.latestAssistedPlansImg}
                latestAssistedPlansName={element.latestAssistedPlansName}
              />
            </Link>
            {/* //!! termina .map */}
          </div>
          <div>
            <h6>Mis planes</h6>
            {/* //!! Empieza .map */}
            <Link to={element.myPlansId}>
              <ProfileMyPlans
                myPlansImage={element.myPlansImage}
                myPlansName={element.myPlansName}
              />
            </Link>
            {/* //!! termina .map */}
          </div>
          <div>
            <h6>Últimas reseñas</h6>
            {/* //!! Empieza .map */}
            <Link to={element.latestReviewsId}>
              <ProfileLatestReviews
                latestReviewsImg={element.latestReviewsImg}
                latestReviewsName={element.latestReviewsName}
                latestReviewsDescription={element.latestReviewsDescription}
                latestReviewsAssessment={element.latestReviewsAssessment}
              />
            </Link>
            {/* //!! termina .map */}
          </div>
        </div>
      </div>
    </div>
  );
}
