import React from "react";
import facundoTombesiImg from "../../assets/facundoTombesi.png";
import gitHubImg from "../../assets/github.png";
import linkedInImg from "../../assets/linkedin.png";
import style from "./Developers.module.css";
import { useEffect, useState } from "react";
export default function FacundoTombesi() {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    setBackgroundImage(`url(${facundoTombesiImg})`);
  });

  return (
    <div className={style.container}>
      <div
        className={style.cardFacu}
        style={{ backgroundImage: backgroundImage }}
      ></div>
      <hr
        width="85%"
        color="#F1E100"
      />
      <div className={style.container}>
        <div className={style.links}>
          <a
            className={style.img}
            href="https://www.linkedin.com/in/facundotombesi/"
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
            href="https://github.com/FacuTombesi"
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
          <h5>Facundo Martín Tombesi</h5>
          <p>Full Stack Web Developer</p>
        </div>
      </div>
    </div>
  );
}
