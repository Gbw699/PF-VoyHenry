import React from "react";
// import style from './AdminMarketPlaceDeactivate.module.css'
import { useSelector } from "react-redux";
import AdminMarketPlaceInput from "./AdminMarketPlaceInput";

export default function AdminMarketPlaceDeactivate({
  setProductDeactivate,
  productDeactivate,
}) {
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
        placeholder="Ingrese el nombre del producto"
        value={productDeactivate?.title}
        disabled
      />
      <AdminMarketPlaceInput
        name="price"
        placeholder="Ingrese el titulo del producto"
        value={productDeactivate?.price}
        disabled
      />
      <AdminMarketPlaceInput
        name="category"
        placeholder="Ingrese la categoría del producto"
        value={productDeactivate?.category}
        disabled
      />
      <AdminMarketPlaceInput
        name="detail"
        placeholder="Ingrese la descripción del producto"
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
      <button>Desactivar</button>
    </div>
  );
}
