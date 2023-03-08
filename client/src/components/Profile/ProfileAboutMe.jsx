import React from "react";
import style from "./ProfileAboutMe.module.css";

export default function ProfileAboutMe({ aboutMe }) {
  return (
    <div className={style.aboutMe}>
      {!aboutMe ? <p>No has escrito nada sobre ti.</p> : <p>{aboutMe}</p>}
    </div>
  );
}
