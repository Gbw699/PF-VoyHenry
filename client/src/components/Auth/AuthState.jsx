import WhereAmI from "./WhereAmI";
import IHaveAccess from "./IHaveAccess";
import { useState } from "react";

export default function AuthState() {
  const [whereAmI, setWhereAmI] = useState("");

  return (
    <>
      <WhereAmI
        whereAmI={whereAmI}
        setWhereAmI={setWhereAmI}
      ></WhereAmI>
      <IHaveAccess whereAmI={whereAmI}></IHaveAccess>
    </>
  );
}
