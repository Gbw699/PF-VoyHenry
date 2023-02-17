import React from "react";
import MarcosParellaImg from "../../assets/marcosParella.jpg";
import gitHubImg from "../../assets/github.png";
import linkedInImg from "../../assets/linkedin.png";
import portFolioImg from "../../assets/portfolio.png";
// import style from "./Developers.module.css";

export default function MarcosParella() {
  return (
    <div>
      <div>
        <img
          src={MarcosParellaImg}
          alt="Marcos Hernan Parella"
        />
      </div>
      <div>
        <div>
          <a
            href="https://www.linkedin.com/in/marcoshernanparella/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={linkedInImg}
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/Markish2000"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={gitHubImg}
              alt="GitHub"
            />
          </a>
          <a
            href="https://markish2000.github.io/Portfolio/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={portFolioImg}
              alt="Portfolio"
            />
          </a>
        </div>
        <div>
          <h5>Marcos Hernan Parella</h5>
          <p>Full Stack Web Developer</p>
        </div>
      </div>
    </div>
  );
}
