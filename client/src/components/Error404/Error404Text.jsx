import React from "react";
import style from "./Error404Text.module.css";

export default function Error404Text() {
  return (
    <div>
      <h3 className={style.errorCode}>404</h3>
      <hr color="#f1e100" width="100%" />
      <h4 className={style.errorMsg1}>¡Lo siento! La página no existe</h4>
      <h5 className={style.errorMsg2}>El enlace probablemente esté roto o la página fue removida </h5>
    </div>
  );
}
