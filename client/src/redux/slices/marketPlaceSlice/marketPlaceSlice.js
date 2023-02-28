import { createSlice } from "@reduxjs/toolkit";

const marketPlaceSlice = createSlice({
  name: "marketplace",
  initialState: {
    allProducts: [],
    filteredProducts: {},
    detailProduct: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    setDetailProducts: (state, action) => {
      state.detailProduct = [action.payload];
    },
    setProductsByOrder: (state, action) => {
      state.filteredProducts = { ...action.payload };
    },
    sortProductsByTitle: (state) => {
      state.allProducts.sort((a, b) => a.title.localeCompare(b.title));
    },
    sortProductsByPrice: (state) => {
      state.allProducts.sort((a, b) => a.price - b.price);
    },
    filterProductsByCategory: (state, action) => {
      console.log("Selected category:", action.payload); 
      const filteredProducts = state.allProducts.products.filter(
        (product) => product.category === action.payload
      );
      console.log(filteredProducts);
      state.filteredProducts = filteredProducts;
    },
    filterProductsByAvailability: (state, action) => {
      const filteredProducts = state.allProducts.products.filter(
        (product) => product.availability === action.payload
      );
      state.filteredProducts = filteredProducts;
    },
  },
});

export const { 
    setProducts, 
    setDetailProducts, 
    sortProductsByTitle,
    sortProductsByPrice,
    filterProductsByCategory,
    filterProductsByAvailability,
    setProductsByOrder,
  } = marketPlaceSlice.actions;

export default marketPlaceSlice.reducer;
