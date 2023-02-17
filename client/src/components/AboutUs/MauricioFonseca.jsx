import React from "react";
import mauricioFonsecaImg from "../../assets/lienSanchez.jpg";
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
            href=""
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={linkedInImg}
              alt="LinkedIn"
            />
          </a>
          <a
            href=""
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
          <p>Back-End</p>
        </div>
      </div>
    </div>
  );
}
