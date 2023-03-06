import { useFormik } from "formik";
import { Form } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { postUser } from "../../../redux/slices/userSlice/thunks";
import titleImg from "../../../assets/voyHENRY_title.svg";
import style from "./CreateUserForm.module.css";

export default function CreateUserForm({
  reRender,
  setReRender,
  setCreateRecord,
}) {
  const dispatch = useDispatch();

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

  const onSubmit = async (values) => {
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
    await dispatch(postUser(obj));
    setCreateRecord(false);
    setReRender(!reRender);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div>
      <img
        src={titleImg}
        className={style.logo}
        alt="voyHENRY logo"
      />
      <div className={style.container}>
        <div className={style.formContainer}>
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
            <button
              className={style.btnSignup}
              type="submit"
            >
              Crear usuario
            </button>
          </form>

          <button
            onClick={() => setCreateRecord(false)}
            className={style.btnVolver}
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
}
