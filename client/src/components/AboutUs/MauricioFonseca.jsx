import React from "react";
import mauricioFonsecaImg from "../../assets/mauricioFonseca.jpg";
import gitHubImg from "../../assets/github.png";
import linkedInImg from "../../assets/linkedin.png";
import style from "./Developers.module.css";

export default function MauricioFonseca() {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <img
          src={mauricioFonsecaImg}
          alt="Mauricio Fonseca"
        />
      </div>
      <hr
        width="100%"
        color="#F1E100"
      />
      <div className={style.container}>
        <div className={style.links}>
          <a
            className={style.img}
            href="https://www.linkedin.com/in/mauricio-fonseca-4a1b5a261/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className={style.img}
              src={linkedInImg}
              alt="LinkedIn"
            />
          </a>
          <a
            className={style.img}
            href="https://github.com/Ephradrax"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className={style.img}
              src={gitHubImg}
              alt="GitHub"
            />
          </a>
        </div>
        <div className={style.description}>
          <h5>Mauricio Fonseca</h5>
          <p>Full Stack Web Developer</p>
        </div>
      </div>
    </div>
  );
}
