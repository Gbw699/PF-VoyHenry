import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { postBlog } from "../../redux/slices/blogSlice/thunk";
import style from "./BlogForm.module.css";
import UploadWidget from "../UploadWidget/UploadWidget";
import { useState } from "react";

export default function BlogForm({ open, close, setState }) {
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
            stars: 1,
          }}
          validationSchema={Yup.object({
            title: Yup.string()
              .min(3, "Debe tener más de 3 caracteres")
              .max(30, "Debe tener menos de 30 caracteres")
              .required("El título es obligatorio"),
            content: Yup.string()
              .max(500, "Debe tener menos de 500 caracteres")
              .required("El contenido de la reseña es obligatoria"),
            stars: Yup.number()
              .min(0, "Debe ser mayor o igual que 0")
              .max(5, "Debe ser menor o igual que 5")
              .required("La valoración es obligatoria"),
          })}
          onSubmit={async (values) => {
            values = { ...values, image: url };
            setUrl("");
            await dispatch(postBlog(values));
            await setState(false);
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
              placeholder="Escribe el título de la reseña"
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
              placeholder="Escribe la reseña"
            />
            <ErrorMessage name="content" />
            <label
              htmlFor="stars"
              className={style.formLabel}
            >
              Valoración
            </label>
            <Field
              name="stars"
              type="number"
              min="1"
              max="5"
              step="0.25"
            />
            <ErrorMessage name="stars" />
            <label
              htmlFor="image"
              className={style.formLabel}
            >
              Imagen de caratula
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
