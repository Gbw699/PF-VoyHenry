import { useState } from "react";
import MailInput from "./MailInput";
import Submit from "./Submit";
import HandlerErrorInput from "./HandlerErrorInput";
import style from "./RecoveryState.module.css";
import titleImg from "../../assets/voyHENRY_title(white).png";

export default function RecoveryState() {
  const [mailInput, setMailInput] = useState();
  const [isValidEmail, setIsValidEmail] = useState();

  return (
    <div className={style.landing}>
      <img
        src={titleImg}
        className={style.logo}
        alt="voyHENRY"
        title="voyHENRY"
        loading="lazy"
      />
      <div className={style.container}>
        <MailInput
          data={{ mailInput }}
          setMailInput={setMailInput}
        />
        <Submit
          isValidEmail={isValidEmail}
          data={{
            email: mailInput,
          }}
        />
        <HandlerErrorInput
          setIsValidEmail={setIsValidEmail}
          email={mailInput}
        />
      </div>
    </div>
  );
}
