import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

export default function FormSignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
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
          <button type="submit">Ingresar</button>
        </Form>
      </Formik>
      <button onClick={() => navigate("/")}>Volver</button>
      <button>¿Olvidaste tu contraseña?</button>
    </div>
  );
}
