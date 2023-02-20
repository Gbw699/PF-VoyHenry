import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { postUser } from "../../redux/slices/userSlice/thunks";

export default function FormSignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <Formik
        initialValues={{
          genre: "",
          email: "",
          nickName: "",
          //imágen default
          image:
            "https://www.clarin.com/img/2021/10/07/dPmbdeT7x_1200x630__1.jpg",
          firstName: "",
          lastName: "",
          dateOfBirth: "",
          password: "",
          repeatPassword: "",
          //nationality: "",
        }}
        validationSchema={Yup.object({
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
          dateOfBirth: Yup.string().required(
            "La fecha de nacimiento es obligatoria"
          ),
          password: Yup.string()
            .min(8, "Debe tener más de 8 caracteres")
            .required("La contraseña es obligatoria"),
          repeatPassword: Yup.string()
            .oneOf([Yup.ref("password")], "Las contraseñas deben ser iguales")
            .required("Debe repetir la contraseña"),
        })}
        onSubmit={(values) => {
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
        }}
      >
        <Form>
          {/* ------------------------------------------------------------------------- */}
          <label htmlFor="firstName">Nombre</label>
          <Field
            name="firstName"
            type="text"
          />
          <ErrorMessage name="firstName" />
          {/* ------------------------------------------------------------------------- */}
          <label htmlFor="lastName">Apellido</label>
          <Field
            name="lastName"
            type="text"
          />
          <ErrorMessage name="lastName" />
          {/* ------------------------------------------------------------------------- */}
          <label htmlFor="nickName">Nombre de usuario</label>
          <Field
            name="nickName"
            type="text"
          />
          <ErrorMessage name="nickName" />
          {/* ------------------------------------------------------------------------- */}
          <label htmlFor="email">Email</label>
          <Field
            name="email"
            type="text"
          />
          <ErrorMessage name="email" />
          {/* ------------------------------------------------------------------------- */}
          <label htmlFor="password">Contraseña</label>
          <Field
            name="password"
            type="text"
          />
          <ErrorMessage name="password" />
          {/* ------------------------------------------------------------------------- */}
          <label htmlFor="repeatPassword">Repetir contraseña</label>
          <Field
            name="repeatPassword"
            type="text"
          />
          <ErrorMessage name="repeatPassword" />
          {/* ------------------------------------------------------------------------- */}
          <label htmlFor="dateOfBirth">Fecha de nacimiento</label>
          <Field
            name="dateOfBirth"
            type="date"
          />
          <ErrorMessage name="dateOfBirth" />
          {/* ------------------------------------------------------------------------- */}
          <label htmlFor="genre">Género</label>
          <Field
            name="genre"
            as="select"
          >
            <option
              value="Mostrar opciones"
              hidden={true}
            >
              --Mostrar opciones--
            </option>
            <option value="Femenino">Femenino</option>
            <option value="Masculino">Masculino</option>
            <option value="No binario">No binario</option>
            <option value="Prefiero no decirlo">Prefiero no decirlo</option>
            <option value="Otro">Otro</option>
          </Field>
          <ErrorMessage name="genre" />
          {/* ------------------------------------------------------------------------- */}
          <button type="submit">Registrarse</button>
        </Form>
      </Formik>
      <button onClick={() => navigate("/")}>Volver</button>
    </div>
  );
}
