import React from "react";
import { Link } from "react-router-dom";
import ProfileAboutMe from "./ProfileAboutMe";
import ProfileInfo from "./ProfileInfo";
import ProfileLatestAssistedPlans from "./ProfileLatestAssistedPlans";
import ProfileLatestReviews from "./ProfileLatestReviews";
import { ProfileMyFriendsActivity } from "./ProfileMyFriendsActivity";
import ProfileMyPlans from "./ProfileMyPlans";
import profileData from "../../profileData.json";
// import style from './ProfileSection.module.css'

export default function ProfileSection() {
  return (
    <div>
      <div>
        {profileData.data.map((element) => (
          <div key={element.id}>
            <ProfileInfo
              image={element.image}
              name={element.name}
              nationality={element.nationality}
              following={element.following}
              followers={element.followers}
              assistedPlans={element.assistedPlans}
              plansCreated={element.plansCreated}
              reviewsCreated={element.reviewsCreated}
            />
          </div>
        ))}
      </div>
      <div>
        <div>
          <h6>Actividad de mis amigos</h6>
          {profileData.data.map((element) =>
            element.myFriends.map((element2) => (
              <Link
                key={element2.id}
                to={`/plans/${element2.id}`}
              >
                <ProfileMyFriendsActivity
                  myFriendsActivityImg={element2.latestAssistedPlansImg}
                  myFriendsActivityName={element2.latestAssistedPlansName}
                />
              </Link>
            ))
          )}
        </div>
        <div>
          <div>
            <h6>Sobre mí</h6>
            {profileData.data.map((element, index) => (
              <ProfileAboutMe
                key={index}
                aboutMe={element.profileAboutMe}
              />
            ))}
          </div>
          <div>
            <h6>Últimos planes asistidos</h6>
            {profileData.data.map((element) =>
              element.latestAssistedPlans.map((element2) => (
                <Link
                  key={element2.id}
                  to={`/plans/${element2.id}`}
                >
                  <ProfileLatestAssistedPlans
                    latestAssistedPlansImg={element2.latestAssistedPlansImg}
                    latestAssistedPlansName={element2.latestAssistedPlansName}
                  />
                </Link>
              ))
            )}
          </div>
          <div>
            <h6>Mis planes</h6>
            {profileData.data.map((element) =>
              element.latestAssistedPlans.map((element2) => (
                <Link
                  key={element2.id}
                  to={`/plans/${element2.id}`}
                >
                  <ProfileMyPlans
                    myPlansImage={element2.latestAssistedPlansImg}
                    myPlansName={element2.latestAssistedPlansName}
                  />
                </Link>
              ))
            )}
          </div>
          <div>
            <h6>Últimas reseñas</h6>
            {profileData.data.map((element) =>
              element.latestReview.map((element2) => (
                <Link
                  key={element2.id}
                  to={`/plans/${element2.id}`}
                >
                  <ProfileLatestReviews
                    latestReviewsImg={element2.latestReviewsImg}
                    latestReviewsName={element2.latestReviewsName}
                    latestReviewsDescription={element2.latestReviewsDescription}
                    latestReviewsAssessment={element2.latestReviewsAssessment}
                  />
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
