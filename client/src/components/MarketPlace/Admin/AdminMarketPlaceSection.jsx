import React from "react";
import AdminMarketPlaceDeactivate from "./AdminMarketPlaceDeactivate";
import AdminMarketPlaceEdit from "./AdminMarketPlaceEdit";
import AdminMarketPlaceCreate from "./AdminMarketPlaceCreate";
import style from "./AdminMarketPlaceSection.module.css";

export default function AdminMarketPlaceSection({
  setProducts,
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
  buttonOption,
  setButtonOption,
  productDeactivate,
  setProductDeactivate,
  editProducts,
  setEditProducts,
  productStock,
  setProductStock,
}) {
  const handleOnClick = (value) => {
    setButtonOption(value);
  };

  return (
    <div className={style.buttons}>
      <button onClick={() => handleOnClick("create")}>Crear</button>
      <button onClick={() => handleOnClick("edit")}>Editar</button>
      <button onClick={() => handleOnClick("deactivate")}>Desactivar</button>
      {buttonOption === "create" && (
        <AdminMarketPlaceCreate
          {...{
            setProducts,
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
          }}
        />
      )}
      {buttonOption === "deactivate" && (
        <AdminMarketPlaceDeactivate
          {...{ setProductDeactivate, productDeactivate }}
        />
      )}
      {buttonOption === "edit" && (
        <AdminMarketPlaceEdit
          {...{
            editProducts,
            setEditProducts,
            setProducts,
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
          }}
        />
      )}
    </div>
  );
}
