import React from "react";
// import style from "./ShoppingCartCard.module.css";

export default function ShoppingCartCard({
  image,
  title,
  unitPrice,
  totalPrice,
  quantity,
}) {
  return (
    <div>
      <div>
        <div>
          <img
            src={image}
            alt={title}
          />
        </div>
        <div>
          <div>
            <h5>{title}</h5>
            <p>Precio unitario: {unitPrice}</p>
            <p>Total: {totalPrice}</p>
          </div>
          <div>
            <p>Cantidad:</p>
            <button>-</button>
            <p>{quantity}</p>
            <button>+</button>
          </div>
        </div>
      </div>
      <div>
        <button type="submit">Quitar</button>
      </div>
    </div>
  );
}
