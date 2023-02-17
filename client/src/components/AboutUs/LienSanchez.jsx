import React from "react";
import lienSanchezImg from "../../assets/lienSanchez.jpg";
import gitHubImg from "../../assets/github.png";
import linkedInImg from "../../assets/linkedin.png";
// import style from "./Developers.module.css";

export default function LienSanchez() {
  return (
    <div>
      <div>
        <img
          src={lienSanchezImg}
          alt="Lien Silvio Sanchez"
        />
      </div>
      <div>
        <div>
          <a
            href="https://www.linkedin.com/in/liensanchez/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={linkedInImg}
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/liensanchez"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={gitHubImg}
              alt="GitHub"
            />
          </a>
        </div>
        <div>
          <h5>Lien Silvio Sanchez</h5>
          <p>Full Stack Web Developer</p>
        </div>
      </div>
    </div>
  );
}
