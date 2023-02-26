import React from "react";
// import style from "EditProfileAboutMe.module.css";

export default function EditProfileAboutMe() {
  return (
    <div>
      <textarea
        placeholder="Sobre mí"
        name="aboutMe"
        id="aboutMe"
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
}
