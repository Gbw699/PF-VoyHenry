import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { postPlan } from "../../../redux/slices/planSlice/thunk";
import { useState } from "react";
import * as Yup from "yup";
import style from "./CreatePlanForm.module.css";
import countriesData from "../../../countries.json";
import UploadWidget from "../../../recycle/UploadWidget/UploadWidget";
import noPhoto from "../../../assets/noPhoto.jpg";

export default function CreatePlanForm({
  reRender,
  setReRender,
  setCreateRecord,
}) {
  const dispatch = useDispatch();
  const currentDate = new Date();
  const user = JSON.parse(localStorage.getItem("user"));
  const countries = countriesData.data;
  const greaterDate = `${currentDate.getFullYear()}-${
    currentDate.getMonth() + 1
  }-${currentDate.getDate()}`;

  const [provinces, setProvinces] = useState([]);
  const [url, setUrl] = useState(noPhoto);
  const [state, setState] = useState({
    showDescription: true,
    showLocation: "",
    showImage: "",
    showDate: "",
  });

  const getDateActually = () => {
    let toDay = new Date();
    let day = String(toDay.getDate()).padStart(2, "0");
    let mount = String(toDay.getMonth() + 1).padStart(2, "0");
    let year = toDay.getFullYear();
    toDay = `${year}-${mount}-${day}`;

    return toDay;
  };

  const handleCountryChange = (event) => {
    const provincesData = countries.find(
      (country) => country.country === event.target.value
    );
    setProvinces(provincesData.province);
  };

  function handleClickButton(show) {
    setState({
      showDescription: false,
      showLocation: false,
      showImage: false,
      showDate: false,
      [show]: true,
    });
  }

  return (
    <div className={style.container}>
      <div>
        <Formik
          initialValues={{
            title: "",
            summary: "",
            images: [],
            country: "",
            province: "",
            city: "",
            address: "",
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
            country: Yup.string(),
            province: Yup.string(),
            city: Yup.string(),
            address: Yup.string(),
            eventDate: Yup.date()
              .min(new Date(greaterDate))
              .required("La fecha del evento es obligatoria"),
            state: Yup.string(),
          })}
          onSubmit={async (values) => {
            const obj = {
              userNickName: user.nickName,
              title: values.title,
              summary: values.summary,
              description: values.description,
              mainImage: url,
              images: [],
              country: values.country,
              province: values.province,
              city: values.city,
              address: values.address,
              eventDate: values.eventDate,
              state: "En planeacion",
            };
            setUrl("");
            await dispatch(postPlan(obj));
            setCreateRecord(false);
            setReRender(!reRender);
          }}
        >
          <Form>
            <div className={style.formContainer}>
              <div className={style.buttonTitle}>
                <button
                  className={style.buttons}
                  onClick={() => handleClickButton("showDescription")}
                >
                  Description
                </button>
                <button
                  className={style.buttons}
                  onClick={() => handleClickButton("showLocation")}
                >
                  Location
                </button>
                <button
                  className={style.buttons}
                  onClick={() => handleClickButton("showImage")}
                >
                  Image
                </button>
                <button
                  className={style.buttons}
                  onClick={() => handleClickButton("showDate")}
                >
                  Date
                </button>
              </div>
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
                {state.showDescription && (
                  <>
                    <label
                      htmlFor="summary"
                      className={style.formTitle}
                    >
                      Breve descripción
                    </label>
                    <Field
                      name="summary"
                      type="text"
                      as="textarea"
                      rows="4"
                      className={style.formInputDescription}
                    />
                    <ErrorMessage name="summary" />

                    <label
                      htmlFor="description"
                      className={style.formTitle}
                    >
                      Descripción
                    </label>
                    <Field
                      name="description"
                      type="text"
                      as="textarea"
                      rows="12"
                      className={style.formInputDescription}
                    />
                    <ErrorMessage name="description" />
                  </>
                )}
                {/* ------------------------------------------------------------------------- */}
                {state.showImage && (
                  <>
                    <label
                      htmlFor="mainImage"
                      className={style.formTitle}
                    >
                      Imagen principal
                    </label>
                    <UploadWidget
                      url={url}
                      setUrl={setUrl}
                    />
                  </>
                )}
                {/* ------------------------------------------------------------------------- */}
                {state.showLocation && (
                  <>
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
                    <label
                      htmlFor="city"
                      className={style.formTitle}
                    >
                      Ciudad
                    </label>
                    <Field
                      name="city"
                      type="text"
                      className={style.formInputs}
                    />
                    <ErrorMessage name="city" />
                    <label
                      htmlFor="address"
                      className={style.formTitle}
                    >
                      Dirección
                    </label>
                    <Field
                      name="address"
                      type="text"
                      className={style.formInputs}
                    />
                    <ErrorMessage name="address" />
                  </>
                )}
                {/* ------------------------------------------------------------------------- */}
                {state.showDate && (
                  <>
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
                  </>
                )}
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
          onClick={() => {
            setCreateRecord(false);
          }}
          className={style.backBtn}
        >
          Volver
        </button>
      </div>
    </div>
  );
}
