import React from "react";
import style from "./FormLogIn.module.css";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "semantic-ui-css/semantic.min.css";
import { useNavigate } from "react-router-dom";
import titleImg from "../../assets/voyHENRY_title(white).png";

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
    <div className={style.landing}>
      <img
        src={titleImg}
        className={style.logo}
        alt="voyHENRY logo"
      />
      <div className={style.container}>
        <div className={style.formContainer}>
          <h1 className={style.formTitle}>INICIAR SESIÓN</h1>
          <Form
            onSubmit={formik.handleSubmit}
            style={{ width: "80%" }}
          >
            <div>
              <h3 className={style.inputTitle}>E-mail</h3>
              <Form.Input
                type="text"
                placeholder="E-mail"
                name="email"
                onChange={formik.handleChange}
                error={formik.errors.email}
                value={formik.values.email}
              />
              <h3 className={style.inputTitle}>Contraseña</h3>
              <Form.Input
                type="password"
                placeholder="Contraseña"
                name="password"
                onChange={formik.handleChange}
                error={formik.errors.password}
                value={formik.values.password}
              />
            </div>
            <div className={style.buttons}>
              <Button
                type="submit"
                style={{
                  backgroundColor: "#FFFF01",
                  color: "#707070",
                }}
              >
                Iniciar sesión
              </Button>
              <Button
                onClick={backHandler}
                style={{ backgroundColor: "#DBDBDB", color: "#707070" }}
              >
                Volver
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
