import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
  name: "Modal",
  initialState: { searchBar: false, navBar: false, tanlovBar: false },
  reducers: {
    changeSearchBar: (state) => {
      state.searchBar = !state.searchBar;
    },
    changeNavBar: (state) => {
      state.navBar = !state.navBar;
    },
    changeTanlovBar: (state) => {
      state.tanlovBar = !state.tanlovBar;
    },
  },
});
export const { changeSearchBar, changeNavBar, changeTanlovBar } =
  ModalSlice.actions;
export default ModalSlice.reducer;
