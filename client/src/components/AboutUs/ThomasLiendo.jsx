import React from "react";
import thomasLiendoImg from "../../assets/thomasLiendo.jpg";
import gitHubImg from "../../assets/github.png";
import linkedInImg from "../../assets/linkedin.png";
// import style from "./Developers.module.css";

export default function ThomasLiendo() {
  return (
    <div>
      <div>
        <img
          src={thomasLiendoImg}
          alt="Thomas Federico Liendo"
        />
      </div>
      <div>
        <div>
          <a
            href="https://www.linkedin.com/in/thomas-liendo-b00565256/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={linkedInImg}
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/ThomasLiendo"
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
          <h5>Thomas Federico Liendo</h5>
          <p>Diseño</p>
        </div>
      </div>
    </div>
  );
}
