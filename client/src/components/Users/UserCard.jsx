import React from "react";
// import style from "./UserCard.module.css";

export default function UserCard({ image, firstName, lastName, nationality }) {
  const handleClick = () => {};

  return (
    <div>
      <div>
        <img
          src={image}
          alt={`${firstName} ${lastName}`}
          loading="lazy"
        />
      </div>
      <div>
        <h3>{`${firstName} ${lastName}`}</h3>
        <h4>{nationality}</h4>
        <div>
          <p>Siguiendo: 103</p>
          <p>Seguidores: 98</p>
        </div>
      </div>
      <div>
        <button
          type="submit"
          onClick={handleClick}
        >
          Seguir
        </button>
        <button type="submit">Ver perfil</button>
      </div>
    </div>
  );
}
