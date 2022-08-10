import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import CostumerProduct from './pages/CostumerProduct';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" replace /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/customer/products" element={ <CostumerProduct /> } />
    </Routes>
  );
}

export default App;
