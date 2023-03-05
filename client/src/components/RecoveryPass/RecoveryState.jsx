import { useState } from "react";
import MailInput from "./MailInput";
import Submit from "./Submit";
import HandlerErrorInput from "./HandlerErrorInput";
import style from "./RecoveryState.module.css";
export default function RecoveryState() {
  const [mailInput, setMailInput] = useState();
  const [isValidEmail, setIsValidEmail] = useState();

  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <MailInput
          className={style.MailInput}
          data={{ mailInput }}
          setMailInput={setMailInput}
        ></MailInput>

        <div className={style.HandlerErrorInput}>
          <HandlerErrorInput
            setIsValidEmail={setIsValidEmail}
            email={mailInput}
          ></HandlerErrorInput>
        </div>
        <div className={style.Submit}>
          <Submit
            isValidEmail={isValidEmail}
            data={{
              email: mailInput,
            }}
          ></Submit>
        </div>
      </div>
    </div>
  );
}
