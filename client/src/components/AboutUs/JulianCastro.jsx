import React from "react";
import julianCastroImg from "../../assets/julianCastro.jpg";
import gitHubImg from "../../assets/github.png";
import linkedInImg from "../../assets/linkedin.png";
// import style from "./Developers.module.css";

export default function JulianCastro() {
  return (
    <div>
      <div>
        <img
          src={julianCastroImg}
          alt="Julián María Castro"
        />
      </div>
      <div>
        <div>
          <a
            href="https://www.linkedin.com/in/juli%C3%A1n-mar%C3%ADa-castro-b68778218/"
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
          <h5>Julian María Castro</h5>
          <p>Front-End</p>
        </div>
      </div>
    </div>
  );
}
