import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/AdminPanel.css';

const AdminPanel = () => {
    const navigate = useNavigate(); // Nuevo hook de react-router-dom v6

    const navigateToAddProduct = () => {
      navigate('/admin/add-product'); // Redirigir a la página de agregar producto
    };
  
    return (
      <div className="admin-container">
        <button onClick={navigateToAddProduct}>Agregar productos</button>
        {/* Otros bloques (buscador, categorías, recomendaciones) */}
      </div>
    );
  };

export default AdminPanel;