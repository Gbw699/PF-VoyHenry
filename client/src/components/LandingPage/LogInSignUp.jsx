import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LogInSignUp() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    const valueClick = event.target.value;
    if (valueClick === "logIn") {
      navigate("/logIn");
    } else {
      navigate("/signUp");
    }
  };
  return (
    <>
      <Button
        type="submit"
        variant="contained"
        value="logIn"
        onClick={handleSubmit}
      >
        Iniciar sesión
      </Button>
      <Button
        type="submit"
        variant="contained"
        value="signUp"
        onClick={handleSubmit}
      >
        Registrarse
      </Button>
    </>
  );
}
