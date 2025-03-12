import React, { createContext, useState, useContext } from 'react';


const ProductContext = createContext();

// create provider
export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([])

    const addProduct = (products) => {
        setProducts((prevProducts) => [...prevProducts, products])
    }

    return (
        <ProductContext.Provider value={{products, addProduct}}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProductContext = () => useContext(ProductContext)