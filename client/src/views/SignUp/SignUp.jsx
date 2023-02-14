import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    userName: "",
    nickName: "",
    nationality: "",
    province: "",
    phone: "",
    email: "",
    password: "",
  });

  const [formError, setFormError] = useState({
    name: "",
    userName: "",
    nickName: "",
    nationality: "",
    province: "",
    phone: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleSubmit = () => {};

  const handleClick = () => {
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre completo"
      />
      <input
        type="text"
        placeholder="Apellido"
      />
      <input
        type="text"
        placeholder="Apodo"
      />
      <input
        type="text"
        placeholder="Nacionalidad"
      />
      <input
        type="text"
        placeholder="Provincia / Estado"
      />
      <input
        type="number"
        placeholder="Número de celular"
      />
      <input
        type="text"
        placeholder="Email"
      />
      <input
        type="password"
        placeholder="Contraseña"
      />
      <input
        type="password"
        placeholder="Repetir contraseña"
      />
      <Button
        type="submit"
        variant="contained"
      >
        Registrarse
      </Button>
      <Button
        variant="contained"
        onClick={handleClick}
      >
        Volver
      </Button>
    </form>
  );
}
