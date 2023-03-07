import React from "react";
import julianCastroImg from "../../assets/julianCastro.jpg";
import gitHubImg from "../../assets/github.png";
import linkedInImg from "../../assets/linkedin.png";
import style from "./Developers.module.css";

export default function JulianCastro() {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <img
          className={style.cardFacu}
          src={julianCastroImg}
          alt="Julián María Castro"
          title="Julián María Castro"
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
            href="https://www.linkedin.com/in/juli%C3%A1n-mar%C3%ADa-castro-b68778218/"
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
            href="https://github.com/JulianCastro130/"
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
          <h5>Julian María Castro</h5>
          <p>Full Stack Web Developer</p>
        </div>
      </div>
    </div>
  );
}
