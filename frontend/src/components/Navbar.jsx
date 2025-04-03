import React from "react";
import { NavLink } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import { FaPlus } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className="text-black bg-gray-400 flex justify-between items-center px-6 py-4 md:px-52">
      <div className="flex items-center">
        <NavLink
        to="/"
        >
          <h1 className="text-xl font-bold mr-2">PRODUCT STORE</h1>
        </NavLink>
        <SlBasket className="text-2xl font-extrabold" />
      </div>

      <div className="flex gap-4">
        <NavLink to="/add-product">
          <button className="p-2 rounded-md bg-blue-700 hover:bg-blue-800 text-gray-200 cursor-pointer">
            <FaPlus className=" rounded-2xl" />
          </button>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
