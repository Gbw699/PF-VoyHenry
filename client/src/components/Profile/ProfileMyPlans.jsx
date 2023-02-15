import React from "react";
// import style from "./ProfileMyPlans.module.css";

export default function ProfileMyPlans({ myPlansImage, myPlansName }) {
  return (
    <div>
      <img
        src={myPlansImage}
        alt={myPlansName}
      />
      <p>{myPlansName}</p>
    </div>
  );
}
