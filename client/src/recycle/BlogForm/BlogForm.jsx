import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export default function BlogForm({ open, close }) {
  //const nickname = localStorage.getItem("login");
  const nickname = "juancito";

  if (!open) return null;
  return (
    <div>
      <button onClick={close}>X</button>
      <Formik
        initialValues={{
          usernickName: nickname,
          title: "",
          content: "",
          rating: 0,
          image: "",
        }}
        validationSchema={Yup.object({
          title: Yup.string()
            .min(3, "Debe tener más de 3 caracteres")
            .max(30, "Debe tener menos de 30 caracteres"),
          content: Yup.string().max(500, "Debe tener menos de 500 caracteres"),
          rating: Yup.number()
            .min(0, "Debe ser mayor o igual que 0")
            .max(5, "Debe ser menor o igual que 5"),
          image: Yup.string().url(),
        })}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        <Form>
          <label htmlFor="title">Título</label>
          <Field
            name="title"
            type="text"
          />
          <ErrorMessage name="title" />

          <label htmlFor="content">Reseña</label>
          <Field
            name="content"
            as="textarea"
          />
          <ErrorMessage name="content" />

          <label htmlFor="rating">Valoración</label>
          <Field
            name="rating"
            type="number"
          />
          <ErrorMessage name="rating" />

          <label htmlFor="image">Imagen de carátula</label>
          <Field
            name="image"
            type="url"
          />
          <ErrorMessage name="image" />

          <button type="submit">Subir reseña</button>
        </Form>
      </Formik>
    </div>
  );
}
