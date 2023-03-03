import React from "react";
import AdminMarketPlaceDeactivate from "./AdminMarketPlaceDeactivate";
import AdminMarketPlaceEdit from "./AdminMarketPlaceEdit";
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
}) {
  const handleOnClick = (value) => {
    setButtonOption(value);
  };
  return (
    <div>
      <button onClick={() => handleOnClick("create")}>Crear</button>
      <button onClick={() => handleOnClick("edit")}>Editar</button>
      <button onClick={() => handleOnClick("deactivate")}>Desactivar</button>
      {buttonOption === "deactivate" && (
        <AdminMarketPlaceDeactivate
          {...{ setProductDeactivate, productDeactivate }}
        />
      )}
      {buttonOption === "edit" && (
        <AdminMarketPlaceEdit
          {...{ editProducts, setEditProducts, setProducts }}
        />
      )}
    </div>
  );
}
