import React from "react";
// import style from "./Error404Image.module.css";
import errorImage from "../../assets/error404.png";

export default function Error404Image() {
  return (
    <div>
      <img
        src={errorImage}
        alt="Error 404"
      />
    </div>
  );
}
