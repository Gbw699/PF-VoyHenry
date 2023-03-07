import React from "react";
import { useDispatch } from "react-redux";
import AdminMarketPlaceInput from "./AdminMarketPlaceInput";
import { createProduct } from "../../../redux/slices/marketPlaceSlice/thunk";
import style from "./AdminMarketPlaceCreate.module.css";

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
    <div className={style.createInputs}>
      <p className={style.title}>Crear producto</p>
      <hr color="#f1e100" width="80%" />
      <div className={style.inputs}>
        <p className={style.inputTitle}>Nombre</p>
        <AdminMarketPlaceInput
          name="title"
          placeholder="Ingrese el nombre del producto"
          value={productName}
          setState={setProductName}
        />
        <p className={style.inputTitle}>Precio</p>
        <AdminMarketPlaceInput
          name="price"
          placeholder="Ingrese el precio del producto"
          value={productPrice}
          setState={setProductPrice}
        />
        <p className={style.inputTitle}>Stock</p>
        <AdminMarketPlaceInput
          name="stock"
          placeholder="Ingrese el stock del producto"
          value={productStock}
          setState={setProductStock}
        />
        <p className={style.inputTitle}>Categoría</p>
        <AdminMarketPlaceInput
          name="category"
          placeholder="Ingrese la categoría del producto"
          value={productCategory}
          setState={setProductCategory}
        />
        <p className={style.inputTitle}>Descripción</p>
        <AdminMarketPlaceInput
          name="detail"
          placeholder="Ingrese la descripción del producto"
          value={productDetail}
          setState={setProductDetail}
        />
        <p className={style.inputTitle}>Imagen principal</p>
        <AdminMarketPlaceInput
          name="mainImage"
          placeholder="Ingrese la imagen principal del producto"
          value={productMainImage}
          setState={setProductMainImage}
        />
        <p className={style.inputTitle}>Imágenes secundarias</p>
        <AdminMarketPlaceInput
          name="images"
          placeholder="Ingrese las imágenes del producto"
          value={productImages}
          setState={setProductImages}
        />
      </div>
      <button 
        onClick={handleCreate} 
        className={style.editBtn}
      >
        Editar
      </button>
    </div>
  );
}
