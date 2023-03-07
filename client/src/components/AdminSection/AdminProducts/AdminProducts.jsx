import { useState } from "react";
import AxiosProducts from "./AxiosProducts";
import ProductsGrid from "./ProductsGrid";
import CreateProductForm from "./CreateProductForm";
import EditProductForm from "./EditProductForm";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [productsInfo, setProductsInfo] = useState({});
  const [createRecord, setCreateRecord] = useState(false);
  const [editRecord, setEditRecord] = useState(false);
  const [reRender, setReRender] = useState(false);

  return (
    <>
      <AxiosProducts
        setProducts={setProducts}
        reRender={reRender}
      />
      {!createRecord && !editRecord && (
        <ProductsGrid
          products={products}
          reRender={reRender}
          setProductsInfo={setProductsInfo}
          setReRender={setReRender}
          setCreateRecord={setCreateRecord}
          setEditRecord={setEditRecord}
        />
      )}
      {createRecord && (
        <CreateProductForm
          reRender={reRender}
          setReRender={setReRender}
          setCreateRecord={setCreateRecord}
        />
      )} 
      {editRecord && (
        <EditProductForm
          productsInfo={productsInfo}
          setProductsInfo={setProductsInfo}
          reRender={reRender}
          setReRender={setReRender}
          setEditRecord={setEditRecord}
        />
      )} 
    </>
  );
}
