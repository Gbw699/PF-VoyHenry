import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminMarketPlaceInput from "./AdminMarketPlaceInput";
import { deactivateProduct } from "../../../redux/slices/marketPlaceSlice/thunk";
import style from "./AdminMarketPlaceDeactivate.module.css";

export default function AdminMarketPlaceDeactivate({
  setProductDeactivate,
  productDeactivate,
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
    setProductDeactivate(product);
  };

  const handleDeactivate = () => {
    productDeactivate
      ? dispatch(deactivateProduct(productDeactivate.id))
      : window.alert("No has seleccionado ningún producto para borrar");
  };

  return (
    <div className={style.deleteInputs}>
      <p className={style.title}>Desactivar producto</p>
      <hr color="#f22176" width="80%" />
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
          placeholder="Nombre del producto"
          value={productDeactivate?.title}
          disabled
        />
        <label className={style.inputTitle}>Precio</label>
        <AdminMarketPlaceInput
          name="price"
          placeholder="Precio del producto"
          value={productDeactivate?.price}
          disabled
        />
        <label className={style.inputTitle}>Stock</label>
        <AdminMarketPlaceInput
          name="stock"
          placeholder="Stock del producto"
          value={productDeactivate?.stock}
          disabled
        />
        <label className={style.inputTitle}>Categoría</label>
        <AdminMarketPlaceInput
          name="category"
          placeholder="Categoría del producto"
          value={productDeactivate?.category}
          disabled
        />
        <label className={style.inputTitle}>Descripción</label>
        <AdminMarketPlaceInput
          name="detail"
          placeholder="Descripción del producto"
          value={productDeactivate?.detail}
          disabled
        />
        <div className={style.images}>
        {productDeactivate ? (
          <img
            src={productDeactivate.mainImage}
            alt={productDeactivate.title}
            title={productDeactivate.title}
            className={style.img}
            loading="lazy"
          />
        ) : (
          <p>Este producto no tiene imagen</p>
        )}
        {productDeactivate &&
          productDeactivate.images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={productDeactivate.title}
                title={productDeactivate.title}
                className={style.img}
                loading="lazy"
              />
            </div>
          ))
        }
        </div>
      </div>
      <button 
        onClick={handleDeactivate}
        className={style.deleteBtn}
      >
        Desactivar
      </button>
    </div>
  );
}
