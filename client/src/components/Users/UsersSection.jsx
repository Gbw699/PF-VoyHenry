import React from "react";
import UserCard from "./UserCard";
import UserSearch from "./UserSearch";
import style from "./UsersSection.module.css";

export default function UsersSection({
  users,
  setUsers,
  following,
  setFollowing,
  followed,
  setFollowed,
  userFollowed,
  setUserFollowed,
}) {
  const loginUser = JSON.parse(localStorage.getItem("user"));

  return (
    <div className={style.container}>
      <UserSearch />
      <div className={style.cardContainer}>
        {users?.map(
          (element) =>
            element.nickName !== loginUser.nickName && (
              <div
                className={style.userCard}
                key={element.nickName}
              >
                <UserCard
                  nickName={element.nickName}
                  firstName={element.firstName}
                  lastName={element.lastName}
                  image={element.image}
                  nationality={element.nationality}
                  userFollowing={element.followUser.length}
                  userFollowed={element.user.length}
                  setUsers={setUsers}
                  following={following}
                  setFollowing={setFollowing}
                  followed={followed}
                  setFollowed={setFollowed}
                  loginUser={loginUser.nickName}
                  userFollow={userFollowed}
                  setUserFollowed={setUserFollowed}
                />
              </div>
            )
        )}
      </div>
    </div>
  );
}
