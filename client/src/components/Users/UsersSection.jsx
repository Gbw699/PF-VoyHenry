import React from "react";
// import { Link } from "react-router-dom";
import UserCard from "./UserCard";
import UserSearch from "./UserSearch";
import style from "./UsersSection.module.css";

export default function UsersSection({ users }) {
  return (
    <div className={style.container}>
      <UserSearch />
      <div className={style.cardContainer}>
        {users?.map((element) => (
          // <Link
          //   to={`/users/${element.nickName}`}
          //   key={element.nickName}
          // >
          <div
            className={style.userCard}
            key={element.nickName}
          >
            <UserCard
              firstName={element.firstName}
              lastName={element.lastName}
              image={element.image}
              nationality={element.nationality}
            />
          </div>
          // </Link>
        ))}
      </div>
    </div>
  );
}
