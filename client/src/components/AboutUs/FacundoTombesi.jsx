import React from "react";
import facundoTombesiImg from "../../assets/facundoTombesi.jpg";
import gitHubImg from "../../assets/github.png";
import linkedInImg from "../../assets/linkedin.png";
// import style from "./Developers.module.css";

export default function FacundoTombesi() {
  return (
    <div>
      <div>
        <img
          src={facundoTombesiImg}
          alt="Facundo Martín Tombesi"
        />
      </div>
      <div>
        <div>
          <a
            href="https://www.linkedin.com/in/facundotombesi/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={linkedInImg}
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/FacuTombesi"
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
          <h5>Facundo Martín Tombesi</h5>
          <p>Full Stack Web Developer</p>
        </div>
      </div>
    </div>
  );
}
