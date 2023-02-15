import React from "react";
// import style from "./ProfileMyFriendsActivity.module.css";

export const ProfileMyFriendsActivity = ({
  myFriendsActivityImg,
  myFriendsActivityName,
}) => {
  return (
    <div>
      <div>
        <img
          src={myFriendsActivityImg}
          alt={myFriendsActivityName}
        />
      </div>
      <div>
        <p>{myFriendsActivityName}</p>
      </div>
    </div>
  );
};
