import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="fixed w-full h-full background"></div>
      <div className="relative grid grid-rows-5 h-screen">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
