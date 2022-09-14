import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mentors: [],
};

const MentorsSlice = createSlice({
  name: "Mentors",
  initialState,
  reducers: {
    getAllMentors: (state, { payload }) => {
      state.mentors = {
        LC: payload.name,
        mentors: payload.mentors,
      };
    },
  },
});
export const { getAllMentors } = MentorsSlice.actions;
export default MentorsSlice.reducer;
