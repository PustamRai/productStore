import React, { useState } from "react";
import { useProductContext } from "../context/productContext";
import { NavLink } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

function ProductCard() {
  const { products, loading, updateProduct, deleteProduct } = useProductContext();

  const [editId, setEditId] = useState(null); 
  const [formData, setFormData] = useState({ name: "", price: "", image: "" });

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-lg p-6 rounded-md">
          {/* First body section */}
          <div className="flex animate-pulse space-x-4">
            <div className="size-10 rounded-full bg-gray-600"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 rounded bg-gray-600"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 h-2 rounded bg-gray-600"></div>
                  <div className="col-span-1 h-2 rounded bg-gray-600"></div>
                </div>
                <div className="h-2 rounded bg-gray-600"></div>
              </div>
            </div>
          </div>
  
          {/* Second body section */}
          <div className="flex animate-pulse space-x-4 mt-6">
            <div className="size-10 rounded-full bg-gray-600"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 rounded bg-gray-600"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 h-2 rounded bg-gray-600"></div>
                  <div className="col-span-1 h-2 rounded bg-gray-600"></div>
                </div>
                <div className="h-2 rounded bg-gray-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }  

  // Handle Edit Click
  const handleEdit = (product) => {
    setEditId(product._id); 
    setFormData({
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Update Product
  const handleUpdate = () => {
    updateProduct(editId, formData);
    setEditId(null); 
  };

  // Handle Cancel Update
  const handleCancel = () => {
    setEditId(null); 
  };

  return (
    <div className="min-h-screen py-10 px-6 md:px-52">
      <div className="container mx-auto ">
        <h2 className="text-2xl font-bold text-blue-400 mb-8 flex justify-center items-center">
          🚀 Current Products
        </h2>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-gray-700 text-white rounded-xl shadow-lg overflow-hidden "
              >
                {editId === product._id ? (
                  // Show Input Fields when Editing
                  <div className="px-3 py-2">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-2 mb-2 border text-white rounded"
                    />
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      className="w-full p-2 mb-2 border text-white rounded"
                    />
                    <input
                      type="text"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      className="w-full p-2 mb-2 border text-white rounded"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={handleUpdate}
                        className="bg-green-500 px-4 py-2 rounded text-white"
                      >
                        Update
                      </button>
                      <button
                        onClick={handleCancel}
                        className="bg-gray-500 px-4 py-2 rounded text-white"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  // Display Product Details
                  <>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-40 w-full object-cover"
                    />

                    <div className="px-2">
                      <h2 className="mt-2 text-xl font-semibold">
                        {product.name}
                      </h2>
                      <p className="text-gray-300 text-lg font-bold">
                        ${product.price}
                      </p>
                    </div>

                    <div className="flex justify-between gap-4 mt-2 px-2 py-3">
                      <FiEdit2
                        onClick={() => handleEdit(product)}
                        className="bg-blue-500 rounded-xl p-2 text-4xl cursor-pointer hover:bg-blue-600 transition-all duration-200 ease-in"
                      />
                      <RiDeleteBin6Line
                        onClick={() => deleteProduct(product._id)}
                        className="bg-red-500 rounded-xl p-2 text-4xl cursor-pointer hover:bg-red-600 transition-all duration-200 ease-in"
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center  gap-4">
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
