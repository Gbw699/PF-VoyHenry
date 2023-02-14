import { Button } from "@mui/material";

export default function LoginRegister() {
  const handleSubmit = (event) => {
    if (event.target.value === "logIn") {
      <Navigate />;
    } else {
      <Navigate />;
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
        value="singUp"
        onClick={(event) => handleSubmit(event)}
      >
        Registrarse
      </Button>
    </>
  );
}
