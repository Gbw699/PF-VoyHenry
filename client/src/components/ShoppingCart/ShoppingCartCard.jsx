import React, { useState } from "react";
import ItemCount from "../DetailMarketPlace/ItemCount";
import style from "./ShoppingCartCard.module.css";

export default function ShoppingCartCard({
  id,
  image,
  title,
  unitPrice,
  quantity,
  deleteProductAlert,
}) {
  const [counter, setCounter] = useState(quantity);

  return (
    <div className={style.mainContainer}>
      <div className={style.itemCont}>
        <div className={style.itemInfo}>
          <div>
            <img
              className={style.img}
              src={image}
              alt={title}
            />
          </div>
          <div className={style.infoCont}>
            <div>
              <h5 className={style.title}>{title}</h5>
              <hr
                color="#f1e100"
                width="100%"
              />
              <p className={style.unitPrice}>Precio unitario: ${unitPrice}</p>
              <p className={style.totalPrice}>Total: ${unitPrice * counter}</p>
            </div>
            <div className={style.quantity}>
              <p className={style.unitPrice}>Cantidad:</p>
              <div className={style.btnsCont}>
                <div className={style.quantityBtns}>
                  <ItemCount
                    quantity={counter}
                    product={id}
                    setCounter={setCounter}
                  />
                </div>
                <button
                  type="submit"
                  className={style.deleteBtn}
                  onClick={() => deleteProductAlert(id)}
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
