import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  LCs: [],
  ALC: [],
  courses: [],
};

const LCSlice = createSlice({
  name: "LC",
  initialState,
  reducers: {
    getAllLCs: (state, { payload }) => {
      state.LCs.push(payload);
    },
    getALC: (state, { payload }) => {
      state.ALC = payload.data.filter((s) => s.viloyat === payload.viloyat);
    },
    getCourses: (state, { payload }) => {
      state.courses = payload.map((items) => {
        return {
          viloyat: items.viloyat,
          name: items.name,
          courses: items.courses,
        };
      });
    },
    // searchCourses: (state, { payload }) => {
    //   const filter = state.courses.filter((val) => {
    //     console.log(val);
    //     if (payload == " ") {
    //       return val;
    //     } else if (
    //       val.courses.itCourse.toLowerCase().includes(payload.toLowerCase()) ||
    //       val.courses.english.toLowerCase().includes(payload.toLowerCase())
    //     ) {
    //       return val;
    //     }
    //   });
    //     console.log(filter);
    //   },
  },
});
export const { getAllLCs, getALC, getCourses, searchCourses } = LCSlice.actions;
export default LCSlice.reducer;
