import React from "react";
import EditProfileState from "../../components/EditProfile/EditProfileState";
import ConfigurationSection from "../../recycle/Configuration/ConfigurationSection";
// import style from "./EditProfile.module.css";

export default function EditProfile() {
  return (
    <>
      <ConfigurationSection />
      <EditProfileState />
    </>
  );
}
