import React from "react";
import { useProductContext } from "../context/productContext";
import { NavLink } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

function ProductCard() {
  const { products, deleteProduct } = useProductContext();

  return (
    <div className="bg-gray-900 min-h-screen py-10 px-6 md:px-52">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-blue-400 mb-8 flex items-center">
          🚀 Current Products
        </h2>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="bg-gray-700 text-white  rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 w-full  object-cover"
                />

                <div className="px-3">
                  <h2 className="mt-2 pb-2 text-xl font-semibold">{product.name}</h2>
                  <p className="text-gray-300 pb-2 text-lg font-bold">
                    ${product.price}
                  </p>
                </div>

                <div className="flex gap-4 px-3 pb-3">
                  <FiEdit2 className="bg-blue-500 rounded-xl p-2 text-4xl cursor-pointer hover:bg-blue-600 transition-all duration-200 ease-in" />
                  <RiDeleteBin6Line 
                  onClick={() => deleteProduct(product._id)}
                  className="bg-red-500 rounded-xl p-2 text-4xl cursor-pointer hover:bg-red-600 transition-all duration-200 ease-in" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex gap-4">
            <h3 className="text-red-600">No products yet!!</h3>

            <NavLink to="/add-product">
              <span className="text-blue-500 underline">create a new one</span>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
