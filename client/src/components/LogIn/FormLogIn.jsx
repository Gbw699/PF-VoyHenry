// import { ErrorMessage, Field, Form, Formik } from "formik";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import * as Yup from "yup";
// import titleImg from "../../assets/voyHENRY_title(white).png";
// import style from "./FormLogIn.module.css";

// export default function FormSignUp() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   return (
//     <div className={style.landing}>
//       <img
//         src={titleImg}
//         className={style.logo}
//         alt="voyHENRY logo"
//       />
//       <div className={style.container}>
//         <div className={style.formContainer}>
//           <h1 className={style.formTitle}>INICIAR SESIÓN</h1>
//           <Formik
//             initialValues={{
//               email: "",
//               password: "",
//             }}
//             validationSchema={Yup.object({
//               email: Yup.string()
//                 .email("Email no válido")
//                 .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email no válido")
//                 .required("El email es obligatorio"),
//               password: Yup.string()
//                 .min(8, "Debe tener más de 8 caracteres")
//                 .required("La contraseña es obligatoria"),
//             })}
//             onSubmit={(values) => {
//               navigate("/home");
//               //dispatch(postUser(values));
//             }}
//           >
//             <Form>
//               <div className={style.formSubCont}>
//                 {/* ------------------------------------------------------------------------- */}
//                 <div className={style.formInputs}>
//                   <label htmlFor="email" className={style.inputTitle}>E-mail</label>
//                   <Field
//                     name="email"
//                     type="text"
//                   />
//                   <ErrorMessage name="email" />
//                 </div>
//                 {/* ------------------------------------------------------------------------- */}
//                 <div className={style.formInputs}>
//                   <label htmlFor="password" className={style.inputTitle}>Contraseña</label>
//                   <Field
//                     name="password"
//                     type="text"
//                   />
//                   <ErrorMessage name="password" />
//                 </div>
//                 {/* ------------------------------------------------------------------------- */}
//                 <button type="submit" className={style.btnLogin}>Ingresar</button>
//                 <button onClick={() => navigate("/")} className={style.btnVolver}>Volver</button>
//                 <button className={style.btnVolver}>¿Olvidaste tu contraseña?</button>
//               </div>
//             </Form>
//           </Formik>
//         </div>
//       </div>
//     </div>
//   );
// }

// DE ACÁ PARA ABAJO NO ROMPE LA PÁGINA
// DESPUÉS DE LA DEMO PROBAMOS CON LA NUEVA VERSIÓN DEL FORMULARIO
import React from "react";
import { useEffect } from "react";
import style from "./FormLogIn.module.css";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "semantic-ui-css/semantic.min.css";
import { useNavigate } from "react-router-dom";
import titleImg from "../../assets/voyHENRY_title(white).png";
import { useDispatch } from "react-redux";
import { getLogin } from "../../redux/slices/userSlice/thunks";

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
      password: Yup.string().required("La contraseña es obligatoria"),
    }),
    // !! FALTA LÓGICA DE SI EXISTE QUE INGRESE Y SINO NO.
    onSubmit: async (formData) => {
      await dispatch(getLogin(formData));
      await navigate("/home");
    },
  });

  useEffect(() => {
    if (query.get("token") !== null) {
      document.cookie =
        "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie =
        "csrftoken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = `token=${query.get("token")}; max-age=604800; path=/;`;
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/home");
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
              <Button
                onClick={handleLoginWithGoogle}
                style={{ backgroundColor: "#DBDBDB", color: "#707070" }}
              >
                Iniciar sesion con google
              </Button>
            </div>
          </Form>
          <button onClick={handlerRecoveryPass}>
            ¿Olvidaste tu contraseña?
          </button>
        </div>
      </div>
    </div>
  );
}
