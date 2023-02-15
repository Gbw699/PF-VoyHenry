import React from "react";
// import style from "./ProfileInfo.module.css";

export default function ProfileInfo({
  image,
  name,
  following,
  followers,
  assistedPlans,
  plansCreated,
  reviewsCreated,
}) {
  return (
    <div>
      <div>
        <img
          src={image}
          alt={name}
        />
        <p>{name}</p>
      </div>
      <div>
        <div>
          <p>Siguiendo</p>
          <p>{following}</p>
        </div>
        <div>
          <p>Seguidores</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Planes asistidos</p>
          <p>{assistedPlans}</p>
        </div>
        <div>
          <p>Planes creados</p>
          <p>{plansCreated}</p>
        </div>
        <div>
          <p>Reseñas creadas</p>
          <p>{reviewsCreated}</p>
        </div>
      </div>
    </div>
  );
}
