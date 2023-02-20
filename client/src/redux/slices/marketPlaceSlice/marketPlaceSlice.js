import { createSlice } from "@reduxjs/toolkit";

const marketPlaceSlice = createSlice({
  name: "marketPlace",
  initialState: {
    allProducts: [],
    detailProduct: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    setDetailProducts: (state, action) => {
      state.detailProduct = [action.payload];
    },
  },
});

export const { setProducts, setDetailProducts } = marketPlaceSlice.actions;
export default marketPlaceSlice.reducer;
