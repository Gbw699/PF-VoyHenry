import React, { useState } from "react";
import DetailMarketPlaceImg from "./DetailMarketPlaceImg";
import DetailMarketPlacePrice from "./DetailMarketPlacePrice";
import mercadoPagoImg from "../../assets/mercadoPago.webp";
import stripeImg from "../../assets/stripe.png";
import style from "./DetailMarketPlaceImgPrice.module.css";
import axios from "axios";

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

  const handleNowBuy = async () => {
    await axios
      .post("/api/v1/products/buy", { title, price })
      .then((res) => (window.location.href = res.data));
  };

  return (
    <div className={style.container}>
      <div className={style.imgCont}>
        <DetailMarketPlaceImg image={image} />
      </div>
      <div className={style.infoCont}>
        <DetailMarketPlacePrice
          stock={stock}
          title={title}
          price={price}
        />
        <p className={style.title}>Cantidad:</p>
        <select
          onChange={changeQuantitySelect}
          value={products.quantity}
          className={style.select}
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
          className={style.addBtn}
          onClick={handleNowBuy}
        >
          Comprar ahora
        </button>
        <button
          type="submit"
          className={style.addBtn}
        >
          Agregar al carrito
        </button>
        <div className={style.payMethods}>
          <p className={style.title}>Métodos de pagos:</p>
          <div className={style.methodsBtn}>
            <a
              href="https://www.mercadopago.com"
              rel="noreferrer"
              target="_blank"
              className={style.methodsImg}
            >
              <img
                src={mercadoPagoImg}
                alt="Mercado Pago"
                className={style.methodsImg}
              />
            </a>
            <a
              href="https://stripe.com"
              rel="noreferrer"
              target="_blank"
              className={style.methodsImg}
            >
              <img
                src={stripeImg}
                alt="Stripe"
                className={style.methodsImg}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="cho-container"></div>
    </div>
  );
}
