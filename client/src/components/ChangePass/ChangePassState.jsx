import PassInput from "./PassInput";
import Submit from "./Submit";
import InputErrors from "./InputErrors";
import { useState } from "react";

export default function ChangePassState() {
  const token = new URLSearchParams(location.search).get("token");
  const [pass, setPass] = useState({
    firstPass: "",
    secondPass: "",
  });

  return (
    <>
      <PassInput
        tittle={"Pass"}
        pass={pass}
        set={setPass}
        value={"firstPass"}
      ></PassInput>

      <InputErrors pass={pass.firstPass}></InputErrors>

      <PassInput
        tittle={"Repeat Pass"}
        pass={pass}
        set={setPass}
        value={"secondPass"}
      ></PassInput>

      <InputErrors pass={pass.secondPass}></InputErrors>

      <Submit
        pass={pass}
        token={token}
      ></Submit>
    </>
  );
}
