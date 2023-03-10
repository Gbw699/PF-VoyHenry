import React from "react";
import MarcosParellaImg from "../../assets/marcosParella.jpg";
import gitHubImg from "../../assets/github.png";
import linkedInImg from "../../assets/linkedin.png";
import portFolioImg from "../../assets/portfolio.png";
import style from "./Developers.module.css";

export default function MarcosParella() {
  return (
    <div className={style.container}>
      <div
        className={style.cardImg}
        style={{ backgroundImage: `url(${MarcosParellaImg})` }}
      />
      <div className={style.cardCont}>
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
              title="LinkedIn"
              loading="lazy"
            />
          </a>
          <a
            className={style.img2}
            href="https://github.com/Markish2000"
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
          <a
            className={style.img2}
            href="https://markish2000.github.io/Portfolio/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className={style.img2}
              src={portFolioImg}
              alt="Portfolio"
              title="Portfolio"
              loading="lazy"
            />
          </a>
        </div>
        <div className={style.description}>
          <h5 className={style.name}>Marcos H. Parella</h5>
          <p className={style.job}>Full Stack Web Developer</p>
        </div>
      </div>
    </div>
  );
}
