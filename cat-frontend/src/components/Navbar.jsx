import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { RiMenu2Line, RiMenuFold2Line } from "react-icons/ri";
import { navItems } from '@/utils/constants/nav-items';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        </div>
      )}
    </nav>
  );
};

export default Navbar;