import React from "react";
import MarcosParellaImg from "../../assets/marcosParella.jpg";
import gitHubImg from "../../assets/github.png";
import linkedInImg from "../../assets/linkedin.png";
import portFolioImg from "../../assets/portfolio.png";
import style from "./Developers.module.css";

export default function MarcosParella() {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <img
          src={MarcosParellaImg}
          alt="Marcos Hernan Parella"
        />
      </div>
      <hr
        width="85%"
        color="#F1E100"
      />
      <div className={style.container}>
        <div className={style.links}>
          <a
            className={style.img}
            href="https://www.linkedin.com/in/marcoshernanparella/"
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
            href="https://github.com/Markish2000"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className={style.img}
              src={gitHubImg}
              alt="GitHub"
            />
          </a>
          <a
            className={style.img}
            href="https://markish2000.github.io/Portfolio/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className={style.img}
              src={portFolioImg}
              alt="Portfolio"
            />
          </a>
        </div>
        <div className={style.description}>
          <h5>Marcos Hernan Parella</h5>
          <p>Full Stack Web Developer</p>
        </div>
      </div>
    </div>
  );
}
