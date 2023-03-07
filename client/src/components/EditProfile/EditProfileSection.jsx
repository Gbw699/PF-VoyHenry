import React from "react";
import EditProfileAboutMe from "./EditProfileAboutMe";
import EditProfileImage from "./EditProfileImage";
import EditProfileInput from "./EditProfileInput";
// import EditProfileSelectCountry from "./EditProfileSelectCountry";
import { useDispatch } from "react-redux";
import { editUser } from "../../redux/slices/userSlice/thunks";
import Swal from "sweetalert2";
import style from "./EditProfileSection.module.css";

export const EditProfileSection = ({
  image,
  setImage,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  about,
  setAbout,
  provinces,
  setProvinces,
  selectedCountry,
  setSelectedCountry,
  selectedProvince,
  setSelectedProvince,
}) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const nickName = user.nickName;
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "¿Estás seguro que quieres actualizar tus datos?",
        text: "¡Luego lo puedes volver a cambiar!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si",
        cancelButtonText: "No",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          dispatch(
            editUser({ firstName, lastName, image, about, nickName }, nickName)
          );
          localStorage.setItem(
            "user",
            JSON.stringify({
              ...user,
              firstName: firstName,
              lastName: lastName,
              image: image,
              nickName: nickName,
              about: about,
            })
          );
          location.reload();
          swalWithBootstrapButtons.fire(
            "Perfil actualizado!",
            "Se ha actualizado los datos de tu perfil",
            "success"
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelado",
            "¡Sigue editando tu perfil!",
            "error"
          );
        }
      });
  };

  return (
    <div className={style.container}>
      <div className={style.editContainer}>
        <p className={style.editTitle}>Editar perfil</p>
        <hr
          color="#f1e100"
          width="100%"
        />
        <div className={style.formContainer}>
          <form
            className={style.form}
            onSubmit={handleSubmit}
          >
            <p className={style.title}>Nombre</p>
            <EditProfileInput
              name="firstName"
              placeholder="Tu nombre"
              setState={setFirstName}
            />
            <p className={style.title}>Apellido</p>
            <EditProfileInput
              name="lastName"
              placeholder="Tu apellido"
              setState={setLastName}
            />
            {/* <EditProfileSelectCountry
              {...{
                provinces,
                setProvinces,
                selectedCountry,
                setSelectedCountry,
                selectedProvince,
                setSelectedProvince,
              }}
            /> */}
            <p className={style.title}>Sobre mí</p>
            <EditProfileAboutMe setState={setAbout} />
          </form>
          <div>
            <EditProfileImage {...{ image, setImage }} />
          </div>
        </div>
        <div className={style.buttonContainer}>
          <button
            onClick={handleSubmit}
            className={style.buttons}
          >
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
  );
};
