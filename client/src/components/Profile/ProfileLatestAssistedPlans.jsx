import React from "react";
// import style from "./ProfileLatestAssistedPlans/module.css";

export default function ProfileLatestAssistedPlans({
  latestAssistedPlansImg,
  latestAssistedPlansName,
}) {
  return (
    <div>
      <img
        src={latestAssistedPlansImg}
        alt={latestAssistedPlansName}
      />
      <p>{latestAssistedPlansName}</p>
    </div>
  );
}
