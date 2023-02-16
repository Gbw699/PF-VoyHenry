import React from "react";
// import style from "./FormSignUp.module.css";
import { Container, Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "semantic-ui-css/semantic.min.css";
import { useNavigate } from "react-router-dom";
import style from "./FormSignUp.module.css";
import titleImg from "../../assets/voyHENRY_title.png";

export default function FormLogIn() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
      apodo: "",
      nationality: "",
      province: "",
      phone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es obligatorio"),
      email: Yup.string()
        .email("El e-mail es invalido")
        .required("El e-mail es obligatorio"),
      password: Yup.string()
        .required("La contraseña es obligatoria")
        .oneOf([Yup.ref("repeatPassword")], "Las contraseñas no son iguales"),
      repeatPassword: Yup.string()
        .required("La contraseña es obligatoria")
        .oneOf([Yup.ref("password")], "Las contraseñas no son iguales"),
      apodo: Yup.string().required("El apodo es obligatorio"),
      nationality: Yup.string().required("La nacionalidad es obligatoria"),
      province: Yup.string().required("La provincia es obligatoria"),
      phone: Yup.string().required("La provincia es obligatoria"),
    }),
    onSubmit: (formData) => {
      console.log(formData);
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
          <h1 className={style.formTitle}>Formulario de Registro</h1>
          <Form
            onSubmit={formik.handleSubmit}
            style={{ width: "30%" }}
          >
            <div>
              <h3 className={style.inputTitle}></h3>
              <Form.Input
                type="text"
                placeholder="Nombre completo"
                name="name"
                onChange={formik.handleChange}
                error={formik.errors.name}
                value={formik.values.name}
                // class="ui left pointing red basic label" ESTO ES PARA PONER LA VALIDACION A LA DERECHA, XQ SI SE PONE ABAJO SE ROMPE TODO
              />
              <h3 className={style.inputTitle}></h3>
              <Form.Input
                type="text"
                placeholder="E-mail"
                name="email"
                onChange={formik.handleChange}
                error={formik.errors.email}
                value={formik.values.email}
              />
              <h3 className={style.inputTitle}></h3>
              <Form.Input
                type="password"
                placeholder="Contraseña"
                name="password"
                onChange={formik.handleChange}
                error={formik.errors.password}
                value={formik.values.password}
              />
              <h3 className={style.inputTitle}></h3>
              <Form.Input
                type="password"
                placeholder="Repetir contraseña"
                name="repeatPassword"
                onChange={formik.handleChange}
                error={formik.errors.repeatPassword}
                value={formik.values.repeatPassword}
              />
              <h3 className={style.inputTitle}></h3>
              <Form.Input
                type="text"
                placeholder="Apodo"
                name="apodo"
                onChange={formik.handleChange}
                error={formik.errors.apodo}
                value={formik.values.apodo}
              />

              {/* //!!  ME TIENE QUE LLEGAR INFORMACIÓN DE UNA PETICIÓN  */}
              <h3 className={style.inputTitle}></h3>
              <Form.Input
                type="text"
                placeholder="Nacionalidad"
                name="nationality"
                onChange={formik.handleChange}
                error={formik.errors.nationality}
                value={formik.values.nationality}
              />

              {/* //!!  ME TIENE QUE LLEGAR INFORMACIÓN DE UNA PETICIÓN  */}
              <h3 className={style.inputTitle}></h3>
              <Form.Input
                type="text"
                placeholder="Provincia"
                name="province"
                onChange={formik.handleChange}
                error={formik.errors.province}
                value={formik.values.province}
              />
              <h3 className={style.inputTitle}></h3>
              <Form.Input
                type="text"
                placeholder="Teléfono"
                name="phone"
                onChange={formik.handleChange}
                error={formik.errors.phone}
                value={formik.values.phone}
              />
            </div>
            <div className={style.buttons}>
              <Button
                className="ui secondary Button"
                type="submit"
              >
                Registrarse
              </Button>
              <Button
                className="ui secondary Button"
                type="submit"
                onClick={formik.handleReset}
              >
                Limpiar formulario
              </Button>
              <Button
                className="ui secondary Button"
                onClick={backHandler}
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
