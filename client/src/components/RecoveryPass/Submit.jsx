import axios from "axios";
import style from "./Submit.module.css";
export default function Submit({ data, isValidEmail }) {
  const handlerOnClick = () => {
    if (isValidEmail) {
      axios.post("/api/v1/auth/recovery", data);
    }
  };

  return (
    <div className={style.buttons}>
      <button onClick={handlerOnClick}>Get Mail</button>
    </div>
  );
}
