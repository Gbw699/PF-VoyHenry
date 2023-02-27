import React from "react";
import { Link } from "react-router-dom";
import style from "./ConfigurationSection.module.css";

export default function ConfigurationSection() {
  return (
    <div className={style.container}>
      <h3 className={style.title}>Configuration</h3>
      <hr
        width="100%"
        color="#f1e100"
      />
      <h4 className={style.title}>Cuenta</h4>
      <hr
        width="100%"
        color="#f1e100"
      />
      <Link to="/profile/edit">
        <h5>Datos personales</h5>
      </Link>
      <Link>Seguridad</Link>
      <h5 className={style.title}>Notificaciones</h5>
      <hr
        width="100%"
        color="#f1e100"
      />
    </div>
  );
}
