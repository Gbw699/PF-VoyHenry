import React from "react";
import FooterCopyright from "../../components/Footer/FooterCopyright";
import style from "./Footer.module.css";
import FooterImg from "../../components/Footer/FooterImg";
import FooterText from "../../components/Footer/FooterText";

export default function Footer() {
  return (
    <div className={style.footerCont}>
      <FooterImg />
      <FooterCopyright />
      <FooterText />
    </div>
  );
}
