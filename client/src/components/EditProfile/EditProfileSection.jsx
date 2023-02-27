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
  nickName,
  setNickName,
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
            editUser(
              { firstName, lastName, image, nickName, about },
              user.nickName
            )
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
      <form
        className={style.form}
        onSubmit={handleSubmit}
      >
        <p className={style.title}>Nombre completo</p>
        <EditProfileInput
          name="firstName"
          placeholder="Nombre completo"
          setState={setFirstName}
        />
        <p className={style.title}>Apellido</p>
        <EditProfileInput
          name="lastName"
          placeholder="Apellido"
          setState={setLastName}
        />
        <p className={style.title}>Apodo</p>
        <EditProfileInput
          name="nickName"
          placeholder="Como te ven los otros usuarios"
          setState={setNickName}
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
        {/* <p>Teléfono</p>
        <EditProfileInput
          name="phone"
          placeholder="(Código país) (Código área) 1122-3344"
        /> */}
        <button className={style.buttons}>Guardar cambios</button>
      </form>
      <div>
        <div>
          <EditProfileImage {...{ image, setImage }} />
        </div>
        <div>
          <EditProfileAboutMe setState={setAbout} />
        </div>
      </div>
    </div>
  );
};
