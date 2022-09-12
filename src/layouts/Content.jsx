import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import SidebarLeft from "../Components/SidebarLeft";
import SidebarRight from "../Components/SidebarRight";
import LC from "../Components/LC";
import Mentors from "../Components/Mentors";

export default function Content() {
  return (
    <>
      <div className="content mx-auto">
        <div className="h-[105px] w-full"></div>
        <SidebarLeft />
        <SidebarRight />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/LC/:id" element={<LC />} />
          <Route path="/LC/:id/mentors" element={<Mentors />} />
        </Routes>
      </div>
    </>
  );
}
