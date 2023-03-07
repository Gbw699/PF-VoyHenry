import React from "react";
import gabrielBarimboimImg from "../../assets/gabrielBarimboim.jpg";
import gitHubImg from "../../assets/github.png";
import linkedInImg from "../../assets/linkedin.png";
import style from "./Developers.module.css";

export default function GabrielBarimboim() {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <img
          src={gabrielBarimboimImg}
          alt="Gabriel Barimboim"
          title="Gabriel Barimboim"
          loading="lazy"
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
            href="https://www.linkedin.com/in/gabriel-barimboim/"
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
            className={style.img}
            href="https://github.com/Gbw699"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className={style.img}
              src={gitHubImg}
              alt="GitHub"
              title="GitHub"
              loading="lazy"
            />
          </a>
        </div>
        <div className={style.description}>
          <h5>Gabriel Barimboim</h5>
          <p>Full Stack Web Developer</p>
        </div>
      </div>
    </div>
  );
}
