import React from "react";
// import style from "AdminMarketPlaceEdit.module.css";

import { useDispatch, useSelector } from "react-redux";
import AdminMarketPlaceInput from "./AdminMarketPlaceInput";
import { editProduct } from "../../../redux/slices/marketPlaceSlice/thunk";

export default function AdminMarketPlaceEdit({
  editProducts,
  setEditProducts,
  setProducts,
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
    setEditProducts(product);
  };

  const handleEdit = () => {
    editProducts
      ? dispatch(editProduct(editProducts.id))
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
        placeholder="Ingrese el nombre del producto"
        value={editProducts?.title}
        setState={setProducts}
      />
      <AdminMarketPlaceInput
        name="price"
        placeholder="Ingrese el titulo del producto"
        value={editProducts?.price}
      />
      <AdminMarketPlaceInput
        name="category"
        placeholder="Ingrese la categoría del producto"
        value={editProducts?.category}
      />
      <AdminMarketPlaceInput
        name="detail"
        placeholder="Ingrese la descripción del producto"
        value={editProducts?.detail}
      />
      <AdminMarketPlaceInput
        name="mainImage"
        placeholder="Ingrese la imagen principal del producto"
        value={editProducts?.mainImage}
      />
      <AdminMarketPlaceInput
        name="images"
        placeholder="Ingrese las imágenes del producto"
        value={editProducts?.images}
      />
      {editProducts ? (
        <img
          src={editProducts.mainImage}
          alt={editProducts.title}
          title={editProducts.title}
        />
      ) : (
        <img
          src=""
          alt="Sin foto"
          title="Sin foto"
        />
      )}
      {editProducts &&
        editProducts.images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={editProducts.title}
              title={editProducts.title}
            />
          </div>
        ))}
      <button onClick={handleEdit}>Editar</button>
    </div>
  );
}
