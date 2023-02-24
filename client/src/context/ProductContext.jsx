import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const useTaxtContext = () => useContext(ProductContext);

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = localStorage.getItem("products");
    if (getData) {
      setProducts(JSON.parse(getData));
    }
  }, []);

  const exists = (product) => {
    const checkId = (productId) => {
      return productId.id === product.id;
    };
    return products.some(checkId);
  };

  const addProduct = (product, quantitySelect) => {
    if (exists(product)) {
      const existsProduct = products.find(
        (element) => element.id === product.id
      );
      console.log(existsProduct);
      console.log(quantitySelect);
      if (existsProduct.quantity + parseInt(quantitySelect)) {
        existsProduct.quantity += parseInt(quantitySelect);
      }
      const listNoRepeat = products.filter(
        (element) => element.id !== product.id
      );
      listNoRepeat.push(existsProduct);
      setProducts(listNoRepeat);
      localStorage.setItem("products", JSON.stringify(listNoRepeat));
      return;
    }
    product.quantity = parseInt(quantitySelect);
    const newProduct = { ...product };
    setProducts([...products, newProduct]);
    localStorage.setItem("products", JSON.stringify([...products, newProduct]));
  };

  const updateProductQuantity = (product, quantitySelect) => {
    const existsProduct = products.find((element) => element.id === product);
    existsProduct.quantity = parseInt(quantitySelect);
    const listNoRepeat = products.filter((element) => element.id !== product);
    listNoRepeat.push(existsProduct);
    setProducts(listNoRepeat);
    localStorage.setItem("products", JSON.stringify(listNoRepeat));
  };

  const cleanProduct = (product) => {
    const listCleanProduct = products.filter((sought) => sought.id !== product);
    setProducts(listCleanProduct);
    localStorage.setItem("products", JSON.stringify(listCleanProduct));
  };

  const emptyCart = () => {
    const cleanCart = [];
    setProducts(cleanCart);
    localStorage.setItem("products", JSON.stringify(cleanCart));
  };

  const earrings = () => {
    const earrings = products.reduce(
      (accum, product) => (product.state === false ? accum + 1 : accum),
      0
    );
    return earrings;
  };

  const context = {
    products,
    exists,
    addProduct,
    updateProductQuantity,
    cleanProduct,
    emptyCart,
    earrings,
  };

  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
