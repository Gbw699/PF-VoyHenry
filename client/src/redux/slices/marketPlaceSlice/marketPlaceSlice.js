import { createSlice } from "@reduxjs/toolkit";

const marketPlaceSlice = createSlice({
  name: "marketplace",
  initialState: {
    allProducts: [],
    filteredProducts: [],
    detailProduct: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    setDetailProducts: (state, action) => {
      state.detailProduct = [action.payload];
    },
    sortProductsByTitle: (state) => {
      state.allProducts.sort((a, b) => a.title.localeCompare(b.title));
    },
    sortProductsByPrice: (state) => {
      state.allProducts.sort((a, b) => a.price - b.price);
    },
    filterProductsByCategory: (state, action) => {
      const { category } = action.payload;
      console.log("Selected category:", category); 
      const filteredProducts = state.allProducts.products.filter(
        (product) => product.category === category
      );
      state.filteredProducts = filteredProducts;
      console.log(state.filteredProducts);
    },
    filterProductsByAvailability: (state, action) => {
      if (state.allProducts.length > 0) {
        const filteredProducts = state.allProducts.filter(
          (product) => product.availability === action.payload
        );
        state.filteredProducts = filteredProducts;
      }
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
  } = marketPlaceSlice.actions;

export default marketPlaceSlice.reducer;
