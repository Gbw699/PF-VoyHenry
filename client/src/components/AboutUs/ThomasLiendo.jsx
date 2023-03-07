import React from "react";
import thomasLiendoImg from "../../assets/thomasLiendo.jpg";
import gitHubImg from "../../assets/github.png";
import linkedInImg from "../../assets/linkedin.png";
import style from "./Developers.module.css";

export default function ThomasLiendo() {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <img
          className={style.cardFacu}
          src={thomasLiendoImg}
          alt="Thomas Federico Liendo"
          title="Thomas Federico Liendo"
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
            href="https://www.linkedin.com/in/thomas-liendo-b00565256/"
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
            href="https://github.com/ThomasLiendo"
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
          <h5>Thomas Federico Liendo</h5>
          <p>Full Stack Web Developer</p>
        </div>
      </div>
    </div>
  );
}
