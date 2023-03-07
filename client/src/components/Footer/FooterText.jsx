import React from "react";
import { Link } from "react-router-dom";
import style from "./FooterText.module.css";

export default function FooterText() {
  return (
    <div>
      <Link to="/aboutUs">
        <p className={style.aboutUs}>Sobre nosotros</p>
      </Link>
    </div>
  );
}
