import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  LCs: [],
  ALC: [],
};

const LCSlice = createSlice({
  name: "LC",
  initialState,
  reducers: {
    getAllLCs: (state, { payload }) => {
      state.LCs.push(payload);
    },
    getALC: (state, { payload }) => {
      const filter = payload.data.filter((s) => s.viloyat === payload.viloyat);
      state.ALC = filter
    },
  },
});
export const { getAllLCs, getALC } = LCSlice.actions;
export default LCSlice.reducer;
