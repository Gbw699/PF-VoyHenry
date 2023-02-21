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
          src={julianCastroImg}
          alt="Julián María Castro"
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
            href="https://www.linkedin.com/in/juli%C3%A1n-mar%C3%ADa-castro-b68778218/"
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
            href="https://github.com/JulianCastro130/"
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
          <h5>Julian María Castro</h5>
          <p>Full Stack Web Developer</p>
        </div>
      </div>
    </div>
  );
}
