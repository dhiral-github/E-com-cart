import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductListing from "./components/products/ProductListing";
import ProductDetail from "./components/products/ProductDetail";
import AddToCart from "./components/UI/AddToCart";
import CartPlaceOrder from "./components/UI/CartPlaceOrder";
import SuccessOrder from "./components/UI/SuccessOrder";

function App() {

  return (
    <>
      <Router>
        <Navbar title="e-com-cart" />
        <div className="container p-2 bd-highlight" style={{ display: 'flex', flexFlow: 'wrap', }}>
          <Routes>
            <Route exact path="/home" element={<ProductListing />} />
            <Route exact path="/product/:productId" element={<ProductDetail />} />
            <Route exact path="/:carts" element={<AddToCart />} />
            <Route exact path="/cart/placeOrder" element={<CartPlaceOrder />} />
            <Route exact path="/successOrder" element={<SuccessOrder />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
