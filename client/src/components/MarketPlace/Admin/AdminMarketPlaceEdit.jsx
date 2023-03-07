import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminMarketPlaceInput from "./AdminMarketPlaceInput";
import { editProduct } from "../../../redux/slices/marketPlaceSlice/thunk";
import style from "./AdminMarketPlaceEdit.module.css";

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
    <div className={style.editInputs}>
      <p className={style.title}>Editar producto</p>
      <hr color="#f1e100" width="80%" />
      <div className={style.select}>
        <p className={style.selectTitle}>Seleccionar producto a editar:</p>
        {!products ? (
          <select className={style.selectInput}>
            <option>No hay productos</option>
          </select>
        ) : (
          <select 
            onChange={handleProductSelection} 
            className={style.selectInput}
          >
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
      </div>
      <div className={style.inputs}>
        <label className={style.inputTitle}>Nombre</label>
        <AdminMarketPlaceInput
          name="title"
          placeholder="Ingrese el nombre del producto"
          value={productName}
          setState={setProductName}
        />
        <label className={style.inputTitle}>Precio</label>
        <AdminMarketPlaceInput
          name="price"
          placeholder="Ingrese el precio del producto"
          value={productPrice}
          setState={setProductPrice}
        />
        <label className={style.inputTitle}>Stock</label>
        <AdminMarketPlaceInput
          name="stock"
          placeholder="Ingrese el stock del producto"
          value={productStock}
          setState={setProductStock}
        />
        <label className={style.inputTitle}>Categoría</label>
        <AdminMarketPlaceInput
          name="category"
          placeholder="Ingrese la categoría del producto"
          value={productCategory}
          setState={setProductCategory}
        />
        <label className={style.inputTitle}>Descripción</label>
        <AdminMarketPlaceInput
          name="detail"
          placeholder="Ingrese la descripción del producto"
          value={productDetail}
          setState={setProductDetail}
        />
        <label className={style.inputTitle}>Imagen principal</label>
        <AdminMarketPlaceInput
          name="mainImage"
          placeholder="Ingrese la imagen principal del producto"
          value={productMainImage}
          setState={setProductMainImage}
        />
        <label className={style.inputTitle}>Imágenes secundarias</label>
        <AdminMarketPlaceInput
          name="images"
          placeholder="Ingrese las imágenes del producto"
          value={productImages}
          setState={setProductImages}
        />
        <div className={style.images}>
          {editProducts ? (
            <img
              src={editProducts.mainImage}
              alt={editProducts.title}
              title={editProducts.title}
              className={style.img}
              loading="lazy"
            />
          ) : (
            <p>Aún no hay imagen</p>
          )}
          {editProducts &&
            editProducts.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={editProducts.title}
                  title={editProducts.title}
                  className={style.img}
                  loading="lazy"
                />
              </div>
            ))
          }
        </div>
      </div>
      <button 
        onClick={handleEdit}
        className={style.editBtn}
      >
        Editar
      </button>
    </div>
  );
}
