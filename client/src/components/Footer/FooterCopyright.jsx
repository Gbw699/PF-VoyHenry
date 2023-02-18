import React from "react";
import { Link } from "react-router-dom";
import style from "./FooterCopyright.module.css";

export default function FooterCopyright() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <p className={style.rightsTxt}>
        Copyright © {currentYear} - Todos los derechos reservados por el{" "}
        <Link
          to="/aboutUs"
          className={style.rightsLink}
        >
          {" "}
          Grupo 8
        </Link>{" "}
        de{" "}
        <a
          href="https://www.soyhenry.com/"
          rel="noreferrer"
          target="_blank"
          className={style.rightsLink}
        >
          SoyHenry
        </a>
      </p>
    </div>
  );
}
