import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./context/productContext";
import Navbar from "./components/Navbar";
import AddProduct from "./pages/AddProduct";
import ProductCard from "./pages/ProductCard";

function App() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <ProductProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductCard />} />
            <Route path="/add-product" element={<AddProduct />} />
          </Routes>
        </Router>
      </ProductProvider>
    </div>
  );
}

export default App;
