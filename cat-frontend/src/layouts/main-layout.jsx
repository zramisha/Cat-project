import React, { lazy } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const MainLayout = () => {
  return (
    <div className="grid grid-cols-[auto_1fr] w-full min-h-screen grid-rows-[auto_1fr]">
      <div className="col-span-2 sticky top-0 z-50">
        {/* navbar goes here */}
        <Navbar></Navbar>
      </div>
      <div className="no-scrollbar overflow-y-auto">
        {/* sidebar goes here */}
      </div>
      <div className="mx-12 my-5 min-h-[70vh]">
        <Outlet />
      </div>
      <div className="col-span-2 z-40">
        <Footer/>
      </div>
    </div>
  );
};

export default MainLayout;