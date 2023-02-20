import { createSlice } from "@reduxjs/toolkit";

const planSlice = createSlice({
  name: "plan",
  initialState: {
    allPlans: [],
    renderPlans: [],
  },
  reducers: {
    setAllPlans(state, action) {
      state.allPlans = [...action.payload];
    },
    setLimitPlans(state, action) {
      state.renderPlans = [...action.payload];
    },
    setPlansSearch(state, action) {
      state.renderPlans = [...action.payload];
    },
  },
});

export const { setPlansSearch, setLimitPlans, setAllPlans } = planSlice.actions;
export default planSlice.reducer;