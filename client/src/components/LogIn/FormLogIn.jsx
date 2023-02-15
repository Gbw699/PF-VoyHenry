import React from "react";
import { Container, Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "semantic-ui-css/semantic.min.css";
import { useNavigate } from "react-router-dom";

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
    onSubmit: (formData) => {
      console.log(formData);
    },
  });

  const backHandler = () => {
    navigate("/");
  };

  return (
    <Container
      style={{
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>Iniciar sesión</h1>
      <Form
        onSubmit={formik.handleSubmit}
        style={{ width: "30%" }}
      >
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
    </Container>
  );
}
