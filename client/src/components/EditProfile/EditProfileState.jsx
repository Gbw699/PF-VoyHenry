import React, { useState } from "react";
import { EditProfileSection } from "./EditProfileSection";
// import style from 'EditProfileState.module.css'

export default function EditProfileState() {
  const user = JSON.parse(localStorage.getItem("user"));
  const nickName = user.nickName;
  const [name, setName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [image, setImage] = useState(user.image);
  const [provinces, setProvinces] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  return (
    <>
      <EditProfileSection
        {...{
          nickName,
          name,
          setName,
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
