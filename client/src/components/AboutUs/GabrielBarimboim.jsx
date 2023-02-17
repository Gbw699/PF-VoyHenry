import React from "react";
import gabrielBarimboimImg from "../../assets/gabrielBarimboim.jpg";
import gitHubImg from "../../assets/github.png";
import linkedInImg from "../../assets/linkedin.png";
// import style from "./Developers.module.css";

export default function GabrielBarimboim() {
  return (
    <div>
      <div>
        <img
          src={gabrielBarimboimImg}
          alt="Gabriel Barimboim"
        />
      </div>
      <div>
        <div>
          <a
            href="https://www.linkedin.com/in/gabriel-barimboim/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={linkedInImg}
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/Gbw699"
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
          <h5>Gabriel Barimboim</h5>
          <p>Front-End</p>
        </div>
      </div>
    </div>
  );
}
