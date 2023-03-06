import { useDispatch } from "react-redux";
import { useState } from "react";
import { useFormik } from "formik";
import { Form } from "semantic-ui-react";
import * as Yup from "yup";
import { postBlog } from "../../../redux/slices/blogSlice/thunk";
import UploadWidget from "../../../recycle/UploadWidget/UploadWidget";
import style from "./CreateBlogForm.module.css";

export default function CreateBlogForm({
  reRender,
  setReRender,
  setCreateRecord,
}) {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

  const [url, setUrl] = useState("");

  const initialValues = {
    userNickName: user.nickName,
    title: "",
    content: "",
    stars: 1,
  };

  const validationSchema = Yup.object({
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
  });

  const onSubmit = async (values) => {
    const obj = {
      userNickName: user.nickName,
      title: values.title,
      content: values.content,
      stars: values.stars,
      image: url,
    };
    await dispatch(postBlog(obj));
    setCreateRecord(false);
    setReRender(!reRender);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className={style.container}>
      <div className={style.writeCont}>
        <form onSubmit={formik.handleSubmit}>
          <h2 className={style.title}>Escribe tu reseña</h2>
          <hr
            color="#F1E100"
            width="100%"
          />

          <div>
            <label
              htmlFor="title"
              className={style.formLabel}
            >
              Título
            </label>
            <Form.Input
              placeholder="Título"
              id="title"
              name="title"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
            />
            {formik.touched.title && formik.errors.title ? (
              <div>{formik.errors.title}</div>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="content"
              className={style.formLabel}
            >
              Reseña
            </label>
            <Form.TextArea
              placeholder="Reseña"
              id="content"
              name="content"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.content}
            />
            {formik.touched.content && formik.errors.content ? (
              <div>{formik.errors.content}</div>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="stars"
              className={style.formLabel}
            >
              Valoración
            </label>
            <Form.Input
              id="stars"
              name="stars"
              type="number"
              min="1"
              max="5"
              step="1"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.stars}
            />
            {formik.touched.stars && formik.errors.stars ? (
              <div>{formik.errors.stars}</div>
            ) : null}
          </div>

          <div>
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
          </div>

          <button
            className={style.submitBtn}
            type="submit"
          >
            Subir reseña
          </button>
        </form>
        <button
          onClick={() => setCreateRecord(false)}
          className={style.closeBtn}
        >
          Volver
        </button>
      </div>
    </div>
  );
}
