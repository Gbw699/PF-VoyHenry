import React from "react";
import { useNavigate } from "react-router-dom";
import ShoppingCartCard from "./ShoppingCartCard";
// import style from "./ShoppingCartSection.module.css";

export default function ShoppingCartSection() {
  const navigate = useNavigate();
  const productsShoppingCart = localStorage.getItem("shoppingCart");
  const backHandler = () => {
    navigate("/home");
  };
  return (
    <div>
      <div>
        <h4>Carrito</h4>
        {productsShoppingCart.localeCompare((element) => (
          <div key={element.id}>
            <ShoppingCartCard
              image={element.image}
              title={element.title}
              unitPrice={element.unitPrice}
              totalPrice={element.totalPrice}
              quantity={element.quantity}
            />
          </div>
        ))}
      </div>
      <div>
        <button type="submit">Comprar</button>
        <button type="submit">Vaciar carrito</button>
        <button onClick={backHandler}>Volver</button>
      </div>
    </div>
  );
}
