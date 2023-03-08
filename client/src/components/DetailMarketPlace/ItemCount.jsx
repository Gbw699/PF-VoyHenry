import { useContext } from "react";
import ProductContext from "../../context/ProductContext";
import style from "./ItemCount.module.css";

const ItemCount = ({ quantity, product, setCounter, stock }) => {
  const productContext = useContext(ProductContext);
  const updateProduct = (item, quantitySelect) => {
    productContext.updateProductQuantity(item, quantitySelect);
  };

  const handleClickAdd = () => {
    if (quantity < stock) {
      setCounter(quantity + 1);
      updateProduct(product, quantity + 1);
    }
  };
  const handleClickDelete = () => {
    if (quantity > 1) {
      setCounter(quantity - 1);
      updateProduct(product, quantity - 1);
    }
  };

  return (
    <div className={style.buttons}>
      <button
        onClick={handleClickDelete}
        className={style.buttonMenos}
      >
        -
      </button>
      <h3 className={style.contador}>{quantity}</h3>
      <button
        onClick={handleClickAdd}
        className={style.buttonMas}
      >
        +
      </button>
    </div>
  );
};
export default ItemCount;
