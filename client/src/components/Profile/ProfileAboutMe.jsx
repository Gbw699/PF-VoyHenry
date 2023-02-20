import React from "react";
import style from "./ProfileAboutMe.module.css";

export default function ProfileAboutMe({ aboutMe }) {
  return (
    <div className={style.aboutMe}>
      <p>{aboutMe}</p>
    </div>
  );
}
