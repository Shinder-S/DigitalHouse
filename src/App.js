import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import RegisterPage from './pages/RegisterPage';
import AddProduct from './pages/AddProduct';
import AdminPanel from './pages/AdminPanel';
import ProductDetail from './pages/ProductDetail';
import ProductGallery from './pages/ProductGallery';
import ViewAllImages from './pages/ViewAllImages';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/admin/add-product" element={<AddProduct />} />
          <Route path="/gallery" element={<ProductGallery />} />
          <Route path="/view-all-images" element={<ViewAllImages />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
