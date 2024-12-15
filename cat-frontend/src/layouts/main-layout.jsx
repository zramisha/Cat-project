import React, { lazy } from "react";
import { Outlet } from "react-router-dom";



const MainLayout = () => {
  return (
    <div className="grid grid-cols-[auto_1fr] w-full h-screen grid-rows-[auto_1fr]">
      <div className="col-span-2 sticky top-0">
        {/* navbar goes here */}
        <div>Navbar</div>
      </div>
      <div className="no-scrollbar overflow-y-auto">
        {/* sidebar goes here */}
      </div>
      <div className="md:ml-16">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;