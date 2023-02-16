import React from "react";
// import style from "./FormLogIn.module.css";
import { Container, Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "semantic-ui-css/semantic.min.css";
import { useNavigate } from "react-router-dom";
import titleImg from "../../assets/voyHENRY_title(white).png";
import style from "./FormLogIn.module.css";

export default function FormLogIn() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("El e-mail es invalido")
        .required("El e-mail es obligatorio"),
      password: Yup.string().required("La contraseña es obligatoria"),
    }),
    // !! FALTA LÓGICA DE SI EXISTE QUE INGRESE Y SINO NO.
    onSubmit: (formData) => {
      navigate("/home");
    },
  });

  const backHandler = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Iniciar sesión</h1>
      <Form
        onSubmit={formik.handleSubmit}
        style={{ width: "30%" }}
      >
        <img
          src={titleImg}
          className={style.logo}
          alt="voyHENRY logo"
        />
        <Form.Input
          type="text"
          placeholder="E-mail"
          name="email"
          onChange={formik.handleChange}
          error={formik.errors.email}
          value={formik.values.email}
        />
        <Form.Input
          type="password"
          placeholder="Contraseña"
          name="password"
          onChange={formik.handleChange}
          error={formik.errors.password}
          value={formik.values.password}
        />
        <Button type="submit">Iniciar sesión</Button>
        <Button onClick={backHandler}>Volver</Button>
      </Form>
    </div>
  );
}
