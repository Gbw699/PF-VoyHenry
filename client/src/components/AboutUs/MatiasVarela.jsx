import React from "react";
import matiasVarelaImg from "../../assets/matiasVarela.jpg";
import gitHubImg from "../../assets/github.png";
import linkedInImg from "../../assets/linkedin.png";
// import style from "./Developers.module.css";

export default function MatiasVarela() {
  return (
    <div>
      <div>
        <img
          src={matiasVarelaImg}
          alt="Matías Varela"
        />
      </div>
      <div>
        <div>
          <a
            href="https://www.linkedin.com/in/matiasxvarela/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={linkedInImg}
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/MatiasxVarela"
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
          <h5>Matías Varela</h5>
          <p>Back-End</p>
        </div>
      </div>
    </div>
  );
}
