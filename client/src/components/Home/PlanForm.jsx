import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { postPlan } from "../../redux/slices/planSlice/thunk";
import style from "./PlanForm.module.css";
import countriesData from "../../countries.json";
import { useState } from "react";

export default function FormSignUp(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const countries = countriesData.data;
  const [provinces, setProvinces] = useState([]);
  const dispatch = useDispatch();
  const currentDate = new Date();
  const greaterDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1
    }-${currentDate.getDate()}`;
  const handleClick = () => {
    props.setShowPlanForm(false);
  };
  const handleCountryChange = (event) => {
    console.log(event.target.value);
    console.log(countries);
    const provincesData = countries.find(
      (country) => country.country === event.target.value
    );
    setProvinces(provincesData.province);
  };

  const getDateActually = () => {
    let toDay = new Date();
    let day = String(toDay.getDate()).padStart(2, "0");
    let mount = String(toDay.getMonth() + 1).padStart(2, "0");
    let year = toDay.getFullYear();
    toDay = `${year}-${mount}-${day}`;
    return toDay;
  };
  return (
    <div className={style.container}>
      <Formik
        initialValues={{
          title: "",
          summary: "",
          mainImage: "",
          images: [],
          country: "",
          province: "",
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
          // images: Yup.string().required("Debe proporcionar imágen secundaria"),
          country: Yup.string(),
          province: Yup.string(),
          eventDate: Yup.date()
            .min(new Date(greaterDate))
            .required("La fecha del evento es obligatoria"),
          state: Yup.string(),
        })}
        onSubmit={(values) => {
          const obj = {
            userNickName: user.nickName,
            title: values.title,
            summary: values.summary,
            description: values.description,
            mainImage: values.mainImage,
            images: [],
            country: values.country,
            province: values.province,
            eventDate: values.eventDate,
            state: "En planeacion",
          };
          dispatch(postPlan(obj));
        }}
      >
        <Form>
          <div className={style.formContainer}>
            <h2 className={style.title}>CREA TU PLAN</h2>
            <hr
              color="#F1E100"
              width="100%"
            />
            <div className={style.formSubCont}>
              {/* ------------------------------------------------------------------------- */}
              <label
                htmlFor="title"
                className={style.formTitle}
              >
                Título
              </label>
              <Field
                name="title"
                type="text"
                className={style.formInputs}
              />
              <ErrorMessage name="title" />
              {/* ------------------------------------------------------------------------- */}
              <label
                htmlFor="summary"
                className={style.formTitle}
              >
                Breve descripción
              </label>
              <Field
                name="summary"
                type="text"
                className={style.formInputs}
              />
              <ErrorMessage name="summary" />
              {/* ------------------------------------------------------------------------- */}
              <label
                htmlFor="description"
                className={style.formTitle}
              >
                Descripción
              </label>
              <Field
                name="description"
                type="text"
                className={style.formInputs}
              />
              <ErrorMessage name="description" />
              {/* ------------------------------------------------------------------------- */}
              <label
                htmlFor="mainImage"
                className={style.formTitle}
              >
                Imagen principal
              </label>
              <Field
                name="mainImage"
                type="text"
                className={style.formInputs}
              />
              <ErrorMessage name="nickName" />
              {/* ------------------------------------------------------------------------- */}
              {/* <label
                htmlFor="images"
                className={style.formTitle}
              >
                Imágenes secundarias
              </label>
              <Field
                name="images"
                type="text"
                className={style.formInputs}
              />
              <ErrorMessage name="images" /> */}
              {/* ------------------------------------------------------------------------- */}
              <label
                htmlFor="country"
                className={style.formTitle}
              >
                País
              </label>
              <Field
                name="country"
                as="select"
                className={style.formInputs}
                onClick={handleCountryChange}
              >
                <option value="">Selecciona un país</option>
                {countries.map((country) => (
                  <option
                    key={country.country}
                    value={country.country}
                  >
                    {country.country}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="country" />
              {/* ------------------------------------------------------------------------- */}
              <label
                htmlFor="provinces"
                className={style.formTitle}
              >
                Provincia
              </label>
              <Field
                name="province"
                as="select"
                className={style.formInputs}
              >
                <option value="">Selecciona una provincia</option>
                {provinces.map((province) => (
                  <option
                    key={province}
                    value={province}
                  >
                    {province}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="province" />
              {/* ------------------------------------------------------------------------- */}
              <label
                htmlFor="eventDate"
                className={style.formTitle}
              >
                Fecha del evento
              </label>
              <Field
                name="eventDate"
                type="date"
                className={style.formInputs}
                min={getDateActually()}
              />
              <ErrorMessage name="eventDate" />
              {/* ------------------------------------------------------------------------- */}
            </div>
            <button
              type="submit"
              className={style.createBtn}
            >
              Crear Plan
            </button>
          </div>
        </Form>
      </Formik>
      <button
        onClick={handleClick}
        className={style.backBtn}
      >
        Volver
      </button>
    </div>
  );
}
