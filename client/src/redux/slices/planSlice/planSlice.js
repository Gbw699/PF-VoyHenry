import { createSlice } from "@reduxjs/toolkit";

const planSlice = createSlice({
  name: "blog",
  initialState: {
    allPlans: [],
    renderPlans: [],
  },
  reducers: {
    setPlanssSearch(state, action) {
      state.renderPlans = [...action.payload];
    },
  },
});

export const { setPlansSearch } = planSlice.actions;
export default planSlice.reducer;
