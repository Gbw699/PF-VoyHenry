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
import { getUser } from "../../redux/slices/userSlice/thunks";

export default function ProfileSection() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser("Leslie"));
  }, [dispatch]);

  // const user = useSelector((state) => state.userStore.user.data.user);

  // console.log(user);

  return (
    <div className={style.mainContainer}>
      <div className={style.profileCont}>
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
      <div className={style.infoCont}>
        <div className={style.friendsAct}>
          <h6 className={style.title}>Actividad de mis amigos</h6>
          <hr
            color="#F1E100"
            width="100%"
          />
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
        <div className={style.activityCont}>
          <div>
            <h6 className={style.title}>Sobre mí</h6>
            <hr
              color="#F1E100"
              width="100%"
            />
            {profileData.data.map((element, index) => (
              <ProfileAboutMe
                key={index}
                aboutMe={element.profileAboutMe}
              />
            ))}
          </div>
          <div>
            <h6 className={style.title}>Últimos planes asistidos</h6>
            <hr
              color="#F1E100"
              width="100%"
            />
            <div className={style.plansCont}>
              {profileData.data.map((element) =>
                element.latestAssistedPlans.map((element2) => (
                  <Link
                    key={element2.id}
                    to={`/plans/${element2.id}`}
                    className={style.link}
                  >
                    <ProfileLatestAssistedPlans
                      latestAssistedPlansImg={element2.latestAssistedPlansImg}
                      latestAssistedPlansName={element2.latestAssistedPlansName}
                    />
                  </Link>
                ))
              )}
            </div>
          </div>
          <div>
            <h6 className={style.title}>Mis planes</h6>
            <hr
              color="#F1E100"
              width="100%"
            />
            <div className={style.plansCont}>
              {profileData.data.map((element) =>
                element.latestAssistedPlans.map((element2) => (
                  <Link
                    key={element2.id}
                    to={`/plans/${element2.id}`}
                    className={style.link}
                  >
                    <ProfileMyPlans
                      myPlansImage={element2.latestAssistedPlansImg}
                      myPlansName={element2.latestAssistedPlansName}
                    />
                  </Link>
                ))
              )}
            </div>
          </div>
          <div>
            <h6 className={style.title}>Últimas reseñas</h6>
            <hr
              color="#F1E100"
              width="100%"
            />
            <div className={style.plansCont}>
              {profileData.data.map((element) =>
                element.latestReview.map((element2) => (
                  <Link
                    key={element2.id}
                    to={`/plans/${element2.id}`}
                  >
                    <ProfileLatestReviews
                      latestReviewsImg={element2.latestReviewsImg}
                      latestReviewsName={element2.latestReviewsName}
                      latestReviewsDescription={
                        element2.latestReviewsDescription
                      }
                      latestReviewsAssessment={element2.latestReviewsAssessment}
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
