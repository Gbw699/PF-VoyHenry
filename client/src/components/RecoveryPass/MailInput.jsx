import style from "./MailInput.module.css";
import titleImg from "../../assets/voyHENRY_title(white).png";
export default function MailInput({ setMailInput }) {
  const handlerOnChange = (event) => {
    setMailInput(event.target.value);
  };

  return (
    <div className={style.landing}>
      <img
        src={titleImg}
        className={style.logo}
        alt="voyHENRY logo"
      />
      <div className={style.container}>
        <div className={style.formContainer}>
          <h4 className={style.inputTitle}>Your email:</h4>
          <input
            className={style.input}
            onChange={handlerOnChange}
          ></input>
        </div>
      </div>
    </div>
  );
}
