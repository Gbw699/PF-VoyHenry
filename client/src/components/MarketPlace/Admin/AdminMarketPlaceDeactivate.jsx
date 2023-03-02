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

  const handleSelect = (event) => {
    const selectValue = event.target.value;
    if (selectValue !== "unselected") {
      const product = products.find(
        (product) => product.id === parseInt(selectValue)
      );
      setProductDeactivate(product);
    } else {
      setProductDeactivate("");
    }
  };
  return (
    <div>
      {!products ? (
        <select>
          <option>No hay productos</option>
        </select>
      ) : (
        <select onChange={handleSelect}>
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
        value={productDeactivate && productDeactivate.title}
        disabled="true"
      />
      <AdminMarketPlaceInput
        name="price"
        placeholder="Ingrese el titulo del producto"
        value={productDeactivate && productDeactivate.price}
        disabled="true"
      />
      <AdminMarketPlaceInput
        name="category"
        placeholder="Ingrese la categoría del producto"
        value={productDeactivate && productDeactivate.category}
        disabled="true"
      />
      <AdminMarketPlaceInput
        name="detail"
        placeholder="Ingrese la descripción del producto"
        value={productDeactivate && productDeactivate.detail}
        disabled="true"
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
