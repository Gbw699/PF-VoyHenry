import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { postPlan } from "../../redux/slices/planSlice/thunk";

export default function FormSignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentDate = new Date();
  const greaterDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;

  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          summary: "",
          mainImage: "",
          images: [],
          eventDate: "",
        }}
        validationSchema={Yup.object({
          nickName: Yup.string(),
          title: Yup.string()
            .required("El título del plan es obligatorio")
            .min(3, "Debe tener más de 3 caracteres")
            .max(15, "Debe tener menos de 15 caracteres"),
          summary: Yup.string()
            .max(125)
            .required("El resumen de la descripción es obligatoria"),
          description: Yup.string()
            .max(255)
            .required("La descripción es obligatoria"),
          mainImage: Yup.string()
            .url()
            .required("La url de la imagen principal es obligatoria"),
          images: Yup.string()
            .required("Debe proporcionar imágen secundaria"),
          eventDate: Yup.date()
            .min(new Date(greaterDate))
            .required("La fecha del evento es obligatoria"),
          state: Yup.string()
        })}
        onSubmit={(values) => {
          const obj = {
            userNickName: values.name,
            title: values.title,
            summary: values.summary,
            description: values.description,
            mainImage: values.mainImage,
            images: [values.images],
            eventDate: values.eventDate,
            state: "En planeacion"
          };
          dispatch(postPlan(obj));
          console.log(obj);
        }}
      >
        <Form>
          {/* ------------------------------------------------------------------------- */}
          <label htmlFor="name">Nick Name</label>
          <Field
            name="name"
            type="text"
          />
          <ErrorMessage name="name" />
          {/* ------------------------------------------------------------------------- */}
          <label htmlFor="title">Título</label>
          <Field
            name="title"
            type="text"
          />
          <ErrorMessage name="title" />
          {/* ------------------------------------------------------------------------- */}
          <label htmlFor="summary">Breve descripción</label>
          <Field
            name="summary"
            type="text"
          />
          <ErrorMessage name="summary" />
          {/* ------------------------------------------------------------------------- */}
          <label htmlFor="description">Descripción</label>
          <Field
            name="description"
            type="text"
          />
          <ErrorMessage name="description" />
          {/* ------------------------------------------------------------------------- */}
          <label htmlFor="mainImage">Imagen principal</label>
          <Field
            name="mainImage"
            type="text"
          />
          <ErrorMessage name="nickName" />
          {/* ------------------------------------------------------------------------- */}
          <label htmlFor="images">Imágenes secundarias</label>
          <Field
            name="images"
            type="text"
          />
          <ErrorMessage name="images" />
          {/* ------------------------------------------------------------------------- */}
          <label htmlFor="eventDate">Fecha del evento</label>
          <Field
            name="eventDate"
            type="date"
          />
          <ErrorMessage name="eventDate" />
          {/* ------------------------------------------------------------------------- */}
          <button type="submit">Crear Plan</button>
        </Form>
      </Formik>
      <button onClick={() => navigate("/home")}>Volver</button>
    </div>
  );
}
