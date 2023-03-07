import { useFormik } from "formik";
import { Form } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import titleImg from "../../../assets/voyHENRY_title.svg";
import { editUser } from "../../../redux/slices/userSlice/thunks";
import style from "./EditUserForm.module.css";

export default function EditUserForm({
  userInfo,
  setUserInfo,
  reRender,
  setReRender,
  setEditRecord,
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
    genre: userInfo.col6,
    email: userInfo.col4,
    nickName: userInfo.col1,
    image: userInfo.col9,
    firstName: userInfo.col2,
    lastName: userInfo.col3,
    dateOfBirth: userInfo.col5,
  };

  const validationSchema = Yup.object({
    genre: Yup.string().required("El género es obligatorio"),
    email: Yup.string()
      .email("Email no válido")
      .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email no válido")
      .required("El email es obligatorio"),
    firstName: Yup.string()
      .min(3, "Debe tener más de 3 caracteres")
      .max(55, "Debe tener menos de 55 caracteres")
      .required("El nombre es obligatorio"),
    lastName: Yup.string()
      .min(3, "Debe tener más de 3 caracteres")
      .max(55, "Debe tener menos de 55 caracteres")
      .required("El apellido es obligatorio"),
    dateOfBirth: Yup.string().required("Este campo es obligatorio"),
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
    };
    await dispatch(editUser(obj, userInfo.col1));
    setUserInfo({});
    setEditRecord(false);
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
        alt="voyHENRY"
        title="voyHENRY"
        loading="lazy"
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
              Editar usuario
            </button>
          </form>

          <button
            onClick={() => {
              setUserInfo({});
              setEditRecord(false);
            }}
            className={style.btnVolver}
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
}
