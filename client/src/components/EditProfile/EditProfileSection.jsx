import React from "react";
import EditProfileAboutMe from "./EditProfileAboutMe";
import EditProfileImage from "./EditProfileImage";
import EditProfileInput from "./EditProfileInput";
import EditProfileSelectCountry from "./EditProfileSelectCountry";
// import style from "EditProfileSection.module.css";

export const EditProfileSection = ({
  image,
  setImage,
  setName,
  setLastName,
  provinces,
  setProvinces,
  selectedCountry,
  setSelectedCountry,
  selectedProvince,
  setSelectedProvince,
}) => {
  return (
    <div>
      <div>
        <p>Nombre completo</p>
        <EditProfileInput
          name="name"
          placeholder="Nombre completo"
          setState={setName}
        />
        <p>Apellido</p>
        <EditProfileInput
          name="lastName"
          placeholder="Apellido"
          setState={setLastName}
        />
        <p>Apodo</p>
        <EditProfileInput
          name="nickName"
          placeholder="Como te ven los otros usuarios"
        />
        <EditProfileSelectCountry
          {...{
            provinces,
            setProvinces,
            selectedCountry,
            setSelectedCountry,
            selectedProvince,
            setSelectedProvince,
          }}
        />
        <p>Teléfono</p>
        <EditProfileInput
          name="phone"
          placeholder="(Código país) (Código área) 1122-3344"
        />
        <button>Guardar cambios</button>
      </div>
      <div>
        <div>
          <EditProfileImage {...{ image, setImage }} />
        </div>
        <div>
          <EditProfileAboutMe />
        </div>
      </div>
    </div>
  );
};
