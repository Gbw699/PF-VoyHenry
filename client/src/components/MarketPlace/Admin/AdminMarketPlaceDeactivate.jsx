import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminMarketPlaceInput from "./AdminMarketPlaceInput";
import { deactivateProduct } from "../../../redux/slices/marketPlaceSlice/thunk";
// import style from './AdminMarketPlaceDeactivate.module.css'

export default function AdminMarketPlaceDeactivate({
  setProductDeactivate,
  productDeactivate,
}) {
  const dispatch = useDispatch();
  
  const { products } = useSelector(
    (state) => state.marketPlaceStore.filteredProducts
  );

  const handleProductSelection = ({ target: { value } }) => {
    const product =
      value !== "unselected"
        ? products.find((product) => product.id === parseInt(value))
        : "";
    setProductDeactivate(product);
  };

  const handleDeactivate = () => {
    productDeactivate
      ? dispatch(deactivateProduct(productDeactivate.id))
      : window.alert("No has seleccionado ningún producto para borrar");
  };

  return (
    <div>
      {!products ? (
        <select>
          <option>No hay productos</option>
        </select>
      ) : (
        <select onChange={handleProductSelection}>
          <option value="unselected">Seleccionar un producto</option>
          {products.map((element) => (
            <option
              value={element.id}
              key={element.id}
            >
              {element.title}
            </option>
          ))}
        </select>
      )}
      <AdminMarketPlaceInput
        name="title"
        placeholder="Nombre del producto"
        value={productDeactivate?.title}
        disabled
      />
      <AdminMarketPlaceInput
        name="price"
        placeholder="Precio del producto"
        value={productDeactivate?.price}
        disabled
      />
      <AdminMarketPlaceInput
        name="stock"
        placeholder="Stock del producto"
        value={productDeactivate?.stock}
        disabled
      />
      <AdminMarketPlaceInput
        name="category"
        placeholder="Categoría del producto"
        value={productDeactivate?.category}
        disabled
      />
      <AdminMarketPlaceInput
        name="detail"
        placeholder="Descripción del producto"
        value={productDeactivate?.detail}
        disabled
      />
      {productDeactivate ? (
        <img
          src={productDeactivate.mainImage}
          alt={productDeactivate.title}
          title={productDeactivate.title}
        />
      ) : (
        <img
          src=""
          alt="Sin foto"
          title="Sin foto"
        />
      )}
      {productDeactivate &&
        productDeactivate.images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={productDeactivate.title}
              title={productDeactivate.title}
            />
          </div>
        ))}
      <button onClick={handleDeactivate}>Desactivar</button>
    </div>
  );
}
