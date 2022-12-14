import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './pages/Login';
import Register from './pages/Register';
import CostumerProduct from './pages/CostumerProduct';
import CustomerCheckout from './pages/CustomerCheckout';
import CustomerOrders from './pages/CustomerOrders';
import Admin from './pages/Admin';
import SellerOrders from './pages/SellerOrders';
import OrderDetail from './pages/OrderDetail';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" replace /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/seller/orders" element={ <SellerOrders /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/admin/manage" element={ <Admin /> } />
      <Route exact path="/customer/products" element={ <CostumerProduct /> } />
      <Route exact path="/customer/orders" element={ <CustomerOrders /> } />
      <Route exact path="/customer/orders/:id" element={ <OrderDetail /> } />
      <Route exact path="/customer/checkout" element={ <CustomerCheckout /> } />
    </Routes>
  );
}

export default App;
