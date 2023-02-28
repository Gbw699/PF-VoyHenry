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
  },
});

export const { 
  setProducts, 
  setDetailProducts,
  setProductsByOrder,
} = marketPlaceSlice.actions;

export default marketPlaceSlice.reducer;
