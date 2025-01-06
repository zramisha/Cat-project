import React, { useState } from "react";
import { RiMenu2Line, RiMenuFold2Line } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { navItems } from "@/utils/constants/nav-items";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { clearLoggedInUserInfo } from "@/redux/auth/authSlice";
import localStorageService from "@/utils/helper/localStorageService";
import { authConstants } from "@/utils/constants/auth";

const NavbarAlt = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearLoggedInUserInfo());
    localStorageService.removeItem(authConstants.AUTH);
    // navigate(routesConstant.login);
  };
  return (
    <div>
      <div className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>

            {/* actual links here */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems?.map((navItem, index) => (
                <Link
                  to={navItem.link}
                  key={index}
                >
                  <div className="btn btn-ghost">{navItem.name}</div>
                </Link>
              ))}
              <button className="btn btn-ghost self-start" onClick={handleLogout}>
                Logout <MdLogout/> 
              </button>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link
            to={"/"}
            className="text-2xl font-semibold text-pink-600"
          >
            Cat Heaven
          </Link>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarAlt;
