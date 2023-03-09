import React from "react";
import { useEffect } from "react";
import style from "./FormLogIn.module.css";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "semantic-ui-css/semantic.min.css";
import { useNavigate } from "react-router-dom";
import titleImg from "../../assets/voyHENRY_title(white).svg";
import googleLogo from "../../assets/google_icon.svg";
import { useDispatch } from "react-redux";
import { getLogin } from "../../redux/slices/userSlice/thunks";
import { Link } from "react-router-dom";

export default function FormLogIn() {
  const query = new URLSearchParams(location.search);
  const user = {
    nickName: query.get("nickName")?.trim(),
    email: query.get("email")?.trim(),
    dateOfBirth: query.get("dateOfBirth")?.trim(),
    firstName: query.get("firstName")?.trim(),
    lastName: query.get("lastName")?.trim(),
    image: query.get("image")?.trim(),
    role: query.get("role")?.trim(),
    google: query.get("google")?.trim(),
  };
  const dispatch = useDispatch();
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
      password: Yup.string()
        .min(8, "Debe tener más de 8 caracteres")
        .required("La contraseña es obligatoria"),
    }),
    onSubmit: (formData) => {
      dispatch(getLogin(formData));
      setTimeout(() => {
        navigate("/home");
      }, 50);
    },
  });
  useEffect( () => {
    if (query.get("token") !== null) {
      document.cookie =
        "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie =
        "csrftoken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = `token=${query.get("token")}; max-age=604800; path=/;`;
      localStorage.setItem("user", JSON.stringify(user));
      setTimeout(() => {
        navigate("/home");
      }, 50);
    }
  }, [query]);

  const backHandler = () => {
    navigate("/");
  };

  const handlerRecoveryPass = () => {
    navigate("/recoveryPass");
  };

  const handleLoginWithGoogle = () => {
    window.location.href = "https://voyhenry.fly.dev/api/v1/auth/login/google";
  };

  return (
    <div className={style.landing}>
      <img
        src={titleImg}
        className={style.logo}
        alt="voyHENRY"
        title="voyHENRY"
        loading="lazy"
      />
      <div className={style.container}>
        <div className={style.formContainer}>
          <h1 className={style.formTitle}>INICIAR SESIÓN</h1>
          <Form onSubmit={formik.handleSubmit}>
            <div>
              <h3 className={style.inputTitle}>E-mail</h3>
              <Form.Input
                type="email"
                placeholder="E-mail"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
              <h3 className={style.inputTitle}>Contraseña</h3>
              <Form.Input
                type="password"
                placeholder="Contraseña"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </div>
            <div className={style.buttons}>
              {formik.errors.password ||
              formik.errors.email ||
              formik.values.email === "" ||
              formik.values.password === "" ? (
                <button
                  className={style.btnLoginDeactivate}
                  disabled
                >
                  Iniciar sesión
                </button>
              ) : (
                <button
                  type="submit"
                  className={style.btnLogin}
                >
                  Iniciar sesión
                </button>
              )}
              <button
                onClick={handleLoginWithGoogle}
                className={style.btnGoogle}
              >
                <div className={style.googleCont}>
                  <img
                    src={googleLogo}
                    className={style.googleLogo}
                    alt="voyHENRY"
                    title="voyHENRY"
                    loading="lazy"
                  />
                  <p>Iniciar sesión con Google</p>
                </div>
              </button>
              <div className={style.subButtonsCont}>
                <button
                  onClick={handlerRecoveryPass}
                  className={style.subButtons}
                >
                  ¿Olvidaste tu contraseña?
                </button>
                <Link to="/signUp">
                  <button className={style.subButtons}>
                    ¿Aún no tienes una cuenta?
                  </button>
                </Link>
              </div>
              <div className={style.subBtns}>
                <button
                  onClick={backHandler}
                  className={style.btnVolver}
                >
                  Volver
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
