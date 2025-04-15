import React, { createContext, useState, useContext, useEffect } from "react";
import { API } from "../api/API";
import { toast } from "react-hot-toast"

const ProductContext = createContext();

// create provider
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("store prod: ", products)

  // fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await API.get("/allProducts");
        const allProducts = response.data.data

        setProducts(allProducts)
      } catch (error) {
        toast.error("error in fetching data");
      } finally {
        setLoading(false); 
      }
    }

    fetchProducts()
  }, []);


  // function to add a new product
  const addProduct = async (productData) => {
    setLoading(true)
    try {
      const response = await API.post("/addProduct", productData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const newProduct = response.data.data;
      setProducts((prevProducts) => [...prevProducts, newProduct]);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add product");
    } finally {
      setLoading(false);
    }
  };


  const updateProduct = async (id, updatedData) => {
    try {
      const response = await API.post(`/updateProduct/${id}`, updatedData);
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === id ? { ...product, ...updatedData } : product
        )
      );
      toast.success(response.data.message);
    } catch (error) {
      toast.error("Failed to update product");
    }
  };


  // function to delete the product
  const deleteProduct = async (id) => {
    try {
      const response = await API.post(`/deleteProduct/${id}`)
      setProducts((prevProducts) => prevProducts.filter((product) => product._id !== id))
      toast.success(response.data.message)
    } catch (error) {
      console.log("failed to delete product: ", error)
      toast.error("failed to delete product")
    }
  }

  return (
    <ProductContext.Provider value={{ products, loading,setLoading, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
