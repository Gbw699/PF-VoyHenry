import { useNavigate } from "react-router-dom";
import style from "./MailInput.module.css";

export default function MailInput({ setMailInput }) {
  const navigate = useNavigate();

  const handlerOnChange = (event) => {
    setMailInput(event.target.value);
  };

  const backHandler = () => {
    navigate("/logIn");
  };

  return (
    <div className={style.formContainer}>
      <h1 className={style.formTitle}>RECUPERA TU CONTRASEÑA</h1>
      <div className={style.formInputs}>
        <h4 className={style.inputTitle}>Tu e-mail:</h4>
        <input
          className={style.input}
          onChange={handlerOnChange}
          placeholder="Tu correo electrónico"
        ></input>
      </div>
      <button
        onClick={backHandler}
        className={style.btnVolver}
      >
        Volver a iniciar sesión
      </button>
    </div>
  );
}
