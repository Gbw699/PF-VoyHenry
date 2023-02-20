import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { postBlog } from "../../redux/slices/blogSlice/thunk";
import style from "./BlogForm.module.css";

export default function BlogForm({ open, close }) {
  const dispatch = useDispatch();
  //const nickname = localStorage.getItem("login");
  const nickname = "juancito";

  if (!open) return null;
  return (
    <div className={style.container}>
      <div className={style.writeCont}>
        <h2 className={style.title}>Escribe tu reseña</h2>
        <hr color="#F1E100" width="100%" />
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
            dispatch(postBlog(values));
          }}
        >
          <Form className={style.formCont}>
            <label htmlFor="title" className={style.formLabel}>Título</label>
            <Field
              name="title"
              type="text"
            />
            <ErrorMessage name="title" />

            <label htmlFor="content" className={style.formLabel}>Reseña</label>
            <Field
              name="content"
              as="textarea"
            />
            <ErrorMessage name="content" />

            <label htmlFor="rating" className={style.formLabel}>Valoración</label>
            <Field
              name="rating"
              type="number"
            />
            <ErrorMessage name="rating" />

            <label htmlFor="image" className={style.formLabel}>Imagen de carátula</label>
            <Field
              name="image"
              type="url"
            />
            <ErrorMessage name="image" />

            <button type="submit" className={style.submitBtn}>Subir reseña</button>
          </Form>
        </Formik>
        <button onClick={close} className={style.closeBtn}>Volver</button>
      </div>
    </div>
  );
}
