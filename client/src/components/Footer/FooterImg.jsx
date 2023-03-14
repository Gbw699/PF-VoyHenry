import React from "react";
import { Link } from "react-router-dom";
import voyHenryImage from "../../assets/voyHENRY_title(white).svg";
import style from "./FooterImg.module.css";

export default function FooterImg() {
  
  return (
    <div className={style.footerImg}>
      <Link to="/home">
        <img
          src={voyHenryImage}
          width="100%"
          alt="voyHenry"
          title="voyHenry"
          height="40em"
          loading="lazy"
        />
      </Link>
    </div>
  );
}
