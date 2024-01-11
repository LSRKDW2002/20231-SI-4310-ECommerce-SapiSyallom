import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginRegister from './pages/LoginRegister';
import BerhasilLogin from './components/berhasilLogin';
import ProductList from './components/ProductList';
import InputProduct from './components/InputProduct';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Periksa token otentikasi saat komponen dimuatt
    const authToken = localStorage.getItem('');
    if (authToken) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<LoginRegister setIsAuthenticated={setIsAuthenticated} />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/belanja" element={<ProductList />} />
      <Route path="/jual" element={<InputProduct />} />
      <Route path="/berhasil" element={<BerhasilLogin />} />
    </Routes>
  );
}

export default App;
