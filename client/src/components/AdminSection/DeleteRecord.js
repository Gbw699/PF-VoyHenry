import axios from "axios";
import Swal from "sweetalert2";

export default function DeleteRecord(nickName) {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  swalWithBootstrapButtons
    .fire({
      title: "¿Estás seguro que quieres borrar este registro?",
      text: "¡Esta acción no se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si",
      cancelButtonText: "No",
    })
    .then((result) => {
      try {
        axios.delete(`/api/v1/users/${nickName}`);
      } catch (error) {
        console.error(error.response);
      }
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          "Registro borrado!",
          "Se ha actualizado la base de datos",
          "success"
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          "Cancelado",
          "La acción a sido cancelada con éxito",
          "error"
        );
      }
    });
}
