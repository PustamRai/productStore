import React, { createContext, useState, useContext, useEffect } from "react";
import { API } from "../api/API";
import { toast } from "react-hot-toast"

const ProductContext = createContext();

// create provider
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await API.get("/allProducts");
        const allProducts = response.data.data

        setProducts(allProducts)
        toast.success(response.data.message);
      } catch (error) {
        toast.error("error in fetching data");
      }
    }

    fetchProducts()
  }, []);


  // function to add a new product
  const addProduct = (products) => {
    setProducts((prevProducts) => [...prevProducts, products]);
  };

  // function to delete the product
  const deleteProduct = async (id) => {
    try {
      const response = await API.post(`/deleteProduct/${id}`)
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id))
      toast.success(response.data.message)
    } catch (error) {
      console.log("failed to delete product: ", error)
      toast.error("failed to delete product")
    }
  }

  return (
    <ProductContext.Provider value={{ products, addProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
