import React from "react";
import style from "./Users.module.css";
import UserState from "../../components/Users/UserState";
import ProfileCard from "../../recycle/ProfileCard/ProfileCard";
import { useMediaQuery } from "@mui/material";
import getMediaQuery from "../../recycle/MediaQuerys/mediaQuerys.mjs";

export default function Users() {
  const isMobile = useMediaQuery(getMediaQuery("xs"));
  const isTablet = useMediaQuery(getMediaQuery("sm"));
  const isTablet2 = useMediaQuery(getMediaQuery("md"));
  return (
    <div className={style.container}>
      {!isMobile && !isTablet && !isTablet2 && <div className={style.profileCont}>
        <ProfileCard />
      </div>}
      <div className={style.users}>
        <UserState />
      </div>
    </div>
  );
}
