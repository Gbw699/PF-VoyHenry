import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LogInSignUp(props) {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    if (event.target.value === "logIn") {
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
        onClick={(event) => handleSubmit(event)}
      >
        Iniciar sesión
      </Button>
      <Button
        type="submit"
        variant="contained"
        value="signUp"
        onClick={(event) => handleSubmit(event)}
      >
        Registrarse
      </Button>
    </>
  );
}
