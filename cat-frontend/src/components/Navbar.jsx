import React, { useState } from 'react';
import { RiMenu2Line, RiMenuFold2Line } from "react-icons/ri";
import { MdLogout} from "react-icons/md";
import { navItems } from '@/utils/constants/nav-items';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import {clearLoggedInUserInfo} from "@/redux/auth/authSlice"
import localStorageService from "@/utils/helper/localStorageService";
import { authConstants } from "@/utils/constants/auth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearLoggedInUserInfo());
    localStorageService.removeItem(authConstants.AUTH);
    // navigate(routesConstant.login);
  }

  return (
    <nav className="bg-base-100 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="text-xl font-bold">
          <a href="/">CatAdopt</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          {navItems?.map((navItem, index) => (
            <div key={index} className='btn btn-ghost'>
              <Link to={navItem.link}>
                {navItem.name}
              </Link>
            </div>
          ))}
          <button
              className="btn btn-outline"
              onClick={handleLogout}
            >
              <h2 className={`whitespace-pre duration-500 opacity-100`}>
                Logout
              </h2>
              <div>
                <MdLogout size={20} />
              </div>
            </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden btn btn-ghost text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <RiMenuFold2Line/> : <RiMenu2Line/>}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-base-200 ">
          {navItems?.map((navItem, index) => (
            <div key={index} className='block px-4 py-2 hover:bg-base-300'>
              <Link to={navItem.link}>
                {navItem.name}
              </Link>
            </div>
          ))}
          <button
              className="flex items-center self-start text-md gap-1 p-2 hover:bg-gray-200 rounded-md"
              onClick={handleLogout}
            >
              <h2 className={`whitespace-pre duration-500 opacity-100`}>
                Logout
              </h2>
              <div className='inline-flex'>
                <MdLogout size={20} />
              </div>
            </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
