import React, { useState } from "react";
import { EditProfileSection } from "./EditProfileSection";
// import style from 'EditProfileState.module.css'

export default function EditProfileState() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [nickName, setNickName] = useState(user.firstName);
  const [image, setImage] = useState(user.image);
  const [provinces, setProvinces] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  return (
    <>
      <EditProfileSection
        {...{
          nickName,
          setNickName,
          firstName,
          setFirstName,
          lastName,
          setLastName,
          image,
          setImage,
          provinces,
          setProvinces,
          selectedCountry,
          setSelectedCountry,
          selectedProvince,
          setSelectedProvince,
        }}
      />
    </>
  );
}
