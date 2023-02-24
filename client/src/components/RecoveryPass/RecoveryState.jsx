import { useState } from "react";
import MailInput from "./MailInput";
import Submit from "./Submit";

export default function RecoveryState() {
    const [ mailInput, setMailInput ] = useState();

  return (
    <>
      <MailInput
        data={{mailInput}}
        setMailInput={setMailInput}
      >
      </MailInput>
      <Submit>
      </Submit>
    </>
  );

}