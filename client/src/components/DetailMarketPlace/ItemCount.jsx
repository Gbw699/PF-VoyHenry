import { useContext } from "react";
import ProductContext from "../../context/ProductContext";

const ItemCount = ({ quantity, product, setCounter }) => {
  const productContext = useContext(ProductContext);

  const updateProduct = (item, quantitySelect) => {
    productContext.updateProductQuantity(item, quantitySelect);
  };

  const handleClickAdd = () => {
    // if (quantity < product.stock) {
    setCounter(quantity + 1);
    updateProduct(product, quantity + 1);
    // }
  };
  const handleClickDelete = () => {
    if (quantity > 1) {
      setCounter(quantity - 1);
      updateProduct(product, quantity - 1);
    }
  };

  return (
    <div className="btn-group">
      <button
        onClick={handleClickDelete}
        className="btn btn-comprar"
      >
        -
      </button>
      <p className="contador">{quantity}</p>
      <button
        onClick={handleClickAdd}
        className="btn btn-comprar"
      >
        +
      </button>
    </div>
  );
};
export default ItemCount;
