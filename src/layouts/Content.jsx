import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import SidebarLeft from "../Components/SidebarLeft";
import SidebarRight from "../Components/SidebarRight";

export default function Content() {
  return (
    <>
      <div className="content mx-auto">
        <div className="h-[105px] w-full"></div>
        <SidebarLeft />
        <SidebarRight />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}
