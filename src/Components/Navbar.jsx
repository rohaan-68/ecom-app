import React from 'react';
import { CgDarkMode } from 'react-icons/cg';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';

const Navbar = (props) => {
  return (
    <nav>
      <div className="bg-blue-500/10 h-[60px] pt-2">
        <div className="py-2 px-[5rem] flex items-center justify-center md:justify-between">
          <div className="flex items-center">
            <h1 className="cursor-pointer">EN</h1>
            <div className="hidden md:flex items-center ml-6 rounded-lg p-1">
              <input
                placeholder="Search"
                className=" border border-gray-200 pl-2 rounded-lg"
              />
              <FaSearch className="ml-2 text-gray-500 text-lg cursor-pointer" />
            </div>
          </div>
          <div className="hidden md:flex text-center cursor-pointer">
            <h1>PC ZONE</h1>
          </div>
          <div className="flex items-center justify-end">
            <button className="text-md hover:text-gray-600 ml-6">
              REGISTER
            </button>
            <button className="text-md hover:text-gray-600 ml-6">LOGIN</button>
            <button className="text-xl ml-6">
              <FaShoppingCart />
            </button>
            <button className="text-xl mx-5" onClick={props.onToggleClick}>
              <CgDarkMode />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
