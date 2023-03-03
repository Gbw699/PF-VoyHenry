import React from "react";
// import style from "AdminMarketPlaceEdit.module.css";

import { useDispatch, useSelector } from "react-redux";
import AdminMarketPlaceInput from "./AdminMarketPlaceInput";
import { createProduct } from "../../../redux/slices/marketPlaceSlice/thunk";

export default function AdminMarketPlaceCreate({
  productName,
  setProductName,
  productPrice,
  setProductPrice,
  productCategory,
  setProductCategory,
  productDetail,
  setProductDetail,
  productMainImage,
  setProductMainImage,
  productImages,
  setProductImages,
  productStock,
  setProductStock,
}) {
  const dispatch = useDispatch();

  const handleCreate = () => {
    dispatch(
      createProduct({
        title: productName,
        price: productPrice,
        category: productCategory,
        detail: productDetail,
        mainImage: productMainImage,
        images: [productImages],
        stock: productStock,
      })
    );
    // : window.alert("No has seleccionado ningún producto para editar");
  };

  return (
    <div>
      <AdminMarketPlaceInput
        name="title"
        placeholder="Ingrese el nombre del producto"
        value={productName}
        setState={setProductName}
      />
      <AdminMarketPlaceInput
        name="price"
        placeholder="Ingrese el precio del producto"
        value={productPrice}
        setState={setProductPrice}
      />
      <AdminMarketPlaceInput
        name="stock"
        placeholder="Ingrese el stock del producto"
        value={productStock}
        setState={setProductStock}
      />
      <AdminMarketPlaceInput
        name="category"
        placeholder="Ingrese la categoría del producto"
        value={productCategory}
        setState={setProductCategory}
      />
      <AdminMarketPlaceInput
        name="detail"
        placeholder="Ingrese la descripción del producto"
        value={productDetail}
        setState={setProductDetail}
      />
      <AdminMarketPlaceInput
        name="mainImage"
        placeholder="Ingrese la imagen principal del producto"
        value={productMainImage}
        setState={setProductMainImage}
      />
      <AdminMarketPlaceInput
        name="images"
        placeholder="Ingrese las imágenes del producto"
        value={productImages}
        setState={setProductImages}
      />

      <button onClick={handleCreate}>Editar</button>
    </div>
  );
}
