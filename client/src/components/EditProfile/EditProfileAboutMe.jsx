import React from "react";
import style from "./EditProfileAboutMe.module.css";

export default function EditProfileAboutMe({ setState }) {
  const handleChange = (event) => {
    setState(event.target.value);
  };
  return (
    <div className={style.container}>
      <textarea
        className={style.textArea}
        placeholder="Sobre mí..."
        name="aboutMe"
        id="aboutMe"
        cols="30"
        rows="10"
        onChange={handleChange}
      ></textarea>
    </div>
  );
}
