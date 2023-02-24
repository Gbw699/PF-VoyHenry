import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { postBlog } from "../../redux/slices/blogSlice/thunk";
import style from "./BlogForm.module.css";
import UploadWidget from "../UploadWidget/UploadWidget";
import { useState } from "react";

export default function BlogForm({ open, close }) {
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

  if (!open) return null;
  return (
    <div className={style.container}>
      <div className={style.writeCont}>
        <h2 className={style.title}>Escribe tu reseña</h2>
        <hr
          color="#F1E100"
          width="100%"
        />
        <Formik
          initialValues={{
            userNickName: user.nickName,
            title: "",
            content: "",
            evaluation: 0,
          }}
          validationSchema={Yup.object({
            title: Yup.string()
              .min(3, "Debe tener más de 3 caracteres")
              .max(30, "Debe tener menos de 30 caracteres")
              .required("El título es obligatorio"),
            content: Yup.string()
              .max(500, "Debe tener menos de 500 caracteres")
              .required("El contenido de la reseña es obligatoria"),
            evaluation: Yup.number()
              .min(0, "Debe ser mayor o igual que 0")
              .max(5, "Debe ser menor o igual que 5")
              .required("La valoración es obligatoria"),
          })}
          onSubmit={(values) => {
            values = { ...values, image: url };
            setUrl("");
            dispatch(postBlog(values));
          }}
        >
          <Form className={style.formCont}>
            <label
              htmlFor="title"
              className={style.formLabel}
            >
              Título
            </label>
            <Field
              name="title"
              type="text"
            />
            <ErrorMessage name="title" />

            <label
              htmlFor="content"
              className={style.formLabel}
            >
              Reseña
            </label>
            <Field
              name="content"
              as="textarea"
            />
            <ErrorMessage name="content" />

            <label
              htmlFor="evaluation"
              className={style.formLabel}
            >
              Valoración
            </label>
            <Field
              name="evaluation"
              type="number"
            />
            <ErrorMessage name="evaluation" />

            <label
              htmlFor="image"
              className={style.formLabel}
            >
              Imagen de carátula
            </label>
            <UploadWidget
              url={url}
              setUrl={setUrl}
            />
            <div className={style.imgContainer}>
              <img
                className={style.img}
                src={url}
                alt=""
              />
            </div>
            {/* <Field
              name="image"
              type="url"
              value={url}
              />
            <ErrorMessage name="image" /> */}

            <button
              type="submit"
              className={style.submitBtn}
            >
              Subir reseña
            </button>
          </Form>
        </Formik>
        <button
          onClick={close}
          className={style.closeBtn}
        >
          Volver
        </button>
      </div>
    </div>
  );
}
