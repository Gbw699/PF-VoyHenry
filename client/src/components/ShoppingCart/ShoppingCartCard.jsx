import React from "react";
import { useState, useEffect } from "react";
import style from "./ShoppingCartCard.module.css";

export default function ShoppingCartCard({
  image,
  title,
  unitPrice,
  totalPrice,
  quantity,
}) {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    setBackgroundImage(`url(${image})`);
  });

  return (
    <div className={style.mainContainer}>
      <div className={style.itemCont}>
        <div className={style.itemInfo}>
          <div
            className={style.img}
            style={{ backgroundImage: backgroundImage }}
          />
          <div className={style.infoCont}>
            <div>
              <h5 className={style.title}>{title}</h5>
              <hr
                color="#707070"
                width="100%"
              />
              <p className={style.unitPrice}>Precio unitario: ${unitPrice}</p>
              <p className={style.totalPrice}>Total: ${totalPrice}</p>
            </div>
            <div className={style.quantity}>
              <p className={style.unitPrice}>Cantidad:</p>
              <div className={style.btnsCont}>
                <div className={style.quantityBtns}>
                  <button className={style.decIncBtns}>-</button>
                  <p className={style.quantityNum}>{quantity}</p>
                  <button className={style.decIncBtns}>+</button>
                </div>
                <button
                  type="submit"
                  className={style.deleteBtn}
                >
                  Quitar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
