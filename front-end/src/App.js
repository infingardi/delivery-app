import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Admin from './pages/Admin';

function App() {
  return (
    <Routes>
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/admin/manage" element={ <Admin/> } />
    </Routes>
  );
}

export default App;
