import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  LCs: [],
  ALC: [],
  RegionLCs: [],
  fakeCourses: [],
  courses: [],
};

const LCSlice = createSlice({
  name: "LC",
  initialState,
  reducers: {
    getAllLCs: (state, { payload }) => {
      state.LCs.push(payload);
    },
    getRegionLCs: (state, { payload }) => {
      state.RegionLCs = payload.data.filter(
        (s) => s.viloyat === payload.viloyat
      );
    },
    getCourses: (state, { payload }) => {
      state.courses = payload.map((items) => {
        return {
          viloyat: items.viloyat,
          name: items.name,
          courses: items.courses,
        };
      });
      state.fakeCourses = payload.map((items) => {
        return {
          viloyat: items.viloyat,
          name: items.name,
          courses: items.courses,
        };
      });
    },
    searchCourses: (state, { payload }) => {
      state.courses = state.fakeCourses.filter((val) => {
        if (
          val.name.toLowerCase().includes(payload.toLowerCase()) ||
          val.viloyat.toLowerCase().includes(payload.toLowerCase())
          // val.itCourse.toLowerCase().includes(payload.toLowerCase()) ||
          // val.english.toLowerCase().includes(payload.toLowerCase())
        ) {
          return val;
        }
      });
    },
    getALC: (state, { payload }) => {
      state.ALC = payload;
    },
  },
});
export const { getAllLCs, getRegionLCs, getCourses, searchCourses, getALC } =
  LCSlice.actions;
export default LCSlice.reducer;
