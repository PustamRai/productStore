import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../context/productContext";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const navigate = useNavigate();
  const { addProduct, loading, setLoading } = useProductContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      toast.error("Please select an image");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("image", imageFile);

    await addProduct(formData);

    navigate("/");
  };
  
  return (
    <div className="flex justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-900 px-6 py-15 rounded-lg shadow-lg w-2xl">
        <h2 className="text-white text-lg font-semibold text-center mb-4">
          Create New Product
        </h2>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Product Name"
            className="w-full p-2 mb-3 bg-gray-700 text-white rounded outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            className="w-full p-2 mb-3 bg-gray-700 text-white rounded outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="file"
            name="imageFile"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="w-full p-2 mb-3 bg-gray-700 text-white rounded cursor-pointer"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-2 rounded text-white ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Adding product" : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
