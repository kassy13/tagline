// import React from "react";
import DashSideBar from "./DashSideBar";
import { Outlet } from "react-router-dom";
import DashFooter from "./DashFooter";

const DashLayout = () => {
  return (
    <>
      <div className="flex">
        <DashSideBar />
        <Outlet />
      </div>
      <DashFooter />
    </>
  );
};

export default DashLayout;
