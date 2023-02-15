import { createSlice } from "@reduxjs/toolkit";

const planSlice = createSlice({
  name: "blog",
  initialState: {
    allPlans: [],
    topPlans: [],
    renderPlans: [],
    sectionPlans: []
  },
  reducers: {
    setAllPlans(state,action) {
      state.allPlans = [...action.payload];
    },
    setTopPlans(state,action) {
      state.topPlans = [...action.payload];
    },
    setPlanssSearch(state, action) {
      state.renderPlans = [...action.payload];
    },
    setSectionPlans(state,action) {
      state.sectionPlans = [...action.payload];
    }
  },
});

export const { setPlansSearch, setTopPlans, setAllPlans, setSectionPlans } = planSlice.actions;
export default planSlice.reducer;
