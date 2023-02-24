import React from "react";
// import style from "./Users.module.css";
import UserState from "../../components/Users/UserState";
import ProfileCard from "../../recycle/ProfileCard/ProfileCard";

export default function Users() {
  return (
    <div>
      <div>
        <ProfileCard />
      </div>
      <div>
        <UserState />
      </div>
    </div>
  );
}
