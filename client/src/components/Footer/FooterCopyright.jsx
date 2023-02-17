import React from "react";
import { Link } from "react-router-dom";
// import style from "./FooterCopyright.module.css";

export default function FooterCopyright() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <p>
        Copyright © {currentYear} - Todos los derechos reservados por el{" "}
        <Link to="/aboutUs"> Grupo 8</Link> de{" "}
        <a
          href="https://www.soyhenry.com/"
          rel="noreferrer"
          target="_blank"
        >
          SoyHenry
        </a>
      </p>
    </div>
  );
}
