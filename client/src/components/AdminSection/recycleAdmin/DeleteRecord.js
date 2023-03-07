import axios from "axios";
import Swal from "sweetalert2";

export default function DeleteRecord(argt, location, renderValue, Set) {
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
      confirmButtonText: "Si",
      showCancelButton: true,
      cancelButtonText: "No",
    })
    .then((result) => {
      if (result.isConfirmed) {
        try {
          location === "/admin/users" && axios.delete(`/api/v1/users/${argt}`);
          location === "/admin/plans" && axios.delete(`/api/v1/plans/${argt}`);
          location === "/admin/blogs" && axios.delete(`/api/v1/blogs/${argt}`);
          location === "/admin/products" &&
            axios.delete(`/api/v1/products/${argt}`);
          Set(!renderValue);
        } catch (error) {
          console.error(error.response);
        }
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
