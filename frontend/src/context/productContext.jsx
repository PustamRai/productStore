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

        setProducts((prevProducts) => [...prevProducts, allProducts])
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

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
