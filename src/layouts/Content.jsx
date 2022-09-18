import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import LC from "../Pages/LC";
import Mentors from "../Pages/Mentors";
import SidebarLeft from "../Components/SidebarLeft";
import SidebarRight from "../Components/SidebarRight";
import ALC from "../Pages/ALC";

export default function Content() {
  return (
    <>
      <div className="w-full mx-auto bg-slate-200 relative">
        <div className="h-[105px] w-full "></div>
        <SidebarLeft />
        <SidebarRight />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/LC/:viloyat" element={<LC />} />
          <Route path="/LC/:ALC" element={<ALC />} />
          <Route path="/LC/:id/mentors" element={<Mentors />} />
        </Routes>
      </div>
    </>
  );
}
