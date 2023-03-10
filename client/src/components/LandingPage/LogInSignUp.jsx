import React from "react";
import style from "./LogInSignUp.module.css";
import { useNavigate } from "react-router-dom";
import titleImg from "../../assets/voyHENRY_title(white).svg";

export default function LogInSignUp() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    const valueClick = event.target.value;
    if (valueClick === "logIn") {
      navigate("/logIn");
    } else {
      navigate("/signUp");
    }
  };
  return (
    <div className={style.landing}>
      <div className={style.blackBg} />
      <img
        src={titleImg}
        className={style.logo}
        alt="voyHENRY"
        title="voyHENRY"
        loading="lazy"
      />
      <div className={style.buttons}>
        <button
          className={style.login}
          type="submit"
          value="logIn"
          onClick={handleSubmit}
        >
          Iniciar sesión
        </button>
        <button
          className={style.signup}
          type="submit"
          value="signUp"
          onClick={handleSubmit}
        >
          Registrarse
        </button>
      </div>
    </div>
  );
}
