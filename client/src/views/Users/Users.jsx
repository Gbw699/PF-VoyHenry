import React from "react";
import style from "./Users.module.css";
import UserState from "../../components/Users/UserState";
import ProfileCard from "../../recycle/ProfileCard/ProfileCard";

export default function Users() {
  return (
    <div className={style.container}>
      <div className={style.profileCont}>
        <ProfileCard />
      </div>
      <div className={style.users}>
        <UserState />
      </div>
    </div>
  );
}
