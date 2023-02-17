import React from "react";
import mauricioFonsecaImg from "../../assets/mauricioFonseca.jpg";
import gitHubImg from "../../assets/github.png";
import linkedInImg from "../../assets/linkedin.png";
// import style from "./Developers.module.css";

export default function MauricioFonseca() {
  return (
    <div>
      <div>
        <img
          src={mauricioFonsecaImg}
          alt="Mauricio Fonseca"
        />
      </div>
      <div>
        <div>
          <a
            href="https://www.linkedin.com/in/mauricio-fonseca-4a1b5a261/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={linkedInImg}
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/Ephradrax"
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
          <h5>Mauricio Fonseca</h5>
          <p>Full Stack Web Developer</p>
        </div>
      </div>
    </div>
  );
}
