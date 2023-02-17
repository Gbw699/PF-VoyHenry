import React from "react";
import { Link } from "react-router-dom";
import voyHenryImage from "../../assets/voyHENRY_title(white).png";
import style from "./FooterImg.module.css";

export default function FooterImg() {
  return (
    <div className={style.footerImg}>
      <Link to="/home">
        <img
          src={voyHenryImage}
          alt="voyHenry"
          height="40px"
        />
      </Link>
    </div>
  );
}
