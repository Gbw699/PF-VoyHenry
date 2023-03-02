import React from "react";
import AdminMarketPlaceDeactivate from "./AdminMarketPlaceDeactivate";
import AdminMarketPlaceInput from "./AdminMarketPlaceInput";
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
}) {
  const handleOnClick = (value) => {
    setButtonOption(value);
  };
  console.log(buttonOption);
  return (
    <div>
      <button onClick={() => handleOnClick("create")}>Crear</button>
      <button onClick={() => handleOnClick("edit")}>Editar</button>
      <button onClick={() => handleOnClick("deactivate")}>Desactivar</button>
      {buttonOption === "deactivate" && <AdminMarketPlaceDeactivate />}
      <AdminMarketPlaceInput
        name="title"
        placeholder="Ingrese el nombre del producto"
        setState={setProductName}
      />
      <AdminMarketPlaceInput
        name="price"
        placeholder="Ingrese el titulo del producto"
        setState={setProductPrice}
      />
      <AdminMarketPlaceInput
        name="category"
        placeholder="Ingrese la categoría del producto"
        setState={setProductCategory}
      />
      <AdminMarketPlaceInput
        name="detail"
        placeholder="Ingrese la descripción del producto"
        setState={setProductDetail}
      />
      <AdminMarketPlaceInput
        name="mainImage"
        placeholder="Ingrese la imagen principal del producto"
        setState={setProductMainImage}
      />
      <AdminMarketPlaceInput
        name="images"
        placeholder="Ingrese las imágenes del producto"
        setState={setProductImages}
      />
    </div>
  );
}
