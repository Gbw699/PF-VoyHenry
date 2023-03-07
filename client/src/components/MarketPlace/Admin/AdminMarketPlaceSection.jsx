import React from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleOnClick = (value) => {
    setButtonOption(value);
  };

  return (
    <div className={style.container}>
      <p className={style.title}>Gestión de productos</p>
      <hr color="#f1e100" width="100%" />
      <div className={style.buttons}>
        {buttonOption !== "create" && (
        <button 
          onClick={() => handleOnClick("create")}
          className={style.createEditBtn}
        >
          Crear
        </button>
        )}
        {buttonOption !== "edit" && (
        <button 
          onClick={() => handleOnClick("edit")}
          className={style.createEditBtn}
        >
          Editar
        </button>
        )}
        {buttonOption !== "deactivate" && (
        <button 
          onClick={() => handleOnClick("deactivate")}
          className={style.deleteBtn}
        >
          Desactivar
        </button>
        )}
      </div>
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
      <button
        onClick={() => navigate("/marketplace")}
        className={style.backBtn}
      >
        Volver
      </button>
    </div>
  );
}
