import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function IHaveAccess({ whereAmI }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (
      whereAmI !== "" &&
      document.cookie === "" &&
      whereAmI !== "/logIn" &&
      whereAmI !== "/" &&
      whereAmI !== "/signUp" &&
      whereAmI !== "/recoveryPass" 
    ) {
      navigate("/logIn");
    }
  }, [whereAmI]);

  return <></>;
}
