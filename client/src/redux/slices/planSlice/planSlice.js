import { createSlice } from "@reduxjs/toolkit";

const planSlice = createSlice({
  name: "plan",
  initialState: {
    allPlans: [],
    renderPlans: {},
    planById: {},
  },
  reducers: {
    setLimitPlans(state, action) {
      state.renderPlans = {...action.payload};
    },
    setPlansSearch(state, action) {
      state.renderPlans = [...action.payload];
    },
    setPlanById(state, action) {
      state.planById = action.payload;
    },
    setPlansbyOrder(state, action) {
      state.renderPlans = {...action.payload};
    },
  },
});

export const {
  setPlansSearch,
  setLimitPlans,
  setPlanById,
  setPlansbyOrder,
} = planSlice.actions;
export default planSlice.reducer;
