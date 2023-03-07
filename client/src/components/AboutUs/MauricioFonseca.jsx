import React from "react";
import mauricioFonsecaImg from "../../assets/mauricioFonseca.jpg";
import gitHubImg from "../../assets/github.png";
import linkedInImg from "../../assets/linkedin.png";
import style from "./Developers.module.css";
import { useEffect, useState } from "react";
export default function MauricioFonseca() {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <img
          className={style.cardFacu}
          src={mauricioFonsecaImg}
          alt="Mauricio Fonseca"
          title="Mauricio Fonseca"
          loading="lazy"
        />
      </div>
      <hr
        width="0%"
        color="black"
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
              title="LinkedIn"
              loading="lazy"
            />
          </a>
          <a
            className={style.img2}
            href="https://github.com/Ephradrax"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className={style.img2}
              src={gitHubImg}
              alt="GitHub"
              title="GitHub"
              loading="lazy"
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
