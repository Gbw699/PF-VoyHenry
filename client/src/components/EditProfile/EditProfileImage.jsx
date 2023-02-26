import React from "react";
// import style from "EditProfileImage.module.css";

export default function EditProfileImage({ image, setImage }) {
  return (
    <div>
      <div>
        <p>Imagen de perfil</p>
      </div>
      <div>
        <img
          src={image}
          alt="Imagen de perfil"
        />
      </div>
      <div>
        <button>Subir imagen</button>
      </div>
    </div>
  );
}
