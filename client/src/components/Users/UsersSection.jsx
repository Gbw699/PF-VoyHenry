import React from "react";
import { Link } from "react-router-dom";
import UserCard from "./UserCard";
import style from "./UsersSection.module.css";

export default function UsersSection({ users }) {
  return (
    <div className={style.container}>
      <div>
        {users?.map((element) => (
          <Link
            to={`/users/${element.nickName}`}
            key={element.nickName}
          >
            <UserCard
              firstName={element.firstName}
              lastName={element.lastName}
              image={element.image}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
