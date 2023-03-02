import React, { useState } from "react";
import AdminMarketPlaceSection from "./AdminMarketPlaceSection";

export default function AdminMarketPlaceState() {
  const [productName, setProductName] = useState();
  const [productPrice, setProductPrice] = useState();
  const [productCategory, setProductCategory] = useState();
  const [productDetail, setProductDetail] = useState();
  const [productMainImage, setProductMainImage] = useState();
  const [productImages, setProductImages] = useState();
  const [buttonOption, setButtonOption] = useState("create");

  return (
    <div>
      <AdminMarketPlaceSection
        {...{
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
        }}
      />
    </div>
  );
}
