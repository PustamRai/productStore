import React from "react";
import { NavLink } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import { FaPlus } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white flex justify-between items-center px-6 py-4">
      <div className="flex items-center">
        <h1 className="text-xl font-bold mr-2">PRODUCT STORE</h1>
        <SlBasket className="text-2xl font-extrabold" />
      </div>

      <div className="flex gap-4">
        <NavLink
        to="/add-product"
        >
          <button
            className="p-2 rounded-md bg-blue-700 text-gray-200"
            
          >
            <FaPlus className=" rounded-2xl" />
          </button>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
