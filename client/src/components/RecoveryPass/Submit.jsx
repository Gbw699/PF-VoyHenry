import axios from "axios";
import style from "./Submit.module.css";

export default function Submit({ data, isValidEmail }) {
  const handlerOnClick = () => {
    if (isValidEmail) {
      axios.post("/api/v1/auth/recovery", data);
    }
  };

  return (
    <div>
      <button
        onClick={handlerOnClick}
        className={style.sendBtn}
      >
        Enviar mail
      </button>
    </div>
  );
}
