import React from "react";
import UserCard from "./UserCard";
import UserSearch from "./UserSearch";
import style from "./UsersSection.module.css";

export default function UsersSection({ users, following }) {
  const loginUser = JSON.parse(localStorage.getItem("user"));

  return (
    <div className={style.container}>
      <UserSearch />
      <div className={style.cardContainer}>
        {users?.map((element) => (
          element.nickName !== loginUser.nickName
          && <div
            className={style.userCard}
            key={element.nickName}
          >
            <UserCard
              nickName={element.nickName}
              firstName={element.firstName}
              lastName={element.lastName}
              image={element.image}
              nationality={element.nationality}
              following={following}
              loginUser={loginUser.nickName}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
