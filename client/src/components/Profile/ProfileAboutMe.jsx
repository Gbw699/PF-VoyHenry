import React from "react";
import style from "./ProfileAboutMe.module.css";

export default function ProfileAboutMe({ aboutMe }) {
  return (
    <div className={style.aboutMe}>
      {!aboutMe 
        ? <p>Este usuario aún no ha escrito nada aquí.</p>
        : <p>{aboutMe}</p>
      }
    </div>
  );
}
