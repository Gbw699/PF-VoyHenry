import React from "react";
import { useSelector } from "react-redux";
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
}) {
  const { products } = useSelector(
    (state) => state.marketPlaceStore.filteredProducts
  );

  return (
    <div>
      <select>
        {products.map((element) => (
          <option key={element.id}>{element.title}</option>
        ))}
      </select>
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
