import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import titleImg from "../../assets/voyHENRY_title(white).png";
import style from "./FormLogIn.module.css";

export default function FormSignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Email no válido")
                .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email no válido")
                .required("El email es obligatorio"),
              password: Yup.string()
                .min(8, "Debe tener más de 8 caracteres")
                .required("La contraseña es obligatoria"),
            })}
            onSubmit={(values) => {
              console.log(values);
              navigate("/home");
              //dispatch(postUser(values));
            }}
          >
            <Form>
              <div className={style.formSubCont}>
                {/* ------------------------------------------------------------------------- */}
                <div className={style.formInputs}>
                  <label htmlFor="email" className={style.inputTitle}>E-mail</label>
                  <Field
                    name="email"
                    type="text"
                  />
                  <ErrorMessage name="email" />
                </div>
                {/* ------------------------------------------------------------------------- */}
                <div className={style.formInputs}>
                  <label htmlFor="password" className={style.inputTitle}>Contraseña</label>
                  <Field
                    name="password"
                    type="text"
                  />
                  <ErrorMessage name="password" />
                </div>
                {/* ------------------------------------------------------------------------- */}
                <button type="submit" className={style.btnLogin}>Ingresar</button>
                <button onClick={() => navigate("/")} className={style.btnVolver}>Volver</button>
                <button className={style.btnVolver}>¿Olvidaste tu contraseña?</button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
