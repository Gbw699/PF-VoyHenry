import { useState } from "react";
import MailInput from "./MailInput";
import Submit from "./Submit";
import HandlerErrorInput from "./HandlerErrorInput";

export default function RecoveryState() {
  const [mailInput, setMailInput] = useState();
  const [isValidEmail, setIsValidEmail] = useState();

  return (
    <>
      <MailInput
        data={{ mailInput }}
        setMailInput={setMailInput}
      ></MailInput>
      <Submit
        isValidEmail={isValidEmail}
        data={{
          email: mailInput,
        }}
      ></Submit>
      <HandlerErrorInput
        setIsValidEmail={setIsValidEmail}
        email={mailInput}
      ></HandlerErrorInput>
    </>
  );
}
