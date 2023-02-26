import React from "react";
import FooterCopyright from "./FooterCopyright";
import style from "./FooterSection.module.css";
import FooterImg from "./FooterImg";
import FooterText from "./FooterText";

export default function FooterSection() {
  return (
    <div className={style.footerCont}>
      <FooterImg />
      <FooterCopyright />
      <FooterText />
    </div>
  );
}
