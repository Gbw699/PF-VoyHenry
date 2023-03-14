import React from "react";
import FooterCopyright from "./FooterCopyright";
import style from "./FooterSection.module.css";
import FooterImg from "./FooterImg";
import FooterText from "./FooterText";
import getMediaQuery from "../../recycle/MediaQuerys/mediaQuerys.mjs";
import { useMediaQuery } from "@mui/material";

export default function FooterSection() {
  const isMobile = useMediaQuery(getMediaQuery("xs"));
  return (
    <div className={style.footerCont}>
      {!isMobile && <FooterImg />}
      <FooterCopyright />
      <FooterText />
    </div>
  );
}
