import React, { useEffect, useRef } from "react";
import style from "./EditProfileImage.module.css";

export default function EditProfileImage({ image, setImage }) {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "voyhenrydb",
        uploadPreset: "tapjvy8a",
      },
      function (error, result) {
        if (!error && result && result.event === "success") {
          setImage(result.info.url);
        }
      }
    );
  }, []);
  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <p className={style.title}>Imagen de perfil</p>
      </div>
      <div className={style.imagePerfil}>
        <img
          className={style.img}
          src={image}
          alt="Imagen de perfil"
        />
      </div>
      <div>
        <button
          className={style.buttons}
          onClick={() => widgetRef.current.open()}
        >
          Subir imagen
        </button>
      </div>
    </div>
  );
}
