import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
  name: "Modal",
  initialState: { modal: false },
  reducers: {
    changeModal: (state) => {
      state.modal = !state.modal;
    },
  },
});
export const { changeModal } = ModalSlice.actions;
export default ModalSlice.reducer;
