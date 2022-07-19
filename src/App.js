import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products/Products';
import Product from './components/Products/Product';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/products/:id" element={<Product/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/cart" element={<Cart/>} />
        </Routes>
    </>
  );
}

export default App;
