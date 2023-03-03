import React from "react";
// import style from "AdminMarketPlaceEdit.module.css";

import { useDispatch, useSelector } from "react-redux";
import AdminMarketPlaceInput from "./AdminMarketPlaceInput";
import { editProduct } from "../../../redux/slices/marketPlaceSlice/thunk";

export default function AdminMarketPlaceEdit({
  editProducts,
  setEditProducts,
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
  const { products } = useSelector(
    (state) => state.marketPlaceStore.filteredProducts
  );

  const handleProductSelection = ({ target: { value } }) => {
    const product =
      value !== "unselected"
        ? products.find((product) => product.id === parseInt(value))
        : "";
    setEditProducts(product);
    setProductName(product.title);
    setProductPrice(product.price);
    setProductStock(product.stock);
    setProductCategory(product.category);
    setProductDetail(product.detail);
    setProductMainImage(product.mainImage);
    setProductImages(product.Images);
  };
  const handleEdit = () => {
    editProducts
      ? dispatch(
          editProduct(editProducts.id, {
            title: productName,
            price: productPrice,
            stock: productStock,
            category: productCategory,
            detail: productDetail,
            mainImage: productMainImage,
            images: productImages,
          })
        )
      : window.alert("No has seleccionado ningún producto para editar");
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
      <label>Título del producto</label>
      <AdminMarketPlaceInput
        name="title"
        placeholder="Ingrese el nombre del producto"
        value={productName}
        setState={setProductName}
      />
      <label>Precio del producto</label>
      <AdminMarketPlaceInput
        name="price"
        placeholder="Ingrese el precio del producto"
        value={productPrice}
        setState={setProductPrice}
      />
      <label>Stock del producto</label>
      <AdminMarketPlaceInput
        name="stock"
        placeholder="Ingrese el stock del producto"
        value={productStock}
        setState={setProductStock}
      />
      <label>Categoría del producto</label>
      <AdminMarketPlaceInput
        name="category"
        placeholder="Ingrese la categoría del producto"
        value={productCategory}
        setState={setProductCategory}
      />
      <label>Descripción del producto</label>
      <AdminMarketPlaceInput
        name="detail"
        placeholder="Ingrese la descripción del producto"
        value={productDetail}
        setState={setProductDetail}
      />
      <label>Imagen principal del producto</label>
      <AdminMarketPlaceInput
        name="mainImage"
        placeholder="Ingrese la imagen principal del producto"
        value={productMainImage}
        setState={setProductMainImage}
      />
      <label>Imágenes del producto</label>
      <AdminMarketPlaceInput
        name="images"
        placeholder="Ingrese las imágenes del producto"
        value={productImages}
        setState={setProductImages}
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
