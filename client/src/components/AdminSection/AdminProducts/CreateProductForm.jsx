import { useFormik } from "formik";
import { Form } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { createProduct } from "../../../redux/slices/marketPlaceSlice/thunk";
import UploadWidget from "../../../recycle/UploadWidget/UploadWidget";
import titleImg from "../../../assets/voyHENRY_title.svg";
import style from "./CreateProductForm.module.css";
import { useState } from "react";

export default function CreateUserForm({
  reRender,
  setReRender,
  setCreateRecord,
}) {
  const dispatch = useDispatch();

  const [url, setUrl] = useState("https://i.ibb.co/86tPY9X/PF-profile-01.png");

  const initialValues = {
    title: "",
    detail: "",
    category: "",
    price: 0,
    stock: 0,
    availability: null,
    mainImage: url,
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .min(3, "Debe tener más de 3 caracteres")
      .max(30, "Debe tener menos de 30 caracteres")
      .required("El título es obligatorio"),
    detail: Yup.string()
      .max(300, "Debe tener menos de 300 caracteres")
      .required("El detalle del producto"),
    category: Yup.string().required("La categoría es obligatorio"),
    price: Yup.number()
      .min(1, "Debe ser mayor que 0")
      .required("El precio es obligatoria"),
    stock: Yup.number()
      .min(0, "Debe ser mayor o igual que 0")
      .required("El stock es obligatorio"),
    availability: Yup.boolean().required("La disponibilidad es obligatoria"),
  });

  const onSubmit = async (values) => {
    const obj = {
      title: values.title,
      detail: values.detail,
      category: values.category,
      price: values.price,
      stock: values.stock,
      availability: values.availability,
      mainImage: values.mainImage,
    };
    await dispatch(createProduct(obj));
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
                  htmlFor="title"
                  className={style.inputTitle}
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

              <div className={style.inputs}>
                <label
                  htmlFor="detail"
                  className={style.inputTitle}
                >
                  Detalle
                </label>
                <Form.TextArea
                  placeholder="Detalle del producto"
                  id="detail"
                  name="detail"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.detail}
                />
                {formik.touched.detail && formik.errors.detail ? (
                  <div>{formik.errors.detail}</div>
                ) : null}
              </div>

              <div className={style.inputs}>
                <label
                  htmlFor="category"
                  className={style.inputTitle}
                >
                  Categoría:
                </label>
                <select
                  name="category"
                  id="category"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.category}
                  className="ui dropdown"
                >
                  <option value="">--Selecciona una opción--</option>
                  <option value="Remeras">Remeras</option>
                  <option value="Pantalones">Pantalones</option>
                  <option value="Gorros">Gorros</option>
                </select>
                {formik.touched.category && formik.errors.category ? (
                  <div>{formik.errors.category}</div>
                ) : null}
              </div>

              <div className={style.inputs}>
                <label
                  htmlFor="price"
                  className={style.inputTitle}
                >
                  Precio
                </label>
                <Form.Input
                  id="price"
                  name="price"
                  type="number"
                  min="0"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.price}
                />
                {formik.touched.price && formik.errors.price ? (
                  <div>{formik.errors.price}</div>
                ) : null}
              </div>

              <div className={style.inputs}>
                <label
                  htmlFor="stock"
                  className={style.inputTitle}
                >
                  Stock
                </label>
                <Form.Input
                  id="stock"
                  name="stock"
                  type="number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.stock}
                />
                {formik.touched.stock && formik.errors.stock ? (
                  <div>{formik.errors.stock}</div>
                ) : null}
              </div>

              <div className={style.inputs}>
                <label
                  htmlFor="availability"
                  className={style.inputTitle}
                >
                  Disponibilidad:
                </label>
                <select
                  name="availability"
                  id="availability"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.availability}
                  className="ui dropdown"
                >
                  <option value="">--Selecciona una opción--</option>
                  <option value={true}>Sí</option>
                  <option value={false}>No</option>
                </select>
                {formik.touched.availability && formik.errors.availability ? (
                  <div>{formik.errors.availability}</div>
                ) : null}
              </div>

              <div className={style.inputs}>
                <UploadWidget
                  url={url}
                  setUrl={setUrl}
                />
                <p>{url}</p>
              </div>
            </div>
            <button
              className={style.btnSignup}
              type="submit"
            >
              Crear producto
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
