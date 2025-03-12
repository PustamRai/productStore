import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import AddProduct from "./pages/AddProduct";


function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          {/* <Route path="/" /> */}
          <Route path="/add-product" element={ <AddProduct /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
