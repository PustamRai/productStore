import React from "react";
import { useProductContext } from "../context/productContext";

function ProductCard() {
  const { products } = useProductContext();

  return (
    <div className="bg-gray-900 min-h-screen py-10 px-6">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-blue-400 mb-8 flex items-center">
          🚀 Current Products
        </h2>

        {/* Grid container should be outside the loop */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="bg-gray-700 text-white p-4 rounded-xl shadow-lg"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded-lg h-40 w-full object-cover"
                />
                <h3 className="mt-2 font-semibold">{product.name}</h3>
                <p className="text-blue-300 text-lg font-bold">
                  ${product.price}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex gap-4">
            <h3 className="text-red-600">
              No products yet!!
            </h3>
            <span className="text-blue-500 underline"> create a new one</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
