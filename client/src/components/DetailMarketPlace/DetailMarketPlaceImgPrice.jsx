import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../../context/ProductContext";
import DetailMarketPlaceImg from "./DetailMarketPlaceImg";
import DetailMarketPlacePrice from "./DetailMarketPlacePrice";
import mercadoPagoImg from "../../assets/mercadoPago.webp";
import stripeImg from "../../assets/stripe.png";
import style from "./DetailMarketPlaceImgPrice.module.css";
import axios from "axios";
import Swal from "sweetalert2";

export default function DetailMarketPlaceImgPrice({
  id,
  image,
  stock,
  title,
  price,
}) {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const productContext = useContext(ProductContext);

  useEffect(() => {
    setProduct();
  }, []);

  const setProduct = () => {
    setProducts({ id, image, stock, title, price });
  };

  const changeQuantitySelect = (event) => {
    const quantityValue = event.target.value;
    setQuantity(parseInt(quantityValue));
  };

  const handleAddProduct = () => {
    productContext.addProduct(products, quantity);
    Swal.fire({
      icon: "success",
      title: "Se ha actualizado el carrito de compras",
    });
  };

  const handleNowBuy = async () => {
    try {
      const response = await axios.post("/api/v1/products/buy", {
        title,
        price,
      });
      window.location.href = response.data;
    } catch (error) {
      console.error(error);
    }
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
          className={style.select}
        >
          <option
            value={0}
            disabled
            selected
          >
            cantidad: {stock}
          </option>
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
          onClick={handleAddProduct}
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
