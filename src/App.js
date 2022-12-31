import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductListing from "./components/products/ProductListing";
import ProductDetail from "./components/products/ProductDetail";
import AddToCart from "./components/UI/AddToCart";

function App() {

  const myStyle = {
    display: 'flex',
    flexFlow: 'wrap',
  }
  return (
    <>
      <Router>
        <Navbar title="e-com-cart" />
        <div className="container p-2 bd-highlight" style={myStyle}>
          <Routes>
            <Route exact path="/" element={<ProductListing />} />
            <Route exact path="/product/:productId" element={<ProductDetail />} />
            <Route exact path="/:carts" element={<AddToCart />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
