import { createSlice } from "@reduxjs/toolkit";

const planSlice = createSlice({
  name: "plan",
  initialState: {
    allPlans: [],
    renderPlans: [],
    totalPages: 0
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
    setPlansPerPage(state, action) {
      state.renderPlans = [...action.payload];
    },
    setTotalPages(state, action) {
      state.totalPages = action.payload;
    }
  },
});

export const { setPlansSearch, setLimitPlans, setAllPlans, setPlansPerPage, setTotalPages } = planSlice.actions;
export default planSlice.reducer;