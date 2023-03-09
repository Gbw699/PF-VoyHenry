import React from "react";
import style from "./Users.module.css";
import UserState from "../../components/Users/UserState";
import ProfileCard from "../../recycle/ProfileCard/ProfileCard";
import { useMediaQuery } from "@mui/material";
import getMediaQuery from "../../recycle/MediaQuerys/mediaQuerys.mjs";

export default function Users() {
  const isMobile = useMediaQuery(getMediaQuery("xs"));
  return (
    <div className={style.container}>
      {!isMobile && <div className={style.profileCont}>
        <ProfileCard />
      </div>}
      <div className={style.users}>
        <UserState />
      </div>
    </div>
  );
}
