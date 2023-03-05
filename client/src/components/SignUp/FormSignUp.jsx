import { useFormik } from "formik";
import { Form, Input } from "semantic-ui-react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import * as Yup from "yup";
import { postUser } from "../../redux/slices/userSlice/thunks";
import titleImg from "../../assets/voyHENRY_title.svg";
import googleLogo from "../../assets/google_icon.svg";
import style from "./FormSignUp.module.css";

export default function FormSignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const handleSingUpWithGoogle = () => {
    window.location.href = "http://localhost:3001/api/v1/auth/login/google";
  };

  const getDateActually = () => {
    let toDay = new Date();
    let day = String(toDay.getDate()).padStart(2, "0");
    let mount = String(toDay.getMonth() + 1).padStart(2, "0");
    let year = toDay.getFullYear();
    toDay = `${year}-${mount}-${day}`;
    return toDay;
  };

  const initialValues = {
    genre: "",
    email: "",
    nickName: "",
    //imagen default
    image: "https://i.ibb.co/86tPY9X/PF-profile-01.png",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    password: "",
    repeatPassword: "",
  };

  const validationSchema = Yup.object({
    genre: Yup.string().required("El género es obligatorio"),
    email: Yup.string()
      .email("Email no válido")
      .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email no válido")
      .required("El email es obligatorio"),
    nickName: Yup.string()
      .min(3, "Debe tener más de 3 caracteres")
      .max(15, "Debe tener menos de 15 caracteres")
      .required("El nombre de usuario es obligatorio"),
    firstName: Yup.string()
      .min(3, "Debe tener más de 3 caracteres")
      .max(55, "Debe tener menos de 55 caracteres")
      .required("El nombre es obligatorio"),
    lastName: Yup.string()
      .min(3, "Debe tener más de 3 caracteres")
      .max(55, "Debe tener menos de 55 caracteres")
      .required("El apellido es obligatorio"),
    dateOfBirth: Yup.string().required("Este campo es obligatorio"),
    password: Yup.string()
      .min(8, "Debe tener más de 8 caracteres")
      .required("La contraseña es obligatoria"),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Las contraseñas deben ser iguales")
      .required("Debe repetir la contraseña"),
  });

  const onSubmit = (values) => {
    const obj = {
      genre: values.genre,
      email: values.email,
      nickName: values.nickName,
      image: values.image,
      firstName: values.firstName,
      lastName: values.lastName,
      dateOfBirth: values.dateOfBirth,
      password: values.password,
    };
    dispatch(postUser(obj));
    navigate("/logIn");
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className={style.landing}>
      <img
        src={titleImg}
        className={style.logo}
        alt="voyHENRY logo"
      />
      <div className={style.container}>
        <div className={style.formContainer}>
          <h1 className={style.formTitle}>REGISTRARSE</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className={style.formInputs}>
              <div className={style.inputs}>
                <label
                  htmlFor="firstName"
                  className={style.inputTitle}
                >
                  Nombre
                </label>
                <Form.Input
                  placeholder="Nombre"
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div>{formik.errors.firstName}</div>
                ) : null}
              </div>
              <div className={style.inputs}>
                <label
                  htmlFor="lastName"
                  className={style.inputTitle}
                >
                  Apellido
                </label>
                <Form.Input
                  placeholder="Apellido"
                  id="lastName"
                  name="lastName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div>{formik.errors.lastName}</div>
                ) : null}
              </div>
              <div className={style.inputs}>
                <label
                  htmlFor="nickName"
                  className={style.inputTitle}
                >
                  Nombre de usuario
                </label>
                <Form.Input
                  placeholder="Nombre de usuario"
                  id="nickName"
                  name="nickName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.nickName}
                />
                {formik.touched.nickName && formik.errors.nickName ? (
                  <div>{formik.errors.nickName}</div>
                ) : null}
              </div>
              <div className={style.inputs}>
                <label
                  htmlFor="email"
                  className={style.inputTitle}
                >
                  Email
                </label>
                <Form.Input
                  placeholder="Email"
                  id="email"
                  name="email"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
              </div>
              <div className={style.inputs}>
                <label
                  htmlFor="password"
                  className={style.inputTitle}
                >
                  Contraseña
                </label>
                <Form.Input
                  placeholder="Contraseña"
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div>{formik.errors.password}</div>
                ) : null}
              </div>
              <div className={style.inputs}>
                <label
                  htmlFor="repeatPassword"
                  className={style.inputTitle}
                >
                  Repite la contraseña
                </label>
                <Form.Input
                  placeholder="Repite la contraseña"
                  id="repeatPassword"
                  name="repeatPassword"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.repeatPassword}
                />
                {formik.touched.repeatPassword &&
                formik.errors.repeatPassword ? (
                  <div>{formik.errors.repeatPassword}</div>
                ) : null}
              </div>
              <div className={style.inputs}>
                <label
                  htmlFor="dateOfBirth"
                  className={style.inputTitle}
                >
                  Fecha de nacimiento
                </label>
                <Form.Input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  max={getDateActually()}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dateOfBirth}
                />
                {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
                  <div>{formik.errors.dateOfBirth}</div>
                ) : null}
              </div>
              <div className={style.inputs}>
                <label
                  htmlFor="genre"
                  className={style.inputTitle}
                >
                  Género:
                </label>
                <select
                  name="genre"
                  id="genre"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.genre}
                  className="ui dropdown"
                >
                  <option value="">--Selecciona una opción--</option>
                  <option value="Femenino">Femenino</option>
                  <option value="Masculino">Masculino</option>
                  <option value="No binario">No binario</option>
                  <option value="Prefiero no decirlo">
                    Prefiero no decirlo
                  </option>
                  <option value="Otro">Otro</option>
                </select>
                {formik.touched.genre && formik.errors.genre ? (
                  <div>{formik.errors.genre}</div>
                ) : null}
              </div>
            </div>
            {formik.errors.firstName ||
            formik.errors.lastName ||
            formik.errors.nickName ||
            formik.errors.email ||
            formik.errors.password ||
            formik.errors.repeatPassword ||
            formik.errors.dateOfBirth ||
            formik.errors.genre ||
            formik.values.firstName === "" ||
            formik.values.lastName === "" ||
            formik.values.nickName === "" ||
            formik.values.email === "" ||
            formik.values.password === "" ||
            formik.values.repeatPassword === "" ||
            formik.values.dateOfBirth === "" ||
            formik.values.genre === "" ? (
              <button
                className={style.btnSignUpDesactive}
                disabled
              >
                Registrarse
              </button>
            ) : (
              <button
                className={style.btnSignup}
                type="submit"
              >
                Registrarse
              </button>
            )}
          </form>
          <button
            onClick={handleSingUpWithGoogle}
            className={style.btnGoogle}
          >
            <div className={style.googleCont}>
              <img
                src={googleLogo}
                className={style.googleLogo}
                alt="Imagen de botón para continuar con google"
              />
              <p>Continuar con Google</p>
            </div>
          </button>
          <Link to="/logIn">
            <button className={style.subButtons}>¿Ya tienes una cuenta?</button>
          </Link>
          <button
            onClick={() => navigate("/")}
            className={style.btnVolver}
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
}
