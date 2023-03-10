import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ShoppingCartCard from "./ShoppingCartCard";
import style from "./ShoppingCartSection.module.css";
import ProductContext from "../../context/ProductContext";
import axios from "axios";
import Swal from "sweetalert2";

export default function ShoppingCartSection() {
  const navigate = useNavigate();
  const product = JSON.parse(localStorage.getItem("products"));
  const user = JSON.parse(localStorage.getItem("user"));
  const email = user.email;
  const productContext = useContext(ProductContext);

  const data = {product, email}

  const handleBuyCart = async () => {

    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/products/checkout",
        data
      );
      window.location.href = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const totalPrice = () => {
    const totalesPrice = productContext.products.map(
      (product) => product.price * product.quantity
    );
    let total = 0;
    totalesPrice.forEach((e) => (total += e));
    return total;
  };

  const backHandler = () => {
    navigate("/home");
  };

  const clearCart = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "¿Estás seguro que quieres vaciar el carrito de compras?",
        text: "¡Este proceso no es reversible!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si",
        cancelButtonText: "No",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          productContext.emptyCart();
          swalWithBootstrapButtons.fire(
            "¡Borrado!",
            "Se ha vaciado el carrito de compras",
            "success"
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelado",
            "¡Sigue comprando!",
            "error"
          );
        }
      });
  };

  const deleteProductAlert = (product) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title:
          "¿Estás seguro que quieres borrar este producto del carrito de compras?",
        text: "¡Este proceso no es reversible!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si",
        cancelButtonText: "No",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          productContext.cleanProduct(product);
          swalWithBootstrapButtons.fire(
            "¡Borrado!",
            "El producto ha sido borrado del carrito de compras.",
            "success"
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelado",
            "¡Sigue comprando!",
            "error"
          );
        }
      });
  };

  return (
    <div className={style.container}>
      <div className={style.cartCont}>
        <h4 className={style.cartTitle}>Carrito</h4>
        <hr
          color="#F1E100"
          width="100%"
        />
        {product?.map((element) => (
          <div key={element.id}>
            <ShoppingCartCard
              id={element.id}
              deleteProductAlert={deleteProductAlert}
              stock={element.stock}
              image={element.image}
              title={element.title}
              unitPrice={element.price}
              totalPrice={element.price * element.quantity}
              quantity={element.quantity}
            />
          </div>
        ))}
      </div>
      <div className={style.btnsCont}>
        <span className={style.price}>{totalPrice()}</span>
        <button
          onClick={handleBuyCart}
          className={style.buyBtn}
        >
          Finalizar compra
        </button>
        <button
          type="submit"
          className={style.emptyBtn}
          onClick={clearCart}
        >
          Vaciar carrito
        </button>
        <button
          onClick={backHandler}
          className={style.backBtn}
        >
          Volver
        </button>
      </div>
    </div>
  );
}
