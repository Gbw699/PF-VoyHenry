import React, { useState } from "react";
import DetailMarketPlaceImg from "./DetailMarketPlaceImg";
import DetailMarketPlacePrice from "./DetailMarketPlacePrice";
import mercadoPagoImg from "../../assets/mercadoPago.webp";
import stripeImg from "../../assets/stripe.png";
// import style from "./DetailMarketPlaceImgPrice.module.css";

export default function DetailMarketPlaceImgPrice({
  image,
  stock,
  title,
  price,
}) {
  const [products, setProducts] = useState({
    product: [],
    quantity: 0,
  });

  const changeQuantitySelect = (event) => {};

  const addHandler = (product, quantity) => {};

  return (
    <div>
      <div>
        <DetailMarketPlaceImg image={image} />
      </div>
      <div>
        <DetailMarketPlacePrice
          stock={stock}
          title={title}
          price={price}
        />
        <p>Métodos de pagos:</p>
        <a
          href="https://www.mercadopago.com"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src={mercadoPagoImg}
            alt="Mercado Pago"
          />
        </a>
        <a
          href="https://stripe.com"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src={stripeImg}
            alt="Stripe"
          />
        </a>
        <select
          onChange={changeQuantitySelect}
          value={products.quantity}
        >
          {/* //!! Hay que hacer un map del stock */}
          <option
            key={stock}
            value={stock}
          >
            {stock === 1 ? `${stock} unidad` : `${stock} unidades`}
          </option>
          {/* //!! Hay que hacer un map del stock */}
        </select>
        <button
          type="submit"
          onClick={() => {
            addHandler(products.product, products.quantity);
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
