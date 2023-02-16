import React from "react";
import { Link } from "react-router-dom";
// import style from "./FooterText.module.css";

export default function FooterText() {
  return (
    <div>
      <Link to="/aboutUs">
        <h5>Sobre nosotros</h5>
      </Link>
    </div>
  );
}
