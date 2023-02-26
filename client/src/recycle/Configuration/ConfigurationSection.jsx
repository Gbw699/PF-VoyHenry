import React from "react";
import { Link } from "react-router-dom";
// import style from "./ConfigurationSection.module.css";

export default function ConfigurationSection() {
  return (
    <div>
      <h3>Configuration</h3>
      <h4>Cuenta</h4>
      <Link to="/profile/edit">
        <h5>Datos personales</h5>
      </Link>
      <Link>Seguridad</Link>
      <h5>Notificaciones</h5>
    </div>
  );
}
