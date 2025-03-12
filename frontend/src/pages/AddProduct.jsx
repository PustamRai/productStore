import React, {useState} from 'react'
import { toast } from "react-hot-toast"
import { API } from '../api/API';

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [products, setProducts] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await API.post("/addProduct", {
        name,
        price,
        image: imageUrl
      })

      const newProduct = response.data.data
      
      setProducts(prevProducts => [...prevProducts, newProduct] )
      console.log("new product: ", newProduct)
      toast.success(response.data.message)
    } catch (error) {
      toast.error("failed to add product")
    }
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-900 py-15 rounded-lg shadow-lg w-80 md:w-2xl">
        <h2 className="text-white text-lg font-semibold text-center mb-4">
          Create New Product
        </h2>
        <form onSubmit={handleSubmit}>
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
            type="text"
            name="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Image URL"
            className="w-full p-2 mb-3 bg-gray-700 text-white rounded outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddProduct