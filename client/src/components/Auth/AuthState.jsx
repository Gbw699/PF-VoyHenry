import WhereAmI from "./WhereAmI";
import { useState } from "react";

export default function AuthState() {
  const [ whereAmI, setWhereAmI ] = useState("");

  return (
    <>
      <WhereAmI
        whereAmI={whereAmI}
        setWhereAmI={setWhereAmI}
      >
      </WhereAmI>
      
    </>
  );

}